import { notFound } from "next/navigation"
import { Metadata } from "next"
import { getAllSlugs, getGuideBySlug } from "@/lib/mdx"
import { BlogLayout } from "@/components/content/BlogLayout"
import { articleSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getGuideBySlug(slug, "blog")
  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getGuideBySlug(slug, "blog")
  if (!post) notFound()

  const url = `${SITE_URL}/blog/${slug}`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: post.title, description: post.description, url, datePublished: post.datePublished, dateModified: post.dateModified })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }, { name: post.title, url }])) }} />

      <BlogLayout
        title={post.title}
        description={post.description}
        datePublished={post.datePublished}
        dateModified={post.dateModified}
        author={post.author}
        category={post.category}
        readingTime={post.readingTime}
        relatedTools={post.relatedTools}
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </BlogLayout>
    </>
  )
}
