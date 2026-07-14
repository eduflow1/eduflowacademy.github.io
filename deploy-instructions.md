# Publishing Edu Flow Academy to eduflowacademy.ma

A ready-to-upload package is at:
`C:\Users\Hp\Desktop\platform\eduflow-academy-site.zip`

It contains all 13 files: `index.html`, `archive.html`, `test-fr-junior.html`,
`test-fr-full.html`, `test-en-junior.html`, `test-en-full.html`, `README.md`,
`login.html`, `signup.html`, `admin-dashboard.html`, `staff-dashboard.html`,
`reception-dashboard.html`, `reset-password.html`, `eduflow-auth.js`.

## Access codes (client-side gate)

- **Platform code** (required to reach the student login page): `EFA-7M9HYX`
- **Staff code** (required to open the results dashboard): `STAFF-F6WSAR`
- **Staff signup invite code** (required to create a teaching-staff account
  on `signup.html`): `STAFF-INVITE-9K3PQX`
- **Reception signup invite code** (required to create a reception account
  on `signup.html`): `RECEPTION-INVITE-7H2WLD`

⚠️ These are simple shared passphrases, not real authentication — anyone who
views the page source can find them. They keep casual visitors off the site,
but don't treat them as a security boundary for sensitive data. The invite
codes only get someone to the signup form — every new account still lands as
"pending" and needs an administrator to approve it before it can do anything.

## One-time database setup (do this before the first upload)

The staff/admin/reception login system needs a few things set up once in
Supabase: a `profiles` table, some helper functions, and security policies.

1. Log in to the Supabase dashboard for this project.
2. Open the **SQL Editor** → **New query**.
3. Paste in the entire contents of `supabase-setup.sql` (in this folder) and
   click **Run**. You should see "Success."
4. In **Authentication → Providers → Email**, confirm "Confirm email" is
   enabled (it is by default) — new accounts must click an email link before
   they can log in.
5. In **Authentication → URL Configuration**, add your live site URL (e.g.
   `https://eduflowacademy.ma`) to the Redirect URLs, so password-reset and
   confirmation email links work correctly once the site is live.

This only needs to be done once, ever — not on every re-upload.

## Steps (cPanel — most common for .ma hosting)

1. Log in to your hosting provider's **cPanel** (ask your registrar/host for
   the login if you don't have it — I never see or need this password).
2. Open **File Manager**.
3. Navigate to `public_html` (this is the folder that serves
   `https://eduflowacademy.ma/`). If you want the platform at the root
   domain, upload directly here. If you'd rather keep it at a sub-path (e.g.
   `eduflowacademy.ma/test/`), create that folder first and go into it.
4. Click **Upload**, select `eduflow-academy-site.zip`, wait for it to finish.
5. Back in File Manager, right-click the uploaded zip → **Extract** (this
   unpacks the 13 files into the current folder).
6. Delete the zip file after extracting (optional cleanup).
7. Visit `https://eduflowacademy.ma/index.html` (or just
   `https://eduflowacademy.ma/` if your host auto-serves `index.html`) —
   you should see the 🔒 access gate.

## Steps (FTP, alternative)

If your host gives you FTP credentials instead of cPanel, use any FTP client
(FileZilla, WinSCP) to connect and upload the 13 files directly into
`public_html` (or your chosen subfolder). No zip/extract needed — just drag
the files across.

## After upload

- Share the URL + `EFA-7M9HYX` with students/parents.
- Share the URL + both gate codes with teaching staff who only need the
  results archive (`archive.html`).
- For anyone who needs a real personal login (administration, teaching
  staff, reception): share the URL + the relevant invite code
  (`STAFF-INVITE-9K3PQX` or `RECEPTION-INVITE-7H2WLD`) so they can create
  their own account on `signup.html`.
- **Bootstrap the first administrator (one-time)**: sign up normally through
  `signup.html` with either invite code, then in the Supabase dashboard →
  **Table Editor** → `profiles`, find that row and change its `role` column
  to `admin`. That person can now log in at `login.html`, reach the admin
  dashboard, and approve every future signup from there — no more manual
  database edits needed after this first one.
- Test the full flow once live: enter the platform code → log in as a
  student → confirm you land on the right test for the age/language you
  pick → finish a test → check it appears in the archive after entering the
  staff code. Separately, test a staff/reception signup → admin approval →
  login → correct dashboard.
