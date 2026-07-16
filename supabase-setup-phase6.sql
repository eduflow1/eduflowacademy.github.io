-- ============================================================
-- Edu Flow Academy — Phase 6: admin -> staff/reception notifications
-- + inbox.
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 1 and Phase 2 to have been run
-- already (uses public.is_admin() and public.current_role()).
-- ============================================================

-- 1. Messages — admin broadcasts a notification to one role or to
-- everyone. Not 1:1 messaging: target_role decides who sees it.
create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references public.profiles(id) on delete set null,
  target_role text not null check (target_role in ('staff','receptionist','all')),
  subject text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_target_role on public.messages(target_role);

-- 2. Message reads — tracks which recipient has opened which message,
-- so the inbox can show an unread badge/count.
create table if not exists public.message_reads (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references public.messages(id) on delete cascade,
  reader_id uuid not null references public.profiles(id) on delete cascade,
  read_at timestamptz not null default now(),
  unique (message_id, reader_id)
);

create index if not exists idx_message_reads_reader on public.message_reads(reader_id);

-- 3. Row Level Security.
alter table public.messages enable row level security;
alter table public.message_reads enable row level security;

-- Admin sees everything it sent; staff/reception see messages aimed
-- at their own role or broadcast to 'all'.
drop policy if exists "messages_select" on public.messages;
create policy "messages_select"
  on public.messages for select
  to authenticated
  using (
    public.is_admin()
    or target_role = 'all'
    or target_role = public.current_role()
  );

-- Only admin can send a notification.
drop policy if exists "messages_insert" on public.messages;
create policy "messages_insert"
  on public.messages for insert
  to authenticated
  with check (public.is_admin());

-- A reader can only mark things read as themselves; admin can see
-- everyone's read receipts (not required for the UI yet, but harmless
-- and useful later for a "seen by" view).
drop policy if exists "message_reads_select" on public.message_reads;
create policy "message_reads_select"
  on public.message_reads for select
  to authenticated
  using (reader_id = auth.uid() or public.is_admin());

drop policy if exists "message_reads_insert" on public.message_reads;
create policy "message_reads_insert"
  on public.message_reads for insert
  to authenticated
  with check (reader_id = auth.uid());
