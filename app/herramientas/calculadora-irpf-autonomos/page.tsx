import { Metadata } from "next"
import { CalculadoraIRPFAutonomos } from "@/components/tools/CalculadoraIRPFAutonomos"
import { Card, CardBody } from "@/components/ui/Card"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculadora IRPF Autónomos 2026 — Estima tu Declaración",
  description: "Calcula el IRPF que pagarás como autónomo en 2026. Estima tu cuota anual y el pago fraccionado trimestral del modelo 130.",
  alternates: { canonical: `${SITE_URL}/herramientas/calculadora-irpf-autonomos` },
}

const FAQ = [
  { question: "¿Cómo funciona el IRPF para los autónomos?", answer: "Los autónomos en estimación directa pagan el IRPF trimestralmente mediante el modelo 130 (pago fraccionado del 20% del rendimiento neto) y hacen la declaración anual de la Renta. Si cobras facturas con retención del 15%, esa retención ya es un adelanto del IRPF." },
  { question: "¿Qué es el tipo efectivo de IRPF?", answer: "Es el porcentaje real que pagas sobre tus ingresos totales, después de aplicar deducciones y el carácter progresivo de los tramos. Es siempre menor que el tipo marginal (el del último tramo en el que entras)." },
  { question: "¿Tengo que presentar el modelo 130 si tengo retenciones?", answer: "Si más del 70% de tus ingresos llevan retención del 15%, puedes estar exento de presentar el modelo 130. Si tienes dudas, consúltalo con tu asesor." },
  { question: "¿Qué gastos puedo deducirme para reducir el IRPF?", answer: "Puedes deducir todos los gastos relacionados con tu actividad: cuota de autónomos, suministros (si trabajas desde casa), material, software, formación, seguros de actividad, gestoría, publicidad y más. Ver guía completa de deducciones." },
]

export default function IRPFAutonomosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora IRPF Autónomos 2026", description: "Estima el IRPF anual y el pago fraccionado trimestral para autónomos en España.", url: `${SITE_URL}/herramientas/calculadora-irpf-autonomos` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "IRPF Autónomos", url: `${SITE_URL}/herramientas/calculadora-irpf-autonomos` }])) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link><span>/</span>
          <Link href="/herramientas" className="hover:text-blue-600">Herramientas</Link><span>/</span>
          <span className="text-gray-800 font-medium">IRPF Autónomos</span>
        </nav>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">📈</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">Tramos 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">Calculadora IRPF para Autónomos 2026</h1>
          <p className="text-lg text-gray-600">Estima cuánto IRPF pagarás en 2026 según tus ingresos y gastos deducibles. Incluye el cálculo del pago fraccionado trimestral.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card><CardBody className="p-6"><CalculadoraIRPFAutonomos /></CardBody></Card>
          </div>
          <div className="space-y-4">
            <Card><CardBody className="p-5">
              <h3 className="font-semibold text-gray-900 mb-3 text-sm">Relacionado</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guias/irpf-autonomos" className="text-blue-600 hover:underline">→ Guía IRPF autónomos</Link></li>
                <li><Link href="/guias/gastos-deducibles-autonomos" className="text-blue-600 hover:underline">→ Gastos deducibles</Link></li>
                <li><Link href="/herramientas/calculadora-cuota-autonomos" className="text-blue-600 hover:underline">→ Calculadora cuota SS</Link></li>
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
