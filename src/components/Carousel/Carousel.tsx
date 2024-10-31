'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface Props {
  components: React.ReactNode[]
}

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }
  },
}

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

export function Carousel({ components }: Props) {
  const [[page, direction], setPage] = useState([0, 0])

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <div className='relative w-full h-full'>
      <div className='relative h-full w-full overflow-hidden'>
        <AnimatePresence initial={false} custom={direction}>
          {components.map((node, index) => (
            <motion.div
              custom={direction}
              // initial={{ opacity: 0 }}
              // animate={{ opacity: 1 }}
              // exit={{ opacity: 0 }}
              key={index}
              className='flex items-center justify-center'
              initial='enter'
              animate='center'
              exit='exit'
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag='x'
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1)
                }
              }}
            >
              {node}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {/* <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='true'
          aria-label='Slide 1'
          data-carousel-slide-to='0'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 2'
          data-carousel-slide-to='1'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 3'
          data-carousel-slide-to='2'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 4'
          data-carousel-slide-to='3'
        ></button>
        <button
          type='button'
          className='w-3 h-3 rounded-full'
          aria-current='false'
          aria-label='Slide 5'
          data-carousel-slide-to='4'
        ></button>
      </div> */}
      {/* <button
        type='button'
        className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-next
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button> */}
      <div className='absolute inset-x-0 bottom-5 flex items-center justify-center gap-2'>
        {components.map((_, index) => (
          <button
            key={index}
            type='button'
            className={`w-3 h-3 rounded-full bg-muted hover:bg-muted-foreground transition-colors duration-200 ${
              index === page ? 'bg-muted-foreground' : ''
            }`}
            aria-current={index === page}
            aria-label={`Slide ${index + 1}`}
            onClick={() => setPage([index, index - page])}
          ></button>
        ))}
      </div>
    </div>
  )
}
