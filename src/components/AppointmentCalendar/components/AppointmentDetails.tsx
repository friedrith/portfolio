import {
  Clock,
  MapPin,
  Calendar,
  DollarSign,
  BadgeInfo,
  ChevronRight,
} from 'lucide-react'
import { Appointment } from '../entities/appointment'

const itemIcons = {
  appointment: ChevronRight,
  date: Calendar,
  duration: Clock,
  location: MapPin,
  price: DollarSign,
  extra: BadgeInfo,
} as const

type AppointmentDetailsProps = {
  appointment: Appointment
  short?: boolean
}

export function AppointmentDetails({
  appointment,
  short,
}: AppointmentDetailsProps) {
  const items = {
    appointment: short ? undefined : appointment.service?.name,
    location: appointment.service?.location,
    date: appointment.startDate
      ? `${appointment.startDate?.toLocaleDateString('en-US', {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        })} ${appointment.startDate?.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })} - ${appointment.endDate?.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })}`
      : undefined,
    duration: appointment.service?.duration
      ? `${appointment.service.duration} minutes`
      : undefined,
    extra: appointment.service?.description,
    price:
      appointment.service?.price === 0
        ? 'Free'
        : appointment.service?.price !== undefined &&
            appointment.service?.price > 0
          ? `$${appointment.service.price}`
          : undefined,
  }

  return (
    <ul className="flex flex-col list-none gap-1">
      {Object.entries(items)
        .filter((v) => v[1] !== undefined)
        .map(([key, value]) => {
          const Icon = itemIcons[key as keyof typeof itemIcons]
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

    // <div>
    //   <div>
    //     <span className="text-sm font-medium text-foreground">
    //       Appointment:
    //     </span>{' '}
    //     <span className="text-sm font-medium text-muted-foreground">
    //       {appointment.service?.name}
    //     </span>
    //   </div>
    //   <div>
    //     <span className="text-sm font-medium text-foreground">Date:</span>{' '}
    //     <span className="text-sm font-medium text-muted-foreground">
    //       {appointment.startDate?.toLocaleDateString('en-US', {
    //         weekday: 'long',
    //         month: 'long',
    //         day: 'numeric',
    //       })}
    //       ,{' '}
    //       {appointment.startDate?.toLocaleTimeString('en-US', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //       })}
    //       -
    //       {appointment.endDate?.toLocaleTimeString('en-US', {
    //         hour: '2-digit',
    //         minute: '2-digit',
    //       })}
    //     </span>
    //   </div>
    //   <div>
    //     <span className="text-sm font-medium text-foreground">Duration:</span>{' '}
    //     <span className="text-sm font-medium text-muted-foreground">
    //       {appointment.duration} minutes
    //     </span>
    //   </div>
    //   {appointment.location && (
    //     <div>
    //       <span className="text-sm font-medium text-foreground">Location:</span>{' '}
    //       <span className="text-sm font-medium text-muted-foreground">
    //         {appointment.location}
    //       </span>
    //     </div>
    //   )}
    //   {appointment.service?.description && (
    //     <div>
    //       <span className="text-sm font-medium text-foreground">Extra:</span>{' '}
    //       <span className="text-sm font-medium text-muted-foreground">
    //         {appointment.service?.description}
    //       </span>
    //     </div>
    //   )}
    // </div>
  )
}
