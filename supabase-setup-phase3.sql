-- ============================================================
-- Edu Flow Academy — Phase 3: reception timetable management,
-- student payment records.
-- Paste this ENTIRE file into Supabase Dashboard -> SQL Editor
-- -> New query -> Run. Safe to re-run (IF NOT EXISTS / OR REPLACE).
-- Requires supabase-setup.sql and supabase-setup-phase2.sql to have
-- been run already.
-- ============================================================

-- 1. Widen classes write-access: receptionist can now create/edit
-- classes and schedules too, not just admin. (Previously admin-only.)
drop policy if exists "classes_insert" on public.classes;
create policy "classes_insert"
  on public.classes for insert
  to authenticated
  with check (public.is_admin() or public.current_role() = 'receptionist');

drop policy if exists "classes_update" on public.classes;
create policy "classes_update"
  on public.classes for update
  to authenticated
  using (public.is_admin() or public.current_role() = 'receptionist')
  with check (public.is_admin() or public.current_role() = 'receptionist');

-- 2. Payments — record-keeping only (who paid what, when, how). This is
-- NOT a payment gateway integration; no real money moves through this
-- table. Real online charging is still blocked on getting a Morocco-
-- compatible payment provider account.
create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.students(id) on delete cascade,
  amount numeric(10,2) not null check (amount > 0),
  currency text not null default 'MAD',
  method text check (method in ('especes','carte','virement','autre')),
  note text,
  paid_at date not null default current_date,
  status text not null default 'active' check (status in ('active','voided')),
  recorded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists idx_payments_student on public.payments(student_id);
create index if not exists idx_payments_status on public.payments(status);

alter table public.payments enable row level security;

-- Admin + receptionist only. Staff has no reason to see payment records.
drop policy if exists "payments_select" on public.payments;
create policy "payments_select"
  on public.payments for select
  to authenticated
  using (public.is_admin() or public.current_role() = 'receptionist');

drop policy if exists "payments_insert" on public.payments;
create policy "payments_insert"
  on public.payments for insert
  to authenticated
  with check (public.is_admin() or public.current_role() = 'receptionist');

drop policy if exists "payments_update" on public.payments;
create policy "payments_update"
  on public.payments for update
  to authenticated
  using (public.is_admin() or public.current_role() = 'receptionist')
  with check (public.is_admin() or public.current_role() = 'receptionist');
-- No DELETE policy: a payment is voided (status='voided'), never removed —
-- keeps a full audit trail, same discipline as every other table so far.
