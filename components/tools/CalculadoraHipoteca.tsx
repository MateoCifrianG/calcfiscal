"use client"

import { useState } from "react"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Card, CardBody } from "@/components/ui/Card"
import { formatEur } from "@/lib/utils"

export function CalculadoraHipoteca() {
  const [capital, setCapital] = useState("")
  const [tin, setTin] = useState("")
  const [plazo, setPlazo] = useState("25")

  const C = parseFloat(capital.replace(/\./g, "").replace(",", ".")) || 0
  const tinAnual = parseFloat(tin.replace(",", ".")) || 0
  const n = parseInt(plazo) * 12

  const r = tinAnual / 100 / 12

  let cuotaMensual = 0
  if (r > 0 && n > 0 && C > 0) {
    cuotaMensual = C * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
  } else if (r === 0 && n > 0 && C > 0) {
    cuotaMensual = C / n
  }

  const totalPagado = cuotaMensual * n
  const totalIntereses = totalPagado - C

  const hasResult = C > 0 && tinAnual >= 0 && n > 0

  return (
    <Card>
      <CardBody className="p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capital del préstamo (€)
            </label>
            <input
              type="text"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              placeholder="ej: 200000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              TIN anual (%)
            </label>
            <input
              type="text"
              value={tin}
              onChange={(e) => setTin(e.target.value)}
              placeholder="ej: 3.5"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Plazo (años)
            </label>
            <select
              value={plazo}
              onChange={(e) => setPlazo(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {[10, 15, 20, 25, 30, 35, 40].map((y) => (
                <option key={y} value={y}>{y} años</option>
              ))}
            </select>
          </div>
        </div>

        {hasResult && (
          <ResultBox title="Resultado de tu hipoteca">
            <ResultRow
              label="Cuota mensual"
              value={formatEur(cuotaMensual)}
              highlight
            />
            <ResultRow
              label="Total pagado"
              value={formatEur(totalPagado)}
            />
            <ResultRow
              label="Total intereses"
              value={formatEur(totalIntereses)}
              sublabel={`${((totalIntereses / C) * 100).toFixed(1)}% del capital prestado`}
            />
            <ResultRow
              label="Capital + intereses"
              value={`${formatEur(C)} + ${formatEur(totalIntereses)}`}
            />
          </ResultBox>
        )}

        <div className="text-xs text-gray-400 pt-2 border-t border-gray-100">
          Cálculo con sistema de amortización francés (cuota constante). No incluye seguros ni comisiones.
        </div>
      </CardBody>
    </Card>
  )
}
