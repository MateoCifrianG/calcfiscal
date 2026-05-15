import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface GuideMetadata {
  title: string
  description: string
  slug: string
  datePublished: string
  dateModified: string
  author: string
  keywords: string[]
  relatedTools?: string[]
}

export interface Guide extends GuideMetadata {
  content: string
}

const GUIDES_DIR = path.join(process.cwd(), "content/guias")
const BLOG_DIR = path.join(process.cwd(), "content/blog")

function getDir(type: "guias" | "blog") {
  return type === "guias" ? GUIDES_DIR : BLOG_DIR
}

export function getAllSlugs(type: "guias" | "blog" = "guias"): string[] {
  const dir = getDir(type)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.(mdx|md)$/, ""))
}

export function getGuideBySlug(slug: string, type: "guias" | "blog" = "guias"): Guide | null {
  const dir = getDir(type)
  const mdxPath = path.join(dir, `${slug}.mdx`)
  const mdPath = path.join(dir, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null

  if (!filePath) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    title: data.title || "",
    description: data.description || "",
    slug,
    datePublished: data.datePublished || "",
    dateModified: data.dateModified || "",
    author: data.author || "Equipo CalcFiscal",
    keywords: data.keywords || [],
    relatedTools: data.relatedTools || [],
    content,
  }
}

export function getAllGuides(type: "guias" | "blog" = "guias"): GuideMetadata[] {
  return getAllSlugs(type)
    .map((slug) => getGuideBySlug(slug, type))
    .filter(Boolean)
    .map(({ content, ...meta }) => meta) as GuideMetadata[]
}
