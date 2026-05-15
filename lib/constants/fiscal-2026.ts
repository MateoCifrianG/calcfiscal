// Datos fiscales España 2026
// Fuente: AEAT, Seguridad Social, BOE
// Revisar y actualizar cada enero

export const YEAR = 2026

// ─── IVA ────────────────────────────────────────────────────────────────────
export const IVA_TYPES = [
  { label: "21% — General", value: 0.21 },
  { label: "10% — Reducido", value: 0.10 },
  { label: "4% — Superreducido", value: 0.04 },
  { label: "0% — Exento", value: 0 },
] as const

// ─── IRPF — Tramos estatales 2026 ───────────────────────────────────────────
// Base liquidable general → cuota estatal
export const IRPF_TRAMOS_ESTATAL = [
  { desde: 0,      hasta: 12450,  tipo: 0.095 },
  { desde: 12450,  hasta: 20200,  tipo: 0.12  },
  { desde: 20200,  hasta: 35200,  tipo: 0.15  },
  { desde: 35200,  hasta: 60000,  tipo: 0.185 },
  { desde: 60000,  hasta: 300000, tipo: 0.225 },
  { desde: 300000, hasta: Infinity, tipo: 0.245 },
] as const

// Tramos autonómicos — usando Madrid como referencia (más bajos)
// Para una calculadora genérica se usa la media nacional
export const IRPF_TRAMOS_AUTONOMICO_MEDIO = [
  { desde: 0,      hasta: 12450,  tipo: 0.095 },
  { desde: 12450,  hasta: 20200,  tipo: 0.12  },
  { desde: 20200,  hasta: 35200,  tipo: 0.15  },
  { desde: 35200,  hasta: 60000,  tipo: 0.185 },
  { desde: 60000,  hasta: 300000, tipo: 0.225 },
  { desde: 300000, hasta: Infinity, tipo: 0.245 },
] as const

// ─── Seguridad Social — Cotización trabajadores por cuenta ajena ─────────────
export const SS_TRABAJADOR = {
  contingenciasComunes: 0.047,  // 4.7%
  desempleo: 0.0155,            // 1.55%
  formacionProfesional: 0.001,  // 0.1%
  total: 0.0635,                // 6.35% total trabajador
} as const

export const SS_EMPRESA = {
  contingenciasComunes: 0.236,
  desempleo: 0.055,
  formacionProfesional: 0.006,
  fogasa: 0.002,
  total: 0.299,
} as const

// ─── Cuota Autónomos 2026 — Sistema por tramos de rendimientos netos ─────────
// Fuente: Real Decreto-ley reforma RETA
// Tramos: rendimiento neto anual → cuota mensual mínima/máxima
export const CUOTA_AUTONOMOS_TRAMOS = [
  { desde: 0,      hasta: 670,    min: 200,  max: 590  },
  { desde: 670,    hasta: 900,    min: 220,  max: 590  },
  { desde: 900,    hasta: 1166,   min: 260,  max: 590  },
  { desde: 1166,   hasta: 1300,   min: 290,  max: 590  },
  { desde: 1300,   hasta: 1500,   min: 294,  max: 590  },
  { desde: 1500,   hasta: 1700,   min: 294,  max: 590  },
  { desde: 1700,   hasta: 1850,   min: 310,  max: 590  },
  { desde: 1850,   hasta: 2030,   min: 320,  max: 590  },
  { desde: 2030,   hasta: 2330,   min: 330,  max: 590  },
  { desde: 2330,   hasta: 2760,   min: 340,  max: 590  },
  { desde: 2760,   hasta: 3190,   min: 350,  max: 590  },
  { desde: 3190,   hasta: 3620,   min: 370,  max: 590  },
  { desde: 3620,   hasta: 4050,   min: 390,  max: 590  },
  { desde: 4050,   hasta: 6000,   min: 420,  max: 590  },
  { desde: 6000,   hasta: Infinity, min: 500, max: 590 },
] as const

// Tarifa plana nuevos autónomos (primer año)
export const TARIFA_PLANA = {
  importe: 80,
  duracion: 12, // meses
  descripcion: "80€/mes durante 12 meses para nuevos autónomos",
} as const

// ─── Finiquito ───────────────────────────────────────────────────────────────
export const INDEMNIZACION = {
  despidoImprocedente: 33,  // días por año trabajado (desde 2012)
  despidoProcedente: 20,    // días por año trabajado
  maxAnualidades: 24,       // máximo 24 mensualidades
} as const

// ─── Paro / Desempleo ────────────────────────────────────────────────────────
// Tabla: días cotizados → días de prestación
export const PARO_TABLA = [
  { desde: 360,  hasta: 539,  dias: 120 },
  { desde: 540,  hasta: 719,  dias: 180 },
  { desde: 720,  hasta: 899,  dias: 240 },
  { desde: 900,  hasta: 1079, dias: 300 },
  { desde: 1080, hasta: 1259, dias: 360 },
  { desde: 1260, hasta: 1439, dias: 420 },
  { desde: 1440, hasta: 1619, dias: 480 },
  { desde: 1620, hasta: 1799, dias: 540 },
  { desde: 1800, hasta: 1979, dias: 600 },
  { desde: 1980, hasta: 2159, dias: 660 },
  { desde: 2160, hasta: Infinity, dias: 720 },
] as const

export const PARO_PORCENTAJES = {
  primeros180: 0.70,  // 70% de la base reguladora
  resto: 0.50,        // 50% del resto
} as const

// Topes IPREM 2026 (estimados, revisar BOE)
export const PARO_TOPES = {
  sinHijos:    { min: 560,  max: 1575 },
  unHijo:      { min: 665,  max: 1838 },
  dosHijosPlus:{ min: 793,  max: 2099 },
} as const

// ─── Mínimo personal y familiar IRPF 2026 ───────────────────────────────────
export const MINIMO_PERSONAL = 5550 // € anuales
