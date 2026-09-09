You are modifying an EXISTING PRODUCTION WEBSITE: AbogadaMasri.com.

Perform a focused production hardening pass addressing exactly these three areas:

1. Google Ads + GA4 conversion tracking
2. Site-wide mobile performance
3. Blog runtime SEO consistency

This is NOT a redesign.

==================================================
ABSOLUTE RULES
==============

DO NOT:

* redesign any page;
* change the visual identity;
* change colors;
* change typography appearance;
* change spacing;
* change navigation;
* change existing URLs;
* change existing slugs;
* rewrite existing article content;
* delete working functionality;
* remove existing SEO metadata;
* remove existing structured data;
* alter the GitHub Desktop → GitHub → Vercel publishing workflow;
* require React edits whenever a new Markdown article is added.

The current website must remain visually equivalent to the existing production version.

Preserve all current public routes.

The website currently contains approximately 20 public URLs, including dynamically generated blog articles. The fixes below MUST apply site-wide and MUST also apply automatically to future Markdown articles.

Do NOT fix only the homepage.

==================================================
PHASE 1 — GOOGLE ADS + GA4 CONVERSION TRACKING
==============================================

OBJECTIVE:

Make the website correctly report user interactions to GA4 across ALL routes and make those events suitable for use as Google Ads conversion actions.

Existing GA4 measurement ID:

G-GM03DD1T2R

Do not change it.

---

## 1A. CENTRALIZE ANALYTICS

Inspect the existing RouteAnalytics / GA4 implementation.

Create a single robust analytics utility for the entire application.

It must:

* avoid duplicate initial pageviews;
* avoid duplicate pageviews caused by React StrictMode;
* send page_view on client-side route changes;
* correctly update page_path;
* correctly update page_location;
* correctly update page_title;
* work on every React route;
* work on blog article routes;
* work when navigating from one article directly to another;
* not require manual code additions for each future article.

Do not create duplicate GA4 tags.

Do not load Google Analytics more than necessary.

---

## 1B. CONVERSION EVENTS

Ensure all existing user-facing conversion entry points across the entire website are tracked.

Required events:

whatsapp_click
phone_click
email_click
contact_cta_click

Every relevant CTA must use the centralized event utility.

Audit all routes and all shared components for these interactions.

This includes:

* desktop navigation;
* mobile navigation;
* homepage hero CTA;
* homepage CTA sections;
* service-page CTAs;
* sub-service-page CTAs;
* footer/contact areas;
* floating WhatsApp button;
* Blog pages;
* every dynamically rendered Markdown article.

Do not miss CTA variants.

Do not create multiple events from one click.

A single user click should produce one corresponding conversion event.

---

## 1C. EVENT PARAMETERS

Where appropriate, add useful parameters without collecting personal information.

For example:

event:
whatsapp_click

parameters:
link_location
page_path
page_type

Examples of link_location:

navbar
hero
contact_cta
floating_button
article_cta
footer

Use the existing route/path dynamically.

Do NOT collect:

* names;
* phone numbers;
* email addresses;
* message contents;
* personally identifiable information.

---

## 1D. GOOGLE ADS COMPATIBILITY

Make sure the website-side GA4 implementation is compatible with Google Ads conversion import.

Do NOT invent a Google Ads conversion ID.

Do NOT create fake conversion tags.

Do NOT alter Google Ads account settings.

The final report must explicitly state:

"Website-side conversion tracking implemented."

and separately:

"Google Ads conversion actions must be verified/configured in the Google Ads account."

---

# PHASE 2 — SITE-WIDE MOBILE PERFORMANCE

IMPORTANT:

The user reports that essentially ALL website pages score around the 70 range on Lighthouse mobile while desktop versions score around 98.

Therefore DO NOT treat this as a homepage-only issue.

Audit the entire application for shared performance bottlenecks.

Think in terms of:

SHARED RESOURCES
+
SHARED COMPONENTS
+
SHARED CSS
+
SHARED JAVASCRIPT
+
SHARED THIRD-PARTY REQUESTS
+
SHARED IMAGE LOADING
+
SHARED FONT LOADING

The goal is to improve MOBILE performance substantially without degrading desktop.

---

## 2A. IDENTIFY SHARED MOBILE BOTTLENECKS

Audit the following global/shared components:

* App.tsx
* route handling
* shared.tsx
* navigation
* Mobile menu
* ContactCta
* Google Maps integration
* Floating WhatsApp button
* analytics initialization
* fonts
* global CSS
* shared images
* shared icons
* common components
* blog framework
* all global third-party scripts.

Determine which resources are loaded on every route even when they are not needed immediately.

Do not blindly lazy-load everything.

---

## 2B. MOBILE-FIRST IMAGE DELIVERY

Implement responsive image delivery wherever appropriate.

For important images use:

* srcset;
* sizes;
* picture/source where useful;
* WebP or AVIF where technically and visually appropriate.

The browser must NOT download a desktop-sized image when a much smaller mobile version is sufficient.

This is particularly important for:

* homepage hero;
* service-page hero/background images;
* shared images;
* article featured images;
* large promotional images.

For LCP images:

* preserve priority loading;
* do NOT lazy-load the actual LCP image;
* use fetchpriority="high" where appropriate;
* ensure the image is discoverable immediately;
* ensure dimensions/aspect ratio are reserved.

For below-the-fold images:

* retain lazy loading;
* defer loading appropriately.

Do NOT degrade image quality visibly.

---

## 2C. HERO / LCP STRATEGY

Audit the LCP element on:

* homepage;
* every major service template;
* sub-service template;
* blog article template.

Do not assume they all use the same LCP.

For every route type determine:

1. What is the LCP element?
2. What resource creates it?
3. How large is the resource?
4. Is it discovered early?
5. Is it blocked by CSS/fonts/JavaScript?
6. Is the resource appropriately sized for mobile?

Improve the critical path.

Do not optimize based only on total page weight.

Optimize the actual LCP path.

---

## 2D. REMOVE / DEFER NON-CRITICAL GOOGLE MAPS WORK

Inspect the Google Maps integration.

The map is a shared component and may appear throughout the site.

Do NOT remove the map.

Instead, where appropriate:

* defer map initialization;
* use a lightweight static preview before interaction;
* load the interactive map only when needed;
* preserve the existing map destination;
* preserve the visual design.

The user must still be able to open/view the map.

The goal is to stop Google Maps from competing with the initial mobile render.

---

## 2E. FONT LOADING

Verify that the current self-hosted font implementation is actually being used in the production build.

Ensure:

* no unnecessary Google Fonts runtime request;
* no duplicate font loading;
* only required weights are loaded;
* font-display is appropriate;
* fonts do not block the primary content unnecessarily.

Do NOT visually change typography.

---

## 2F. JAVASCRIPT

Audit the current JavaScript bundle and route-loading behavior.

Do not blindly remove JavaScript.

Identify code that is unnecessarily loaded before first interaction.

Prefer route-level/code splitting where safe.

Potential candidates may include:

* Google Maps;
* secondary route modules;
* non-critical UI components;
* large libraries only used by isolated features.

Do NOT break:

* routing;
* navigation;
* blog rendering;
* analytics;
* WhatsApp behavior;
* contact functionality;
* SEO prerendering.

If a module is used on the first render, do not defer it merely to improve a Lighthouse score.

Prioritize real user performance.

---

## 2G. CSS

Audit CSS delivery.

Remove only proven-unused CSS.

Do not break Tailwind or existing styling.

Do not change layout.

Avoid introducing render-blocking CSS unnecessarily.

---

## 2H. THIRD-PARTY RESOURCE AUDIT

Audit all third-party network requests.

At minimum investigate:

* Google Analytics;
* Google Maps;
* any Google Tag Manager resources;
* external fonts;
* other external scripts.

For every third-party resource determine:

* Is it required?
* Is it critical?
* Can it load later?
* Can it be loaded only when the feature is used?
* Is it duplicated?

Do NOT remove a required business function.

---

## 2I. APPLY THE PERFORMANCE FIXES TO ALL ROUTES

Create a route/template coverage checklist.

At minimum verify:

/
/sobre-marinela-masri/
/servicios/
/derecho-civil/
/derecho-mercantil/
/derecho-laboral/
/derecho-familia-divorcios/
/bienes-inmuebles/
/contratos-documentos/
/derecho-civil/herencias-sucesiones/
/derecho-familia-divorcios/divorcio/
/derecho-familia-divorcios/custodia-lopnna/
/contratos-documentos/poder-notarial/
/bienes-inmuebles/condominios/
/derecho-civil/legalizacion-apostilla/
/derecho-mercantil/registro-mercantil/
/blog/

PLUS every dynamic:

/blog/:slug/

The performance architecture must apply automatically to future blog articles.

Do NOT make article-specific React edits.

==================================================
PHASE 3 — BLOG RUNTIME SEO CONSISTENCY
======================================

Fix the discrepancy between static/prerendered article SEO and client-side SPA SEO.

The same article must produce the same metadata whether:

A. opened directly in the browser

or

B. reached through React Router navigation.

---

## 3A. UNIFY SEO DATA RESOLUTION

Create a single SEO resolver for article metadata.

It must consistently resolve:

title
description
seoTitle
seoDescription
canonical
ogTitle
ogDescription
ogImage
robots
dateModified

Use the same resolver for:

* Vite prerender/build-time HTML;
* BlogArticlePage.tsx;
* usePageSEO();
* JSON-LD;
* Open Graph;
* Twitter metadata.

There must be ONE source-of-truth resolution chain.

---

## 3B. REQUIRED FALLBACKS

seoTitle:
seoTitle → title + brand fallback

seoDescription:
seoDescription → description

ogTitle:
ogTitle → seoTitle → title

ogDescription:
ogDescription → seoDescription → description

ogImage:
ogImage → featuredImage → /og-image.jpg

robots:
robots → "index, follow"

dateModified:
dateModified → date

canonical:
canonical → generated canonical from slug

Do not append the brand twice.

Do not create duplicate metadata.

---

## 3C. RUNTIME HEAD

When navigating between articles without a full page refresh, usePageSEO() must correctly update:

* title;
* meta description;
* robots;
* canonical;
* og:title;
* og:description;
* og:image;
* og:url;
* og:type;
* twitter:title;
* twitter:description;
* twitter:image;
* article:published_time;
* article:modified_time;
* article:author.

Old article metadata must not remain after navigating to another article.

Do not create duplicate <meta> or <link> tags.

---

## 3D. ARTICLE STRUCTURED DATA

Use the same resolved data for Article JSON-LD.

Include where applicable:

headline
description
mainEntityOfPage
datePublished
dateModified
author
publisher
image
articleSection
inLanguage
keywords

Do not invent facts.

Do not add unsupported claims.

Do not add FAQPage schema merely because questions exist in the article.

==================================================
PHASE 4 — MOBILE PERFORMANCE REGRESSION PROTECTION
==================================================

Create a performance checklist/budget that the project can use during future development.

The build should verify where practical:

* no Google Fonts request;
* no duplicate analytics initialization;
* no duplicate page_view logic;
* no invalid image references;
* no giant unexpected image assets;
* no unexpected third-party scripts;
* no missing image dimensions where appropriate.

If the project already has Lighthouse tooling or can safely support Lighthouse CI, use it.

Do NOT make the build dependent on a flaky external network service.

If automated Lighthouse cannot be reliably run in the Figma Make environment, implement the code-level checks and report that live Lighthouse verification must be performed after deployment.

==================================================
PHASE 5 — DO NOT BREAK THE BLOG WORKFLOW
========================================

The site's publication workflow is:

Markdown article
→ GitHub Desktop
→ Commit
→ Push
→ Vercel
→ live article

Preserve this exactly.

Future Markdown articles must automatically receive:

* SEO infrastructure;
* responsive image behavior where applicable;
* Article JSON-LD;
* dateModified behavior;
* Open Graph metadata;
* Twitter metadata;
* canonical;
* analytics;
* Related Articles;
* shared performance improvements.

No React changes should be necessary for each new article.

==================================================
PHASE 6 — VALIDATE THE EXISTING SITE
====================================

After implementation:

1. Run the production build.
2. Require zero build errors.
3. Require zero build warnings.
4. Verify every static route.
5. Verify the blog index.
6. Verify a blog article.
7. Verify direct article loading.
8. Verify client-side navigation between articles.
9. Verify mobile navigation.
10. Verify every WhatsApp entry point.
11. Verify phone links.
12. Verify email links.
13. Verify Contact CTA.
14. Verify Google Maps functionality.
15. Verify canonical output.
16. Verify OG metadata.
17. Verify Twitter metadata.
18. Verify Article JSON-LD.
19. Verify GA4 initialization.
20. Verify SPA pageview behavior.

==================================================
PHASE 7 — PERFORMANCE VALIDATION
================================

IMPORTANT:

The primary success criterion is MOBILE performance.

Desktop performance must not regress materially.

Test representative routes from each template:

* homepage;
* one service page;
* one sub-service page;
* blog index;
* one blog article.

Test both:

Mobile
and
Desktop

using a production build.

Compare:

* Performance;
* FCP;
* LCP;
* TBT;
* CLS;
* Speed Index.

The goal is NOT merely to increase the Lighthouse score.

The goal is to reduce the actual mobile critical-path delays.

Preserve CLS performance.

Do not sacrifice accessibility or functionality for a benchmark number.

==================================================
PHASE 8 — FINAL REPORT
======================

At the end, provide a report containing:

A. Files changed
B. Files removed
C. Dependencies added/removed
D. GA4 changes
E. Conversion events implemented
F. Google Ads compatibility status
G. Mobile performance changes
H. LCP changes
I. Image changes
J. Font changes
K. Third-party resource changes
L. JavaScript changes
M. Blog SEO changes
N. Routes verified
O. Build result
P. Before/after performance measurements where actually measured
Q. Items that could NOT be safely changed

IMPORTANT:

Do NOT claim a performance improvement unless it was actually measured.

Do NOT claim that Google Ads conversions are fully configured unless the Google Ads account itself was configured.

Do NOT claim all 20 routes were Lighthouse-tested unless they were actually tested.

Do NOT modify existing article body content.

Do NOT modify public URLs.

Do NOT redesign the website.

The final result must be a technically hardened version of the existing AbogadaMasri.com website with the same visual identity and the same publication workflow.
