import { Socials } from '@/app/components/Socials'
import { AppointmentCalendar } from '@/components/AppointmentCalendar/AppointmentCalendar'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function CoachingPage() {
  return (
    <div>
      <AppointmentCalendar
        logo="/head.png"
        preTitle="Thibault Friedrich"
        title="1-on-1 Coaching Session"
        description="Wondering if software engineering is the right career for you? Looking to level up in frontend architecture? You are a founder with technical questions? Book a free 1-on-1 coaching session with me. We'll discuss your goals, interests, and how to get started in tech."
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

      <section className="text-center pt-10 pb-10">
        <Button variant="link" className="text-muted-foreground group" asChild>
          <Link href="/">
            Go back to portfolio
            <ChevronRight className="inline transition-all ml-0 group-hover:ml-1" />
          </Link>
        </Button>
      </section>
    </div>
  )
}
