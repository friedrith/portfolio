import { Socials } from '@/app/components/Socials'
import { AppointmentCalendar } from '@/components/AppointmentCalendar/AppointmentCalendar'

export default function CoachingPage() {
  return (
    <div>
      <AppointmentCalendar
        logo="/head.png"
        preTitle="Thibault Friedrich"
        title="1-on-1 Coaching Session"
        description="Book a coaching session with Thibault Friedrich to enhance your skills and achieve your goals."
        // items={{
        //   location: 'Online',
        //   duration: '60 minutes',
        //   extra: 'Includes a follow-up email with resources',
        //   price: 'Free',
        // }}
        services={[
          {
            name: '1-on-1 Coaching Session',
            duration: 30,
            location: 'Online',
            price: 0,
            description: 'Details will be provided by email after booking.',
          },
          // {
          //   name: 'Group Coaching Session',
          //   duration: 120,
          //   location: 'Online',
          //   price: 0,
          // },
        ]}
        stepOptions={{
          identify: {
            providers: [
              'google',
              'facebook',
              'apple',
              'email-without-password',
            ],
          },
        }}
      />
      <Socials />
    </div>
  )
}
