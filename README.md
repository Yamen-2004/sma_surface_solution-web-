# SMA Surface Solutions

Local React + Vite + Tailwind website for SMA Surface Solutions. The production build generates 39 complete HTML pages: the main pages, six services, five service areas, twelve flooring guides and a questions hub and seven before-and-after project pages.

## Run locally

Use Node 24 LTS (minimum 22.12) and npm.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173/. The development server renders each route on request. Production-only feeds are available in the production preview.

```sh
npm run build
npm run preview
```

Open http://127.0.0.1:4173/. Output is in `dist/`; every page has its own HTML file. Unknown routes return the custom 404 page with HTTP 404. The preview binds only to the local computer.

## Verify changes

```sh
npm test
npm run build
npm run test:seo
npm run format:check
npm audit
```

The SEO check validates every generated page, unique titles/descriptions, canonical URLs, one H1, JSON-LD, internal links and fragments, image files, sitemap entries, RSS and the noindex 404. It is a structural check, not a prediction of Google rankings.

## Edit content

- `src/content/site.js`: verified business contact details, canonical domain, Google Maps and social links.
- `src/content/services.js`: service pages and related guides.
- `src/content/areas.js`: individual service-area pages.
- `src/content/articles.js` and `src/content/additional-guides.js` and `src/content/buyer-guides.js`: guides, publication dates and supporting sources.
- `src/content/projects.js`: existing project photographs and descriptions.
- `src/lib/routes.js`: page registry. Content records automatically create detail routes.
- `src/lib/seo.js`: page metadata, social previews, breadcrumbs and structured data.
- `src/pages/ContentPages.jsx`: page templates; `src/index.css`: shared visual styles.

Keep slugs stable after publication. New guides need a unique slug, accurate publication date, useful original copy, source links where appropriate and related service slugs. Rebuild and run the SEO check after adding content. Add project locations, reviews, prices, credentials or product specifications only when the business can substantiate them.

## Images and fonts

The build uses Sharp to create responsive WebP files in `public/assets/optimized/` and the image manifest. Keep original photographs in place. `ResponsiveImage` supplies dimensions, responsive sources and lazy loading; the hero is loaded eagerly with high priority. Inter is self-hosted; no external font service is required.

## Enquiries

The contact form prepares an email draft or a WhatsApp message and can copy the enquiry text. The customer must finish sending in the chosen app. It validates required fields, includes the reply email, preserves the entered information and never claims a message was delivered. Without JavaScript, direct phone/email/WhatsApp links remain available.

There is no server email provider, database or lead storage configured. Connecting real form delivery requires the correct hosting project and sender-domain/provider setup. No secrets belong in client code.

## Review and eventual launch

The development branch is `codex/seo-expansion`, prepared for pull-request review into `main`. No production deployment has been performed as part of this work. `vercel.json` is prepared for a future static deployment; it does not provision a project. The canonical URL remains the established production domain, `https://www.smasurfacesolutions.com`. Repository integrations may create preview deployments when the branch is pushed.

Before publication, have the business review the new service and editorial copy. When deployment is authorized, verify the canonical domain, redirects, 404 responses, security headers and email delivery on the correct project. Submit `/sitemap.xml` through the owner's Search Console, review the Google Business Profile's services and service areas, and measure real search traffic and enquiries. Those account actions are not simulated locally.

Keyword priorities and source evidence are recorded in `docs/seo-keyword-strategy-2026-09-11.md` and the 48-phrase `docs/seo-keyword-map.csv`. The questions hub and article answer summaries share `src/content/questions.js`. Owner-confirmed positioning: preference for polyaspartic, efficient work with less household disruption, and a five-year warranty. Warranty coverage, exclusions and claim terms still need to be confirmed for the actual proposal.
