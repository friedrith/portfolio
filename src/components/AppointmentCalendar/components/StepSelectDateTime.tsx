import { Button } from '@/components/Button'

export type StepSelectDateTimeOptions = {
  text?: string
}

export type StepSelectDateTimeProps = {
  options?: StepSelectDateTimeOptions
  onNext?: () => void
}

export function StepSelectDateTime({
  options,
  onNext,
}: StepSelectDateTimeProps) {
  return <div className="flex flex-col items-center gap-4">Date</div>
}
