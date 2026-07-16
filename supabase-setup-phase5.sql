-- ============================================================
-- Edu Flow Academy — Phase 5: payment-status tracking, admin
-- hard-delete for students.
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run.
-- ============================================================

-- 1. Expected fee per enrollment — lets the UI compute a payment
-- status (paid / partial / unpaid) by comparing this to the sum of
-- that student's logged payments. Nullable: until reception sets it,
-- no payment-status claim is shown for that enrollment.
alter table public.enrollments
  add column if not exists expected_amount numeric(10,2);

-- 2. Admin-only hard delete for students. Every other table stays
-- soft-delete-only (archived/disabled) — this is a deliberate,
-- narrow exception for cleaning up mistaken/duplicate student records.
-- Cascades to that student's enrollments, payments, attendance_records,
-- and workshop_registrations (all already "on delete cascade").
drop policy if exists "students_delete" on public.students;
create policy "students_delete"
  on public.students for delete
  to authenticated
  using (public.is_admin());
