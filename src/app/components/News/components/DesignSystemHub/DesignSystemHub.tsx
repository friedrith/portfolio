import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export function DesignSystemHub() {
  return (
    <div className='h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-stretch justify-center rounded-lg'>
      <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

      <Boxes />
      <div>
        <h1
          className={cn(
            'font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-9 relative z-20'
          )}
        >
          Design System Hub
        </h1>
        <p className='text-center font-sans text-foreground/80 mt-2 text-xl relative z-20 max-w-xl m-auto'>
          A zero-config and open source hub to present your design system,
          facilitate the consistency of your product and deliver features
          faster.
        </p>
        <div className='relative z-30 h-[35rem] max-w-5xl m-auto mt-10'>
          <Image
            fill
            objectFit='cover'
            objectPosition='top'
            className='w-full rounded-lg'
            src='/images/screenshot.png'
            alt="Design System Hub's screenshot"
          />
        </div>
      </div>
    </div>
  )
}
