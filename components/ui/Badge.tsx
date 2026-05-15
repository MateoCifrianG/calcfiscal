interface BadgeProps {
  children: React.ReactNode
  variant?: "blue" | "green" | "gray" | "yellow"
}

export function Badge({ children, variant = "blue" }: BadgeProps) {
  const styles = {
    blue: "bg-blue-100 text-blue-700",
    green: "bg-green-100 text-green-700",
    gray: "bg-gray-100 text-gray-600",
    yellow: "bg-yellow-100 text-yellow-700",
  }
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant]}`}
    >
      {children}
    </span>
  )
}
