import { Metadata } from "next"
import Link from "next/link"
import { getAllGuides } from "@/lib/mdx"
import { Card, CardBody } from "@/components/ui/Card"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Guías Fiscales y Laborales para España 2026",
  description: "Guías completas sobre autónomos, nóminas, IRPF, IVA y más. Escritas en español claro, actualizadas para 2026.",
  alternates: { canonical: `${SITE_URL}/guias` },
}

export default function GuiasPage() {
  const guias = getAllGuides("guias")

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">Guías</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Guías Fiscales y Laborales</h1>
        <p className="text-xl text-gray-500">
          Todo lo que necesitas saber sobre impuestos, nóminas y autónomos en España, explicado sin jerga.
        </p>
      </div>

      {guias.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-2xl mb-2">📚</p>
          <p>Las guías se están preparando. Vuelve pronto.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guias.map((g) => (
            <Link key={g.slug} href={`/guias/${g.slug}`} className="group">
              <Card hover className="h-full">
                <CardBody className="p-6">
                  <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {g.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{g.description}</p>
                  <p className="text-xs text-gray-400">
                    Actualizado: {new Date(g.dateModified).toLocaleDateString("es-ES", { year: "numeric", month: "long" })}
                  </p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
