-- pinelabs.ai portal — submissions schema
-- Run this once in the Supabase SQL Editor (Project → SQL Editor → New query).

create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),

  -- team
  name text not null,
  email text not null,
  team_name text not null,
  team_function text not null,
  other_members text,

  -- basics
  track text not null,
  type text not null,
  title text not null,
  tagline text not null,

  -- the build
  problem text not null,
  description text not null,
  tools text[] not null default '{}',

  -- links
  repo_url text,
  demo_url text,
  video_url text,
  license text,
  notes text,

  -- review
  status text not null default 'Submitted'
    check (status in ('Submitted', 'Under review', 'Selected', 'Awarded')),
  kudos integer not null default 0
);

alter table public.submissions enable row level security;

-- Anyone (including the anonymous/public browser key) can submit a new entry.
create policy "public can insert submissions"
  on public.submissions
  for insert
  to anon
  with check (true);

-- No SELECT policy is granted to `anon` on the base table — this keeps
-- emails and any other sensitive fields unreadable via the public key.
-- The view below exposes only the safe columns for the submissions feed.

create or replace view public.public_submissions
  with (security_invoker = false) as
  select
    id, created_at, team_name, team_function, track, type,
    title, tagline, repo_url, demo_url, video_url, status, kudos
  from public.submissions;

grant select on public.public_submissions to anon;

-- Updating status (Submitted → Under review → Selected → Awarded) and
-- reading email addresses should happen from the Supabase dashboard's
-- Table Editor (as the project owner / expert panel), not from the public
-- site — there is deliberately no public UPDATE or full-table SELECT policy.
