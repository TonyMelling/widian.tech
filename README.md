# Widian Marketing Website

The separate Next.js marketing website for `https://widian.tech`.

> **One building record. Every responsible party. Verified from inspection to closure.**

## Local development

```bash
npm install
npm run dev
```

Before committing or deploying:

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

## Start here

1. Read [`AGENTS.md`](AGENTS.md) before making changes.
2. Follow the documentation index in [`docs/README.md`](docs/README.md).
3. Record decisions in [`docs/DECISIONS.md`](docs/DECISIONS.md).
4. Keep delivery status current in [`docs/PROGRESS_TRACKER.md`](docs/PROGRESS_TRACKER.md).

## Intended domains

- `widian.tech` — public marketing website
- `app.widian.tech` — production Widian application, subject to final migration approval
- `staging.widian.tech` — authorised staging application

The marketing website must remain technically and operationally separate from the authenticated Widian product.

## Deployment

The intended host is Vercel through the connected Git repository:

- feature branches and pull requests create protected Preview deployments;
- the production branch creates the Production deployment;
- `widian.tech` is attached only after application-domain migration and launch approval;
- preview and local builds return `Disallow: /` from `robots.txt`;
- set `NEXT_PUBLIC_SITE_URL=https://widian.tech` for Production;
- Vercel supplies `VERCEL_ENV`; non-Vercel production deployments must set `DEPLOYMENT_ENV=production`.

Do not FTP the `.next` directory to static hosting. The planned demo endpoint requires a Next.js runtime and durable external storage.
