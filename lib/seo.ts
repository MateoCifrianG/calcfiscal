import { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://calcfiscal.es"
const SITE_NAME = "CalcFiscal"
const SITE_DESCRIPTION =
  "Calculadoras fiscales y laborales para España. Calcula tu sueldo neto, IVA, IRPF, cuota de autónomos, finiquito y más. Gratis y sin registro."

type PageType = "tool" | "guide" | "article" | "page"

interface SeoParams {
  title: string
  description: string
  slug: string
  type?: PageType
  datePublished?: string
  dateModified?: string
  noIndex?: boolean
}

export function generateSeoMetadata({
  title,
  description,
  slug,
  noIndex = false,
}: SeoParams): Metadata {
  const url = `${SITE_URL}/${slug}`
  const fullTitle = `${title} | ${SITE_NAME}`

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og/default.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export function generateToolMetadata(params: {
  name: string
  description: string
  slug: string
}): Metadata {
  return generateSeoMetadata({
    title: params.name,
    description: params.description,
    slug: `herramientas/${params.slug}`,
    type: "tool",
  })
}

export function generateGuideMetadata(params: {
  title: string
  description: string
  slug: string
  datePublished?: string
  dateModified?: string
}): Metadata {
  return generateSeoMetadata({
    title: params.title,
    description: params.description,
    slug: `guias/${params.slug}`,
    type: "guide",
    datePublished: params.datePublished,
    dateModified: params.dateModified,
  })
}

export { SITE_URL, SITE_NAME, SITE_DESCRIPTION }
