import { Metadata } from "next"
import { CalculadoraCuotaAutonomos } from "@/components/tools/CalculadoraCuotaAutonomos"
import { Card, CardBody } from "@/components/ui/Card"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculadora Cuota Autónomos 2026 — ¿Cuánto Pagarás?",
  description: "Calcula tu cuota de autónomos en 2026 según tus rendimientos netos. Sistema de tramos actualizado. Incluye tarifa plana para nuevas altas.",
  alternates: { canonical: `${SITE_URL}/herramientas/calculadora-cuota-autonomos` },
}

const FAQ = [
  { question: "¿Cómo funciona el nuevo sistema de cuotas de autónomos?", answer: "Desde 2023, la cuota de autónomos se calcula según los rendimientos netos reales (ingresos menos gastos deducibles). Hay 15 tramos: cuanto más ganes, mayor es tu cuota mínima. Puedes elegir cualquier base entre el mínimo y el máximo de tu tramo." },
  { question: "¿Qué son los rendimientos netos para calcular la cuota?", answer: "Son tus ingresos totales menos todos los gastos deducibles relacionados con tu actividad (suministros, materiales, software, cuota de autónomos, etc.). No es lo mismo que los ingresos brutos facturados." },
  { question: "¿Puedo cambiar mi base de cotización durante el año?", answer: "Sí. Puedes modificar tu base de cotización hasta 6 veces al año, en los periodos establecidos. Esto te permite ajustar tu cuota si tus ingresos cambian significativamente." },
  { question: "¿Qué es la tarifa plana de autónomos y quién puede pedirla?", answer: "La tarifa plana permite pagar solo 80€/mes durante los primeros 12 meses como autónomo. Pueden acogerse quienes se dan de alta por primera vez o quienes llevan más de 2 años sin cotizar como autónomos." },
]

export default function CuotaAutonomosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora Cuota Autónomos 2026", description: "Calcula tu cuota mensual de autónomos según tus rendimientos netos y los tramos 2026.", url: `${SITE_URL}/herramientas/calculadora-cuota-autonomos` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "Calculadora Cuota Autónomos", url: `${SITE_URL}/herramientas/calculadora-cuota-autonomos` }])) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link><span>/</span>
          <Link href="/herramientas" className="hover:text-blue-600">Herramientas</Link><span>/</span>
          <span className="text-gray-800 font-medium">Cuota Autónomos</span>
        </nav>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🧾</span>
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Actualizada 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Calculadora Cuota Autónomos 2026</h1>
          <p className="text-lg text-gray-600">Calcula cuánto pagarás de cuota mensual según tus rendimientos netos reales. Sistema de tramos vigente en 2026.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card><CardBody className="p-6"><CalculadoraCuotaAutonomos /></CardBody></Card>
          </div>
          <div className="space-y-4">
            <Card><CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Guías relacionadas</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guias/cuota-autonomos-2026" className="text-blue-600 hover:underline">→ Cuota autónomos 2026: guía completa</Link></li>
                <li><Link href="/guias/como-darse-de-alta-autonomo" className="text-blue-600 hover:underline">→ Cómo darse de alta como autónomo</Link></li>
                <li><Link href="/herramientas/calculadora-irpf-autonomos" className="text-blue-600 hover:underline">→ Calculadora IRPF autónomos</Link></li>
              </ul>
            </CardBody></Card>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">{FAQ.map((item, i) => (<Card key={i}><CardBody className="p-5"><h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3><p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p></CardBody></Card>))}</div>
        </div>
      </div>
    </>
  )
}
