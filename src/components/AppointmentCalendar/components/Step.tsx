import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { ChevronLeft } from 'lucide-react'
import { Appointment } from '../entities/appointment'

export type StepProps = {
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  onBack?: () => void
}

export type StepComponentProps = {
  onBack?: () => void
  onNext?: (appointment?: Partial<Appointment>) => void
}

export function Step({ title, children, footer, onBack }: StepProps) {
  return (
    <Card className="gap-0 p-0">
      <CardHeader className="flex relative gap-4 border-b !py-5 px-6 flex-row justify-center">
        <div className="absolute left-6 inset-y-0 flex items-center">
          <Button variant="ghost" onClick={onBack}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            <span className="hidden md:inline">Back</span>
          </Button>
        </div>
        <div className="font-semibold">{title}</div>
      </CardHeader>
      <CardContent className="p-0">{children}</CardContent>
      {footer && (
        <CardFooter className="flex flex-col gap-4 border-t !py-5 px-6 md:flex-row justify-between">
          {footer}
        </CardFooter>
      )}
    </Card>
  )
}
