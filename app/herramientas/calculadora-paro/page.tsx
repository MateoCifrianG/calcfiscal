import { Metadata } from "next"
import { CalculadoraParo } from "@/components/tools/CalculadoraParo"
import { generateToolMetadata } from "@/lib/seo"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = generateToolMetadata({
  title: "Calculadora de Paro 2026 — Cuánto Cobro de Desempleo",
  description: "Calcula cuánto paro te corresponde en España en 2026: duración de la prestación y cuota mensual según tus días cotizados y salario.",
  keywords: ["calculadora paro", "cuanto cobro de paro", "calcular prestacion desempleo", "paro 2026", "cuanto tiempo cobro paro"],
  slug: "calculadora-paro",
})

const faqs = [
  {
    question: "¿Cuántos días tengo que haber cotizado para cobrar el paro?",
    answer: "El mínimo es 360 días cotizados en los últimos 6 años. Con 360 días tienes derecho a 4 meses de prestación."
  },
  {
    question: "¿Cuánto es el 70% del paro?",
    answer: "El 70% se aplica sobre la base reguladora, que es el promedio de tu base de cotización de los últimos 180 días. Si tu salario bruto es 2.000€/mes, tu base diaria es ≈65,75€ y el 70% son ≈46€/día (≈1.380€/mes)."
  },
  {
    question: "¿El paro tiene retención de IRPF?",
    answer: "Sí. La prestación por desempleo tributa como rendimiento del trabajo. El SEPE aplica retención de IRPF, que suele estar entre el 2% y el 15% según el importe."
  },
  {
    question: "¿Puedo cobrar el paro si me fui voluntariamente?",
    answer: "No. La prestación contributiva solo se cobra en situaciones de desempleo involuntario: despido, fin de contrato, ERE, etc. La baja voluntaria no da derecho a paro."
  },
  {
    question: "¿Cuánto tarda el SEPE en pagar el primer paro?",
    answer: "El SEPE tiene 25 días hábiles para resolver la solicitud. El primer pago suele tardarse entre 2 y 4 semanas desde la solicitud."
  }
]

export default function CalculadoraParoPage() {
  const url = `${SITE_URL}/herramientas/calculadora-paro`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora de Paro", description: "Calcula la duración y cuantía de tu prestación por desempleo en España 2026", url })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "Calculadora Paro", url }])) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <a href="/" className="hover:text-blue-600">Inicio</a>
          <span>/</span>
          <a href="/herramientas" className="hover:text-blue-600">Herramientas</a>
          <span>/</span>
          <span className="text-gray-900">Calculadora de Paro</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">📉</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">Laboral</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calculadora de Paro 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Introduce tus días cotizados y salario para saber cuánto tiempo cobrarás y cuánto recibirás cada mes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <CalculadoraParo />

            <div className="prose max-w-none">
              <h2>Cómo funciona el cálculo del paro</h2>
              <p>
                La prestación por desempleo tiene dos componentes: la <strong>duración</strong> (cuánto tiempo cobras)
                y la <strong>cuantía</strong> (cuánto cobras cada mes).
              </p>
              <h3>Duración: depende de los días cotizados</h3>
              <p>
                Por cada 180 días cotizados en los últimos 6 años tienes derecho a 60 días de prestación,
                con un mínimo de 360 días cotizados (4 meses de paro) y un máximo de 2.160 días (24 meses de paro).
              </p>
              <h3>Cuantía: 70% los primeros 6 meses, 50% el resto</h3>
              <p>
                Se calcula sobre la <strong>base reguladora</strong>: el promedio de tu base de cotización
                de los últimos 180 días antes del despido. Los primeros 180 días cobras el 70%, a partir
                del día 181 cobras el 50%.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-gray-900">Preguntas frecuentes</h2>
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 text-sm">{faq.question}</h3>
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Tabla rápida de duración</h3>
              <div className="space-y-1.5 text-xs">
                {[
                  { dias: "360–539", meses: "4 meses" },
                  { dias: "540–719", meses: "6 meses" },
                  { dias: "720–899", meses: "8 meses" },
                  { dias: "900–1.079", meses: "10 meses" },
                  { dias: "1.080–1.259", meses: "12 meses" },
                  { dias: "1.440–1.619", meses: "16 meses" },
                  { dias: "1.800–1.979", meses: "20 meses" },
                  { dias: "2.160+", meses: "24 meses (máx.)" },
                ].map((row) => (
                  <div key={row.dias} className="flex justify-between text-gray-600 py-1 border-b border-gray-100 last:border-0">
                    <span>{row.dias} días</span>
                    <span className="font-medium text-gray-900">{row.meses}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Herramientas relacionadas</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/herramientas/calculadora-sueldo-neto" className="text-blue-600 hover:underline">💼 Calculadora sueldo neto</a></li>
                <li><a href="/herramientas/calculadora-finiquito" className="text-blue-600 hover:underline">📋 Calculadora finiquito</a></li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-xs text-amber-800">
                <strong>Aviso:</strong> Esta calculadora ofrece estimaciones orientativas. El SEPE calculará el importe exacto según tus bases de cotización reales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
