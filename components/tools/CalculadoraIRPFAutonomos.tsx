"use client"

import { useState, useMemo } from "react"
import { IRPF_TRAMOS_ESTATAL, MINIMO_PERSONAL } from "@/lib/constants/fiscal-2026"
import { formatEur, formatPct, calcularIRPFProgresivo } from "@/lib/utils"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Disclaimer } from "@/components/ui/Disclaimer"

export function CalculadoraIRPFAutonomos() {
  const [ingresos, setIngresos] = useState("")
  const [gastos, setGastos] = useState("")
  const [retenciones, setRetenciones] = useState("")

  const ingresosNum = parseFloat(ingresos.replace(",", ".")) || 0
  const gastosNum = parseFloat(gastos.replace(",", ".")) || 0
  const retencionesNum = parseFloat(retenciones.replace(",", ".")) || 0

  const resultado = useMemo(() => {
    if (ingresosNum <= 0) return null

    const rendimientoNeto = Math.max(ingresosNum - gastosNum, 0)
    const baseImponible = Math.max(rendimientoNeto - MINIMO_PERSONAL, 0)

    const cuotaEstatal = calcularIRPFProgresivo(baseImponible, IRPF_TRAMOS_ESTATAL)
    const irpfTotal = cuotaEstatal * 2 // estatal + autonómica media
    const irpfPendiente = Math.max(irpfTotal - retencionesNum, 0)
    const irpfDevolucion = Math.max(retencionesNum - irpfTotal, 0)
    const pagoFraccionadoTrimestral = Math.max(
      rendimientoNeto * 0.2 - retencionesNum / 4,
      0
    )
    const tipoEfectivo = ingresosNum > 0 ? irpfTotal / ingresosNum : 0

    return {
      rendimientoNeto,
      baseImponible,
      irpfTotal,
      irpfPendiente,
      irpfDevolucion,
      pagoFraccionadoTrimestral,
      tipoEfectivo,
      hayRetencion: retencionesNum > 0,
    }
  }, [ingresosNum, gastosNum, retencionesNum])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Ingresos anuales (€)
          </label>
          <input
            type="number"
            value={ingresos}
            onChange={(e) => setIngresos(e.target.value)}
            placeholder="40.000"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Gastos deducibles (€)
          </label>
          <input
            type="number"
            value={gastos}
            onChange={(e) => setGastos(e.target.value)}
            placeholder="10.000"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Retenciones ya aplicadas (€)
          </label>
          <input
            type="number"
            value={retenciones}
            onChange={(e) => setRetenciones(e.target.value)}
            placeholder="0"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">El 15% retenido en tus facturas</p>
        </div>
      </div>

      {resultado ? (
        <div className="calc-result space-y-4">
          <ResultBox title="Resultado IRPF estimado">
            <ResultRow label="Rendimiento neto" value={formatEur(resultado.rendimientoNeto)} />
            <ResultRow label="Base imponible" value={formatEur(resultado.baseImponible)} sublabel="Después del mínimo personal" />
            <ResultRow
              label={`IRPF total estimado (tipo efectivo ${formatPct(resultado.tipoEfectivo)})`}
              value={formatEur(resultado.irpfTotal)}
              highlight
            />
          </ResultBox>

          {resultado.hayRetencion ? (
            <ResultBox title="Resultado en la Declaración de la Renta">
              {resultado.irpfDevolucion > 0 ? (
                <ResultRow
                  label="A devolver (retención > cuota)"
                  value={`+ ${formatEur(resultado.irpfDevolucion)}`}
                  highlight
                />
              ) : (
                <ResultRow
                  label="A pagar en la Renta"
                  value={formatEur(resultado.irpfPendiente)}
                  highlight
                />
              )}
            </ResultBox>
          ) : null}

          <ResultBox title="Pago fraccionado (Modelo 130)">
            <ResultRow
              label="Estimación por trimestre"
              value={formatEur(resultado.pagoFraccionadoTrimestral)}
              sublabel="20% rendimiento neto trimestral estimado"
            />
          </ResultBox>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 text-sm">
          Introduce tus ingresos anuales para ver el IRPF estimado
        </div>
      )}

      <Disclaimer text="Cálculo orientativo usando tramos estatales × 2 como aproximación de la tarifa total (estatal + autonómica media). Tu IRPF real puede variar según CCAA, deducciones y circunstancias personales." />
    </div>
  )
}
