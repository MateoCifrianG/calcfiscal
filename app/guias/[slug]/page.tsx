import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getAllSlugs, getGuideBySlug } from "@/lib/mdx"
import { GuideLayout } from "@/components/content/GuideLayout"
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs("guias").map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuideBySlug(slug, "guias")
  if (!guide) return {}

  return {
    title: guide.title,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: `${SITE_URL}/guias/${slug}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const guide = getGuideBySlug(slug, "guias")
  if (!guide) notFound()

  const url = `${SITE_URL}/guias/${slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: guide.title, description: guide.description, url, datePublished: guide.datePublished, dateModified: guide.dateModified })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Guías", url: `${SITE_URL}/guias` }, { name: guide.title, url }])) }} />

      <GuideLayout
        title={guide.title}
        description={guide.description}
        datePublished={guide.datePublished}
        dateModified={guide.dateModified}
        author={guide.author}
        breadcrumb={[{ name: "Guías", href: "/guias" }]}
        relatedTools={guide.relatedTools}
        relatedGuides={guide.relatedGuides}
      >
        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
      </GuideLayout>
    </>
  )
}
