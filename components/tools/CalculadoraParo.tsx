"use client"

import { useState } from "react"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Card, CardBody } from "@/components/ui/Card"
import { PARO_TABLA, PARO_PORCENTAJES } from "@/lib/constants/fiscal-2026"
import { formatEur } from "@/lib/utils"

export function CalculadoraParo() {
  const [diasCotizados, setDiasCotizados] = useState("")
  const [salarioBrutoMensual, setSalarioBrutoMensual] = useState("")

  const dias = parseFloat(diasCotizados) || 0
  const salario = parseFloat(salarioBrutoMensual.replace(/\./g, "").replace(",", ".")) || 0

  const tramo = PARO_TABLA.find((t) => dias >= t.minDias && (t.maxDias === null || dias <= t.maxDias))
  const diasPrestacion = tramo?.diasPrestacion ?? 0

  const baseReguladora = (salario * 12) / 365
  const cuota1 = baseReguladora * PARO_PORCENTAJES.primeros180
  const cuota2 = baseReguladora * PARO_PORCENTAJES.resto

  const dias1 = Math.min(diasPrestacion, 180)
  const dias2 = Math.max(0, diasPrestacion - 180)
  const meses1 = dias1 / 30
  const meses2 = dias2 / 30

  const totalPeriodo1 = cuota1 * 30 * meses1
  const totalPeriodo2 = cuota2 * 30 * meses2
  const totalCobrado = totalPeriodo1 + totalPeriodo2

  const mesesPrestacion = Math.round((diasPrestacion / 30) * 10) / 10

  const hasResult = dias >= 360 && salario > 0

  return (
    <Card>
      <CardBody className="p-6 space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Días cotizados (últimos 6 años)
            </label>
            <input
              type="number"
              value={diasCotizados}
              onChange={(e) => setDiasCotizados(e.target.value)}
              placeholder="ej: 1095"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-400 mt-1">Mínimo 360 días para tener derecho</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Salario bruto mensual (€)
            </label>
            <input
              type="text"
              value={salarioBrutoMensual}
              onChange={(e) => setSalarioBrutoMensual(e.target.value)}
              placeholder="ej: 2000"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {dias > 0 && dias < 360 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
            Con {dias} días cotizados no tienes derecho a la prestación contributiva. Se necesitan mínimo 360 días.
          </div>
        )}

        {hasResult && (
          <ResultBox title="Tu prestación por desempleo">
            <ResultRow
              label="Duración de la prestación"
              value={`${mesesPrestacion} meses (${diasPrestacion} días)`}
              highlight
            />
            <ResultRow
              label={`Cuota mensual primeros ${Math.min(6, mesesPrestacion)} meses (70%)`}
              value={formatEur(cuota1 * 30)}
            />
            {dias2 > 0 && (
              <ResultRow
                label={`Cuota mensual resto (50%)`}
                value={formatEur(cuota2 * 30)}
              />
            )}
            <ResultRow
              label="Total cobrado estimado"
              value={formatEur(totalCobrado)}
              highlight
              sublabel="Antes de retención de IRPF"
            />
          </ResultBox>
        )}

        <div className="text-xs text-gray-400 pt-2 border-t border-gray-100">
          Cálculo orientativo. El importe real puede variar según las bases de cotización exactas y el IPREM vigente.
        </div>
      </CardBody>
    </Card>
  )
}
