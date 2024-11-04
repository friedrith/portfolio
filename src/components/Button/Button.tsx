export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const styles = {
  primary: 'bg-primary text-background',
  secondary: 'bg-gray-500 text-white',
  lg: 'py-3 px-6 text-lg',
  md: '',
  sm: '',
}

export function Button({
  children,
  variant = 'primary',
  className,
  size = 'lg',
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`rounded-full font-semibold ${styles[variant]} ${styles[size]} ${className}`}
    >
      {children}
    </button>
  )
}
