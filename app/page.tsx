import Link from "next/link"
import { Card, CardBody } from "@/components/ui/Card"

const HERRAMIENTAS_DESTACADAS = [
  {
    emoji: "💼",
    title: "Calculadora Sueldo Neto",
    description: "Descubre cuánto cobras realmente después de IRPF y Seguridad Social.",
    href: "/herramientas/calculadora-sueldo-neto",
    badge: "Más usada",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "📊",
    title: "Calculadora IVA",
    description: "Añade o quita IVA a cualquier precio al instante. Tipos 21%, 10%, 4%.",
    href: "/herramientas/calculadora-iva",
    badge: "Más rápida",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    emoji: "🧾",
    title: "Cuota de Autónomos 2026",
    description: "Calcula tu cuota mensual según los nuevos tramos de rendimientos.",
    href: "/herramientas/calculadora-cuota-autonomos",
    badge: "Actualizada",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "📈",
    title: "IRPF Autónomos",
    description: "Estima tu IRPF anual y el pago fraccionado trimestral del modelo 130.",
    href: "/herramientas/calculadora-irpf-autonomos",
    badge: null,
    badgeColor: "",
  },
  {
    emoji: "📋",
    title: "Calculadora Finiquito",
    description: "Calcula el finiquito que te corresponde en cualquier tipo de baja o despido.",
    href: "/herramientas/calculadora-finiquito",
    badge: null,
    badgeColor: "",
  },
  {
    emoji: "🗂️",
    title: "Ver todas las herramientas",
    description: "Explora el catálogo completo de calculadoras fiscales y laborales.",
    href: "/herramientas",
    badge: null,
    badgeColor: "",
  },
]

const GUIAS_RECIENTES = [
  {
    title: "Cuota de autónomos 2026: tabla de tramos y cálculo",
    href: "/guias/cuota-autonomos-2026",
    description: "Todo sobre el nuevo sistema de cotización por ingresos reales. Tablas y ejemplos.",
    emoji: "🧾",
  },
  {
    title: "Cómo calcular el sueldo neto en España",
    href: "/guias/como-calcular-sueldo-neto",
    description: "Entiende qué descuentan en tu nómina y cómo se calcula tu salario neto.",
    emoji: "💼",
  },
  {
    title: "Cómo darse de alta como autónomo en 2026",
    href: "/guias/como-darse-de-alta-autonomo",
    description: "Guía paso a paso: documentos, plazos, coste y errores más comunes.",
    emoji: "📝",
  },
]

const VENTAJAS = [
  {
    emoji: "⚡",
    title: "Resultado instantáneo",
    description: "Sin formularios ni esperas. El resultado aparece mientras escribes.",
  },
  {
    emoji: "📅",
    title: "Datos de 2026",
    description: "Tramos de IRPF, cuotas y tablas actualizados para el ejercicio actual.",
  },
  {
    emoji: "📱",
    title: "Funciona en móvil",
    description: "Diseñadas para usarse desde el teléfono, donde y cuando las necesites.",
  },
  {
    emoji: "🔒",
    title: "Sin registro",
    description: "Ningún dato tuyo se guarda. Gratis para siempre, sin letra pequeña.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-14 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Datos actualizados 2026 ✓
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Calculadoras fiscales para España,{" "}
            <span className="text-blue-600">gratis y sin rodeos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Sueldo neto, IVA, IRPF, cuota de autónomos, finiquito y más.
            Resultados instantáneos, sin registro, actualizados para 2026.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/herramientas/calculadora-sueldo-neto"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg shadow-sm"
            >
              Calcular sueldo neto →
            </Link>
            <Link
              href="/herramientas"
              className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-3.5 rounded-xl transition-colors text-lg border border-gray-200 shadow-sm"
            >
              Ver todas las calculadoras
            </Link>
          </div>
        </div>
      </section>

      {/* Herramientas destacadas */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Herramientas fiscales y laborales
          </h2>
          <p className="text-gray-500 text-lg">
            Las calculadoras más utilizadas, actualizadas para 2026
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {HERRAMIENTAS_DESTACADAS.map((h) => (
            <Link key={h.href} href={h.href} className="group">
              <Card hover className="h-full">
                <CardBody className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{h.emoji}</span>
                    {h.badge && (
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${h.badgeColor}`}
                      >
                        {h.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-700 transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{h.description}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Por qué usar CalcFiscal
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VENTAJAS.map((v) => (
              <div key={v.title} className="text-center">
                <span className="text-4xl block mb-3">{v.emoji}</span>
                <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías recientes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Guías más leídas</h2>
          <Link
            href="/guias"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {GUIAS_RECIENTES.map((g) => (
            <Link key={g.href} href={g.href} className="group">
              <Card hover className="h-full">
                <CardBody className="p-6">
                  <span className="text-2xl block mb-3">{g.emoji}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
                    {g.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{g.description}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-700 py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Cuánto cobras realmente?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Muchos trabajadores y autónomos no saben cuánto se llevan neto cada mes.
            Calcula el tuyo en 10 segundos.
          </p>
          <Link
            href="/herramientas/calculadora-sueldo-neto"
            className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-block text-lg"
          >
            Calcular mi sueldo neto →
          </Link>
        </div>
      </section>
    </>
  )
}
