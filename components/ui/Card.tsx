interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = "", hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-gray-200 shadow-sm ${
        hover ? "hover:shadow-md hover:-translate-y-0.5 transition-all duration-200" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 pt-6 pb-4 ${className}`}>{children}</div>
}

export function CardBody({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>
}
