import Link from "next/link"
import { Card, CardBody } from "@/components/ui/Card"

interface BlogLayoutProps {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  category?: string
  readingTime?: number
  relatedTools?: string[]
  children: React.ReactNode
}

const TOOL_MAP: Record<string, { title: string; emoji: string; href: string }> = {
  "calculadora-iva": { title: "Calculadora IVA", emoji: "📊", href: "/herramientas/calculadora-iva" },
  "calculadora-sueldo-neto": { title: "Calculadora Sueldo Neto", emoji: "💼", href: "/herramientas/calculadora-sueldo-neto" },
  "calculadora-cuota-autonomos": { title: "Cuota Autónomos 2026", emoji: "🧾", href: "/herramientas/calculadora-cuota-autonomos" },
  "calculadora-irpf-autonomos": { title: "IRPF Autónomos", emoji: "📈", href: "/herramientas/calculadora-irpf-autonomos" },
  "calculadora-finiquito": { title: "Calculadora Finiquito", emoji: "📋", href: "/herramientas/calculadora-finiquito" },
  "calculadora-paro": { title: "Calculadora Paro", emoji: "📉", href: "/herramientas/calculadora-paro" },
  "calculadora-hipoteca": { title: "Calculadora Hipoteca", emoji: "🏠", href: "/herramientas/calculadora-hipoteca" },
}

export function BlogLayout({
  title,
  description,
  datePublished,
  dateModified,
  author,
  category,
  readingTime,
  relatedTools = [],
  children,
}: BlogLayoutProps) {
  const resolvedTools = relatedTools
    .map((slug) => TOOL_MAP[slug] ?? null)
    .filter(Boolean) as { title: string; emoji: string; href: string }[]

  const pubDate = new Date(datePublished).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const modDate = new Date(dateModified).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        {category && (
          <>
            <span>/</span>
            <span className="text-gray-700">{category}</span>
          </>
        )}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Artículo principal */}
        <article className="lg:col-span-3">
          {category && (
            <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full mb-4">
              {category}
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Metadata bar */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <span>✍️ {author}</span>
            <span>📅 {pubDate}</span>
            {dateModified !== datePublished && <span>🔄 Actualizado: {modDate}</span>}
            {readingTime && <span>⏱️ {readingTime} min de lectura</span>}
          </div>

          {/* Disclaimer fiscal */}
          <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 mb-8">
            <span className="shrink-0">⚠️</span>
            <p>Este artículo es informativo y se actualiza anualmente. Para decisiones fiscales o legales concretas, consulta con un asesor autorizado.</p>
          </div>

          {/* Contenido */}
          <div className="prose max-w-none">{children}</div>

          {/* Footer del artículo */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Publicado el {pubDate} · Última actualización: {modDate} · {author}
            </p>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          {resolvedTools.length > 0 && (
            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  Calcula el tuyo
                </h3>
                <ul className="space-y-2">
                  {resolvedTools.map((tool) => (
                    <li key={tool.href}>
                      <Link
                        href={tool.href}
                        className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        <span>{tool.emoji}</span>
                        <span>{tool.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          <Card>
            <CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Más artículos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/blog" className="text-blue-600 hover:underline">→ Ver todos los artículos</Link></li>
                <li><Link href="/guias" className="text-blue-600 hover:underline">→ Ver guías fiscales</Link></li>
                <li><Link href="/herramientas" className="text-blue-600 hover:underline">→ Ver calculadoras</Link></li>
              </ul>
            </CardBody>
          </Card>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-xs text-blue-800 font-medium mb-1">¿Te ha sido útil?</p>
            <p className="text-xs text-blue-700">
              Comparte el artículo o usa nuestras{" "}
              <Link href="/herramientas" className="underline">calculadoras gratuitas</Link>{" "}
              para aplicar lo que has aprendido.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
