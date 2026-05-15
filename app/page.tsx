import Link from "next/link"
import { Card, CardBody } from "@/components/ui/Card"

const HERRAMIENTAS_DESTACADAS = [
  {
    emoji: "💼",
    title: "Calculadora de Sueldo Neto",
    description: "Calcula cuánto cobras realmente después de IRPF y Seguridad Social. De bruto a neto en segundos.",
    href: "/herramientas/calculadora-sueldo-neto",
    badge: "Más usada",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "📊",
    title: "Calculadora de IVA",
    description: "Añade o quita IVA a cualquier precio. Tipos 21%, 10% y 4% para España 2026.",
    href: "/herramientas/calculadora-iva",
    badge: "Popular",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    emoji: "🧾",
    title: "Cuota de Autónomos 2026",
    description: "Calcula tu cuota mensual según los nuevos tramos de rendimientos netos del RETA.",
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
    title: "Calculadora de Finiquito",
    description: "Calcula la indemnización y partes proporcionales en cualquier tipo de despido o baja.",
    href: "/herramientas/calculadora-finiquito",
    badge: null,
    badgeColor: "",
  },
  {
    emoji: "📉",
    title: "Calculadora de Paro",
    description: "Cuánto tiempo cobras de desempleo y cuánto recibirás cada mes según tus cotizaciones.",
    href: "/herramientas/calculadora-paro",
    badge: "Nuevo",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "🏠",
    title: "Calculadora de Hipoteca",
    description: "Calcula la cuota mensual de tu hipoteca y el coste total de intereses.",
    href: "/herramientas/calculadora-hipoteca",
    badge: "Nuevo",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "🗂️",
    title: "Ver todas las herramientas",
    description: "Catálogo completo de calculadoras fiscales, laborales y financieras para España.",
    href: "/herramientas",
    badge: null,
    badgeColor: "",
  },
]

const GUIAS_DESTACADAS = [
  {
    title: "Cuota de autónomos 2026: tabla de tramos y cálculo completo",
    href: "/guias/cuota-autonomos-2026",
    description: "El nuevo sistema de cotización por ingresos reales explicado con tablas y ejemplos prácticos.",
    emoji: "🧾",
    category: "Autónomos",
  },
  {
    title: "Cómo calcular el sueldo neto en España",
    href: "/guias/como-calcular-sueldo-neto",
    description: "Qué descuentan en tu nómina, cómo funciona el IRPF y la SS, y cómo pasar de bruto a neto.",
    emoji: "💼",
    category: "Laboral",
  },
  {
    title: "Cómo calcular el finiquito: guía completa",
    href: "/guias/como-calcular-finiquito",
    description: "Qué incluye el finiquito, cómo se calcula la indemnización y qué pasa en cada tipo de despido.",
    emoji: "📋",
    category: "Laboral",
  },
  {
    title: "Gastos deducibles para autónomos en 2026",
    href: "/guias/gastos-deducibles-autonomos",
    description: "Lista completa de gastos que puedes deducirte: vehículo, móvil, teletrabajo, formación y más.",
    emoji: "💡",
    category: "Autónomos",
  },
  {
    title: "Modelo 303 IVA: cómo rellenarlo paso a paso",
    href: "/guias/modelo-303-iva-autonomos",
    description: "Qué es el 303, cuándo presentarlo y cómo calcular el IVA a ingresar o compensar.",
    emoji: "📝",
    category: "IVA",
  },
  {
    title: "Declaración de la Renta 2026: guía completa",
    href: "/guias/declaracion-renta-2026",
    description: "Plazos, borrador, deducciones y cómo pagar menos en la declaración del IRPF.",
    emoji: "📅",
    category: "IRPF",
  },
]

const BLOG_DESTACADO = [
  {
    title: "Tramos del IRPF 2026: tabla completa y cómo funciona",
    href: "/blog/tramos-irpf-2026",
    category: "IRPF",
    readingTime: 6,
  },
  {
    title: "Autónomo o Sociedad Limitada: cuándo compensa crear una SL",
    href: "/blog/autonomo-o-sociedad-limitada",
    category: "Autónomos",
    readingTime: 8,
  },
  {
    title: "Novedades fiscales 2026: todo lo que cambia",
    href: "/blog/novedades-fiscales-2026",
    category: "Novedades",
    readingTime: 6,
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
    title: "Actualizado para 2026",
    description: "Tramos IRPF, cuotas autónomos y tablas actualizados para el ejercicio actual.",
  },
  {
    emoji: "📱",
    title: "Funciona en móvil",
    description: "Diseñadas para usarse desde el teléfono, donde y cuando las necesites.",
  },
  {
    emoji: "🔒",
    title: "Sin registro ni datos",
    description: "Ningún dato tuyo se envía ni se guarda. Gratis para siempre.",
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-14 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
            Calculadoras fiscales actualizadas 2026 ✓
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Calculadoras fiscales y laborales{" "}
            <span className="text-blue-600">para España 2026</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            Calcula tu <strong>sueldo neto</strong>, <strong>cuota de autónomos</strong>, <strong>IVA</strong>,{" "}
            <strong>finiquito</strong>, <strong>paro</strong> e <strong>hipoteca</strong>.
            Gratis, sin registro y actualizadas con los datos de 2026.
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Más de 7 calculadoras y 15 guías fiscales para trabajadores, autónomos y empresas en España.
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
            Calculadoras fiscales gratuitas para España
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Todas las herramientas que necesitas para calcular tus impuestos, cotizaciones y prestaciones.
            Actualizadas con los datos fiscales de 2026.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HERRAMIENTAS_DESTACADAS.map((h) => (
            <Link key={h.href} href={h.href} className="group">
              <Card hover className="h-full">
                <CardBody className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-2xl">{h.emoji}</span>
                    {h.badge && (
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${h.badgeColor}`}>
                        {h.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors leading-snug text-sm">
                    {h.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{h.description}</p>
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

      {/* Guías fiscales */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Guías fiscales y laborales</h2>
            <p className="text-gray-500 text-sm mt-1">Explicaciones claras sobre impuestos y legislación laboral en España</p>
          </div>
          <Link href="/guias" className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap">
            Ver todas →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {GUIAS_DESTACADAS.map((g) => (
            <Link key={g.href} href={g.href} className="group">
              <Card hover className="h-full">
                <CardBody className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{g.emoji}</span>
                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{g.category}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors leading-snug text-sm">
                    {g.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{g.description}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Últimos artículos</h2>
              <p className="text-gray-500 text-sm mt-1">Novedades fiscales, consejos y análisis para 2026</p>
            </div>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 text-sm font-medium whitespace-nowrap">
              Ver todos →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {BLOG_DESTACADO.map((post) => (
              <Link key={post.href} href={post.href} className="group">
                <article className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all h-full">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors leading-snug text-sm mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-400">{post.readingTime} min de lectura</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SEO section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
          Preguntas frecuentes sobre fiscalidad en España
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "¿Cuánto es el sueldo neto de 30.000€ brutos?",
              a: "Con 30.000€ brutos anuales, el sueldo neto estimado es de unos 23.000–24.000€ al año (≈1.900–2.000€/mes con 12 pagas). Depende de tu comunidad autónoma, situación familiar y retenciones. Usa nuestra calculadora de sueldo neto para obtener el dato exacto.",
              link: "/herramientas/calculadora-sueldo-neto",
            },
            {
              q: "¿Cuánto paga un autónomo de cuota en 2026?",
              a: "En 2026, la cuota de autónomos va desde 200€/mes para rendimientos bajos hasta 500€/mes para rendimientos superiores a 6.000€/mes. Los nuevos autónomos tienen tarifa plana de 80€/mes el primer año.",
              link: "/herramientas/calculadora-cuota-autonomos",
            },
            {
              q: "¿Cuánto paro me corresponde?",
              a: "El paro depende de tus días cotizados en los últimos 6 años. Con el mínimo de 360 días cotizados tienes 4 meses de prestación. El máximo es 24 meses con 2.160 días cotizados. La cuantía es el 70% de tu base reguladora los primeros 6 meses y el 50% el resto.",
              link: "/herramientas/calculadora-paro",
            },
            {
              q: "¿Cuánto es el IVA en España en 2026?",
              a: "En España hay tres tipos de IVA: el general del 21% (la mayoría de productos y servicios), el reducido del 10% (alimentación, transporte, hostelería) y el superreducido del 4% (pan, leche, libros, medicamentos).",
              link: "/herramientas/calculadora-iva",
            },
          ].map((item, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-5">
              <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-2">{item.a}</p>
              <Link href={item.link} className="text-blue-600 text-xs hover:underline font-medium">
                Calcular ahora →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-blue-700 py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Cuánto cobras realmente?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Más de 7 calculadoras fiscales gratuitas para trabajadores y autónomos en España.
            Sin registro, sin publicidad molesta, siempre actualizadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/herramientas/calculadora-sueldo-neto"
              className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors inline-block text-lg"
            >
              Calcular mi sueldo neto →
            </Link>
            <Link
              href="/herramientas"
              className="bg-blue-600 border border-blue-400 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition-colors inline-block text-lg"
            >
              Ver todas las calculadoras
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
