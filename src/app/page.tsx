import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
// import { LocalTime } from './components/LocalTime'
import { Tag } from '@/components/Tag'
import Image from 'next/image'
import { Socials } from './components/Socials'
import { ReadyForMission } from './components/ReadyForMission'
import { Projects } from './components/Projects'
import { News } from './components/News'
import { Services } from './components/Services'

function Column({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={`flex flex-col gap-5 ${className}`}>{children}</div>
}

const tags = [
  'Web',
  'React',
  'UX',
  'Craftsmanship',
  'Agility',
  'Speaker',
  'Indie Hacker',
]

const getAge = (birthDate: string) =>
  Math.floor(
    (new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e10
  )

export default function Home() {
  const age = getAge('1990-12-01')

  return (
    <div className='absolute inset-0 bg-black h-screen grid gap-5 grid-cols-9 p-4 2xl:p-7'>
      <Column className='col-span-2'>
        <Card className='bg-background flex-1 flex flex-col justify-end relative'>
          <div className='absolute top-7 left-6 right-6 bottom-40 flex flex-col items-center justify-end overflow-hidden'>
            <Image
              src='/portrait.png'
              className='select-none z-20'
              fill
              style={{ objectFit: 'contain' }}
              alt='Thibault Friedrich'
            />
          </div>
          <Card.Content className='relative'>
            <div className='absolute inset-0 z-30 flex flex-col items-stretch'>
              <div className='h-32 bg-gradient-to-b from-transparent to-background' />
              <div className='bg-background flex-1' />
            </div>
            <div className='relative z-50 pt-5'>
              <ReadyForMission />
              <h1 className='text-foreground font-bold text-7xl font-sans mt-3 leading-tight'>
                Thibault
              </h1>
              <p className='text-muted-foreground font-sans mt-3 text-md font-normal'>
                <strong className='text-foreground font-normal'>
                  Software Engineer
                </strong>{' '}
                with 10+ years of experience in various business areas. Expert
                in Frontend development, UX and Code Craftsmanship, I help
                companies delivering high-value products in agile environments.{' '}
                {/* <Link
                  href='/'
                  className='ml-2 inline-flex items-center group text-inherit hover:text-foreground'
                >
                  Check my history{' '}
                  <span className='ml-2 mb-[-0.25rem] group-hover:ml-3 transition-all ease-in-out	'>
                    →
                  </span>
                </Link> */}
              </p>
              <div className='flex gap-2 flex-wrap mt-5'>
                <Tag>{age} yo</Tag>
                {tags.map((tag, index) => (
                  <Tag
                    key={tag}
                    className={index > 5 ? 'hidden 3xl:block' : ''}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </div>
          </Card.Content>
        </Card>
        {/* <Card className='bg-background flex-0 relative overflow-hidden'>
          <Card.Content>
            <h2 className='font-bold font-sans'>Montreal, CA</h2>

            <p className='text-muted-foreground font-sans mt-1 text-sm font-light'>
              <LocalTime />
            </p>
          </Card.Content>
        </Card> */}
        <Card className='bg-background'>
          <Card.Content>
            <Socials />
          </Card.Content>
        </Card>
        <Card className='bg-background flex-0'>
          <Card.Content className='flex'>
            <Button className='flex-1'>Contact me</Button>
          </Card.Content>
        </Card>
      </Column>
      <Column className='col-span-5'>
        <Card className='bg-background flex-1'>dfd{/* <News /> */}</Card>
      </Column>
      <Column className='col-span-2'>
        <Card className='bg-background'>
          <Card.Content>
            <h3 className='font-sans text-xl text-foreground/80 font-semibold mb-6'>
              Services
            </h3>
            <Services />
          </Card.Content>
        </Card>
        <Card className='bg-background flex-1 relative'>
          <Card.Content className='absolute h-full w-full overflow-auto'>
            <h3 className='font-sans text-xl text-foreground/80 font-semibold mb-6'>
              Latest projects
            </h3>
            <Projects />
          </Card.Content>
        </Card>
      </Column>
    </div>
  )
}