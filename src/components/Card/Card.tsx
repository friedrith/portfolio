export interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className }: CardProps) {
  return <div className={`rounded-xl ${className}`}>{children}</div>
}

export interface CardContentProps {
  children: React.ReactNode
  className?: string
}

Card.Content = function CardContent({ children, className }: CardContentProps) {
  return <div className={`p-4 py-5 ${className}`}>{children}</div>
}
