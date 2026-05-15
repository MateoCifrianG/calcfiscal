import { Metadata } from "next"
import { CalculadoraIVA } from "@/components/tools/CalculadoraIVA"
import { Card, CardBody } from "@/components/ui/Card"
import { toolSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"
import { SITE_URL } from "@/lib/seo"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Calculadora IVA Online 2026 — Añadir o Quitar IVA al Instante",
  description:
    "Calcula el IVA de cualquier precio al instante. Añade o quita IVA con los tipos del 21%, 10%, 4% y 0%. Gratis y sin registro.",
  alternates: {
    canonical: `${SITE_URL}/herramientas/calculadora-iva`,
  },
}

const FAQ = [
  {
    question: "¿Cuáles son los tipos de IVA en España en 2026?",
    answer:
      "En España existen cuatro tipos de IVA: general (21%), reducido (10%), superreducido (4%) y exento (0%). El tipo general se aplica a la mayoría de bienes y servicios. El reducido a alimentación no básica, transporte, hostelería y vivienda nueva. El superreducido a alimentos básicos, libros, medicamentos y vivienda de protección oficial.",
  },
  {
    question: "¿Cómo se calcula el IVA de un precio?",
    answer:
      "Para añadir IVA: Precio con IVA = Precio base × (1 + tipo de IVA). Ejemplo con 21%: 100€ × 1,21 = 121€. Para quitar IVA: Precio base = Precio con IVA ÷ (1 + tipo de IVA). Ejemplo: 121€ ÷ 1,21 = 100€.",
  },
  {
    question: "¿Cuándo se aplica el IVA del 10%?",
    answer:
      "El IVA reducido del 10% se aplica a alimentos no básicos, agua, transporte de viajeros, hostelería y restauración, espectáculos y eventos deportivos, servicios de peluquería, flores y plantas, y viviendas nuevas.",
  },
  {
    question: "¿Hay servicios exentos de IVA?",
    answer:
      "Sí. Están exentos de IVA los servicios médicos y sanitarios, educación, seguros, servicios financieros, arrendamiento de vivienda habitual y ciertas actividades culturales. Los autónomos en estas actividades no cobran ni deducen IVA.",
  },
  {
    question: "¿Qué diferencia hay entre IVA repercutido e IVA soportado?",
    answer:
      "El IVA repercutido es el que cobras a tus clientes en tus facturas. El IVA soportado es el que tú pagas en tus compras y gastos. La diferencia entre ambos es lo que debes ingresar (o te devuelven) en el modelo 303 cada trimestre.",
  },
]

export default function CalculadoraIVAPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            toolSchema({
              name: "Calculadora IVA Online 2026",
              description:
                "Añade o quita IVA a cualquier precio con los tipos 21%, 10%, 4% y 0%.",
              url: `${SITE_URL}/herramientas/calculadora-iva`,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(FAQ)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: SITE_URL },
              { name: "Herramientas", url: `${SITE_URL}/herramientas` },
              { name: "Calculadora IVA", url: `${SITE_URL}/herramientas/calculadora-iva` },
            ])
          ),
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <span>/</span>
          <Link href="/herramientas" className="hover:text-blue-600">Herramientas</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Calculadora IVA</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">📊</span>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Actualizada 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
            Calculadora de IVA Online
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Añade o quita IVA a cualquier precio al instante. Tipos 21%, 10%, 4% y 0%.
            Sin registro, sin publicidad dentro de la herramienta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculadora */}
          <div className="lg:col-span-2">
            <Card>
              <CardBody className="p-6">
                <CalculadoraIVA />
              </CardBody>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">
                  Tipos de IVA en España
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { tipo: "21%", name: "General", color: "bg-blue-100 text-blue-700" },
                    { tipo: "10%", name: "Reducido", color: "bg-green-100 text-green-700" },
                    { tipo: "4%", name: "Superreducido", color: "bg-yellow-100 text-yellow-700" },
                    { tipo: "0%", name: "Exento", color: "bg-gray-100 text-gray-600" },
                  ].map((t) => (
                    <div key={t.tipo} className="flex items-center justify-between">
                      <span className="text-gray-600">{t.name}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${t.color}`}>
                        {t.tipo}
                      </span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardBody className="p-5">
                <h3 className="font-semibold text-gray-900 mb-3 text-sm">Herramientas relacionadas</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link href="/herramientas/calculadora-irpf-autonomos" className="text-blue-600 hover:underline">
                      → Calculadora IRPF autónomos
                    </Link>
                  </li>
                  <li>
                    <Link href="/herramientas/simulador-modelo-303" className="text-blue-600 hover:underline">
                      → Simulador Modelo 303
                    </Link>
                  </li>
                  <li>
                    <Link href="/guias/iva-espana" className="text-blue-600 hover:underline">
                      → Guía completa del IVA
                    </Link>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* Explicación */}
        <div className="mt-10 prose max-w-none">
          <h2>Cómo calcular el IVA de un precio</h2>
          <p>
            Calcular el IVA es una operación habitual para autónomos, empresas y cualquier persona
            que realice una compra o venta. Existen dos operaciones básicas: <strong>añadir IVA</strong>{" "}
            a un precio base (para saber cuánto paga el cliente) y <strong>quitar IVA</strong> a un
            precio final (para saber cuál es la base imponible).
          </p>
          <h3>Fórmula para añadir IVA</h3>
          <p>
            Precio con IVA = Precio base × (1 + tipo de IVA)
            <br />
            <strong>Ejemplo:</strong> 100€ × 1,21 = <strong>121€</strong> con IVA del 21%.
          </p>
          <h3>Fórmula para quitar IVA</h3>
          <p>
            Precio base = Precio con IVA ÷ (1 + tipo de IVA)
            <br />
            <strong>Ejemplo:</strong> 121€ ÷ 1,21 = <strong>100€</strong> sin IVA.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Preguntas frecuentes sobre el IVA
          </h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <Card key={i}>
                <CardBody className="p-5">
                  <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
