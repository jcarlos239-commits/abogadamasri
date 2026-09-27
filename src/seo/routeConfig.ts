import { BUSINESS_INFO } from './business'
import {
  buildBusinessSchema,
  buildPersonSchema,
  buildServiceSchema,
  buildServiceBreadcrumbSchema,
  buildSubServiceBreadcrumbSchema,
  buildServiciosSchema,
  buildServiciosBreadcrumbSchema,
  buildBlogIndexSchema,
  buildBlogBreadcrumbSchema,
  buildSobrePersonSchema,
  buildSobreBreadcrumbSchema,
} from './jsonld'

const SITE = 'https://www.abogadamasri.com'
const OG_IMAGE = `${SITE}/og-image.jpg`

export interface RouteSEO {
  title: string
  description: string
  path: string
  canonical: string
  ogType: 'website' | 'article'
  ogImage: string
  ogImageAlt: string
  robots: string
  author: string
  jsonLd: object[] | null
}

// Internal representation without the derived `canonical` field.
type RouteEntry = Omit<RouteSEO, 'canonical'>

const ROUTE_MAP: Record<string, RouteEntry> = {

  // ── Static pages ─────────────────────────────────────────────────────────────

  '/': {
    title: 'Abogados en Caracas | Marinela Masri | Asesoría Legal',
    description: BUSINESS_INFO.description,
    path: '/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Asesoría Legal en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [buildBusinessSchema(), buildPersonSchema()],
  },
  '/servicios/': {
    title: 'Servicios Legales en Caracas | Marinela Masri',
    description: 'Conoce los servicios legales de Marinela Masri en Caracas, con asesoría en derecho civil, mercantil, laboral, familia, inmuebles y contratos.',
    path: '/servicios/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Servicios Jurídicos en Caracas, Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [buildServiciosSchema(), buildServiciosBreadcrumbSchema()],
  },
  '/blog/': {
    title: 'Blog Jurídico en Venezuela | Marinela Masri',
    description: 'Blog jurídico con información, orientación y actualidad legal relevante para Venezuela. Derecho civil, mercantil, laboral, familia y más.',
    path: '/blog/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Blog Jurídico — Marinela Masri',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [buildBlogIndexSchema(), buildBlogBreadcrumbSchema()],
  },
  '/sobre-marinela-masri/': {
    title: 'Abogada en Caracas | Marinela Masri | Trayectoria Jurídica',
    description: 'Conoce a Marinela Masri, abogada en Caracas con más de 25 años de trayectoria jurídica y experiencia en diversas áreas del derecho.',
    path: '/sobre-marinela-masri/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Más de 25 Años de Experiencia Legal en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [buildSobrePersonSchema(), buildSobreBreadcrumbSchema()],
  },

  // ── Service pages ─────────────────────────────────────────────────────────────

  '/derecho-civil/': {
    title: 'Abogado de Derecho Civil en Caracas | Marinela Masri',
    description: 'Abogado civil en Caracas, Venezuela. Marinela Masri ofrece asesoría legal en asuntos de derecho civil, obligaciones, sucesiones y herencias.',
    path: '/derecho-civil/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Derecho Civil en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-civil/', 'Derecho Civil', 'Abogado civil en Caracas, Venezuela. Marinela Masri ofrece asesoría legal en asuntos de derecho civil, obligaciones, sucesiones y herencias.'),
      buildServiceBreadcrumbSchema('Derecho Civil', '/derecho-civil/'),
    ],
  },
  '/derecho-mercantil/': {
    title: 'Abogado Mercantil en Caracas | Marinela Masri',
    description: 'Abogado mercantil en Caracas, Venezuela. Asesoría y representación legal para empresas, sociedades mercantiles, contratos y asuntos de derecho comercial.',
    path: '/derecho-mercantil/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Derecho Mercantil en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-mercantil/', 'Derecho Mercantil', 'Abogado mercantil en Caracas, Venezuela. Asesoría y representación legal para empresas, sociedades mercantiles, contratos y asuntos de derecho comercial.'),
      buildServiceBreadcrumbSchema('Derecho Mercantil', '/derecho-mercantil/'),
    ],
  },
  '/derecho-laboral/': {
    title: 'Abogada Laboral para Empresas y Empleadores en Caracas | Marinela Masri',
    description: 'Asesoría y representación laboral para empresas y empleadores en Venezuela. Prevención de conflictos, contratos, cumplimiento laboral y defensa ante procedimientos y controversias laborales.',
    path: '/derecho-laboral/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Derecho Laboral en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-laboral/', 'Derecho Laboral', 'Asesoría y representación laboral para empresas y empleadores en Venezuela. Prevención de conflictos, contratos, cumplimiento laboral y defensa ante procedimientos y controversias laborales.'),
      buildServiceBreadcrumbSchema('Derecho Laboral', '/derecho-laboral/'),
    ],
  },
  '/derecho-familia-divorcios/': {
    title: 'Abogado de Familia y Divorcios en Caracas | Marinela Masri',
    description: 'Abogado de familia en Caracas, Venezuela. Asesoría legal en divorcios, custodia, LOPNNA, patria potestad y otros asuntos de derecho de familia.',
    path: '/derecho-familia-divorcios/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Familia y Divorcios en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-familia-divorcios/', 'Divorcios y Familia', 'Abogado de familia en Caracas, Venezuela. Asesoría legal en divorcios, custodia, LOPNNA, patria potestad y otros asuntos de derecho de familia.'),
      buildServiceBreadcrumbSchema('Divorcios y Familia', '/derecho-familia-divorcios/'),
    ],
  },
  '/bienes-inmuebles/': {
    title: 'Abogado Inmobiliario en Caracas | Marinela Masri',
    description: 'Abogado inmobiliario en Caracas, Venezuela. Asesoría legal en compraventa, arrendamientos, documentos, propiedad y otros asuntos de bienes inmuebles.',
    path: '/bienes-inmuebles/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Bienes Inmuebles en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/bienes-inmuebles/', 'Bienes Inmuebles', 'Abogado inmobiliario en Caracas, Venezuela. Asesoría legal en compraventa, arrendamientos, documentos, propiedad y otros asuntos de bienes inmuebles.'),
      buildServiceBreadcrumbSchema('Bienes Inmuebles', '/bienes-inmuebles/'),
    ],
  },
  '/contratos-documentos/': {
    title: 'Abogado de Contratos en Caracas | Marinela Masri',
    description: 'Abogado de contratos en Caracas, Venezuela. Asesoría y redacción de contratos, documentos legales, poderes notariales y otros trámites jurídicos.',
    path: '/contratos-documentos/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Contratos y Documentos en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/contratos-documentos/', 'Contratos y Documentos', 'Abogado de contratos en Caracas, Venezuela. Asesoría y redacción de contratos, documentos legales, poderes notariales y otros trámites jurídicos.'),
      buildServiceBreadcrumbSchema('Contratos y Documentos', '/contratos-documentos/'),
    ],
  },

  // ── Sub-service pages ─────────────────────────────────────────────────────────

  '/derecho-civil/herencias-sucesiones/': {
    title: 'Abogado de Herencias y Sucesiones en Caracas | Marinela Masri',
    description: 'Abogado de herencias y sucesiones en Caracas, Venezuela. Asesoría legal en declaraciones sucesorales, herencias, testamentos y particiones.',
    path: '/derecho-civil/herencias-sucesiones/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Herencias y Sucesiones en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-civil/herencias-sucesiones/', 'Herencias y Sucesiones', 'Abogado de herencias y sucesiones en Caracas, Venezuela. Asesoría legal en declaraciones sucesorales, herencias, testamentos y particiones.'),
      buildSubServiceBreadcrumbSchema('Derecho Civil', '/derecho-civil/', 'Herencias y Sucesiones', '/derecho-civil/herencias-sucesiones/'),
    ],
  },
  '/derecho-familia-divorcios/divorcio/': {
    title: 'Abogado de Divorcio en Venezuela | Marinela Masri',
    description: 'Abogado de divorcio en Venezuela. Marinela Masri ofrece asesoría y representación legal en procesos de divorcio y asuntos relacionados con la separación.',
    path: '/derecho-familia-divorcios/divorcio/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Divorcio en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-familia-divorcios/divorcio/', 'Divorcio en Venezuela', 'Abogado de divorcio en Venezuela. Marinela Masri ofrece asesoría y representación legal en procesos de divorcio y asuntos relacionados con la separación.'),
      buildSubServiceBreadcrumbSchema('Divorcios y Familia', '/derecho-familia-divorcios/', 'Divorcio en Venezuela', '/derecho-familia-divorcios/divorcio/'),
    ],
  },
  '/derecho-familia-divorcios/custodia-lopnna/': {
    title: 'Abogado de Custodia y LOPNNA en Caracas | Marinela Masri',
    description: 'Abogado de custodia y LOPNNA en Caracas, Venezuela. Asesoría legal sobre guarda y custodia, patria potestad y régimen de convivencia familiar.',
    path: '/derecho-familia-divorcios/custodia-lopnna/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Custodia y LOPNNA en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-familia-divorcios/custodia-lopnna/', 'Custodia y LOPNNA', 'Abogado de custodia y LOPNNA en Caracas, Venezuela. Asesoría legal sobre guarda y custodia, patria potestad y régimen de convivencia familiar.'),
      buildSubServiceBreadcrumbSchema('Divorcios y Familia', '/derecho-familia-divorcios/', 'Custodia y LOPNNA', '/derecho-familia-divorcios/custodia-lopnna/'),
    ],
  },
  '/contratos-documentos/poder-notarial/': {
    title: 'Abogado de Poder Notarial en Venezuela | Marinela Masri',
    description: 'Abogado de poder notarial en Venezuela. Asesoría para la elaboración y formalización de poderes, documentos notariales y representación legal.',
    path: '/contratos-documentos/poder-notarial/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Poderes Notariales en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/contratos-documentos/poder-notarial/', 'Poderes Notariales', 'Abogado de poder notarial en Venezuela. Asesoría para la elaboración y formalización de poderes, documentos notariales y representación legal.'),
      buildSubServiceBreadcrumbSchema('Contratos y Documentos', '/contratos-documentos/', 'Poderes Notariales', '/contratos-documentos/poder-notarial/'),
    ],
  },
  '/bienes-inmuebles/condominios/': {
    title: 'Abogado para Condominios en Venezuela | Marinela Masri',
    description: 'Abogado para condominios en Venezuela. Asesoría a juntas de condominio y propietarios en cobro de cuotas, conflictos, asambleas y gestión legal.',
    path: '/bienes-inmuebles/condominios/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Condominios en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/bienes-inmuebles/condominios/', 'Condominios', 'Abogado para condominios en Venezuela. Asesoría a juntas de condominio y propietarios en cobro de cuotas, conflictos, asambleas y gestión legal.'),
      buildSubServiceBreadcrumbSchema('Bienes Inmuebles', '/bienes-inmuebles/', 'Condominios', '/bienes-inmuebles/condominios/'),
    ],
  },
  '/derecho-civil/legalizacion-apostilla/': {
    title: 'Legalización y Apostilla en Venezuela | Marinela Masri',
    description: 'Legalización y apostilla de documentos en Venezuela. Asesoría y gestión de documentos civiles, académicos, notariales y emitidos por SAREN.',
    path: '/derecho-civil/legalizacion-apostilla/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Legalización y Apostilla en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-civil/legalizacion-apostilla/', 'Legalización y Apostilla', 'Legalización y apostilla de documentos en Venezuela. Asesoría y gestión de documentos civiles, académicos, notariales y emitidos por SAREN.'),
      buildSubServiceBreadcrumbSchema('Derecho Civil', '/derecho-civil/', 'Legalización y Apostilla', '/derecho-civil/legalizacion-apostilla/'),
    ],
  },
  '/derecho-mercantil/registro-mercantil/': {
    title: 'Registro Mercantil para Empresas | Marinela Masri',
    description: 'Registro Mercantil para empresas en Venezuela. Asesoría legal en constitución de sociedades, actas de asamblea, actualización y trámites ante SAREN.',
    path: '/derecho-mercantil/registro-mercantil/',
    ogType: 'website',
    ogImage: OG_IMAGE,
    ogImageAlt: 'Abogada Marinela Masri — Registro Mercantil en Venezuela',
    robots: 'index, follow',
    author: 'Marinela Masri',
    jsonLd: [
      buildServiceSchema('/derecho-mercantil/registro-mercantil/', 'Registro Mercantil', 'Registro Mercantil para empresas en Venezuela. Asesoría legal en constitución de sociedades, actas de asamblea, actualización y trámites ante SAREN.'),
      buildSubServiceBreadcrumbSchema('Derecho Mercantil', '/derecho-mercantil/', 'Registro Mercantil', '/derecho-mercantil/registro-mercantil/'),
    ],
  },
}

/**
 * Returns the authoritative SEO metadata for any static (non-article) route.
 * Returns null for unknown routes and blog article routes (/blog/[slug]/).
 * Safe to call from Node.js (vite.config.ts), SSR, and browser — no browser globals used.
 */
export function resolveStaticRouteSEO(urlPath: string): RouteSEO | null {
  const normalizedPath = urlPath.endsWith('/') ? urlPath : `${urlPath}/`
  const entry = ROUTE_MAP[normalizedPath]
  if (!entry) return null
  return { ...entry, canonical: `${SITE}${entry.path}` }
}
