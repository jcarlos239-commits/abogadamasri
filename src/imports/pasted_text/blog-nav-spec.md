IMPLEMENT THE FINAL BLOG NAVIGATION STRUCTURE FOR AbogadaMasri.com BASED ON THE SIX OFFICIAL PRACTICE AREAS.

THIS IS AN EXISTING PRODUCTION WEBSITE.

==================================================
IMPORTANT SITE CONTEXT
==================================================

The website currently has an existing blog at:

/blog/

The blog articles are published through this workflow:

Markdown
→ GitHub Desktop
→ Commit
→ Push to GitHub
→ Vercel
→ live website

The user manages article content through Markdown files.

Figma Make must modify the SHARED BLOG INFRASTRUCTURE/TEMPLATE.

Do NOT manually recreate or hard-code individual articles.

Do NOT create article-specific React components.

Do NOT change the user's GitHub Desktop → GitHub → Vercel publishing workflow.

==================================================
OFFICIAL BLOG CATEGORIES
==================================================

The blog must be organized around EXACTLY these six official practice areas used by the website:

1. Derecho Civil
2. Derecho Mercantil
3. Derecho Laboral
4. Divorcios y Familia
5. Bienes e Inmuebles
6. Contratos y Documentos

These six areas are the permanent top-level blog categories.

IMPORTANT:

Do NOT create additional top-level blog categories based on individual article topics.

Do NOT create new top-level categories such as:

- Apostilla
- Legalización
- Nacionalidad
- Derecho Tributario
- Herencias
- Condominios
- etc.

Those may be topics/subtopics within an article, but they are NOT separate top-level blog categories.

The blog taxonomy must remain aligned with the site's six official practice areas.

==================================================
GOAL
==================================================

Improve /blog/ so visitors can easily browse articles by the six official practice areas.

The blog navigation should conceptually look like:

BLOG

Todos
Derecho Civil
Derecho Mercantil
Derecho Laboral
Divorcios y Familia
Bienes e Inmuebles
Contratos y Documentos

The existing visual style of the website must be preserved.

This is a navigation/organization enhancement, NOT a redesign.

==================================================
CATEGORY SOURCE OF TRUTH
==================================================

Use the existing article Markdown/frontmatter system as the source of each article's primary practice area.

Every published article should belong to ONE primary practice area.

Do NOT allow an article to silently belong to multiple top-level practice areas.

The six allowed values must correspond exactly to the official areas listed above.

Normalize minor formatting differences only when technically appropriate, but do not invent new categories.

For example:

"Divorcios y Familia"

must remain the same official category and must not become:

- Familia
- Divorcio
- Derecho de Familia
- Divorcios

unless the existing codebase already uses a documented internal alias that resolves to the official display name.

==================================================
ARTICLE CATEGORY ASSIGNMENT
==================================================

Review the existing article metadata/frontmatter implementation.

Determine how the current article category is stored.

If the current implementation already has a category field:

- reuse it
- do not create a duplicate source of truth

If a category field is required but currently missing from an existing published article:

- do NOT guess silently
- do NOT rewrite article content
- report which article requires category assignment

The preferred architecture is:

article Markdown frontmatter
→ primary practice area
→ shared blog index/category navigation

Future articles should use the same system automatically.

==================================================
CURRENT FIVE ARTICLES
==================================================

The site currently has five intended existing blog articles according to the user's content inventory.

The implementation must NOT hard-code their slugs or titles.

The current articles should be assigned to the correct one of the six official practice areas based on their existing metadata/content structure.

Do not create duplicate article objects.

Do not manually copy the articles into separate category components.

==================================================
BLOG INDEX NAVIGATION
==================================================

On:

/blog/

add a category navigation/filter near the article listing.

The default state is:

Todos

When "Todos" is selected:

- display all published articles
- preserve the current article order
- preserve the existing article card design

When a practice area is selected:

- display only articles whose primary practice area matches that area
- preserve the existing article card design
- preserve title
- preserve description/excerpt
- preserve date
- preserve featured image
- preserve existing article links
- preserve existing CTA/footer

The selected category must have a clearly visible active state.

==================================================
MOBILE DESIGN
==================================================

The category navigation must work cleanly on mobile.

Do not create page overflow.

Do not make the navigation excessively tall.

A responsive wrapping layout or contained horizontal scrolling category bar is acceptable.

Use the existing design language.

Do not introduce a large UI library.

Do not introduce unnecessary dependencies.

==================================================
DESKTOP DESIGN
==================================================

On desktop the category navigation should be visually easy to scan.

Use the existing website's spacing, typography, button styles, colors, borders, and visual language.

Do not create a large mega-menu.

Do not redesign the blog page.

==================================================
CATEGORY VISIBILITY
==================================================

Because the six practice areas are part of the permanent website taxonomy:

Display all six official practice areas in the blog navigation even if one currently has zero articles.

However, if a category currently has zero articles, make that state clear in a lightweight way rather than creating an empty page.

Possible behavior:

- category remains visible
- selecting it displays a simple "Aún no hay artículos en esta área." message

Do NOT hide one of the six official areas simply because it currently has no article.

This is different from automatically generated topic categories.

==================================================
URL / SEO RULE
==================================================

IMPORTANT:

DO NOT create separate indexable category pages at this stage.

Do NOT create URLs such as:

/blog/derecho-civil/
/blog/derecho-mercantil/
/blog/derecho-laboral/
/blog/divorcios-y-familia/
/blog/bienes-e-inmuebles/
/blog/contratos-y-documentos/

Keep:

/blog/

as the single public blog index URL.

The categories are navigation/filter controls within /blog/.

Do not create additional indexable pages.

Do not add noindex.

Do not modify the sitemap architecture for this feature.

Do not modify article canonical URLs.

Do not create redirects.

Do not change article URLs.

==================================================
FILTER STATE
==================================================

Prefer local client-side UI state for filtering.

The selected category should not create a new indexable URL.

Do not create duplicate canonical URLs.

Do not create crawlable filtered versions of /blog/.

The initial /blog/ HTML must remain valid and prerenderable.

JavaScript may enhance the filtering interaction.

The article list must remain discoverable in the prerendered HTML.

==================================================
ARTICLE ORDER
==================================================

Do not change the existing article sorting logic.

"Todos" must use the existing ordering.

Each category must preserve that same ordering among its matching articles.

Do not introduce a new date or ranking algorithm.

==================================================
FUTURE MARKDOWN ARTICLES
==================================================

This is critical.

When the user later creates a new Markdown article:

1. The article provides one of the six official practice areas in frontmatter.
2. GitHub Desktop commits the Markdown.
3. GitHub receives the commit.
4. Vercel builds the site.
5. The article automatically appears in /blog/.
6. The article automatically appears under its assigned practice area.

No React code modification should be necessary.

No category component modification should be necessary.

No manual article registration should be necessary.

Do NOT hard-code:

- current article count
- current article slugs
- current article titles

==================================================
FRONTMATTER VALIDATION
==================================================

Integrate this feature with the existing strict frontmatter validation.

For published articles:

The primary practice area must be valid.

Valid values are ONLY:

- Derecho Civil
- Derecho Mercantil
- Derecho Laboral
- Divorcios y Familia
- Bienes e Inmuebles
- Contratos y Documentos

If a published article contains an invalid primary practice area:

BUILD FAILURE.

If a published article is missing its required practice area:

BUILD FAILURE.

The build error must clearly identify:

- Markdown filename
- slug
- invalid/missing practice area

Do not silently assign an article to a category.

Do not silently drop the article.

Do not silently create a new category.

==================================================
SEO
==================================================

The category navigation must not interfere with the existing SEO implementation.

Preserve:

- page title
- meta description
- canonical
- Open Graph
- Twitter metadata
- Article JSON-LD
- article URLs
- prerendering
- existing blog SEO resolver

The /blog/ page must continue to have ONE canonical URL.

Do not generate category-specific SEO metadata.

Do not create duplicate title/meta tags.

Do not create indexable filtered states.

==================================================
ANALYTICS
==================================================

Do not modify existing conversion events:

- whatsapp_click
- phone_click
- email_click
- contact_cta_click

Do not add category-click analytics unless it is already supported by the existing analytics architecture and can be done without unnecessary complexity.

Do not create duplicate analytics events.

==================================================
ACCESSIBILITY
==================================================

The category navigation must:

- have an accessible label
- use appropriate semantic controls
- support keyboard interaction
- preserve visible focus
- expose the active category to assistive technologies
- not rely only on color to communicate active state
- work on mobile touch devices

Use buttons or equally appropriate semantic interactive elements.

==================================================
PERFORMANCE
==================================================

Keep the implementation lightweight.

Do NOT add:

- UI frameworks
- category libraries
- additional routing libraries
- unnecessary dependencies

Use the existing React/CSS architecture.

The feature must not compromise:

- prerendering
- mobile performance
- LCP
- CLS
- accessibility

Do not introduce unnecessary client-side JavaScript.

==================================================
BLOG TEMPLATE ARCHITECTURE
==================================================

Use the existing shared blog components and article inventory.

Do NOT create a second article data source.

Do NOT duplicate article metadata.

Do NOT create six separate article lists manually.

The architecture should be:

Published Markdown articles
→ shared article inventory
→ primary practice area
→ shared Blog index
→ category filter

==================================================
TESTING
==================================================

After implementation verify:

1. /blog/ loads correctly.
2. "Todos" shows all currently published articles.
3. Derecho Civil filters correctly.
4. Derecho Mercantil filters correctly.
5. Derecho Laboral filters correctly.
6. Divorcios y Familia filters correctly.
7. Bienes e Inmuebles filters correctly.
8. Contratos y Documentos filters correctly.
9. Selecting "Todos" restores all articles.
10. Existing article links remain unchanged.
11. Existing article content remains unchanged.
12. Existing article slugs remain unchanged.
13. No additional indexable category URLs are created.
14. The blog remains prerenderable.
15. The article list remains present in prerendered HTML.
16. Keyboard navigation works.
17. Mobile layout does not overflow.
18. No duplicate categories are generated.
19. Future Markdown articles with a valid official practice area will automatically appear in the correct category.
20. Invalid or missing practice areas fail the build clearly.

==================================================
BUILD
==================================================

Run:

pnpm build

Requirements:

- zero errors
- zero warnings
- blog index prerender succeeds
- existing published article prerendering remains intact
- sitemap remains valid
- robots.txt remains unchanged
- no missing imports

If the build fails:

Fix the actual cause.

Do not suppress errors.

Do not weaken frontmatter validation simply to make the build pass.

==================================================
FINAL REPORT
==================================================

Report:

A. Files changed
B. Dependencies changed
C. Existing article category field/source of truth
D. The six official practice areas implemented
E. Current five article assignments
F. How filtering works
G. Mobile behavior
H. Accessibility implementation
I. SEO impact
J. URL/indexing impact
K. Frontmatter validation behavior
L. Future Markdown article behavior
M. Build result
N. Tests performed
O. Any item intentionally NOT changed and why

==================================================
FINAL REQUIREMENTS
==================================================

The final blog structure must be:

BLOG

Todos
Derecho Civil
Derecho Mercantil
Derecho Laboral
Divorcios y Familia
Bienes e Inmuebles
Contratos y Documentos

These six practice areas are the permanent top-level blog organization.

Do NOT create additional top-level categories.

Do NOT create category pages yet.

Do NOT change public URLs.

Do NOT change article slugs.

Do NOT change article content.

Do NOT rewrite the five existing articles.

Do NOT hard-code the current five articles.

Do NOT change the GitHub Desktop → GitHub → Vercel workflow.

Do NOT add noindex.

Do NOT change indexing strategy.

The implementation must automatically support future Markdown articles by assigning each article to exactly one of the six official practice areas.

This is a clean blog-navigation enhancement, not a redesign.