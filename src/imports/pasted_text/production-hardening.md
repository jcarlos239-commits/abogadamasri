PERFORM A FINAL PRODUCTION HARDENING PASS ON THE EXISTING AbogadaMasri.com WEBSITE.

THIS IS AN EXISTING PRODUCTION WEBSITE.

==================================================
IMPORTANT SITE CONTEXT
==================================================

The website currently has 21 intended indexed URLs in Google Search Console:

- 16 permanent/site routes
- 1 blog index route
- 5 published blog article routes generated from Markdown files

The 5 blog articles are NOT manually maintained inside the React page structure.

The user's publishing workflow is:

Markdown article
→ GitHub Desktop
→ Commit
→ Push to GitHub
→ Vercel build/deploy
→ live website

Figma Make is used to modify the website/application infrastructure, NOT to manually publish or rewrite each blog article.

IMPORTANT:

The 5 existing blog articles and all future Markdown articles must automatically inherit improvements through the shared blog infrastructure/template.

DO NOT manually rewrite, duplicate, migrate, restructure, paraphrase, translate, shorten, expand, or SEO-rewrite the existing blog article content as part of this task.

Do not modify an existing article Markdown file unless a genuine technical compatibility problem makes it necessary.

Prefer fixing shared infrastructure, parsers, validators, renderers, SEO resolution, templates, or build logic instead of modifying individual articles.

The user must NOT need to edit React components or infrastructure code to publish a future article.

==================================================
NON-NEGOTIABLE PRESERVATION RULES
==================================================

The current:

- visual design
- branding
- layout
- navigation
- typography appearance
- existing functionality
- public URLs
- existing slugs
- article content
- publishing workflow

must remain unchanged unless a technical fix is absolutely required.

DO NOT redesign the website.

DO NOT rewrite article content.

DO NOT change indexed URLs.

DO NOT remove indexed pages.

DO NOT add noindex.

DO NOT create redirect chains.

DO NOT change trailing-slash behavior.

DO NOT introduce unrelated dependencies.

DO NOT make unrelated changes.

==================================================
PART 1 — DO NOT CHANGE INDEXING STRATEGY
==================================================

Google Search Console already shows the site's intended pages indexed successfully.

Preserve the existing indexing architecture.

Do NOT:

- add noindex
- remove indexed pages
- remove valid URLs from the sitemap
- change existing public URLs
- change existing slugs
- create redirect chains
- change trailing-slash behavior
- unnecessarily alter canonical architecture
- modify robots.txt unless a genuine technical defect is discovered

Do not interpret the existence of 21 indexed URLs as an indexing problem.

Do not attempt to reduce, consolidate, merge, or reorganize the current indexed page set.

The 5 blog article URLs must remain dynamically generated from the Markdown article inventory.

==================================================
PART 2 — MOBILE PERFORMANCE: SITE-WIDE
==================================================

The primary unresolved technical problem is mobile performance.

Historical Lighthouse results have been approximately:

Desktop:
~98

Mobile:
~70

across multiple route types.

Treat this as a potential shared site-wide performance problem.

Do NOT optimize only the homepage.

Audit the shared architecture and all route types.

Audit at minimum:

- homepage
- permanent service pages
- sub-service pages
- blog index
- shared dynamic blog article template
- shared layout components
- navigation
- ContactCta
- Google Maps
- fonts
- images
- CSS
- JavaScript
- third-party resources

Objectives:

- substantially improve mobile loading
- preserve or improve desktop performance
- preserve CLS
- preserve accessibility
- preserve functionality
- preserve complete prerendered HTML

Do not blindly lazy-load content.

Do not optimize based only on theoretical best practices.

Identify actual bottlenecks in the existing implementation before changing them.

==================================================
PART 3 — RESPONSIVE IMAGE DELIVERY
==================================================

Implement REAL responsive image delivery.

Do not merely create a smaller mobile image and leave it unused.

For important images evaluate:

- intrinsic dimensions
- rendered dimensions
- mobile rendered dimensions
- desktop rendered dimensions
- file size
- format
- loading priority

Use where appropriate:

- picture/source
- srcset
- sizes
- WebP
- AVIF where useful

The browser must receive an appropriately sized image for the viewport.

Do not make mobile devices download the desktop-sized resource unnecessarily.

==================================================
HOMEPAGE HERO
==================================================

The homepage currently has a desktop hero and a smaller mobile hero candidate.

The mobile asset must actually be connected to the rendered HTML.

Do not leave a mobile image sitting unused in the repository.

Use a real responsive implementation equivalent to:

<picture>
  <source media="(max-width: ...px)" srcSet="mobile-image" />
  <img src="desktop-image" ... />
</picture>

or an equally valid production implementation using srcset/sizes.

Use the correct existing assets where appropriate.

Verify that:

- the mobile source is referenced by the actual rendered page
- the browser can select the mobile source
- the final build contains the expected reference
- mobile is not unnecessarily downloading the desktop image

==================================================
LCP RULE
==================================================

For EVERY route type determine the actual likely LCP element.

If the LCP element is an image:

- do NOT lazy-load it
- use appropriate fetch priority
- ensure early discovery
- ensure correct mobile resource selection
- reserve intrinsic dimensions
- preserve aspect ratio
- avoid CLS

If an image is below the fold and is not LCP:

- lazy loading may be appropriate

Do NOT globally apply loading="lazy" to every image.

For blog articles, determine whether the featured image is actually LCP before changing its loading behavior.

Do not claim LCP improved unless the implementation was actually measured.

==================================================
PART 4 — GOOGLE MAPS: TRUE INTERACTION-BASED LOADING
==================================================

The previous implementation report claimed Google Maps was deferred until interaction.

Verify the ACTUAL implementation.

Implement TRUE interaction-based loading.

Before user interaction:

- DO NOT create the Google Maps iframe
- DO NOT set/load the Google Maps iframe src
- DO NOT initialize Google Maps
- DO NOT make Google Maps network requests

Instead display a design-compatible map preview/placeholder.

The placeholder must:

- preserve the existing visual appearance
- preserve layout dimensions
- prevent CLS
- clearly indicate that the map can be opened/viewed
- be keyboard accessible
- work correctly on mobile

Only after a real user interaction such as click or tap should the interactive map iframe be inserted and loaded.

Keep the existing destination/location.

Do not remove Google Maps functionality.

If the user never interacts with the map, there should be no Google Maps iframe request.

After implementation, inspect the runtime/build behavior and verify that the iframe does not exist before interaction.

==================================================
PART 5 — THIRD-PARTY RESOURCE CONTROL
==================================================

Audit ALL third-party resources.

At minimum inspect:

- Google Maps
- Google Analytics
- Google Tag Manager if present
- external fonts
- external scripts
- other third-party embeds

Rules:

- required analytics may remain
- Google Maps must be interaction-triggered
- keep fonts self-hosted if the existing implementation already uses self-hosted fonts
- do not add unnecessary third-party dependencies
- do not remove required analytics

The initial mobile render should contain only third-party resources that are genuinely required.

Verify that no unnecessary Google Fonts requests remain.

==================================================
PART 6 — JAVASCRIPT OPTIMIZATION
==================================================

Audit JavaScript for:

- unused dependencies
- duplicate libraries
- duplicate utilities
- dead imports
- browser-only code executing too early
- unnecessary global code
- unnecessarily eager features
- unnecessary shared runtime work

IMPORTANT:

The website uses a prerender/renderToString architecture.

DO NOT introduce React.lazy() or route splitting if that causes prerendered pages to become empty shells or otherwise breaks production HTML generation.

Preserve complete static HTML for every route.

Prioritize safe optimizations such as:

- removing unused imports
- removing duplicate code
- tree-shaking
- isolating browser-only functionality
- deferring Google Maps
- deferring non-critical interactive features
- reducing unnecessary runtime work
- removing unnecessary client execution

Do not sacrifice SEO prerendering merely to reduce JavaScript bundle size.

Do not claim JavaScript optimization improved Lighthouse unless actually measured.

==================================================
PART 7 — BLOG RUNTIME SEO: ONE SOURCE OF TRUTH
==================================================

The blog has a centralized SEO resolver.

Use ONE authoritative SEO resolution path for:

- prerendered article HTML
- BlogArticlePage
- usePageSEO
- document title
- canonical
- Open Graph
- Twitter metadata
- Article JSON-LD
- article dates
- robots

The static prerendered HTML and runtime SPA navigation MUST resolve identical SEO values.

The resolver must consistently support:

- title
- description
- seoTitle
- seoDescription
- canonical
- ogTitle
- ogDescription
- ogImage
- robots
- date
- dateModified
- author
- featuredImage
- slug

Fallback rules:

seoTitle:
seoTitle → title + brand suffix

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

Do not append the brand suffix twice.

Do not allow static HTML and runtime navigation to disagree.

==================================================
usePageSEO()
==================================================

Update usePageSEO() so it accepts the complete resolved SEO object.

During SPA navigation it must correctly synchronize:

- document.title
- meta description
- robots
- canonical
- og:title
- og:description
- og:image
- og:url
- og:type
- og:site_name
- twitter:card
- twitter:title
- twitter:description
- twitter:image
- article:published_time
- article:modified_time
- article:author

When navigating from one article to another, old article-specific metadata must not remain.

Do not create duplicate meta tags.

==================================================
CANONICAL SAFETY
==================================================

If custom article canonical URLs are supported:

- validate them
- reject malformed values
- prevent unintended cross-domain canonicals
- require same-domain canonicals unless a clearly intentional exception exists
- ensure runtime and static canonical values are identical

Do not allow an article to silently canonicalize to another domain.

==================================================
PART 8 — FRONTMATTER VALIDATION: FAIL, DO NOT SILENTLY IGNORE
==================================================

Review the current Markdown article loading/filtering/validation order.

A Markdown article with:

published: true

MUST NOT be silently filtered out because it contains invalid or missing required frontmatter.

Validate the article BEFORE filtering/generating output.

For published articles require:

- title
- description
- date
- author
- slug

If a published article is invalid:

BUILD FAILURE.

Give a clear error including the filename and the reason.

==================================================
SLUG VALIDATION
==================================================

Validate:

- missing slug
- empty slug
- whitespace
- invalid characters
- duplicate slug
- duplicate route
- conflict with static route

Build must fail with:

- source filename
- slug
- exact reason

Do not silently repair malformed slugs.

==================================================
DATE VALIDATION
==================================================

Use strict calendar-date validation.

Reject impossible dates such as:

2026-02-31
2026-13-10

A valid date must correspond to a real calendar date.

==================================================
dateModified
==================================================

If dateModified exists:

- validate it
- ensure it is a real calendar date
- ensure it is not earlier than date

Example:

date: "2026-08-30"
dateModified: "2026-09-02"

VALID

But:

date: "2026-08-30"
dateModified: "2026-08-20"

INVALID — BUILD FAILURE.

==================================================
OTHER FRONTMATTER FIELDS
==================================================

When present, validate:

- canonical
- robots
- ogImage
- featuredImage
- relatedArticles

If a local image path is specified:

- verify the file exists

If relatedArticles contains a slug that does not exist:

- BUILD FAILURE
- identify source filename
- identify invalid related slug

Do not silently ignore malformed metadata.

==================================================
PART 9 — INTERNAL LINK VALIDATION
==================================================

Keep the existing internal-link checker.

Expand it so it validates internal links from BOTH:

- Markdown links
- raw HTML <a href="..."> links embedded in Markdown

Do not treat these as internal website routes:

- http://
- https://
- mailto:
- tel:
- WhatsApp links
- anchor-only links
- external URLs

Resolve internal URLs against the actual current route inventory.

Validate both:

- existing static routes
- dynamically generated blog article routes

Broken internal links must cause BUILD FAILURE.

Error message must include:

- source Markdown filename
- broken URL
- reason

==================================================
PART 10 — PRERENDERING MUST FAIL SAFELY
==================================================

The site depends on prerendered HTML for SEO.

A failed prerender MUST cause the production build to fail.

Do NOT:

prerender error
→ log error
→ continue
→ successful build

Instead:

prerender error
→ clear error
→ BUILD FAILURE

The error must identify:

- route
- reason
- useful stack/error information

This applies to:

- static pages
- blog index
- dynamic blog article routes

Do not allow incomplete pages or empty shells to silently ship.

==================================================
PART 11 — BLOG WORKFLOW MUST REMAIN UNCHANGED
==================================================

Preserve the exact publishing workflow:

Markdown
→ GitHub Desktop
→ Commit
→ Push
→ GitHub
→ Vercel
→ live website

The 5 current articles are examples of the existing article system.

Do NOT build article-specific React components.

Do NOT require manual code changes when a future article is added.

A future Markdown article must automatically inherit:

- SEO resolver
- canonical
- Open Graph
- Twitter metadata
- Article JSON-LD
- dateModified handling
- related articles
- analytics
- security sanitization
- internal link validation
- slug validation
- frontmatter validation
- responsive image handling
- shared performance improvements

The user should only need to create the Markdown article, commit, push, and deploy.

Do not alter the textual content of existing articles as part of this hardening task.

==================================================
PART 12 — ANALYTICS SAFETY
==================================================

Preserve the existing GA4 measurement ID:

G-GM03DD1T2R

Ensure:

- one initial pageview
- one pageview per SPA route navigation
- no duplicate StrictMode pageviews
- conversion event functions remain available

Existing events:

- whatsapp_click
- phone_click
- email_click
- contact_cta_click

Blog article analytics must be inherited automatically from the shared BlogArticlePage/template.

Do NOT add analytics code individually to Markdown articles.

Do not create duplicate conversion events from one click.

Do not collect personally identifiable information.

Preserve compatibility with Google Ads conversion import.

Do NOT claim that Google Ads conversions are configured unless the Google Ads account itself has actually been configured.

==================================================
PART 13 — PERFORMANCE REGRESSION PROTECTION
==================================================

After implementation, inspect the final production build.

Verify:

- mobile hero actually uses the responsive/mobile asset
- mobile receives smaller appropriately sized image resources where applicable
- LCP images are not accidentally lazy-loaded
- Google Maps iframe does not exist/load before interaction
- Google Fonts are not requested
- unnecessary third-party resources are not loaded initially
- analytics remains functional
- CLS has not been degraded
- prerendered static HTML remains complete
- dynamic blog article HTML remains complete
- future Markdown article processing still works

Create or maintain build-time checks where practical.

==================================================
PART 14 — ROUTES TO VERIFY
==================================================

Verify the following permanent routes:

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

PLUS:

Verify at least 2 existing blog article routes from the CURRENT Markdown article inventory.

Do not hard-code those article slugs into the shared implementation.

These article-route tests exist only to prove that the shared dynamic article system works correctly for the current articles and future article slugs.

The implementation must automatically support future valid Markdown article slugs.

==================================================
PART 15 — PRODUCTION BUILD
==================================================

Run:

pnpm build

Requirements:

- zero errors
- zero warnings
- all permanent pages generated
- blog index generated
- representative dynamic blog articles generated
- sitemap generated
- robots.txt preserved
- no missing imports
- no failed prerendered routes
- no silently skipped published articles

If the build fails:

- identify the real cause
- fix the real cause
- do not suppress the error
- do not weaken validation merely to make the build pass

==================================================
PART 16 — DO NOT CLAIM WHAT WAS NOT VERIFIED
==================================================

This is mandatory.

Do NOT say:

"Mobile performance fixed"

unless implementation was actually inspected and/or measured.

Do NOT say:

"Maps deferred"

unless the iframe is actually absent before user interaction.

Do NOT say:

"Google Fonts removed"

unless the final build has been checked for Google Fonts references/requests.

Do NOT say:

"Blog SEO fully synchronized"

unless both prerendered HTML and runtime SPA navigation use the same resolved metadata.

Do NOT say:

"All routes tested"

unless they were actually tested.

Do NOT invent Lighthouse results.

If live Lighthouse cannot be executed in the current environment, explicitly state:

"Code/build verification completed; live Lighthouse verification must be performed after deployment."

Distinguish clearly between:

- code verification
- build verification
- runtime verification
- live production verification
- Lighthouse measurement

==================================================
FINAL REPORT
==================================================

At the end provide:

A. Files changed
B. Dependencies changed
C. Mobile performance changes
D. Actual responsive image implementation
E. Actual LCP behavior
F. Actual Google Maps loading behavior
G. JavaScript optimizations
H. GA4 changes
I. Google Ads compatibility
J. Blog SEO resolver changes
K. Frontmatter validation changes
L. Internal-link validation changes
M. Prerendering changes
N. Permanent routes verified
O. Existing blog article routes verified
P. Build result
Q. What was actually measured
R. What still requires live Lighthouse testing
S. Any requested item intentionally NOT changed and why

==================================================
FINAL REQUIREMENTS
==================================================

Do not make unrelated changes.

Do not redesign the site.

Do not rewrite article content.

Do not manually modify the 5 existing article Markdown files unless technically necessary.

Do not change the GitHub Desktop → GitHub → Vercel publishing workflow.

Do not change indexed URLs.

Do not remove indexed pages.

Do not add noindex.

Do not create article-specific React implementations.

Do not hard-code the current 5 article slugs into the architecture.

Fix the shared infrastructure instead.

The final result must be a production-hardened version of the existing AbogadaMasri.com website, not a redesign, rewrite, migration, or content modification.