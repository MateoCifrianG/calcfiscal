import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "CalcFiscal — Calculadoras fiscales para España 2026"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1d4ed8 0%, #1e40af 50%, #1e3a8a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "32px" }}>
          <div style={{ fontSize: "64px" }}>🧮</div>
          <div style={{ fontSize: "52px", fontWeight: "800", color: "white" }}>CalcFiscal</div>
        </div>
        <div
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "white",
            textAlign: "center",
            lineHeight: "1.3",
            marginBottom: "24px",
          }}
        >
          Calculadoras fiscales y laborales
          <br />para España 2026
        </div>
        <div
          style={{
            fontSize: "22px",
            color: "#bfdbfe",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Sueldo neto · IVA · Autónomos · Finiquito · Paro · Hipoteca
        </div>
        <div
          style={{
            marginTop: "40px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "12px",
            padding: "12px 28px",
            fontSize: "20px",
            color: "white",
            fontWeight: "600",
          }}
        >
          Gratis · Sin registro · Actualizadas 2026
        </div>
      </div>
    ),
    { ...size }
  )
}
