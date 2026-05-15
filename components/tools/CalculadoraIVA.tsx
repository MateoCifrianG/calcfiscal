"use client"

import { useState } from "react"
import { IVA_TYPES } from "@/lib/constants/fiscal-2026"
import { formatEur } from "@/lib/utils"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Disclaimer } from "@/components/ui/Disclaimer"

type Mode = "anadir" | "quitar"

export function CalculadoraIVA() {
  const [precio, setPrecio] = useState("")
  const [tipo, setTipo] = useState(0.21)
  const [mode, setMode] = useState<Mode>("anadir")

  const precioNum = parseFloat(precio.replace(",", ".")) || 0

  const base = mode === "anadir" ? precioNum : precioNum / (1 + tipo)
  const importeIVA = base * tipo
  const total = base + importeIVA

  const hasValue = precioNum > 0

  return (
    <div className="space-y-6">
      {/* Toggle de modo */}
      <div className="flex rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => setMode("anadir")}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mode === "anadir"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          ➕ Añadir IVA
        </button>
        <button
          onClick={() => setMode("quitar")}
          className={`flex-1 py-3 text-sm font-semibold transition-colors ${
            mode === "quitar"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-600 hover:bg-gray-50"
          }`}
        >
          ➖ Quitar IVA
        </button>
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {mode === "anadir" ? "Precio sin IVA (€)" : "Precio con IVA (€)"}
          </label>
          <div className="relative">
            <input
              type="number"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="0,00"
              min="0"
              step="0.01"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              €
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Tipo de IVA
          </label>
          <select
            value={tipo}
            onChange={(e) => setTipo(parseFloat(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {IVA_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resultados */}
      {hasValue && (
        <div className="calc-result">
          <ResultBox title="Desglose">
            <ResultRow label="Precio base (sin IVA)" value={formatEur(base)} />
            <ResultRow
              label={`IVA (${(tipo * 100).toFixed(0)}%)`}
              value={formatEur(importeIVA)}
            />
            <ResultRow
              label="Precio total (con IVA)"
              value={formatEur(total)}
              highlight
            />
          </ResultBox>
        </div>
      )}

      {!hasValue && (
        <div className="text-center py-8 text-gray-400 text-sm">
          Introduce un precio para ver el resultado
        </div>
      )}
    </div>
  )
}
