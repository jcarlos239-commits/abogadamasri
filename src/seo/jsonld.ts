// Pure JSON-LD schema builders — SSR-safe (no browser globals).
// Used by runtime (usePageSEO via page components) and vite.config.ts build pipeline.

import { BUSINESS_INFO } from './business'
import type { ResolvedArticleSEO } from '../blog/seoResolver'

const SITE = 'https://www.abogadamasri.com'
const OG_IMAGE = `${SITE}/og-image.jpg`

// ── Homepage ──────────────────────────────────────────────────────────────────

export function buildBusinessSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE}/#legal-practice`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    image: BUSINESS_INFO.image,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    areaServed: { '@type': 'Country', name: 'Venezuela' },
    address: {
      '@type': 'PostalAddress',
      ...BUSINESS_INFO.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.latitude,
      longitude: BUSINESS_INFO.longitude,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Legales',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Civil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Mercantil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Laboral' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Divorcios y Familia' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bienes Inmuebles' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contratos y Documentos' } },
      ],
    },
    provider: { '@id': `${SITE}/#marinela-masri` },
  }
}

export function buildPersonSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/#marinela-masri`,
    name: 'Marinela Masri',
    worksFor: { '@id': `${SITE}/#legal-practice` },
  }
}

// ── Service pages ─────────────────────────────────────────────────────────────

export function buildServiceSchema(
  slug: string,
  title: string,
  description: string,
): Record<string, unknown> {
  const url = `${SITE}${slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${url}#service`,
    name: `Abogada Marinela Masri — ${title}`,
    description,
    url,
    serviceType: title,
    image: OG_IMAGE,
    provider: { '@id': `${SITE}/#legal-practice` },
  }
}

// 3-item BreadcrumbList: Inicio → Servicios → Service
export function buildServiceBreadcrumbSchema(
  serviceLabel: string,
  serviceSlug: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio',    item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/servicios/` },
      { '@type': 'ListItem', position: 3, name: serviceLabel, item: `${SITE}${serviceSlug}` },
    ],
  }
}

// 4-item BreadcrumbList: Inicio → Servicios → Parent → Sub
export function buildSubServiceBreadcrumbSchema(
  parentLabel: string,
  parentSlug: string,
  subLabel: string,
  subSlug: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio',    item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/servicios/` },
      { '@type': 'ListItem', position: 3, name: parentLabel, item: `${SITE}${parentSlug}` },
      { '@type': 'ListItem', position: 4, name: subLabel,    item: `${SITE}${subSlug}` },
    ],
  }
}

// ── Servicios index ───────────────────────────────────────────────────────────

export function buildServiciosSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${SITE}/servicios/#service`,
    name: 'Abogada Marinela Masri — Servicios Jurídicos',
    description: 'Conoce los servicios legales de Marinela Masri en Caracas, con asesoría en derecho civil, mercantil, laboral, familia, inmuebles y contratos.',
    url: `${SITE}/servicios/`,
    image: OG_IMAGE,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servicios Legales',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Civil',                  url: `${SITE}/derecho-civil/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Mercantil',              url: `${SITE}/derecho-mercantil/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho Laboral',                url: `${SITE}/derecho-laboral/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Derecho de Familia y Divorcios', url: `${SITE}/derecho-familia-divorcios/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bienes Inmuebles',               url: `${SITE}/bienes-inmuebles/` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contratos y Documentos',         url: `${SITE}/contratos-documentos/` } },
      ],
    },
    provider: { '@id': `${SITE}/#legal-practice` },
  }
}

export function buildServiciosBreadcrumbSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio',    item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${SITE}/servicios/` },
    ],
  }
}

// ── Blog index ────────────────────────────────────────────────────────────────

export function buildBlogIndexSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Jurídico — Marinela Masri',
    description: 'Blog jurídico con información, orientación y actualidad legal relevante para Venezuela. Derecho civil, mercantil, laboral, familia y más.',
    url: `${SITE}/blog/`,
    publisher: { '@id': `${SITE}/#marinela-masri` },
  }
}

export function buildBlogBreadcrumbSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog',   item: `${SITE}/blog/` },
    ],
  }
}

// ── Sobre Marinela Masri ──────────────────────────────────────────────────────

export function buildSobrePersonSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE}/#marinela-masri`,
    name: 'Marinela Masri',
    jobTitle: 'Abogada',
    description: 'Conoce a Marinela Masri, abogada en Caracas con más de 25 años de trayectoria jurídica y experiencia en diversas áreas del derecho.',
    url: `${SITE}/sobre-marinela-masri/`,
    image: OG_IMAGE,
    worksFor: { '@id': `${SITE}/#legal-practice` },
    knowsAbout: [
      'Derecho Civil',
      'Derecho Laboral',
      'Derecho Mercantil',
      'Derecho de Familia',
      'Bienes Inmuebles',
      'Contratos',
    ],
  }
}

export function buildSobreBreadcrumbSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio',              item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Sobre Marinela Masri', item: `${SITE}/sobre-marinela-masri/` },
    ],
  }
}

// ── Blog article pages ────────────────────────────────────────────────────────

export function buildArticleSchema(
  seo: ResolvedArticleSEO,
  rawTitle: string,
  author: string,
  category?: string | null,
  keywords?: string | null,
  imageWidth = 1200,
  imageHeight = 630,
): Record<string, unknown> {
  const obj: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: rawTitle,
    description: seo.metaDescription,
    url: seo.canonical,
    mainEntityOfPage: { '@type': 'WebPage', '@id': seo.canonical },
    datePublished: seo.publishedTime,
    dateModified: seo.dateModified,
    image: {
      '@type': 'ImageObject',
      url: seo.ogImage,
      width: imageWidth,
      height: imageHeight,
    },
    author: {
      '@type': 'Person',
      '@id': `${SITE}/#marinela-masri`,
      name: author,
    },
    publisher: {
      '@type': 'LegalService',
      '@id': `${SITE}/#legal-practice`,
      name: 'Abogada Marinela Masri',
      url: SITE,
    },
    inLanguage: 'es',
  }
  if (category) obj.articleSection = category
  if (keywords) obj.keywords = keywords
  return obj
}

export function buildArticleBreadcrumbSchema(
  rawTitle: string,
  articleUrl: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog',   item: `${SITE}/blog/` },
      { '@type': 'ListItem', position: 3, name: rawTitle, item: articleUrl },
    ],
  }
}
