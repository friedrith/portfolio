'use client'
import Image from 'next/image'
import { Clock, MapPin, DollarSign, BadgeInfo } from 'lucide-react'
import { useState } from 'react'
import { StepStart, StepStartOptions } from './components/StepStart'
import {
  StepSelectDateTime,
  StepSelectDateTimeOptions,
} from './components/StepSelectDateTime'
import { StepConfirm, StepConfirmOptions } from './components/StepConfirm'
import {
  StepSelectService,
  StepSelectServiceOptions,
} from './components/StepSelectService'
import { StepSuccess, StepSuccessOptions } from './components/StepSuccess'
import { StepIdentify, StepIdentifyOptions } from './components/StepIdentify'

type Items = {
  location?: string
  duration?: string
  extra?: string
  price?: string
}

const allSteps = [
  'start',
  'select-service',
  'select-date',
  'identify',
  'confirm',
  'success',
] as const

type Step = (typeof allSteps)[number]

type AppointmentCalendarProps = {
  logo?: string
  preTitle?: string
  title?: string
  description?: string
  items?: Items
  initialStep?: Step
  stepOptions?: {
    start?: StepStartOptions
    'select-service'?: StepSelectServiceOptions
    'select-date'?: StepSelectDateTimeOptions
    identify?: StepIdentifyOptions
    confirm?: StepConfirmOptions
    success?: StepSuccessOptions
  }
  steps?: Array<Step>
}

const itemIcons: Record<keyof Items, typeof Clock> = {
  duration: Clock,
  location: MapPin,
  price: DollarSign,
  extra: BadgeInfo,
} as const

const stepComponents = {
  start: StepStart,
  'select-service': StepSelectService,
  'select-date': StepSelectDateTime,
  identify: StepIdentify,
  confirm: StepConfirm,
  success: StepSuccess, // Assuming this is similar to StepConfirm
} as const

export function AppointmentCalendar({
  logo,
  preTitle,
  title = 'Title',
  description = 'Description',
  items = {},
  initialStep = 'start',
  steps = [
    'start',
    'select-service',
    'select-date',
    'identify',
    'confirm',
    'success',
  ],
  stepOptions = {},
}: AppointmentCalendarProps) {
  const [currentStep, setCurrentStep] = useState<Step>(initialStep)

  const StepComponent = stepComponents[currentStep]

  const stepOption = stepOptions[currentStep] || {}

  const onNext = () => {
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1])
    }
  }

  return (
    <div>
      <div className="max-w-md m-auto flex flex-col items-center px-5 py-20 gap-6">
        {logo && (
          <Image
            src={logo}
            alt="logo"
            width={150}
            height={150}
            className="rounded-full bg-background shadow"
          />
        )}
        <div className="flex flex-col gap-2">
          {preTitle && (
            <div className="scroll-m-20 text-center text-xl font-semibold tracking-tight text-balance text-muted-foreground">
              {preTitle}
            </div>
          )}
          <h1 className="scroll-m-20 text-center text-3xl font-extrabold tracking-tight text-balance text-foreground">
            {title}
          </h1>
          <p className="leading-5 text-muted-foreground text-center">
            {description}
          </p>
          <div className="flex flex-col items-center mt-4">
            <ul className="flex flex-col list-none gap-1">
              {Object.entries(items).map(([key, value]) => {
                const Icon = itemIcons[key as keyof Items]
                return (
                  <li
                    key={key}
                    className="flex items-center gap-2 text-md text-muted-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{value}</span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-3">
            {StepComponent && (
              <StepComponent options={stepOption} onNext={onNext} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
