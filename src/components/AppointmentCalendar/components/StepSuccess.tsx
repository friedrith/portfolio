import { Button } from '@/components/Button'

export type StepSuccessOptions = {
  text?: string
}

export type StepSuccessProps = {
  options?: StepSuccessOptions
  onNext?: () => void
}

export function StepSuccess({ options, onNext }: StepSuccessProps) {
  return <div className="flex flex-col items-center gap-4">Success</div>
}
