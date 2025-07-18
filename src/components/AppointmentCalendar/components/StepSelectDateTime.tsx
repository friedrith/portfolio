import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'
import { Step, StepComponentProps } from './Step'
import { useStepContext } from './StepContext'

export type StepSelectDateTimeOptions = {
  title?: string
  text?: string
}

export type StepSelectDateTimeProps = StepComponentProps & {
  options?: StepSelectDateTimeOptions
}

const getTime = (date: Date | undefined) => {
  if (!date) return null
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

export function StepSelectDateTime({
  options,
  onNext,
  onBack,
}: StepSelectDateTimeProps) {
  const { appointment } = useStepContext()

  const [date, setDate] = useState<Date | undefined>(
    appointment.startDate ?? new Date(2025, 5, 12)
  )
  const [selectedTime, setSelectedTime] = useState<string | null>(
    getTime(appointment.startDate) ?? '10:00'
  )
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60
    return `${hour.toString().padStart(2, '0')}:${minute
      .toString()
      .padStart(2, '0')}`
  })

  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(2025, 5, 17 + i)
  )

  return (
    <Step
      onBack={onBack}
      title={options?.title ?? 'Select Date and Time'}
      footer={
        <>
          <div className="text-sm">
            {date && selectedTime ? (
              <>
                Your meeting is booked for{' '}
                <span className="font-medium">
                  {' '}
                  {date?.toLocaleDateString('en-US', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                  })}{' '}
                </span>
                at <span className="font-medium">{selectedTime}</span>.
              </>
            ) : (
              <>Select a date and time for your meeting.</>
            )}
          </div>
          <Button
            disabled={!date || !selectedTime}
            className="w-full md:ml-auto md:w-auto"
            variant="outline"
            onClick={() => {
              if (!date || !selectedTime) return
              const startDate = new Date(date)
              const [hours, minutes] = selectedTime.split(':').map(Number)
              startDate.setHours(hours, minutes, 0, 0)

              let endDate = undefined

              if (appointment.service?.duration) {
                endDate = new Date(startDate)
                endDate.setMinutes(
                  endDate.getMinutes() + appointment.service.duration
                )
              }

              onNext?.({ startDate, endDate })
            }}
          >
            Continue
          </Button>
        </>
      }
    >
      <div className="relative md:pr-48">
        <div className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: '[&>button]:line-through opacity-100',
            }}
            className="bg-transparent p-0 [--cell-size:2.5rem] md:[--cell-size:3rem]"
            formatters={{
              formatWeekdayName: (date) => {
                return date.toLocaleString('en-US', { weekday: 'short' })
              },
            }}
          />
        </div>
        <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-l md:border-t-0">
          <div className="grid gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? 'default' : 'outline'}
                onClick={() => setSelectedTime(time)}
                className="w-full shadow-none"
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </Step>
  )
}
