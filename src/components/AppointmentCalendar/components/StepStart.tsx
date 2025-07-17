import { Button } from '@/components/Button'

export type StepStartOptions = {
  text?: string
}

export type StepStartProps = {
  options?: StepStartOptions
  onNext?: () => void
}

export function StepStart({ options, onNext }: StepStartProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button onClick={onNext}>{options?.text ?? 'Book'}</Button>
    </div>
  )
}
