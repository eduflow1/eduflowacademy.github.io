-- ============================================================
-- Edu Flow Academy — Phase 14: admin-only hard delete for
-- notifications (public.messages). Lets the admin dashboard's
-- "Messages envoyes" list offer a per-message delete + a
-- "Supprimer tout" button. message_reads rows for a deleted
-- message are already removed automatically (on delete cascade).
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 6 (messages table) already run.
-- ============================================================

drop policy if exists "messages_delete" on public.messages;
create policy "messages_delete"
  on public.messages for delete
  to authenticated
  using (public.is_admin());
