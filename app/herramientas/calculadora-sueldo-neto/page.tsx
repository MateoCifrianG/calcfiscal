import { Metadata } from "next"
import { CalculadoraSueldoNeto } from "@/components/tools/CalculadoraSueldoNeto"
import { Card, CardBody } from "@/components/ui/Card"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculadora Sueldo Neto 2026 — Bruto a Neto al Instante",
  description:
    "Calcula tu sueldo neto en España en 2026. Introduce tu salario bruto y descubre cuánto cobras realmente después de IRPF y Seguridad Social.",
  alternates: { canonical: `${SITE_URL}/herramientas/calculadora-sueldo-neto` },
}

const FAQ = [
  {
    question: "¿Qué es el sueldo neto y cómo se calcula?",
    answer:
      "El sueldo neto es lo que realmente recibes en tu cuenta bancaria. Se calcula restando al salario bruto las deducciones obligatorias: la cotización a la Seguridad Social (aproximadamente un 6,35% del bruto) y la retención por IRPF (varía según el salario, entre el 2% y el 45%).",
  },
  {
    question: "¿Qué descuentan de mi nómina?",
    answer:
      "De tu nómina se descuentan principalmente dos conceptos: la cotización a la Seguridad Social por parte del trabajador (contingencias comunes 4,7%, desempleo 1,55%, formación profesional 0,1%) y la retención de IRPF, que varía según tu salario, situación familiar y comunidad autónoma.",
  },
  {
    question: "¿Por qué mi neto real puede diferir del calculado?",
    answer:
      "Esta calculadora usa una estimación media del IRPF. Tu retención real puede variar según: tu comunidad autónoma (cada una tiene su tarifa autonómica), otras rentas que tengas, deducciones personales, discapacidad, o si has pedido un tipo de retención diferente a tu empresa.",
  },
  {
    question: "¿Qué diferencia hay entre 12 y 14 pagas?",
    answer:
      "Con 14 pagas, recibes 12 mensualidades más dos pagas extraordinarias (normalmente en junio y diciembre). El sueldo neto anual total es el mismo; lo que cambia es cómo se distribuye. Con 14 pagas cada paga es menor, pero recibes dos extra al año.",
  },
  {
    question: "¿Cómo afecta tener hijos a mi sueldo neto?",
    answer:
      "Tener hijos aumenta el mínimo familiar que puedes deducir de la base imponible del IRPF. Esto reduce la cuota de IRPF y, por tanto, aumenta tu sueldo neto. El primer hijo reduce la base en 2.400€ anuales, el segundo en 2.700€, el tercero en 4.000€.",
  },
]

export default function CalculadoraSueldoNetoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema({ name: "Calculadora Sueldo Neto 2026", description: "Calcula tu salario neto en España desde el bruto anual.", url: `${SITE_URL}/herramientas/calculadora-sueldo-neto` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(FAQ)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Inicio", url: SITE_URL }, { name: "Herramientas", url: `${SITE_URL}/herramientas` }, { name: "Calculadora Sueldo Neto", url: `${SITE_URL}/herramientas/calculadora-sueldo-neto` }])) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span>/</span>
          <Link href="/herramientas" className="hover:text-blue-600">Herramientas</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Calculadora Sueldo Neto</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">💼</span>
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              La más usada
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calculadora de Sueldo Neto 2026
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Introduce tu salario bruto anual y descubre cuánto cobrarás realmente en 2026,
            después de descontar IRPF y Seguridad Social.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardBody className="p-6">
                <CalculadoraSueldoNeto />
              </CardBody>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  Ejemplos rápidos
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  {[
                    { bruto: "20.000€", neto: "≈ 16.500€" },
                    { bruto: "30.000€", neto: "≈ 23.500€" },
                    { bruto: "45.000€", neto: "≈ 32.000€" },
                    { bruto: "60.000€", neto: "≈ 40.500€" },
                  ].map((e) => (
                    <div key={e.bruto} className="flex justify-between py-1.5 border-b border-gray-100 last:border-0">
                      <span>{e.bruto} bruto</span>
                      <span className="font-semibold text-green-600">{e.neto} neto</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-3">Sin hijos, tarifa media nacional</p>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Relacionado</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/guias/como-calcular-sueldo-neto" className="text-blue-600 hover:underline">→ Guía: cómo calcular el sueldo neto</Link></li>
                  <li><Link href="/herramientas/calculadora-irpf-autonomos" className="text-blue-600 hover:underline">→ IRPF para autónomos</Link></li>
                  <li><Link href="/herramientas/calculadora-finiquito" className="text-blue-600 hover:underline">→ Calculadora finiquito</Link></li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>

        <div className="mt-10 prose max-w-none">
          <h2>Qué se descuenta de tu sueldo bruto</h2>
          <p>Cuando tu empresa te dice que tu salario es de 30.000€ brutos anuales, eso no es lo que recibirás. Antes de llegar a tu cuenta, Hacienda y la Seguridad Social se llevan su parte.</p>
          <h3>Cotización a la Seguridad Social</h3>
          <p>El trabajador cotiza aproximadamente un <strong>6,35% de su salario bruto</strong>: 4,7% por contingencias comunes, 1,55% por desempleo y 0,10% por formación profesional.</p>
          <h3>Retención de IRPF</h3>
          <p>El IRPF es progresivo: cuanto más ganas, más porcentaje paga. Los tramos van del 9,5% hasta el 47% en las rentas más altas. Para la mayoría de trabajadores con salarios de 20.000€ a 40.000€ la retención efectiva está entre el 10% y el 20%.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Card key={i}><CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </CardBody></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
