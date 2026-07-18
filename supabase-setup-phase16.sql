-- ============================================================
-- Edu Flow Academy — Phase 16: diploma history.
-- Every diploma actually printed from diplomas.html is now logged
-- (student name, subject/title, who issued it, when), so the admin
-- can revisit, reprint, or delete a past diploma instead of it being
-- a one-off, unrecorded action. Also supports manually-added names
-- that aren't tied to a real student record (student_id stays null
-- in that case).
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 1 (public.is_admin()) already run.
-- ============================================================

create table if not exists public.diplomas (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references public.students(id) on delete set null,
  student_name text not null,
  subject_code text,
  subject_label text not null,
  issued_by uuid references public.profiles(id) on delete set null,
  issued_at timestamptz not null default now()
);

create index if not exists idx_diplomas_student on public.diplomas(student_id);
create index if not exists idx_diplomas_issued_at on public.diplomas(issued_at desc);

alter table public.diplomas enable row level security;

drop policy if exists "diplomas_select" on public.diplomas;
create policy "diplomas_select"
  on public.diplomas for select
  to authenticated
  using (public.is_admin());

drop policy if exists "diplomas_insert" on public.diplomas;
create policy "diplomas_insert"
  on public.diplomas for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "diplomas_delete" on public.diplomas;
create policy "diplomas_delete"
  on public.diplomas for delete
  to authenticated
  using (public.is_admin());
