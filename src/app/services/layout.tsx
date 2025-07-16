import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

type ServicesLayoutProps = {
  children: React.ReactNode
}

export default function ServicesLayout({ children }: ServicesLayoutProps) {
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
          {children}
        </Card.Content>
      </Card>
    </div>
  )
}
