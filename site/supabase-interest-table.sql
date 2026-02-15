-- Run this in Supabase SQL Editor to create the interest_registrations table

create table interest_registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  how_found text,
  created_at timestamptz default now()
);
