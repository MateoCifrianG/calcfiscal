"use client"

import { useState, useMemo } from "react"
import {
  IRPF_TRAMOS_ESTATAL,
  SS_TRABAJADOR,
  MINIMO_PERSONAL,
} from "@/lib/constants/fiscal-2026"
import { formatEur, formatPct, calcularIRPFProgresivo } from "@/lib/utils"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Disclaimer } from "@/components/ui/Disclaimer"

const PAGAS = [
  { label: "12 pagas", value: 12 },
  { label: "14 pagas (con extras)", value: 14 },
]

export function CalculadoraSueldoNeto() {
  const [bruto, setBruto] = useState("")
  const [pagas, setPagas] = useState(12)
  const [hijos, setHijos] = useState(0)

  const brutoNum = parseFloat(bruto.replace(",", ".")) || 0
  const brutoAnual = brutoNum

  const resultado = useMemo(() => {
    if (brutoAnual <= 0) return null

    // Seguridad Social trabajador
    const ssAnual = brutoAnual * SS_TRABAJADOR.total

    // Base liquidable IRPF = Bruto - SS - Mínimo personal
    const minimoFamiliar = MINIMO_PERSONAL + hijos * 2400
    const baseLiquidable = Math.max(brutoAnual - ssAnual - minimoFamiliar, 0)

    // IRPF (estatal × 2 = tarifa total aproximada, cuota doble para incluir autonómica media)
    const cuotaEstatal = calcularIRPFProgresivo(baseLiquidable, IRPF_TRAMOS_ESTATAL)
    const irpfAnual = cuotaEstatal * 2 // estatal + autonómica media aprox

    const netoAnual = brutoAnual - ssAnual - irpfAnual
    const netoPaga = netoAnual / pagas
    const netoMensual = netoAnual / 12

    const tipoIRPF = brutoAnual > 0 ? irpfAnual / brutoAnual : 0
    const tipoTotal = brutoAnual > 0 ? (ssAnual + irpfAnual) / brutoAnual : 0

    return {
      brutoAnual,
      ssAnual,
      irpfAnual,
      netoAnual,
      netoPaga,
      netoMensual,
      tipoIRPF,
      tipoTotal,
    }
  }, [brutoAnual, pagas, hijos])

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Salario bruto anual (€)
          </label>
          <div className="relative">
            <input
              type="number"
              value={bruto}
              onChange={(e) => setBruto(e.target.value)}
              placeholder="30000"
              min="0"
              step="100"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              €
            </span>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Nº de pagas
          </label>
          <select
            value={pagas}
            onChange={(e) => setPagas(parseInt(e.target.value))}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            {PAGAS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Hijos a cargo (mínimo familiar)
        </label>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((n) => (
            <button
              key={n}
              onClick={() => setHijos(n)}
              className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                hijos === n
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"
              }`}
            >
              {n === 0 ? "Sin hijos" : `${n} hijo${n > 1 ? "s" : ""}`}
            </button>
          ))}
        </div>
      </div>

      {/* Resultados */}
      {resultado ? (
        <div className="calc-result space-y-4">
          <ResultBox title="Resultado principal">
            <ResultRow
              label={`Sueldo neto por paga (${pagas} pagas)`}
              value={formatEur(resultado.netoPaga)}
              highlight
              sublabel="Lo que recibirás en tu cuenta cada paga"
            />
            <ResultRow
              label="Sueldo neto mensual"
              value={formatEur(resultado.netoMensual)}
              sublabel="Neto anual ÷ 12 meses"
            />
            <ResultRow
              label="Sueldo neto anual"
              value={formatEur(resultado.netoAnual)}
            />
          </ResultBox>

          <ResultBox title="Desglose de deducciones">
            <ResultRow
              label="Salario bruto anual"
              value={formatEur(resultado.brutoAnual)}
            />
            <ResultRow
              label={`Seguridad Social (${formatPct(SS_TRABAJADOR.total)})`}
              value={`- ${formatEur(resultado.ssAnual)}`}
            />
            <ResultRow
              label={`IRPF estimado (${formatPct(resultado.tipoIRPF)})`}
              value={`- ${formatEur(resultado.irpfAnual)}`}
            />
            <ResultRow
              label={`Retención total (${formatPct(resultado.tipoTotal)})`}
              value={formatEur(resultado.ssAnual + resultado.irpfAnual)}
              sublabel="SS + IRPF sobre bruto"
            />
          </ResultBox>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 text-sm">
          Introduce tu salario bruto anual para ver el resultado
        </div>
      )}

      <Disclaimer text="El cálculo es una estimación. El IRPF real depende de tu comunidad autónoma, situación personal y otras rentas. Consulta con un asesor para mayor precisión." />
    </div>
  )
}
