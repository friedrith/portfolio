import { Button } from '@/components/ui/button'
import { StepComponentProps } from './Step'
import { useStepContext } from './StepContext'
import { AppointmentDetails } from './AppointmentDetails'

export type StepStartOptions = {
  text?: string
}

export type StepStartProps = StepComponentProps & {
  options?: StepStartOptions
}

export function StepStart({ options }: StepStartProps) {
  const { appointment } = useStepContext()

  return (
    <div className="">
      <div className="max-w-sm m-auto flex flex-col items-center">
        <AppointmentDetails short appointment={appointment} />
        <Button className="w-full mt-5" asChild>
          <a href="mailto:thibault.friedrich@interaction-dynamics.io?subject=1-on-1 Free coaching session">
            {options?.text ?? 'Book'}
          </a>
        </Button>
      </div>
    </div>
  )
}
