-- ============================================================
-- Edu Flow Academy — Phase 8: the professional-formation subjects
-- (Drone, IA, Infographie, E-commerce, Marketing digital,
-- Bureautique) plus Secourisme (first aid, taught in French) can
-- now be created as real classes, the same way language classes
-- (fr/en/es/de) already work — catalog, enrollment, timetable,
-- attendance, roster, everything reuses the existing classes/
-- enrollments machinery.
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 2 (classes table) already run.
-- ============================================================

alter table public.classes
  drop constraint if exists classes_subject_check;

alter table public.classes
  add constraint classes_subject_check check (
    subject in (
      'fr','en','es','de',
      'drone','ia','infographie','ecommerce','marketing_digital','bureautique',
      'secourisme'
    )
  );
