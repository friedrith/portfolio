import { Card } from '@/components/Card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Page } from './components/Page'

export default function ServicesPage() {
  return (
    <div className="max-w-screen-lg m-auto flex flex-col gap-5 p-4 md:p-8">
      <Card className="bg-background flex-1 relative overflow-hidden">
        <Card.Content>
          <div className="pb-10">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-md inline-flex items-center gap-2 font-semibold"
            >
              <ArrowLeft /> Back
            </Link>
          </div>
          <Page title="Services">
            <Page.Section title="Freelance" id="freelance">
              <p>
                With over 12 years of experience in web development, I build web
                products from early prototypes to production-ready applications.
                It includes UX design, frontend and backend development, and
                deployment.
              </p>

              <p>
                My preferred stack includes React and Node.js, styled with
                Tailwind CSS or MUI. I frequently work with frameworks like
                Next.js and Remix (React Router v7 + Vite) to deliver fast,
                modern experiences.
              </p>

              <p>
                I focus on delivering new features through fast-paced
                iterations—without compromising user experience or code quality.
                I design scalable architectures tailored to your project’s stage
                and long-term goals.
              </p>

              <p>
                The first week of work is{' '}
                <strong className="text-foreground">
                  satisfied or 100% refunded
                </strong>{' '}
                for the non-technical teams.
              </p>
            </Page.Section>
            <Page.Section title="Fractional CTO" id="fraction-cto">
              <p>
                I spent a decade as a full-time developer, and I now work as a
                fractional CTO for startups and scale-ups. I managed teams of 7+
                developers in the past and I’m comfortable working with both
                technical and non-technical teams.
              </p>

              <p>
                I help you build a solid technical foundation for your product,
                from architecture to deployment. I can also help you with
                hiring, mentoring, and training your team to ensure they have
                the skills and knowledge needed to succeed.
              </p>

              <p>
                I work with you to define your product’s technical strategy,
                ensuring it aligns with your business goals. I can also help you
                with project management, ensuring that your team is working
                efficiently and effectively.
              </p>
            </Page.Section>
            <Page.Section title="Co-founder" id="co-founder">
              <p>
                You have a great idea, but you need a technical co-founder to
                help you build it. I can help you turn your idea into a reality,
                from early prototypes to production-ready applications.
              </p>

              <p>
                I know the challenges of building a startup, and I can help you
                navigate them. I can help you with product strategy, technical
                architecture, and team management. My skills include UX design,
                frontend and backend development, and deployment.
              </p>
            </Page.Section>
            <Page.Section title="Coaching" id="coaching">
              <p>
                For the past 5 years, I’ve helped individual developers and
                agile teams deliver greater value—both in the short term and as
                part of a sustainable long-term strategy.
              </p>
              <p>
                I’ve worked across a variety of environments, from B2B products
                with complex client requirements to the long-term maintenance of
                scalable design systems.
              </p>
              <p>
                I offer career guidance for developers looking to specialize in
                frontend development, and I run hands-on coding workshops
                tailored for agile teams—designed to boost technical practices
                and maintain strong velocity over time.
              </p>
            </Page.Section>
          </Page>
        </Card.Content>
      </Card>
    </div>
  )
}
