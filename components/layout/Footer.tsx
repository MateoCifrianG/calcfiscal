import Link from "next/link"

const HERRAMIENTAS = [
  { href: "/herramientas/calculadora-sueldo-neto", label: "Calculadora Sueldo Neto" },
  { href: "/herramientas/calculadora-iva", label: "Calculadora IVA" },
  { href: "/herramientas/calculadora-cuota-autonomos", label: "Cuota Autónomos 2026" },
  { href: "/herramientas/calculadora-irpf-autonomos", label: "IRPF Autónomos" },
  { href: "/herramientas/calculadora-finiquito", label: "Calculadora Finiquito" },
  { href: "/herramientas/calculadora-paro", label: "Calculadora Paro" },
  { href: "/herramientas/calculadora-hipoteca", label: "Calculadora Hipoteca" },
]

const GUIAS = [
  { href: "/guias/cuota-autonomos-2026", label: "Cuota autónomos 2026" },
  { href: "/guias/como-calcular-sueldo-neto", label: "Cómo calcular sueldo neto" },
  { href: "/guias/como-darse-de-alta-autonomo", label: "Alta como autónomo" },
  { href: "/guias/gastos-deducibles-autonomos", label: "Gastos deducibles autónomos" },
  { href: "/guias/tabla-irpf-2026", label: "Tabla IRPF 2026" },
  { href: "/guias/irpf-autonomos-2026", label: "IRPF autónomos 2026" },
  { href: "/guias/indemnizacion-despido-españa", label: "Indemnización por despido" },
  { href: "/guias/como-hacer-factura-autonomo", label: "Cómo hacer facturas" },
  { href: "/guias/tipos-contrato-trabajo-españa", label: "Tipos de contrato laboral" },
]

const BLOG_LINKS = [
  { href: "/blog/tramos-irpf-2026", label: "Tramos IRPF 2026" },
  { href: "/blog/autonomo-o-sociedad-limitada", label: "Autónomo o Sociedad Limitada" },
  { href: "/blog/novedades-fiscales-2026", label: "Novedades fiscales 2026" },
  { href: "/blog/smi-2026-salario-minimo-interprofesional", label: "SMI 2026" },
  { href: "/blog", label: "Ver todos los artículos →" },
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🧮</span>
              <span className="font-bold text-xl text-white">CalcFiscal</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Calculadoras fiscales y laborales para España. Gratis, sin registro y actualizadas para 2026.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Contenido orientativo. No sustituye el asesoramiento profesional.
            </p>
          </div>

          {/* Herramientas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Calculadoras
            </h3>
            <ul className="space-y-2">
              {HERRAMIENTAS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
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
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
              Blog
            </h3>
            <ul className="space-y-2">
              {BLOG_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
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
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
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
