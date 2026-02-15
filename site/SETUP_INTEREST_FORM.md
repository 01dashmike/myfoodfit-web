# Register Interest Form – Setup Guide

## 1. Supabase

1. Go to [supabase.com](https://supabase.com) and sign in (or create a project).
2. Open your project → **Settings** → **API**.
3. Copy:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **service_role** key (under "Project API keys") → `SUPABASE_SERVICE_ROLE_KEY`
4. In the SQL Editor, run the contents of `supabase-interest-table.sql` to create the `interest_registrations` table.

## 2. Resend

1. Go to [resend.com](https://resend.com) and sign up.
2. Open **API Keys** → **Create API Key**.
3. Name it (e.g. "MyFoodFit website") and choose **Sending access**.
4. Copy the key and paste it into `RESEND_API_KEY` in `.env.local`.

The form uses `onboarding@resend.dev` as the sender, so you can test without verifying a domain. Emails go to `support@myfoodfit.co.uk`.

To send from your own domain (e.g. `noreply@myfoodfit.co.uk`), verify the domain in Resend and update the `from` address in `lib/email.ts`.

## 3. Environment variables

Edit `site/.env.local` and replace the placeholders with your values:

| Variable | Where to get it |
|----------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role |
| `RESEND_API_KEY` | resend.com → API Keys → Create API Key |

Restart the dev server after changing `.env.local`.
