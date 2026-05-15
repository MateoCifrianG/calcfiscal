"use client"

import Link from "next/link"
import { useState } from "react"

const NAV_LINKS = [
  { href: "/herramientas", label: "Herramientas" },
  { href: "/guias", label: "Guías" },
  { href: "/blog", label: "Blog" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🧮</span>
            <span className="font-bold text-xl text-blue-700 group-hover:text-blue-800 transition-colors">
              CalcFiscal
            </span>
            <span className="hidden sm:inline text-xs text-gray-400 font-normal mt-1">
              .es
            </span>
          </Link>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/herramientas/calculadora-sueldo-neto"
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Calcular sueldo neto →
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Abrir menú"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-blue-700 py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/herramientas/calculadora-sueldo-neto"
            onClick={() => setOpen(false)}
            className="block bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg text-center mt-4"
          >
            Calcular sueldo neto →
          </Link>
        </div>
      )}
    </header>
  )
}
