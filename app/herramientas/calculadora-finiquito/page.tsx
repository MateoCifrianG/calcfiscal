import { Metadata } from "next"
import { CalculadoraFiniquito } from "@/components/tools/CalculadoraFiniquito"
import { Card, CardBody } from "@/components/ui/Card"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculadora Finiquito 2026 — Calcula lo que te Corresponde",
  description: "Calcula tu finiquito en España en 2026. Despido improcedente, procedente, baja voluntaria. Incluye vacaciones, pagas extras e indemnización.",
  alternates: { canonical: `${SITE_URL}/herramientas/calculadora-finiquito` },
}

const FAQ = [
  { question: "¿Qué incluye un finiquito?", answer: "Un finiquito incluye: los días trabajados del mes en curso no cobrados, la parte proporcional de las pagas extras no disfrutadas, las vacaciones no disfrutadas (si las hay) y, en caso de despido, la indemnización correspondiente." },
  { question: "¿Cuál es la indemnización por despido improcedente?", answer: "Desde la reforma laboral de 2012, la indemnización por despido improcedente es de 33 días de salario por año trabajado, con un máximo de 24 mensualidades." },
  { question: "¿Tengo derecho a indemnización si me voy voluntariamente?", answer: "No. Si la baja es voluntaria, no hay indemnización. Solo recibirás los días trabajados y la parte proporcional de vacaciones y pagas extras." },
  { question: "¿Cuánto tiempo tiene la empresa para pagar el finiquito?", answer: "No hay un plazo legal estricto establecido en el Estatuto de los Trabajadores para el pago del finiquito, aunque la práctica habitual es pagarlo el último día de trabajo o pocos días después. Si se retrasa injustificadamente, el trabajador puede reclamar judicialmente." },
]

export default function FiniquitoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora Finiquito 2026", description: "Calcula el finiquito que te corresponde en España según el tipo de baja o despido.", url: `${SITE_URL}/herramientas/calculadora-finiquito` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "Calculadora Finiquito", url: `${SITE_URL}/herramientas/calculadora-finiquito` }])) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link><span>/</span>
          <Link href="/herramientas" className="hover:text-blue-600">Herramientas</Link><span>/</span>
          <span className="text-gray-800 font-medium">Calculadora Finiquito</span>
        </nav>
        <div className="mb-8">
          <span className="text-4xl block mb-3">📋</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Calculadora de Finiquito 2026</h1>
          <p className="text-lg text-gray-600">Calcula el finiquito que te corresponde según el tipo de baja, los años trabajados y tu salario.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card><CardBody className="p-6"><CalculadoraFiniquito /></CardBody></Card>
          </div>
          <div className="space-y-4">
            <Card><CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Indemnizaciones</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-gray-100"><span className="text-gray-600">Despido improcedente</span><span className="font-bold text-blue-700">33 días/año</span></div>
                <div className="flex justify-between py-1.5 border-b border-gray-100"><span className="text-gray-600">Despido procedente</span><span className="font-bold text-gray-700">20 días/año</span></div>
                <div className="flex justify-between py-1.5"><span className="text-gray-600">Baja voluntaria</span><span className="font-bold text-gray-500">Sin indemnización</span></div>
              </div>
            </CardBody></Card>
            <Card><CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Relacionado</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/herramientas/calculadora-sueldo-neto" className="text-blue-600 hover:underline">→ Calculadora sueldo neto</Link></li>
              </ul>
            </CardBody></Card>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes sobre el finiquito</h2>
          <div className="space-y-4">{FAQ.map((item, i) => (<Card key={i}><CardBody className="p-5"><h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p></CardBody></Card>))}</div>
        </div>
      </div>
    </>
  )
}
