import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import { Step, StepComponentProps } from './Step'
import { useStepContext } from './StepContext'
import { renderPrice } from '../utils/renderPrice'
import { renderDuration } from '../utils/renderDuration'
import { cn } from '@/lib/utils'

export type StepSelectServiceOptions = {
  title?: string
}

export type StepSelectServiceProps = StepComponentProps & {
  options?: StepSelectServiceOptions
}

function ServiceItem({
  title,
  description,
  extra,
  renderExtra,
  onClick,
}: {
  title: string
  description?: string
  extra?: React.ReactNode
  renderExtra: boolean
  onClick: () => void
}) {
  return (
    <Button
      className="w-full md:w-auto flex py-6"
      size="lg"
      variant="outline"
      onClick={onClick}
    >
      <span className="flex-1 text-start">{title}</span>
      {description && (
        <div
          className={cn(
            'flex-1 text-sm text-muted-foreground px-2',
            renderExtra ? 'text-start' : 'text-end'
          )}
        >
          {description}
        </div>
      )}
      {renderExtra && (
        <div className="flex-1 text-end">{extra && <Badge>{extra}</Badge>}</div>
      )}
    </Button>
  )
}

export function StepSelectService({
  options,
  onBack,
  onNext,
}: StepSelectServiceProps) {
  const { services } = useStepContext()

  const atLeastOneDuration = services.some((s) => s.duration)

  return (
    <Step title={options?.title ?? 'Select Service'} onBack={onBack}>
      <div>
        <div className="relative flex flex-col items-stretch p-4 gap-4">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              onClick={() => onNext?.({ service })}
              title={service.name}
              description={renderPrice(service.price)}
              renderExtra={atLeastOneDuration}
              extra={renderDuration(service.duration ?? 0)}
            />
          ))}
        </div>
      </div>
    </Step>
  )
}
