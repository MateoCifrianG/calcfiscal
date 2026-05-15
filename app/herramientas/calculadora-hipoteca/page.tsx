import { Metadata } from "next"
import { CalculadoraHipoteca } from "@/components/tools/CalculadoraHipoteca"
import { generateToolMetadata } from "@/lib/seo"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"

export const metadata: Metadata = generateToolMetadata({
  title: "Calculadora de Hipoteca 2026 — Cuota Mensual y Coste Total",
  description: "Calcula la cuota mensual de tu hipoteca, el total de intereses y el coste total del préstamo. Hipoteca fija o variable, cualquier plazo.",
  keywords: ["calculadora hipoteca", "calcular cuota hipoteca", "hipoteca mensual", "cuota hipoteca 2026", "simulador hipoteca"],
  slug: "calculadora-hipoteca",
})

const faqs = [
  {
    question: "¿Cómo se calcula la cuota de una hipoteca?",
    answer: "Con la fórmula de amortización francesa: Cuota = C × [r(1+r)^n] / [(1+r)^n - 1], donde C es el capital, r el tipo mensual y n el número de cuotas. La cuota es constante pero al principio pagas más intereses y al final más capital."
  },
  {
    question: "¿Qué diferencia hay entre TIN y TAE?",
    answer: "El TIN es el tipo de interés puro del préstamo. El TAE incluye además comisiones y otros gastos, expresados como porcentaje anual. Usa el TAE para comparar hipotecas entre bancos."
  },
  {
    question: "¿Cuánto debería pagar de hipoteca como máximo?",
    answer: "La regla general es que la cuota no supere el 30-35% de tus ingresos netos mensuales. Con 2.000€ netos, la cuota recomendada máxima sería 600-700€/mes."
  },
  {
    question: "¿Compensa amortizar anticipadamente?",
    answer: "Sí, especialmente reduciendo plazo. Cada euro amortizado anticipadamente ahorra los intereses que habría generado hasta el final del préstamo. Reducir plazo siempre es más eficiente que reducir cuota."
  },
  {
    question: "¿Puedo deducir la hipoteca en la declaración de la Renta?",
    answer: "Solo hipotecas firmadas antes del 1 de enero de 2013 tienen deducción estatal (15% con base máxima de 9.040€). Las hipotecas posteriores no tienen esta deducción, aunque algunas CCAA tienen deducciones propias."
  }
]

export default function CalculadoraHipotecaPage() {
  const url = `${SITE_URL}/herramientas/calculadora-hipoteca`

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora de Hipoteca", description: "Calcula la cuota mensual de tu hipoteca y el coste total del préstamo", url })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "Calculadora Hipoteca", url }])) }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5 flex-wrap">
          <a href="/" className="hover:text-blue-600">Inicio</a>
          <span>/</span>
          <a href="/herramientas" className="hover:text-blue-600">Herramientas</a>
          <span>/</span>
          <span className="text-gray-900">Calculadora de Hipoteca</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🏠</span>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full">Financiero</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calculadora de Hipoteca 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Introduce el capital, el tipo de interés y el plazo para calcular tu cuota mensual y cuánto pagarás en total.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <CalculadoraHipoteca />

            <div className="prose max-w-none">
              <h2>Cómo interpretar el resultado</h2>
              <p>
                La calculadora usa el <strong>sistema de amortización francés</strong>, que es el estándar en España.
                La cuota mensual es siempre la misma, pero al principio la mayor parte son intereses y al final
                la mayor parte es capital. Por eso amortizar anticipadamente al inicio del préstamo ahorra mucho más.
              </p>
              <h3>El impacto del plazo en los intereses</h3>
              <p>
                Aumentar el plazo reduce la cuota mensual pero dispara los intereses totales. Una hipoteca de
                200.000€ al 3,5% a 20 años cuesta ~78.000€ en intereses; a 30 años cuesta ~123.000€.
                La diferencia de cuota es de ~260€/mes pero el coste adicional es de 45.000€.
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
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Ejemplos orientativos</h3>
              <div className="space-y-3 text-xs">
                {[
                  { capital: "150.000€", tin: "3,5%", plazo: "25 años", cuota: "~751€/mes" },
                  { capital: "200.000€", tin: "3,5%", plazo: "25 años", cuota: "~1.001€/mes" },
                  { capital: "250.000€", tin: "3,5%", plazo: "25 años", cuota: "~1.251€/mes" },
                  { capital: "300.000€", tin: "3,0%", plazo: "30 años", cuota: "~1.265€/mes" },
                ].map((ex) => (
                  <div key={ex.capital} className="bg-white rounded-lg p-3 border border-gray-100">
                    <div className="font-medium text-gray-900">{ex.capital} · {ex.tin} · {ex.plazo}</div>
                    <div className="text-blue-600 font-semibold mt-0.5">{ex.cuota}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Herramientas relacionadas</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/herramientas/calculadora-sueldo-neto" className="text-blue-600 hover:underline">💼 Calculadora sueldo neto</a></li>
                <li><a href="/herramientas/calculadora-irpf-autonomos" className="text-blue-600 hover:underline">📈 IRPF autónomos</a></li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-xs text-blue-800">
                <strong>Consejo:</strong> La cuota no debería superar el <strong>35% de tus ingresos netos</strong>.
                Usa la calculadora de sueldo neto para saber cuánto cobras realmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
