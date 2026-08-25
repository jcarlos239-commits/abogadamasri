DEEP TECHNICAL SEO CLEANUP — IMPLEMENT ONLY THESE 9 CHANGES

Make only the following changes. Preserve all existing page content, wording, URLs, slugs, visual design, layout, H1/H2/H3 hierarchy, canonical URLs, robots.txt, sitemap URL list, prerendering architecture, blog content, and existing structured-data information unless explicitly changed below.

1. Remove the obsolete sitemap today fallback

In vite.config.ts, remove the old today = new Date() fallback used for article lastmod/date handling.

Published articles already require a valid frontmatter date. Do not silently substitute today's date anywhere.

If a published article has no valid date, the existing explicit build error must remain the behavior.

Do not change the current page-specific sitemap lastmod values or the current sitemap architecture.

2. Strengthen the homepage Person → LegalService structured-data relationship

On the homepage JSON-LD, explicitly define the Marinela Masri Person entity with:

@id: https://www.abogadamasri.com/#marinela-masri

and connect that Person to the existing:

LegalService @id: https://www.abogadamasri.com/#legal-practice

Establish the relationship appropriately using Schema.org properties such as provider / employee / worksFor only where semantically appropriate.

The goal is:

Marinela Masri (Person)

↓

#legal-practice (LegalService)

↓

individual legal services

Do not create duplicate or conflicting Person entities.

Keep the existing Person entity on the Sobre Marinela page consistent with the homepage entity.

Do not change visible page wording.

3. Fix the LegalService logo

Do not use:

https://www.abogadamasri.com/og-image.jpg

as the logo simply because it is the site's Open Graph image.

First inspect the project for an existing legitimate logo asset.

If a genuine business logo asset already exists, use that asset and resolve it to an absolute URL.

Do not use the favicon as the logo unless it is actually the business logo.

Do not invent or generate a new logo.

If no legitimate logo asset exists, do not fabricate one. Remove the incorrect logo property rather than substituting an unrelated image.

Keep og:image unchanged.

4. Normalize URL variants

The site currently supports both trailing-slash and non-trailing-slash route variants.

Preserve the existing public canonical URLs with trailing slashes.

Configure the production routing/hosting behavior so that the non-canonical version redirects to the canonical trailing-slash version rather than rendering duplicate page content.

Example:

/derecho-civil

→ permanent redirect →

/derecho-civil/

Apply this consistently to the site's static routes.

Do not change any existing canonical URLs, sitemap URLs, internal links, or public slugs.

Do not create redirect loops.

Verify that the canonical URL returns the page normally and the non-canonical variant redirects.

5. Fix article featured-image URL handling

The article build system already normalizes featuredImage for Open Graph metadata.

Apply the same URL normalization to the actual article-page image rendered by BlogArticlePage.tsx.

A relative featuredImage path must resolve correctly from the site root.

An absolute URL must remain unchanged.

Do not alter existing article images or article content.

The visible article image and its og:image should resolve to the same intended asset.

6. Make article OG image dimensions accurate

Remove the hardcoded:

og:image:width = 1200

og:image:height = 630

when a real featured image exists.

Determine the actual dimensions of the featured image during the build and use those dimensions in the article's Open Graph metadata.

If the article has no featured image and the site fallback image is used, use the actual dimensions of that fallback image.

Do not modify the image itself.

Do not introduce runtime image processing.

7. Add a package lockfile

Inspect the package manager currently used by the project.

Add the appropriate lockfile for that package manager, using the currently installed/resolved dependency versions.

Do not upgrade dependencies merely for the sake of creating a lockfile.

Do not change dependency versions unless absolutely required to generate a valid lockfile.

The goal is reproducible production builds.

After creating the lockfile, run the production build using the locked dependency tree and confirm it succeeds.

8. Improve Google Fonts loading

The project currently loads Google Fonts through CSS @import.

Replace the CSS @import font-loading mechanism with an explicit stylesheet <link> in the document <head>.

Preserve:

the exact same font families
the exact same weights
the exact same typography
the exact same visual appearance

Do not introduce a new font.

Do not load the same Google Fonts stylesheet twice.

Do not change any layout, spacing, colors, or component styling.

The purpose is only to remove the CSS @import dependency and make font loading more explicit.

9. Strict preservation rules

Do NOT:

rewrite any page copy
change any H1/H2/H3 wording
add whenToSeek content
add FAQPage schema
change titles or meta descriptions
change canonical URLs
change the sitemap URL list
change robots.txt
change llms.txt
delete existing published articles
modify article content
change colors, typography, spacing, layout, or design
generate or recreate images
generate a new logo
modify the verified homepage WebP hero image
alter the Person/LegalService entity IDs
Final verification

Run the complete production build.

Verify:

Build completes with zero errors and zero warnings.
All existing pages are generated.
Exactly one H1 remains on every page.
Sitemap still contains all 18 current legitimate URLs.
Sitemap lastmod values remain unchanged from the current verified values.
No article can receive today's date as a fallback.
Homepage JSON-LD contains one coherent Marinela Masri Person entity connected to #legal-practice.
LegalService does not use og-image.jpg as its logo.
A legitimate logo is used only if one already exists.
Non-trailing-slash URLs redirect to trailing-slash canonical URLs without loops.
Article featured images resolve correctly on the actual article page.
Article og:image points to the same intended image.
Article OG dimensions match the actual image dimensions.
A package lockfile exists and the locked production build succeeds.
Google Fonts are no longer loaded through CSS @import.
No duplicate Google Fonts loading was introduced.
Prerendering still works and the generated HTML contains actual page content.

Before finishing, report every file changed, the exact reason for each change, the final build result, and any item that could not safely be implemented without inventing or altering project information.

MAKE NO OTHER CHANGES.