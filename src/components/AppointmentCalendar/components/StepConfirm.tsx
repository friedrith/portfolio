import { Button } from '@/components/ui/button'
import { Step } from './Step'
import { useStepContext } from './StepContext'
import { AppointmentDetails } from './AppointmentDetails'

export type StepConfirmOptions = {
  title?: string
  confirmText?: string
  extraConfirmationText?: string
}

export type StepConfirmProps = {
  options?: StepConfirmOptions
  onNext?: () => void
  onBack?: () => void
}

export function StepConfirm({ options, onNext, onBack }: StepConfirmProps) {
  const { appointment } = useStepContext()

  return (
    <Step
      title={options?.title ?? 'Do you confirm?'}
      onBack={onBack}
      footer={
        <>
          <div className="text-sm">{options?.extraConfirmationText}</div>
          <Button onClick={onNext}>{options?.confirmText ?? 'Confirm'}</Button>
        </>
      }
    >
      <div className="p-6 flex flex-col items-center">
        <AppointmentDetails appointment={appointment} />
      </div>
    </Step>
  )
}
