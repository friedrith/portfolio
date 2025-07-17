import { Button } from '@/components/Button'

export type StepIdentifyOptions = {
  text?: string
}

export type StepIdentifyProps = {
  options?: StepIdentifyOptions
  onNext?: () => void
}

export function StepIdentify({ options, onNext }: StepIdentifyProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      Identify
      <Button onClick={onNext}>{options?.text ?? 'Book'}</Button>
    </div>
  )
}
