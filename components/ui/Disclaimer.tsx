export function Disclaimer({ text }: { text?: string }) {
  return (
    <div className="flex gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
      <span className="text-amber-500 mt-0.5 shrink-0">⚠️</span>
      <p>
        {text ||
          "Los resultados de esta calculadora son orientativos. Para decisiones fiscales concretas, consulta con un asesor o gestor autorizado."}
      </p>
    </div>
  )
}
