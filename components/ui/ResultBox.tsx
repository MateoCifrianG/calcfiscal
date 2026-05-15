"use client"

interface ResultRowProps {
  label: string
  value: string
  highlight?: boolean
  sublabel?: string
}

export function ResultRow({ label, value, highlight = false, sublabel }: ResultRowProps) {
  return (
    <div
      className={`flex items-center justify-between py-3 px-4 rounded-xl ${
        highlight
          ? "bg-blue-50 border border-blue-200"
          : "bg-gray-50 border border-gray-100"
      }`}
    >
      <div>
        <p className={`text-sm font-medium ${highlight ? "text-blue-900" : "text-gray-700"}`}>
          {label}
        </p>
        {sublabel && <p className="text-xs text-gray-500 mt-0.5">{sublabel}</p>}
      </div>
      <p
        className={`text-lg font-bold ${
          highlight ? "text-blue-700" : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  )
}

interface ResultBoxProps {
  title?: string
  children: React.ReactNode
}

export function ResultBox({ title, children }: ResultBoxProps) {
  return (
    <div className="space-y-2">
      {title && (
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}
