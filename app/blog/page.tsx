import { Metadata } from "next"
import Link from "next/link"
import { getAllGuides } from "@/lib/mdx"
import { breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Blog Fiscal — Noticias y Consejos sobre Impuestos en España",
  description: "Artículos sobre fiscalidad, novedades fiscales 2026, consejos para autónomos y guías prácticas para pagar menos impuestos en España.",
  alternates: { canonical: `${SITE_URL}/blog` },
}

export default function BlogPage() {
  const posts = getAllGuides("blog")

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Blog", url: `${SITE_URL}/blog` }])) }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Blog</span>
        </nav>

        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Blog Fiscal</h1>
          <p className="text-xl text-gray-500 max-w-2xl">
            Artículos prácticos sobre impuestos, autónomos y novedades fiscales en España.
            Actualizados para 2026.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">✍️</p>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Próximamente</h2>
            <p className="text-gray-500 max-w-sm mx-auto">
              Estamos preparando artículos sobre novedades fiscales 2026, consejos para autónomos y mucho más.
            </p>
            <Link
              href="/guias"
              className="inline-block mt-6 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
            >
              Ver guías fiscales →
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all">
                  {(post as any).category && (
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                      {(post as any).category}
                    </span>
                  )}
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{new Date(post.datePublished).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
                    {(post as any).readingTime && <span>· {(post as any).readingTime} min</span>}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
