"use client"

import { useState, useMemo } from "react"
import { CUOTA_AUTONOMOS_TRAMOS, TARIFA_PLANA, YEAR } from "@/lib/constants/fiscal-2026"
import { formatEur } from "@/lib/utils"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Disclaimer } from "@/components/ui/Disclaimer"

export function CalculadoraCuotaAutonomos() {
  const [rendimientos, setRendimientos] = useState("")
  const [nuevaAlta, setNuevaAlta] = useState(false)

  const rendNum = parseFloat(rendimientos.replace(",", ".")) || 0
  const rendMensual = rendNum

  const resultado = useMemo(() => {
    if (rendMensual <= 0) return null

    const tramo = CUOTA_AUTONOMOS_TRAMOS.find(
      (t) => rendMensual >= t.desde && rendMensual < t.hasta
    ) || CUOTA_AUTONOMOS_TRAMOS[CUOTA_AUTONOMOS_TRAMOS.length - 1]

    const cuotaMinima = tramo.min
    const cuotaMaxima = tramo.max
    const cuotaRecomendada = Math.round((cuotaMinima + cuotaMaxima) / 2)
    const cuotaAnual = cuotaMinima * 12

    return {
      tramo: CUOTA_AUTONOMOS_TRAMOS.indexOf(tramo) + 1,
      desde: tramo.desde,
      hasta: tramo.hasta === Infinity ? "+" : tramo.hasta,
      cuotaMinima,
      cuotaMaxima,
      cuotaRecomendada,
      cuotaAnual,
      cuotaTarifaPlana: TARIFA_PLANA.importe,
      ahorroPrimerAno: (cuotaMinima - TARIFA_PLANA.importe) * 12,
    }
  }, [rendMensual])

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Rendimientos netos mensuales previstos (€)
        </label>
        <div className="relative">
          <input
            type="number"
            value={rendimientos}
            onChange={(e) => setRendimientos(e.target.value)}
            placeholder="1.500"
            min="0"
            step="50"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 text-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
            €/mes
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-1.5">
          Ingresos menos gastos deducibles estimados. Si no sabes, usa tus ingresos brutos.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="nuevaAlta"
          checked={nuevaAlta}
          onChange={(e) => setNuevaAlta(e.target.checked)}
          className="w-4 h-4 text-blue-600 rounded"
        />
        <label htmlFor="nuevaAlta" className="text-sm text-gray-700">
          Soy nuevo autónomo (menos de 12 meses cotizados)
        </label>
      </div>

      {resultado ? (
        <div className="calc-result space-y-4">
          {nuevaAlta && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-green-800 mb-1">
                🎉 Tarifa plana disponible — {YEAR}
              </p>
              <p className="text-sm text-green-700">
                Como nuevo autónomo puedes pagar solo{" "}
                <strong>{formatEur(TARIFA_PLANA.importe)}/mes</strong> durante{" "}
                {TARIFA_PLANA.duracion} meses. Ahorro estimado:{" "}
                <strong>{formatEur(resultado.ahorroPrimerAno)}</strong> en el primer año.
              </p>
            </div>
          )}

          <ResultBox title={`Tramo ${resultado.tramo} — ${resultado.desde}€ a ${resultado.hasta}€/mes`}>
            <ResultRow
              label="Cuota mínima mensual"
              value={formatEur(resultado.cuotaMinima)}
              highlight
              sublabel="Puedes elegir cualquier base entre mínima y máxima"
            />
            <ResultRow
              label="Cuota máxima mensual"
              value={formatEur(resultado.cuotaMaxima)}
            />
            <ResultRow
              label="Coste anual mínimo"
              value={formatEur(resultado.cuotaAnual)}
            />
          </ResultBox>

          {nuevaAlta && (
            <ResultBox title="Con tarifa plana (primer año)">
              <ResultRow
                label="Cuota primer año"
                value={`${formatEur(TARIFA_PLANA.importe)}/mes`}
                highlight
              />
              <ResultRow
                label="Ahorro vs cuota mínima"
                value={formatEur(resultado.ahorroPrimerAno)}
              />
            </ResultBox>
          )}
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 text-sm">
          Introduce tus rendimientos mensuales esperados para ver tu cuota
        </div>
      )}

      <Disclaimer text="La cuota exacta la determina la Seguridad Social en función de tus rendimientos reales declarados en la Renta. Puedes cambiar tu base de cotización hasta 6 veces al año." />
    </div>
  )
}
