-- ============================================================
-- Edu Flow Academy — Phase 1: accounts & roles
-- Paste this ENTIRE file into Supabase Dashboard -> SQL Editor
-- -> New query -> Run. Safe to re-run (uses IF NOT EXISTS / OR REPLACE).
-- ============================================================

-- 1. One row per person, linked 1:1 to their real login account.
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  requested_role text check (requested_role in ('staff','receptionist')),
  role text not null default 'pending' check (role in ('pending','admin','staff','receptionist')),
  status text not null default 'active' check (status in ('active','disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  approved_by uuid references public.profiles(id),
  approved_at timestamptz
);

-- 2. Helper: is the currently logged-in user an active admin?
-- security definer = runs with elevated rights so it can check the
-- profiles table without getting blocked by the very policies below.
create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role = 'admin' and status = 'active'
  );
$$;

-- 3. Auto-create a profile row the moment someone signs up.
-- Nobody can insert into profiles directly (see RLS below) — only this trigger can.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, requested_role)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data ->> 'full_name',
    new.raw_user_meta_data ->> 'requested_role'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 4. Keep updated_at accurate automatically.
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
  before update on public.profiles
  for each row execute function public.set_updated_at();

-- 5. Stop a non-admin from promoting themselves (e.g. pending -> admin)
-- even though they're otherwise allowed to update their own row (name, etc).
-- auth.uid() is null when this runs from the SQL Editor / Table Editor
-- (that's you, the project owner) — always allowed, so you can bootstrap
-- the very first admin by hand. Every other caller must already be an admin.
create or replace function public.protect_role_status()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if (new.role is distinct from old.role or new.status is distinct from old.status)
     and auth.uid() is not null
     and not public.is_admin() then
    raise exception 'Only an administrator can change role or status.';
  end if;
  return new;
end;
$$;

drop trigger if exists profiles_protect_role_status on public.profiles;
create trigger profiles_protect_role_status
  before update on public.profiles
  for each row execute function public.protect_role_status();

-- 6. Row Level Security: turn it on, then say exactly who can do what.
alter table public.profiles enable row level security;

drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  to authenticated
  using (auth.uid() = id or public.is_admin());

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin"
  on public.profiles for update
  to authenticated
  using (auth.uid() = id or public.is_admin())
  with check (auth.uid() = id or public.is_admin());

-- No INSERT policy on purpose: only the handle_new_user trigger creates rows.
-- No DELETE policy on purpose: accounts are disabled, never deleted.
