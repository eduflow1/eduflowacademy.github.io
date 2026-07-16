-- ============================================================
-- Edu Flow Academy — Phase 13: admin-only hard delete for
-- payment records. Everyone else keeps the existing "Annuler"
-- (void/cancel) flow, which just marks a payment cancelled and
-- keeps it visible for the audit trail. This is a real, permanent
-- delete, admin-only, for cleaning up genuine mistakes (duplicate
-- entries, wrong student, etc).
-- Paste into Supabase Dashboard -> SQL Editor -> New query -> Run.
-- Safe to re-run. Requires Phase 3 (payments table) already run.
-- ============================================================

drop policy if exists "payments_delete" on public.payments;
create policy "payments_delete"
  on public.payments for delete
  to authenticated
  using (public.is_admin());
