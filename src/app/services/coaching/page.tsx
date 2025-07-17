import { AppointmentCalendar } from '@/components/AppointmentCalendar/AppointmentCalendar'
import App from 'next/app'

export default function CoachingPage() {
  return (
    <div>
      <AppointmentCalendar
        logo="/head.png"
        preTitle="Thibault Friedrich"
        title="1-on-1 Coaching Session"
        description="Book a coaching session with Thibault Friedrich to enhance your skills and achieve your goals."
        items={{
          location: 'Online',
          duration: '60 minutes',
          extra: 'Includes a follow-up email with resources',
          price: '$100',
        }}
      />
    </div>
  )
}
