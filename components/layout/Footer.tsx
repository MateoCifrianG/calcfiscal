import Link from "next/link"

const HERRAMIENTAS = [
  { href: "/herramientas/calculadora-sueldo-neto", label: "Calculadora Sueldo Neto" },
  { href: "/herramientas/calculadora-iva", label: "Calculadora IVA" },
  { href: "/herramientas/calculadora-cuota-autonomos", label: "Cuota Autónomos" },
  { href: "/herramientas/calculadora-irpf-autonomos", label: "IRPF Autónomos" },
  { href: "/herramientas/calculadora-finiquito", label: "Calculadora Finiquito" },
]

const GUIAS = [
  { href: "/guias/cuota-autonomos-2026", label: "Cuota autónomos 2026" },
  { href: "/guias/como-calcular-sueldo-neto", label: "Cómo calcular sueldo neto" },
  { href: "/guias/como-darse-de-alta-autonomo", label: "Alta como autónomo" },
  { href: "/guias/gastos-deducibles-autonomos", label: "Gastos deducibles autónomos" },
  { href: "/guias/modelo-303-paso-a-paso", label: "Modelo 303" },
]

const LEGAL = [
  { href: "/aviso-legal", label: "Aviso Legal" },
  { href: "/politica-privacidad", label: "Política de Privacidad" },
  { href: "/politica-cookies", label: "Política de Cookies" },
  { href: "/contacto", label: "Contacto" },
  { href: "/sobre-nosotros", label: "Sobre Nosotros" },
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧮</span>
              <span className="font-bold text-xl text-white">CalcFiscal</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Calculadoras fiscales y laborales para España. Gratis, sin registro y siempre actualizadas.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Contenido orientativo. No sustituye el asesoramiento profesional.
            </p>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Herramientas
            </h3>
            <ul className="space-y-2">
              {HERRAMIENTAS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guías */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Guías
            </h3>
            <ul className="space-y-2">
              {GUIAS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {LEGAL.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} CalcFiscal.es — Todos los derechos reservados
          </p>
          <p className="text-xs text-gray-600">
            Datos actualizados para el ejercicio 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
