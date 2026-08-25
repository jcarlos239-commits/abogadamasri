DEEP SEO / CODE CLEANUP — IMPLEMENT ONLY THE FOLLOWING CHANGES

Make the following targeted technical and semantic SEO improvements. Preserve the existing visual design, page wording, URLs, routing, SEO metadata, structured-data architecture, prerendering, and article content unless a change is explicitly requested below.

1. Fix the blog draft/published-state architecture

Make published: false a single, consistent source of truth throughout the entire blog system.

Any Markdown article with:

published: false

must be completely excluded from:

Blog article listings
Featured articles
Runtime article resolution
Static HTML generation
Sitemap generation
Any public article navigation

Published articles must continue to work exactly as they do now.

Do not delete or modify existing published articles.

2. Make the sitemap have one source of truth

Inspect the current sitemap architecture.

Eliminate the situation where public/sitemap.xml and the build-generated dist/sitemap.xml can contain different information.

Establish one authoritative sitemap-generation source.

The production sitemap must always be generated from the same authoritative page/article data used by the build.

Do not maintain two independently editable versions of the sitemap.

Preserve all currently valid URLs.

3. Fix sitemap lastmod semantics

Do not assign today's date to every page merely because a new deployment occurred.

lastmod must represent the date the corresponding page or article was meaningfully modified.

Do not rely on deployment time, build time, or filesystem modification time in a way that would cause every page to receive the same date on every build.

Use a deterministic source of truth for page modification dates. If necessary, create an explicit page metadata mapping or equivalent authoritative data structure.

Existing article publication/update dates should continue to come from article frontmatter.

Do not remove valid sitemap URLs.

4. FAQ structured data

Do NOT add FAQPage JSON-LD merely for Google FAQ rich results.

Do not create new FAQ schema as part of this task.

If the project contains FAQ structured data that was added solely for the obsolete Google FAQ rich-result strategy, inspect it and remove it only if it is clearly unused/unnecessary and doing so does not remove useful structured information.

Do not modify the visible FAQ content.

5. Blog heading hierarchy

On the Blog index page, preserve:

H1 — Blog Jurídico

Use:

H2 — Artículos sobre Derecho Venezolano

The featured article title inside that section should be:

H3 — [featured article title]

Keep:

H2 — Más artículos

with individual article titles as H3s underneath it.

Keep:

H2 — ¿Necesita Asesoría Legal?

Do not change the article titles themselves.

6. Homepage service-card hierarchy

On the homepage, preserve:

H1 — Abogados en Caracas, Venezuela

Use:

H2 — Servicios Legales en Caracas

Then make the six actual service-area names H3:

H3 — Derecho Civil

H3 — Derecho Mercantil

H3 — Derecho Laboral

H3 — Divorcios y Familia

H3 — Bienes Inmuebles

H3 — Contratos y Documentos

Preserve their existing links, cards, styling, layout, and visual appearance.

Do not change their wording.

7. Service-page subtopic cards — DO NOT convert these to H3

Do NOT turn service-page subtopic/navigation cards into H3 headings merely for SEO.

These cards should remain their existing semantic element/link structure because they are navigation/service cards without subordinate explanatory content.

Do not add artificial H3 headings simply to increase heading count.

Preserve their existing visual appearance and links.

8. Article social-image metadata

Make article Open Graph image generation robust.

For every article:

If featuredImage is supplied, resolve it to a valid absolute URL using the site's canonical domain.
Do not emit a relative URL in og:image.
Preserve the existing fallback OG image when no featured image exists.
Do not assume every image is JPEG.
Do not hardcode an incorrect MIME type if the actual image format differs.

Keep existing article images and content unchanged.

9. Fix article datePublished fallback

Do not silently use the current date when an article is missing its publication date.

Treat date as required frontmatter for published articles.

If a published article has no valid publication date, fail the build with a clear, actionable error identifying the article and explaining that its required publication date is missing.

Do not alter dates of existing articles.

10. Clean up LegalService sameAs

Inspect the existing LegalService structured data.

Do not use a WhatsApp contact URL as sameAs.

sameAs should only contain URLs that genuinely identify the same person/business entity on authoritative external profiles.

Keep the WhatsApp URL, if currently used as a contact method, in the appropriate contact/telephone/contact-point property rather than sameAs.

Do not remove legitimate official identity URLs if any exist.

11. Simplify font loading

Inspect the current Google Fonts loading implementation.

Remove unnecessary CSS @import font loading if the same fonts are already being loaded through <link> elements or another more efficient mechanism.

Do not change the site's typography, font family, font weights, appearance, spacing, or visual design.

The goal is only to eliminate redundant font-loading requests and improve loading behavior.

Do not introduce a new font or change the existing design.

12. Clean up favicon configuration

The site currently has an SVG favicon and also references the large og-image.jpg as a favicon.

Keep the proper SVG favicon.

Remove the unnecessary JPEG/OG-image favicon declaration.

Do not change the site's Open Graph image.

13. Strict preservation requirements

Do NOT:

change any URL or slug
change canonical URLs
change page titles
change meta descriptions
change existing H1 wording
rewrite article content
add whenToSeek content
add new pages
delete published articles
change the site's visual design
change colors, spacing, typography, or layout
alter existing internal links
alter robots.txt behavior
alter the existing llms.txt
modify unrelated SEO code

14. Verification

After implementation, run the complete production build.

Verify all of the following:

Build completes with zero errors and zero warnings.
All existing static pages are generated.
Every page has exactly one H1.
Homepage service names are H3 under the Services H2.
Blog featured article is H3 under its Blog section H2.
Service-page subtopic cards remain non-heading navigation/service cards.
published: false articles are completely excluded from public output.
Published articles still generate correctly.
Published articles appear in the sitemap.
Draft articles do not appear in the sitemap.
Sitemap has one authoritative generation source.
Sitemap lastmod values are deterministic and correspond to meaningful modification dates.
Article og:image URLs are absolute and valid.
Published articles without dates cause a clear build error.
WhatsApp is no longer incorrectly used as sameAs.
Font loading has no redundant @import.
SVG favicon remains.
The OG image is no longer incorrectly declared as a favicon.
All existing URLs, canonical tags, metadata, JSON-LD, prerendering, and page content remain intact.

Finally, provide a concise report listing every file changed, exactly what changed, and the final production-build result. Do not make any changes beyond this scope.