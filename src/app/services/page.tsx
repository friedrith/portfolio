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
            <Page.Section title="Web Development" id="web-development">
              <p>
                With over 12 years of experience in web development, I build web
                products from early prototypes to production-ready applications.
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
                I can also set up projects with support for feature flags,
                accessibility testing, A/B testing, and localization—ensuring
                your product is ready to grow and adapt.
              </p>
            </Page.Section>
            <Page.Section title="Fractional CTO" id="fraction-cto">
              <p>
                With over 12 years of experience in web development, I help
                individual developers and agile teams deliver greater value—both
                immediately and sustainably.
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
            <Page.Section title="UX Design" id="ux-design">
              <p>
                With over 12 years of experience in web development, I help
                individual developers and agile teams deliver greater value—both
                immediately and sustainably.
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
