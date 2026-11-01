This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Canada and Pakistan websites

Both domains use this same `apps/web` app and the existing shared content JSON.
Set `SITE_MARKET` before development or building:

| Market | Domain | `SITE_MARKET` | Phone and WhatsApp | Currency |
| --- | --- | --- | --- | --- |
| Canada (default) | `techavenue.pro` | `ca` | +1 437-448-3374 | CAD |
| Pakistan | `techavenue.pk` | `pk` | +92 336 3444189 | PKR |

Market values live in `app/content/markets/ca.json` and `pk.json`. These select
the footer number, enquiry-form WhatsApp destination, service WhatsApp links,
page language, canonical URLs, regional alternate links, and Open Graph URLs.
The WhatsApp destination is derived from the market phone number. Services,
images, social links, and email settings remain shared. Currency is configuration
for future pricing; this change does not add prices or a pricing section.

For local Pakistan development, stop the existing web development server, then
run from the monorepo root:

```sh
SITE_MARKET=pk pnpm dev --filter=web
```

For Canada, use `SITE_MARKET=ca` or leave the variable unset. Alternatively, set
`SITE_MARKET=pk` in `apps/web/.env.local` and restart the server. Unsupported
market values fail explicitly. Local `.env.local` is not uploaded to Vercel.

On Vercel, keep the existing project and create a second project from the same
repository, branch, and root directory (`apps/web`):

1. Existing project: set `SITE_MARKET=ca` and retain the `techavenue.pro` domain.
2. Pakistan project: set `SITE_MARKET=pk` and connect `techavenue.pk`.
3. Configure SMTP settings separately in each Vercel project; they are not copied
   automatically. Use the same mailbox if both markets should share enquiries.
4. Set the market for each relevant environment (Production and any Preview
   deployments), then deploy. Changing the market requires rebuilding; keep the
   same value when starting a production build locally.

Turborepo passes `SITE_MARKET` to development and build tasks and includes it in
the build cache key to keep the country builds separate. Neither deployment
uses IP detection or country redirects; the configured deployment serves its
own domain. Pricing can later use the same market configuration.

## Contact form email

The homepage and service enquiry forms send email through SMTP. Set `SMTP_HOST`,
`SMTP_PORT`, `SMTP_USER`, and `SMTP_PASS` in your shell or in
`apps/web/.env.local` (relative to the monorepo root). Keep credentials out of Git.

Port `465` uses implicit TLS by default; port `587` uses STARTTLS. Set the optional
`SMTP_SECURE` to `true` or `false` to override that choice. If omitted,
`SMTP_PORT` defaults to `465`.

Turborepo passes these shell variables through to the app. Restart `pnpm dev`
after changing the environment. Missing or invalid SMTP settings return an error
instead of attempting delivery without credentials.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
