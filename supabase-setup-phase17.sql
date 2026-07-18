-- ============================================================
-- Edu Flow Academy — Phase 17: admin-only permanent account deletion.
-- Phase 1 deliberately shipped without a DELETE policy on
-- public.profiles ("accounts are disabled, never deleted"). The admin
-- dashboard now also offers a real, permanent delete for genuine
-- cleanup (spam signups, duplicate accounts, a departed employee whose
-- record shouldn't linger), admin-only, mirroring the Phase 9/13/14/15
-- hard-deletes already in place for students/payments/messages/classes.
--
-- Note: this only removes the public.profiles row. It does NOT delete
-- the matching auth.users login (that needs the Supabase Admin API /
-- service role key, not available from the browser with the anon key).
-- That's harmless: eduflowRequireRole() already treats "no profile
-- row" exactly like a disabled account — sign out and bounce to
-- login — so a deleted account can never reach any dashboard again.
--
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 1 (public.profiles, public.is_admin())
-- already run.
-- ============================================================

-- 1. approved_by had no ON DELETE behaviour, so deleting an admin who
-- had approved other accounts would fail with a foreign key violation.
-- Clear the reference instead of blocking the delete.
alter table public.profiles drop constraint if exists profiles_approved_by_fkey;
alter table public.profiles
  add constraint profiles_approved_by_fkey
  foreign key (approved_by) references public.profiles(id) on delete set null;

-- 2. Admin-only hard delete for accounts.
drop policy if exists "profiles_delete" on public.profiles;
create policy "profiles_delete"
  on public.profiles for delete
  to authenticated
  using (public.is_admin());
