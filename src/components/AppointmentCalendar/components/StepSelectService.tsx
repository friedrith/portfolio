import { Button } from '@/components/Button'

export type StepSelectServiceOptions = {
  services?: Array<string>
}

export type StepSelectServiceProps = {
  options?: StepSelectServiceOptions
  onNext?: () => void
}

export function StepSelectService({ options, onNext }: StepSelectServiceProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2>Select a Service</h2>
      <ul>
        {options?.services?.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      <Button onClick={onNext}>Next</Button>
    </div>
  )
}
