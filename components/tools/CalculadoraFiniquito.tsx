"use client"

import { useState, useMemo } from "react"
import { INDEMNIZACION } from "@/lib/constants/fiscal-2026"
import { formatEur } from "@/lib/utils"
import { ResultBox, ResultRow } from "@/components/ui/ResultBox"
import { Disclaimer } from "@/components/ui/Disclaimer"

const TIPOS_BAJA = [
  { id: "voluntaria", label: "Baja voluntaria", indemnizacion: 0, descripcion: "No hay indemnización, solo partes proporcionales" },
  { id: "mutuo_acuerdo", label: "Mutuo acuerdo", indemnizacion: 0, descripcion: "Se negocia, puede ser 0 o acordada entre partes" },
  { id: "procedente", label: "Despido procedente", indemnizacion: INDEMNIZACION.despidoProcedente, descripcion: `${INDEMNIZACION.despidoProcedente} días por año trabajado` },
  { id: "improcedente", label: "Despido improcedente", indemnizacion: INDEMNIZACION.despidoImprocedente, descripcion: `${INDEMNIZACION.despidoImprocedente} días por año trabajado` },
] as const

export function CalculadoraFiniquito() {
  const [salarioBruto, setSalarioBruto] = useState("")
  const [anosT, setAnosT] = useState("")
  const [mesesT, setMesesT] = useState("")
  const [diasT, setDiasT] = useState("")
  const [tipoBaja, setTipoBaja] = useState<"voluntaria" | "mutuo_acuerdo" | "procedente" | "improcedente">("improcedente")
  const [diasVacaciones, setDiasVacaciones] = useState("")
  const [pagas, setPagas] = useState(14)

  const resultado = useMemo(() => {
    const salario = parseFloat(salarioBruto.replace(",", ".")) || 0
    if (salario <= 0) return null

    const anos = parseInt(anosT) || 0
    const meses = parseInt(mesesT) || 0
    const dias = parseInt(diasT) || 0
    const totalDiasLaborados = anos * 365 + meses * 30 + dias
    const anosDecimal = totalDiasLaborados / 365

    const salarioDiario = salario / 365
    const salarioMensual = salario / 12

    // Parte proporcional vacaciones no disfrutadas
    const vacacionesBase = parseInt(diasVacaciones) || 0
    const vacacionesProp = vacacionesBase * salarioDiario

    // Parte proporcional paga extra (si hay 14 pagas)
    const pagasExtra = pagas - 12
    const mesActual = new Date().getMonth() // para calcular prop
    const pagaExtraProp = pagasExtra > 0
      ? (salarioMensual / 12) * ((new Date().getMonth() % 6) + 1)
      : 0

    // Indemnización
    const tipoBajaInfo = TIPOS_BAJA.find((t) => t.id === tipoBaja)!
    const diasIndemnizacion = tipoBajaInfo.indemnizacion
    const indemnizacion = Math.min(
      diasIndemnizacion * salarioDiario * anosDecimal,
      salarioMensual * INDEMNIZACION.maxAnualidades
    )

    const totalFiniquito = vacacionesProp + pagaExtraProp + indemnizacion

    return {
      salarioDiario,
      vacacionesProp,
      pagaExtraProp,
      indemnizacion,
      totalFiniquito,
      anosDecimal,
      tipoBajaInfo,
    }
  }, [salarioBruto, anosT, mesesT, diasT, tipoBaja, diasVacaciones, pagas])

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Salario bruto anual (€)</label>
          <input type="number" value={salarioBruto} onChange={(e) => setSalarioBruto(e.target.value)} placeholder="28.000" className="w-full border border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Número de pagas</label>
          <select value={pagas} onChange={(e) => setPagas(parseInt(e.target.value))} className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
            <option value={12}>12 pagas</option>
            <option value={14}>14 pagas (con extras)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tiempo trabajado en la empresa</label>
        <div className="grid grid-cols-3 gap-3">
          {[{ val: anosT, set: setAnosT, label: "Años" }, { val: mesesT, set: setMesesT, label: "Meses" }, { val: diasT, set: setDiasT, label: "Días" }].map((f) => (
            <div key={f.label}>
              <input type="number" value={f.val} onChange={(e) => f.set(e.target.value)} placeholder="0" min="0" className="w-full border border-gray-300 rounded-xl px-3 py-2.5 text-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <p className="text-xs text-center text-gray-500 mt-1">{f.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de baja o despido</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TIPOS_BAJA.map((t) => (
            <button key={t.id} onClick={() => setTipoBaja(t.id)} className={`text-left p-3 rounded-xl border text-sm transition-colors ${tipoBaja === t.id ? "bg-blue-50 border-blue-400 text-blue-900" : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"}`}>
              <p className="font-medium">{t.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{t.descripcion}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Días de vacaciones no disfrutadas</label>
        <input type="number" value={diasVacaciones} onChange={(e) => setDiasVacaciones(e.target.value)} placeholder="0" min="0" max="30" className="w-full border border-gray-300 rounded-xl px-4 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500" />
      </div>

      {resultado ? (
        <div className="calc-result space-y-4">
          <ResultBox title="Desglose del finiquito">
            {resultado.vacacionesProp > 0 && <ResultRow label="Vacaciones no disfrutadas" value={formatEur(resultado.vacacionesProp)} />}
            {resultado.pagaExtraProp > 0 && <ResultRow label="Parte proporcional paga extra" value={formatEur(resultado.pagaExtraProp)} />}
            {resultado.indemnizacion > 0 && <ResultRow label={`Indemnización (${resultado.tipoBajaInfo.indemnizacion} días/año × ${resultado.anosDecimal.toFixed(1)} años)`} value={formatEur(resultado.indemnizacion)} />}
            <ResultRow label="TOTAL FINIQUITO ESTIMADO" value={formatEur(resultado.totalFiniquito)} highlight />
          </ResultBox>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 text-sm">Introduce los datos para calcular el finiquito</div>
      )}

      <Disclaimer text="El finiquito real puede incluir otros conceptos (horas extra, comisiones, complementos). En caso de despido improcedente, es recomendable consultar con un abogado laboralista." />
    </div>
  )
}
