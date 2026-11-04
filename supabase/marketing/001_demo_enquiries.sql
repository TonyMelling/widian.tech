-- Marketing lead store (D-007): apply to the ISOLATED marketing Supabase project only — never the operational
-- Widian product project. Written by POST /api/walkthrough using the service-role key, which bypasses RLS.
-- RLS is enabled with no policies, so the anon/authenticated keys can read and write nothing.

create table if not exists public.demo_enquiries (
  id                        uuid primary key default gen_random_uuid(),
  reference                 text not null,
  idempotency_key           uuid not null unique,
  correlation_id            uuid not null,

  -- Enquiry (controlled values: see lib/lead-capture/schema.ts)
  name                      text not null check (char_length(name) <= 100),
  email                     text not null check (char_length(email) <= 254),
  organisation              text not null check (char_length(organisation) <= 150),
  role                      text not null check (char_length(role) <= 100),
  building_band             text not null check (building_band in ('1-5','6-25','26-100','100-plus','not-sure')),
  challenge                 text not null check (challenge in
                              ('scattered-records','closure-evidence','contractor-coordination','portfolio-visibility','exploring','other')),
  message                   text check (char_length(message) <= 1500),
  source_page               text not null,

  -- Privacy and permission evidence. Responding to the enquiry and optional updates are recorded separately.
  privacy_notice_version    text not null,
  marketing_opt_in          boolean not null default false,
  marketing_wording_version text,
  marketing_opt_in_at       timestamptz,
  suppressed                boolean not null default false,

  -- Lifecycle (docs/LEAD_CAPTURE_AND_COMMUNICATIONS.md). "Form submitted" is not "qualified".
  status                    text not null default 'new' check (status in
                              ('new','triaged','qualified','walkthrough_booked','opportunity','customer',
                               'closed_not_proceeding','duplicate','spam')),
  owner                     text,
  next_action               text,
  last_contact_at           timestamptz,

  -- Delivery tracking, so a provider failure is visible rather than lost.
  ack_status                text not null default 'pending' check (ack_status in ('pending','sent','failed')),
  ack_message_id            text,
  notify_status             text not null default 'pending' check (notify_status in ('pending','sent','failed')),
  notify_message_id         text,
  last_error                text,

  anonymised_at             timestamptz,
  created_at                timestamptz not null default now(),
  updated_at                timestamptz not null default now()
);

create index if not exists demo_enquiries_status_created_idx on public.demo_enquiries (status, created_at desc);
create index if not exists demo_enquiries_email_idx on public.demo_enquiries (email);
-- Leads whose acknowledgement or owner notification did not go out: review these first.
create index if not exists demo_enquiries_delivery_attention_idx
  on public.demo_enquiries (created_at desc)
  where ack_status <> 'sent' or notify_status <> 'sent';

alter table public.demo_enquiries enable row level security;
