export function Tag({
  children,
  className,
}: // variant = 'primary',
{
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary'
}) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border border-muted-foreground/20 text-sm ${className}`}
    >
      {children}
    </span>
  )
}
