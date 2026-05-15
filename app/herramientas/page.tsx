import { Metadata } from "next"
import Link from "next/link"
import { Card, CardBody } from "@/components/ui/Card"
import { breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Herramientas y Calculadoras Fiscales para España 2026",
  description: "Catálogo completo de calculadoras fiscales y laborales para España. Sueldo neto, IVA, IRPF, cuota autónomos, finiquito y más. Gratis y actualizadas.",
  alternates: { canonical: `${SITE_URL}/herramientas` },
}

const HERRAMIENTAS = [
  {
    categoria: "Laboral y Nóminas",
    emoji: "💼",
    items: [
      { emoji: "💼", title: "Calculadora Sueldo Neto", desc: "De bruto a neto en segundos. IRPF y Seguridad Social 2026.", href: "/herramientas/calculadora-sueldo-neto", badge: "Más usada" },
      { emoji: "📋", title: "Calculadora Finiquito", desc: "Calcula la indemnización y partes proporcionales.", href: "/herramientas/calculadora-finiquito", badge: null },
    ],
  },
  {
    categoria: "IVA y Fiscalidad General",
    emoji: "📊",
    items: [
      { emoji: "📊", title: "Calculadora IVA", desc: "Añade o quita IVA al instante. Tipos 21%, 10%, 4%.", href: "/herramientas/calculadora-iva", badge: "Popular" },
    ],
  },
  {
    categoria: "Autónomos y Freelancers",
    emoji: "🧾",
    items: [
      { emoji: "🧾", title: "Cuota de Autónomos 2026", desc: "Calcula tu cuota según los tramos de rendimientos.", href: "/herramientas/calculadora-cuota-autonomos", badge: "Actualizada" },
      { emoji: "📈", title: "IRPF Autónomos", desc: "Estima tu IRPF anual y el pago fraccionado trimestral.", href: "/herramientas/calculadora-irpf-autonomos", badge: null },
      { emoji: "💡", title: "Ingresos Netos Autónomo", desc: "Cuánto te queda realmente después de todos los impuestos.", href: "/herramientas/calculadora-ingresos-netos", badge: "Próximamente" },
      { emoji: "⏱️", title: "Precio por Hora Freelance", desc: "Calcula la tarifa mínima para ser rentable.", href: "/herramientas/calculadora-precio-hora", badge: "Próximamente" },
    ],
  },
  {
    categoria: "Modelos y Trámites",
    emoji: "📝",
    items: [
      { emoji: "📝", title: "Simulador Modelo 303", desc: "Estima tu liquidación trimestral de IVA.", href: "/herramientas/simulador-modelo-303", badge: "Próximamente" },
      { emoji: "📅", title: "Calendario Fiscal 2026", desc: "Todos los plazos fiscales del año en un solo lugar.", href: "/herramientas/calendario-fiscal", badge: "Próximamente" },
    ],
  },
]

export default function HerramientasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }])) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Herramientas</span>
        </nav>

        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            Calculadoras y Herramientas Fiscales
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Todas las calculadoras que necesitas para entender y gestionar tus impuestos en España.
            Gratis, actualizadas para 2026 y sin registro.
          </p>
        </div>

        <div className="space-y-12">
          {HERRAMIENTAS.map((cat) => (
            <div key={cat.categoria}>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">{cat.emoji}</span>
                <h2 className="text-xl font-bold text-gray-900">{cat.categoria}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.items.map((h) => {
                  const isProx = h.badge === "Próximamente"
                  return (
                    <div key={h.href}>
                      {isProx ? (
                        <Card className="opacity-60">
                          <CardBody className="p-5">
                            <div className="flex items-start justify-between mb-3">
                              <span className="text-2xl">{h.emoji}</span>
                              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                                {h.badge}
                              </span>
                            </div>
                            <h3 className="font-semibold text-gray-700 mb-1">{h.title}</h3>
                            <p className="text-gray-400 text-sm">{h.desc}</p>
                          </CardBody>
                        </Card>
                      ) : (
                        <Link href={h.href} className="group">
                          <Card hover>
                            <CardBody className="p-5">
                              <div className="flex items-start justify-between mb-3">
                                <span className="text-2xl">{h.emoji}</span>
                                {h.badge && (
                                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700">
                                    {h.badge}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                                {h.title}
                              </h3>
                              <p className="text-gray-500 text-sm">{h.desc}</p>
                            </CardBody>
                          </Card>
                        </Link>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
