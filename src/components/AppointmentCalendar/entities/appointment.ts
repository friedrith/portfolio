import { Service } from './service'

export type Appointment = {
  id: string
  startDate?: Date
  endDate?: Date
  attendees?: string[]
  service?: Service
  status?: 'partial' | 'completed'
}
