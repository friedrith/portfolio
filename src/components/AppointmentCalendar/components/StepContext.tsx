import { Service } from '../entities/service'
import { Appointment } from '../entities/appointment'
import { SignProviders } from './StepIdentify'
import { createContext, useContext } from 'react'

type StepContextType = {
  services: Service[]
  appointment: Appointment
  signProviders: SignProviders
}

export const StepContext = createContext<StepContextType>({
  services: [],
  appointment: { id: 'random' },
  signProviders: [],
})

export function useStepContext() {
  return useContext(StepContext)
}
