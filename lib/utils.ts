// Formato de moneda española
export function formatEur(value: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

// Formato número sin símbolo
export function formatNum(value: number, decimals = 2): string {
  return new Intl.NumberFormat("es-ES", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

// Formato porcentaje
export function formatPct(value: number): string {
  return `${formatNum(value * 100, 1)}%`
}

// Calcular IRPF progresivo con tabla de tramos
export function calcularIRPFProgresivo(
  base: number,
  tramos: readonly { desde: number; hasta: number; tipo: number }[]
): number {
  let cuota = 0
  for (const tramo of tramos) {
    if (base <= tramo.desde) break
    const baseTramo = Math.min(base, tramo.hasta) - tramo.desde
    cuota += baseTramo * tramo.tipo
  }
  return cuota
}

// Clamp entre min y max
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

// Limpiar input numérico (acepta coma y punto como separador decimal)
export function parseInputNum(value: string): number {
  const cleaned = value.replace(/\./g, "").replace(",", ".")
  const parsed = parseFloat(cleaned)
  return isNaN(parsed) ? 0 : parsed
}
