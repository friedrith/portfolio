'use client'
import Image from 'next/image'

import React, { useMemo, useState } from 'react'
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
import {
  SignProviders,
  StepIdentify,
  StepIdentifyOptions,
} from './components/StepIdentify'
import { Appointment } from './entities/appointment'
import { convertService, Service } from './entities/service'
import { allSteps, Step } from './entities/step'
import { StepContext } from './components/StepContext'

type AppointmentCalendarProps = {
  logo?: string
  preTitle?: string
  title?: string
  description?: string | React.ReactNode
  stepOptions?: {
    start?: StepStartOptions
    'select-service'?: StepSelectServiceOptions
    'select-date'?: StepSelectDateTimeOptions
    identify?: StepIdentifyOptions
    confirm?: StepConfirmOptions
    success?: StepSuccessOptions
  }
  steps?: Array<Step>
  services: Array<Service> | Array<string>
  signProviders?: SignProviders
}

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
  steps = [...allSteps],
  stepOptions = {},
  services = ['appointment'],
  signProviders = ['google', 'facebook', 'apple', 'email-without-password'],
}: AppointmentCalendarProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const onlyOneService = services.length === 1

  const [appointment, setAppointment] = useState<Appointment>({
    id: 'random',
    service: onlyOneService ? convertService(services[0]) : undefined,
  })

  const actualSteps = useMemo(
    () =>
      onlyOneService ? steps.filter((s) => s !== 'select-service') : steps,
    [steps, onlyOneService]
  )

  const actualServices = useMemo(() => services.map(convertService), [services])

  const onNext = (newAppointment: Partial<Appointment> = {}) => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1
      if (nextIndex >= steps.length) {
        return prev // Prevent going out of bounds
      }
      return nextIndex
    })
    setAppointment((prev) => ({
      ...prev,
      ...newAppointment,
    }))
  }

  const onBack = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1
      if (prevIndex < 0) {
        return prev // Prevent going out of bounds
      }
      return prevIndex
    })
  }

  return (
    <StepContext.Provider
      value={{
        services: actualServices,
        appointment,
        signProviders,
      }}
    >
      <div>
        <div className="max-w-md m-auto flex flex-col items-center px-5 py-10 gap-6">
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
            {/* <div className="flex flex-col items-center mt-4">
              <AppointmentDetails appointment={appointment} />
            </div> */}
            <div className="mt-3">
              <div>
                {actualSteps.map((step, index) => {
                  const StepComponent = stepComponents[step]
                  const stepOption = (stepOptions[step] ||
                    {}) as React.ComponentProps<typeof StepComponent>['options']
                  return (
                    <div
                      key={index}
                      className="overflow-hidden"
                      style={{
                        height: currentIndex === index ? 'auto' : '0',
                      }}
                    >
                      <StepComponent
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        options={stepOption as unknown as any}
                        onNext={onNext}
                        onBack={onBack}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </StepContext.Provider>
  )
}
