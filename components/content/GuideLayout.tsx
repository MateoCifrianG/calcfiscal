import Link from "next/link"
import { Card, CardBody } from "@/components/ui/Card"

interface RelatedTool {
  href: string
  title: string
  emoji: string
}

interface GuideLayoutProps {
  title: string
  description: string
  datePublished: string
  dateModified: string
  author: string
  breadcrumb: { name: string; href: string }[]
  relatedTools?: string[]
  relatedGuides?: string[]
  children: React.ReactNode
}

const TOOL_MAP: Record<string, { title: string; emoji: string }> = {
  "calculadora-iva": { title: "Calculadora IVA", emoji: "📊" },
  "calculadora-sueldo-neto": { title: "Calculadora Sueldo Neto", emoji: "💼" },
  "calculadora-cuota-autonomos": { title: "Cuota Autónomos 2026", emoji: "🧾" },
  "calculadora-irpf-autonomos": { title: "IRPF Autónomos", emoji: "📈" },
  "calculadora-finiquito": { title: "Calculadora Finiquito", emoji: "📋" },
  "calculadora-paro": { title: "Calculadora Paro", emoji: "📉" },
  "calculadora-hipoteca": { title: "Calculadora Hipoteca", emoji: "🏠" },
}

const GUIDE_MAP: Record<string, { title: string }> = {
  "cuota-autonomos-2026": { title: "Cuota autónomos 2026" },
  "como-calcular-sueldo-neto": { title: "Cómo calcular el sueldo neto" },
  "como-darse-de-alta-autonomo": { title: "Alta como autónomo" },
  "gastos-deducibles-autonomos": { title: "Gastos deducibles autónomos" },
  "como-calcular-finiquito": { title: "Cómo calcular el finiquito" },
  "como-calcular-prestacion-paro": { title: "Cómo calcular la prestación por paro" },
  "declaracion-renta-2026": { title: "Declaración de la Renta 2026" },
  "modelo-303-iva-autonomos": { title: "Modelo 303 IVA autónomos" },
  "como-calcular-hipoteca": { title: "Cómo calcular una hipoteca" },
  "irpf-autonomos-2026": { title: "IRPF para autónomos 2026" },
  "tabla-irpf-2026": { title: "Tabla IRPF 2026" },
  "indemnizacion-despido-españa": { title: "Indemnización por despido" },
  "como-hacer-factura-autonomo": { title: "Cómo hacer una factura como autónomo" },
  "tipos-contrato-trabajo-españa": { title: "Tipos de contrato de trabajo en España" },
}

export function GuideLayout({
  title,
  description,
  datePublished,
  dateModified,
  author,
  breadcrumb,
  relatedTools = [],
  relatedGuides = [],
  children,
}: GuideLayoutProps) {
  const resolvedTools = relatedTools
    .map((slug) => TOOL_MAP[slug] ? { href: `/herramientas/${slug}`, ...TOOL_MAP[slug] } : null)
    .filter(Boolean) as RelatedTool[]

  const resolvedGuides = relatedGuides
    .map((slug) => GUIDE_MAP[slug] ? { href: `/guias/${slug}`, title: GUIDE_MAP[slug].title } : null)
    .filter(Boolean) as { href: string; title: string }[]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        {breadcrumb.map((item) => (
          <>
            <span key={`sep-${item.href}`}>/</span>
            <Link key={item.href} href={item.href} className="hover:text-blue-600">{item.name}</Link>
          </>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Contenido principal */}
        <article className="lg:col-span-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">{description}</p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-8 pb-6 border-b border-gray-100">
            <span>✍️ {author}</span>
            <span>📅 Publicado: {new Date(datePublished).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>🔄 Actualizado: {new Date(dateModified).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>

          {/* Disclaimer fiscal */}
          <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800 mb-8">
            <span className="shrink-0">⚠️</span>
            <p>La información de esta guía es orientativa y se actualiza anualmente. Para decisiones fiscales o legales concretas, consulta con un asesor o gestor autorizado.</p>
          </div>

          {/* Contenido MDX */}
          <div className="prose max-w-none">{children}</div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          {resolvedTools.length > 0 && (
            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  Herramientas relacionadas
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

          {resolvedGuides.length > 0 && (
            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Guías relacionadas</h3>
                <ul className="space-y-2 text-sm">
                  {resolvedGuides.map((guide) => (
                    <li key={guide.href}>
                      <Link href={guide.href} className="text-blue-600 hover:underline">→ {guide.title}</Link>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          )}

          <Card>
            <CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Más guías</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guias" className="text-blue-600 hover:underline">→ Ver todas las guías</Link></li>
                <li><Link href="/herramientas" className="text-blue-600 hover:underline">→ Ver calculadoras</Link></li>
              </ul>
            </CardBody>
          </Card>
        </aside>
      </div>
    </div>
  )
}
