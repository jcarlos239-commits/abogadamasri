Run a complete final SEO and technical audit of the current project after the latest implementation. Do not make any changes yet. Audit the actual current code/files and report the results.

Check ALL of the following:

1. META TITLES
Verify every page has the intended unique SEO title and that there are no duplicates, truncations, unnecessary abbreviations, or incorrect “Abogado/Abogada” wording.

2. META DESCRIPTIONS
Verify every page has the intended meta description, is unique, appropriately optimized, and does not contain outdated or inconsistent wording.

3. H1
Verify every page has exactly one H1 and that each H1 matches its intended SEO target.

4. CANONICAL URLS
Verify every page has the correct canonical URL and that there are no conflicting canonical URLs, especially for nested specialized pages.

5. JSON-LD / STRUCTURED DATA
Audit all JSON-LD across the site.
Check for:
- Valid JSON-LD
- Correct page descriptions
- Correct URLs
- Correct names
- No outdated descriptions
- No duplicate or conflicting schema
- No FAQPage JSON-LD anywhere
- No fabricated claims
Report any problems but do not modify them.

6. INTERNAL LINKING
Verify these exact relationships:

Bienes Inmuebles
→ Condominios

Derecho Civil
→ Legalización y Apostilla

Contratos y Documentos
→ Legalización y Apostilla

Derecho Mercantil
→ Registro Mercantil para Empresas

Verify that Legalización y Apostilla uses ONE canonical URL and is not duplicated.

Also verify that existing specialized pages remain correctly linked:
- Herencias y Sucesiones
- Divorcio
- Custodia y LOPNNA
- Poder Notarial

7. ROUTES
Audit every route in App.tsx and verify that every route resolves correctly.

Check both trailing-slash and non-trailing-slash versions where applicable.

Pay particular attention to:
- /bienes-inmuebles/condominios/
- /derecho-civil/legalizacion-apostilla/
- /derecho-mercantil/registro-mercantil/
- /blog/

8. HTML ENTRY FILES
There should now be 17 HTML entry files.

Verify that all 17 are intentional, correctly configured, and correspond to actual pages/routes.

Report:
- Any missing pages
- Any duplicate pages
- Any orphan HTML files
- Any HTML file with incorrect metadata
- Any HTML file that does not correspond correctly to its route

9. SITEMAP
Check the current sitemap.xml.

Verify that:
- All intended indexable pages are included
- The 3 new specialized pages are included
- /blog/ is included
- No duplicate URLs exist
- No nonexistent URLs exist
- No unwanted URLs are included
- Canonical URLs and sitemap URLs agree

10. ROBOTS.TXT
Verify robots.txt is valid and does not accidentally block any important page, especially the new service pages and Blog.

11. FAQ REMOVAL
Confirm that FAQ sections and FAQPage JSON-LD remain completely removed from the service/sub-service pages.

Do not reintroduce FAQ content.

12. BLOG
Audit the new Blog implementation.

Verify:
- /blog/ works
- Blog has one H1
- Blog has correct title
- Blog has correct meta description
- Blog has canonical URL
- Blog is linked from the navigation
- Contacto was actually replaced by Blog
- Contact information was not unnecessarily deleted elsewhere
- Blog structure supports future individual article URLs
- Placeholder cards are clearly placeholders and are not presented as real published articles
- No duplicate Blog URLs exist

13. SEO BLUEPRINT ALIGNMENT
Compare the actual implementation against our agreed SEO blueprint.

Verify the following:

CONDOMINIOS
Title:
“Abogado para Condominios en Venezuela | Marinela Masri”

H1:
“Abogado para Condominios en Venezuela”

Primary keyword:
“abogado para condominios en Venezuela”

LEGALIZACIÓN Y APOSTILLA
Title:
“Legalización y Apostilla en Venezuela | Marinela Masri”

H1:
“Legalización y Apostilla de Documentos en Venezuela”

Primary keyword:
“legalización y apostilla de documentos en Venezuela”

REGISTRO MERCANTIL
Title:
“Registro Mercantil para Empresas | Marinela Masri”

H1:
“Registro Mercantil para Empresas en Venezuela”

Primary keyword:
“registro mercantil para empresas”

14. SECONDARY KEYWORDS
Verify that the agreed secondary keywords for each of the three new pages are incorporated naturally into the page content where appropriate.

Do NOT recommend keyword stuffing.

15. CONTENT STRUCTURE
Verify each of the three new specialized pages contains:

- H1
- Brief introductory description
- “Servicios que incluye esta área”
- Service list
- Supporting explanatory content
- CTA

Verify that the content is professionally written and does not make unsupported legal claims.

16. PAGE RELATIONSHIPS
Verify that the new specialized pages are treated as sub-specialties rather than replacing or competing unnecessarily with their parent practice-area pages.

17. TECHNICAL SEO
Check:
- indexability
- status codes
- canonicalization
- crawlable links
- title tags
- meta descriptions
- H1 structure
- image alt attributes
- viewport
- lang attribute
- Open Graph metadata
- Twitter/social metadata if implemented
- robots.txt
- sitemap.xml

18. DUPLICATION
Search the entire project for:
- duplicate meta titles
- duplicate meta descriptions
- duplicate H1s where they should be unique
- duplicate canonical URLs
- old SEO descriptions
- old titles
- “Experta”
- outdated “abogada” wording where we intentionally changed to “abogado”
- FAQ content
- FAQPage schema
- obsolete Contacto navigation references

19. BUILD
Run the production build.

Report:
- errors
- warnings
- route failures
- broken imports
- broken assets
- generated HTML count

20. LIGHTHOUSE/PERFORMANCE REGRESSION
Do a code-level audit for potential performance regressions introduced by the new pages.

Pay particular attention to:
- unnecessary JavaScript
- duplicated code
- large images
- loading of images
- LCP image handling
- lazy loading
- fonts
- third-party scripts
- Google Maps
- Google Tag Manager
- unnecessary resources

Do NOT optimize unrelated things yet. Only report potential regressions introduced by these latest changes.

FINAL OUTPUT:

Do NOT modify any files.

Give me a structured audit report with:

A. PASS — everything correct
B. WARNINGS — things that are not necessarily errors but should be reviewed
C. ERRORS — things that should be fixed
D. MISSING — anything we intended to implement but is absent
E. DUPLICATES — anything duplicated unnecessarily
F. RECOMMENDED FIXES — prioritized from highest SEO/technical importance to lowest

For every problem, identify the exact file, route, component, or metadata involved whenever possible.

Do not make assumptions. Inspect the actual current project before reporting.