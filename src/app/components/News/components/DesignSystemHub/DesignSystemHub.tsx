import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'

export function DesignSystemHub() {
  return (
    <div className='h-full relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg'>
      <div className='absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />

      <Boxes />
      <h1 className={cn('md:text-4xl text-xl text-white relative z-20')}>
        Design System Hub
      </h1>
      <p className='text-center mt-2 text-neutral-300 relative z-20'>
        An alternative to Storybook
      </p>
    </div>
  )
}
