-- ============================================================
-- Edu Flow Academy — Phase 4: attendance, staff payroll, workshops.
-- Paste this ENTIRE file into Supabase Dashboard -> SQL Editor
-- -> New query -> Run. Safe to re-run (IF NOT EXISTS / OR REPLACE).
-- Requires phases 1-3 SQL files to have been run already.
-- ============================================================

-- 1. Attendance: dated class occurrences + per-student status.
-- Sessions are created on-demand (opening attendance for a class+date
-- creates the row if missing) rather than pre-generated from the
-- recurring weekly schedule.
create table if not exists public.class_sessions (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.classes(id) on delete cascade,
  session_date date not null,
  status text not null default 'scheduled' check (status in ('scheduled','completed','cancelled')),
  created_at timestamptz not null default now(),
  unique (class_id, session_date)
);

create table if not exists public.attendance_records (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.class_sessions(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  status text not null default 'present' check (status in ('present','absent','late','excused')),
  marked_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (session_id, student_id)
);

drop trigger if exists attendance_set_updated_at on public.attendance_records;
create trigger attendance_set_updated_at
  before update on public.attendance_records
  for each row execute function public.set_updated_at();

create index if not exists idx_sessions_class on public.class_sessions(class_id);
create index if not exists idx_attendance_session on public.attendance_records(session_id);
create index if not exists idx_attendance_student on public.attendance_records(student_id);

alter table public.class_sessions enable row level security;
alter table public.attendance_records enable row level security;

-- class_sessions: admin full; receptionist read-only; staff read/write only
-- for sessions of classes they teach.
drop policy if exists "sessions_select" on public.class_sessions;
create policy "sessions_select"
  on public.class_sessions for select
  to authenticated
  using (
    public.is_admin()
    or public.current_role() = 'receptionist'
    or exists (select 1 from public.classes c where c.id = class_sessions.class_id and c.teacher_id = auth.uid())
  );

drop policy if exists "sessions_insert" on public.class_sessions;
create policy "sessions_insert"
  on public.class_sessions for insert
  to authenticated
  with check (
    public.is_admin()
    or exists (select 1 from public.classes c where c.id = class_sessions.class_id and c.teacher_id = auth.uid())
  );

drop policy if exists "sessions_update" on public.class_sessions;
create policy "sessions_update"
  on public.class_sessions for update
  to authenticated
  using (
    public.is_admin()
    or exists (select 1 from public.classes c where c.id = class_sessions.class_id and c.teacher_id = auth.uid())
  )
  with check (
    public.is_admin()
    or exists (select 1 from public.classes c where c.id = class_sessions.class_id and c.teacher_id = auth.uid())
  );

-- attendance_records: same shape as class_sessions.
drop policy if exists "attendance_select" on public.attendance_records;
create policy "attendance_select"
  on public.attendance_records for select
  to authenticated
  using (
    public.is_admin()
    or public.current_role() = 'receptionist'
    or exists (
      select 1 from public.class_sessions s join public.classes c on c.id = s.class_id
      where s.id = attendance_records.session_id and c.teacher_id = auth.uid()
    )
  );

drop policy if exists "attendance_insert" on public.attendance_records;
create policy "attendance_insert"
  on public.attendance_records for insert
  to authenticated
  with check (
    public.is_admin()
    or exists (
      select 1 from public.class_sessions s join public.classes c on c.id = s.class_id
      where s.id = attendance_records.session_id and c.teacher_id = auth.uid()
    )
  );

drop policy if exists "attendance_update" on public.attendance_records;
create policy "attendance_update"
  on public.attendance_records for update
  to authenticated
  using (
    public.is_admin()
    or exists (
      select 1 from public.class_sessions s join public.classes c on c.id = s.class_id
      where s.id = attendance_records.session_id and c.teacher_id = auth.uid()
    )
  )
  with check (
    public.is_admin()
    or exists (
      select 1 from public.class_sessions s join public.classes c on c.id = s.class_id
      where s.id = attendance_records.session_id and c.teacher_id = auth.uid()
    )
  );
-- No DELETE policies: sessions/records stay for history, corrected via status/update, not removed.

-- 2. Staff payroll — record-keeping only, ADMIN ONLY (not receptionist,
-- not even the staff member being paid). Deliberately separate from the
-- `payments` table (student tuition), which is a different audience.
create table if not exists public.staff_payments (
  id uuid primary key default gen_random_uuid(),
  staff_id uuid not null references public.profiles(id) on delete cascade,
  amount numeric(10,2) not null check (amount > 0),
  currency text not null default 'MAD',
  period text,
  method text check (method in ('especes','carte','virement','autre')),
  note text,
  paid_at date not null default current_date,
  status text not null default 'active' check (status in ('active','voided')),
  recorded_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now()
);

create index if not exists idx_staff_payments_staff on public.staff_payments(staff_id);

alter table public.staff_payments enable row level security;

drop policy if exists "staff_payments_select" on public.staff_payments;
create policy "staff_payments_select"
  on public.staff_payments for select
  to authenticated
  using (public.is_admin());

drop policy if exists "staff_payments_insert" on public.staff_payments;
create policy "staff_payments_insert"
  on public.staff_payments for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "staff_payments_update" on public.staff_payments;
create policy "staff_payments_update"
  on public.staff_payments for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
-- No DELETE policy: void via status='voided'.

-- 3. Workshops & training — single-date events, distinct from the
-- recurring weekly `classes` catalog.
create table if not exists public.workshops (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  instructor_id uuid references public.profiles(id) on delete set null,
  workshop_date date,
  start_time time,
  end_time time,
  room text,
  capacity int not null default 20 check (capacity > 0),
  status text not null default 'active' check (status in ('active','archived')),
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists workshops_set_updated_at on public.workshops;
create trigger workshops_set_updated_at
  before update on public.workshops
  for each row execute function public.set_updated_at();

create table if not exists public.workshop_registrations (
  id uuid primary key default gen_random_uuid(),
  workshop_id uuid not null references public.workshops(id) on delete cascade,
  student_id uuid not null references public.students(id) on delete cascade,
  status text not null default 'registered' check (status in ('registered','attended','cancelled')),
  registered_at timestamptz not null default now(),
  created_by uuid references public.profiles(id) on delete set null
);

create unique index if not exists workshop_reg_active_unique
  on public.workshop_registrations (workshop_id, student_id)
  where status = 'registered';

create index if not exists idx_workshops_instructor on public.workshops(instructor_id);
create index if not exists idx_workshop_reg_workshop on public.workshop_registrations(workshop_id);
create index if not exists idx_workshop_reg_student on public.workshop_registrations(student_id);

alter table public.workshops enable row level security;
alter table public.workshop_registrations enable row level security;

-- workshops: admin full CRUD; receptionist read-only catalog; staff
-- sees only workshops where they're the instructor.
drop policy if exists "workshops_select" on public.workshops;
create policy "workshops_select"
  on public.workshops for select
  to authenticated
  using (public.is_admin() or public.current_role() = 'receptionist' or instructor_id = auth.uid());

drop policy if exists "workshops_insert" on public.workshops;
create policy "workshops_insert"
  on public.workshops for insert
  to authenticated
  with check (public.is_admin());

drop policy if exists "workshops_update" on public.workshops;
create policy "workshops_update"
  on public.workshops for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());
-- No DELETE policy: archived via status='archived'.

-- workshop_registrations: admin + receptionist create/manage; staff
-- sees registrations only for workshops they instruct.
drop policy if exists "workshop_reg_select" on public.workshop_registrations;
create policy "workshop_reg_select"
  on public.workshop_registrations for select
  to authenticated
  using (
    public.is_admin()
    or public.current_role() = 'receptionist'
    or exists (select 1 from public.workshops w where w.id = workshop_registrations.workshop_id and w.instructor_id = auth.uid())
  );

drop policy if exists "workshop_reg_insert" on public.workshop_registrations;
create policy "workshop_reg_insert"
  on public.workshop_registrations for insert
  to authenticated
  with check (public.is_admin() or public.current_role() = 'receptionist');

drop policy if exists "workshop_reg_update" on public.workshop_registrations;
create policy "workshop_reg_update"
  on public.workshop_registrations for update
  to authenticated
  using (public.is_admin() or public.current_role() = 'receptionist')
  with check (public.is_admin() or public.current_role() = 'receptionist');
-- No DELETE policy: cancel via status='cancelled'.
