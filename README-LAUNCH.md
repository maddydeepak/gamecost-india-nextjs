# GameCost India — Next.js launch project

This project converts the supplied GTA 6 India guide into a Next.js App Router application.

## Stack
- Next.js App Router
- React
- JavaScript
- CSS (no UI framework)
- Vercel deployment ready

## Included interactive features
- GTA 6 compatibility checker for PC, PlayStation and Xbox.
- The checker distinguishes officially announced console platforms from PC estimates. Since Rockstar has not announced a PC version or published PC system requirements, it deliberately does not produce a PC pass/fail score.
- The PC form collects GPU, CPU, RAM, storage and available disk space. These details are displayed back to the visitor as a hardware profile.

## 1. Requirements
- Node.js 20.9 or newer
- npm
- A Vercel account
- A domain name

## 2. Install and run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

On Windows PowerShell, create `.env.local` by copying `.env.example` manually if `cp` is unavailable.

## 3. Configure environment variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR-DOMAIN
NEXT_PUBLIC_AMAZON_ASSOCIATE_TAG=yourtag-21
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

- Replace `YOUR-DOMAIN` with your exact canonical domain, including `https://`.
- Use your actual Amazon Associates tracking ID.
- Add a GA4 Measurement ID if you have configured Google Analytics.
- Do not commit `.env.local` to Git.

The product cards currently link to Amazon India search results and append the configured tracking ID. For compliance, use Amazon Associates Central/SiteStripe links or other approved linking mechanisms for your account and review the current Associates policies. Do not display manually guessed product prices.

## 4. Important content review before publishing

The page content was migrated from the supplied HTML. It contains time-sensitive claims and prices, including:
- GTA 6 release/preload details
- Console prices
- Edition prices
- Platform availability
- Physical-copy and online-mode reporting
- Microtransaction statements

Review each statement against current official sources and update the "last checked" date before launch. The migration intentionally does not independently verify or certify these facts.

The contact page contains a placeholder. Add a real public contact method.
The privacy policy is a starter template, not legal advice. Adapt it to the actual analytics, cookies and services you deploy.

## 5. Build and test

```bash
npm run build
npm start
```

Resolve any build errors before deploying.

## 6. Deploy to Vercel

Option A — GitHub (recommended):
1. Create a GitHub repository.
2. Upload/push this project.
3. In Vercel, choose Add New > Project.
4. Import the repository.
5. Add the environment variables above in Project Settings > Environment Variables.
6. Deploy.

Option B — Vercel CLI:
```bash
npm i -g vercel
vercel
vercel --prod
```

## 7. Connect a domain
1. Buy your domain.
2. In Vercel, open Project > Settings > Domains.
3. Add the domain.
4. Configure DNS exactly as Vercel instructs.
5. Choose one canonical host (www or non-www) and redirect the other to it.
6. Set `NEXT_PUBLIC_SITE_URL` to the canonical URL and redeploy.

## 8. SEO setup
After the domain is live:
1. Check `/robots.txt`.
2. Check `/sitemap.xml`.
3. Check the rendered page source and confirm the title, description and canonical URL are present.
4. Add the domain as a property in Google Search Console and verify DNS ownership.
5. Submit the sitemap.
6. Inspect the homepage URL and request indexing.
7. Add a real 1200x630 social sharing image and add `openGraph.images` and `twitter.images` in `app/layout.jsx`.
8. Monitor indexing and search performance.

## 9. Analytics
The affiliate click event is wired to `window.gtag` if GA4 is installed. Add the GA4 script to `app/layout.jsx` using `next/script`, or use Google Tag Manager. Verify events in GA4 DebugView before relying on reports.

## 10. Notes on SEO
Next.js does not automatically rank a site higher than static HTML. The benefit here is maintainable page structure, metadata, server-rendered content and easier expansion. Search visibility still depends on accurate, useful content, crawlability, site performance, links and competition.


## Visual assets and brand use

The homepage uses an original, AI-generated neon coastal-city hero illustration at `public/images/vice-city-inspired-hero.webp`. It is inspired by a tropical neon crime-game atmosphere but is not Rockstar Games artwork, a GTA VI screenshot, or an official logo. Do not describe it as official GTA VI media. The same image is configured for Open Graph and Twitter link previews.
