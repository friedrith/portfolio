'use client'
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { BorderBeam } from '@/components/ui/border-beam'

export function DesignSystemHub() {
  return (
    <div className='h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-stretch justify-center rounded-lg'>
      <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

      <Boxes />
      <div className='relative z-20'>
        <div className='flex flex-col items-center'>
          <h1
            className={cn(
              'font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-9'
            )}
          >
            Design System Hub
          </h1>
          <p className='text-center font-sans text-foreground/80 mt-2 mb-3 font-normal text-base md:text-2xl max-w-xl m-auto'>
            A zero-config and open source hub to present your design system,
            facilitate the consistency of your product and deliver features
            faster.
          </p>
          <a
            href='https://design-system-hub.com/'
            target='_blank'
            className='font-sans bg-white rounded-full flex items-center w-fit mt-2 text-black font-semibold px-4 py-2'
          >
            Check project
          </a>
        </div>

        <div className='relative h-[35rem] max-w-5xl m-auto mt-10 rounded-lg overflow-hidden border shadow-[0_-10px_60px_-15px_rgba(0,0,0,0.6)] dark:shadow-[0_-10px_60px_-15px_rgba(255,255,255,0.3)]'>
          <Image
            fill
            objectFit='cover'
            objectPosition='top'
            className='w-full'
            src='/images/screenshot.png'
            alt="Design System Hub's screenshot"
            priority
          />
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      </div>
    </div>
  )
}
