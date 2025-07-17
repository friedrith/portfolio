import { Button } from '@/components/Button'

export type StepConfirmOptions = {
  text?: string
}

export type StepConfirmProps = {
  options?: StepConfirmOptions
  onNext?: () => void
}

export function StepConfirm({ options, onNext }: StepConfirmProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      Do you confirm your booking?
      <Button onClick={onNext}>{options?.text ?? 'I confirm'}</Button>
    </div>
  )
}
