import { StepComponentProps } from './Step'
import { useStepContext } from './StepContext'
import { CircleCheck } from 'lucide-react'
import { AppointmentDetails } from './AppointmentDetails'

export type StepSuccessOptions = {
  text?: string
}

export type StepSuccessProps = StepComponentProps & {
  options?: StepSuccessOptions
  onNext?: () => void
  onBack?: () => void
}

export function StepSuccess({}: StepSuccessProps) {
  const { appointment } = useStepContext()

  return (
    <div className="flex flex-col items-center gap-4 mt-3">
      <CircleCheck className="w-12 h-12 text-green-500" />
      <AppointmentDetails appointment={appointment} />
    </div>
  )
}
