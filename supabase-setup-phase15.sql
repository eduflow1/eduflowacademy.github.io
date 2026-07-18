-- ============================================================
-- Edu Flow Academy — Phase 15: admin-only hard delete for classes.
-- Phase 2 deliberately shipped without a DELETE policy on
-- public.classes (classes were meant to be archived, never
-- removed). The catalog now also offers a real, permanent delete
-- for genuine mistakes (duplicate class, wrong subject, etc.),
-- admin-only, mirroring the Phase 13 payments hard-delete. Its
-- enrollments and class_sessions rows are already removed
-- automatically (both reference classes.id with on delete cascade).
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 2 (classes table) already run.
-- ============================================================

drop policy if exists "classes_delete" on public.classes;
create policy "classes_delete"
  on public.classes for delete
  to authenticated
  using (public.is_admin());
