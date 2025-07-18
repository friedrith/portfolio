import { Button } from '@/components/ui/button'
import { ButtonProps } from '../types'

export function SignButton({ className, onClick }: ButtonProps) {
  return (
    <Button className={className} onClick={onClick}>
      Email
    </Button>
  )
}
