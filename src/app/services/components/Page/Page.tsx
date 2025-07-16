export interface PageProps {
  title: string
  children: React.ReactNode
}

function Page({ title, children }: PageProps) {
  return (
    <div>
      <h1 className="text-foreground font-bold text-5xl ont-sans mb-3 leading-tight">
        {title}
      </h1>
      <div className="text-muted-foreground font-sans mt-3 text-md font-normal flex flex-col gap-5">
        {children}
      </div>
    </div>
  )
}

interface PageSubtitleProps {
  subtitle: string
  id?: string
}

function PageSubtitle({ subtitle, id }: PageSubtitleProps) {
  return (
    <h2 className="text-foreground font-sans text-3xl font-bold mt-5" id={id}>
      {subtitle}
    </h2>
  )
}

Page.Subtitle = PageSubtitle

interface PageSectionProps {
  title?: string
  id?: string
  children: React.ReactNode
}

function PageSection({ children, title, id }: PageSectionProps) {
  return (
    <section className="text-muted-foreground font-sans mt-3 text-md font-normal flex flex-col gap-5">
      <h2 className="text-foreground font-sans text-3xl font-bold mt-5" id={id}>
        {title}
      </h2>
      {children}
    </section>
  )
}

Page.Section = PageSection

export { Page }
