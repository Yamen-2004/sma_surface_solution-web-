# SMA SEO Expansion Implementation Plan

> **For agentic workers:** Use superpowers:subagent-driven-development for independently scoped content and verification work. The root integrates and verifies the full site.

**Goal:** Expand the existing site into a fast, useful local-service website with crawlable pages and dependable contact actions.
**Architecture:** React/Vite multipage static generation using React server rendering at build time and hydrateRoot in the browser. A route registry drives output and page metadata. Content modules remain independent of UI.
**Tech Stack:** React 18, Vite, Tailwind 3, Node, Sharp, real Vercel messaging integration when provisioned.
**Spec:** ../specs/2026-09-11-seo-expansion.md

## Global constraints
- Retain the black/gold visual identity and existing photographs.
- No invented business evidence or unsupported coating promises.
- Preserve default route behaviour and preview without production publication.
- All links, sitemap entries and metadata must resolve consistently.

## Tasks
- [x] Content: `src/content/services.js`, `areas.js`, `articles.js`, `projects.js`. Export structured records with unique slugs, complete copy and related links. Check identifiers, factual claims and sources.
- [x] Rendering: `src/App.jsx`, `src/entry-server.jsx`, `src/main.jsx`, `src/lib/routes.js`, `scripts/build.mjs`. Generate full HTML for known URLs and a noindex 404. Verify rendered H1, canonical, JSON-LD and unique metadata for every URL.
- [x] UI: shared navigation/footer, services/index/detail/article templates, contact, accessible FAQs, service-area section, authentic project gallery. Preserve hero and visual tokens. Check keyboard and narrow layouts.
- [x] Delivery: provision discovered Resend integration against the existing Vercel project; implement a validated endpoint with origin checks, failure handling and no secrets in client. If provisioning cannot finish, repair existing email handoff honestly and document the remaining dependency.
- [x] Assets: generate responsive compressed copies of existing images; self-host fonts. Check asset references and image weights.
- [x] Verification: node tests, complete build, crawl all generated pages for broken internal URLs/fragments and metadata, audit dependencies, inspect browser/hydration, independent final review.

## Rulings and progress
- User's approved audit is the design authorization; no second design approval needed.
- Work stays in the clean cloned project on a dedicated branch so the user's existing local preview follows changes. Content agents have disjoint file ownership.
- Search Console and Business Profile account changes require actual access and are not simulated.

## Completed local verification — 2026-09-11
- User explicitly requested local-only work after hosting access was unavailable. No deployment, push or provider provisioning performed.
- Built 31 HTML pages plus 404, sitemap and five-item RSS feed.
- Passed two route/enquiry tests and the generated-site crawl: 1,459 internal links/fragments and 186 image elements checked.
- Production build and formatting checks passed; npm audit reports zero known vulnerabilities.
- Browser checks confirmed desktop homepage/guide appearance, 390px mobile menu and enquiry layout, empty-form validation/focus, and copy feedback without transmitting a message.
- Independent code review completed. Fixed mailto space/CRLF encoding and added regression assertions. Fixed React 18 fetch-priority attribute warning.
- Mechanical design detector reports only retained Inter font warnings; keeping the existing typography follows the user's design preference.
- Automatic delivery remains intentionally unconfigured. Email/WhatsApp composer is explicit about finishing in the chosen app; no fake success or cleared enquiry.
- README explains local commands, content maintenance and remaining launch/account work.
- Final production browser checks: service and guide pages render without console errors; native FAQ opens at 390px without horizontal overflow. HTTP checks pass for homepage, service/article pages, sitemap, RSS, preserved Google verification file, trailing-slash redirect and real 404.
