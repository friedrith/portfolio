'use client'
import { motion, AnimatePresence, useMotionValue } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Props {
  components: React.ReactNode[]
}

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export function Carousel({ components }: Props) {
  const dragX = useMotionValue(0)

  const [imgIndex, setImgIndex] = useState(1)

  // useEffect(() => {
  //   const intervalRef = setInterval(() => {
  //     const x = dragX.get()

  //     if (x === 0) {
  //       setImgIndex(pv => {
  //         if (pv === components.length - 1) {
  //           return 0
  //         }
  //         return pv + 1
  //       })
  //     }
  //   }, AUTO_DELAY)

  //   return () => clearInterval(intervalRef)
  // }, [])

  const onDragEnd = () => {
    const x = dragX.get()

    if (x <= -DRAG_BUFFER && imgIndex < components.length - 1) {
      setImgIndex(pv => pv + 1)
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex(pv => pv - 1)
    }
  }

  return (
    <div className='relative overflow-hidden w-full h-full'>
      <motion.div
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        style={{
          x: dragX,
          width: `${components.length * 100}%`,
        }}
        animate={{ translateX: `-${(imgIndex * 100) / components.length}%` }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className='flex h-full items-stretch relative cursor-grab active:cursor-grabbing'
      >
        <Images imgIndex={imgIndex} components={components} />
      </motion.div>

      <Dots
        imgIndex={imgIndex}
        setImgIndex={setImgIndex}
        components={components}
      />
      <GradientEdges />
    </div>
  )
}

const Dots = ({
  imgIndex,
  setImgIndex,
  components,
}: {
  imgIndex: number
  setImgIndex: React.Dispatch<React.SetStateAction<number>>
  components: React.ReactNode[]
}) => {
  return (
    <div className='absolute bottom-4 flex w-full justify-center gap-2'>
      {components.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? 'bg-neutral-50' : 'bg-neutral-500'
            }`}
          />
        )
      })}
    </div>
  )
}

const GradientEdges = () => {
  return (
    <>
      <div className='pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0' />
      <div className='pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0' />
    </>
  )
}

const Images = ({
  components,
}: {
  imgIndex: number
  components: React.ReactNode[]
}) => {
  return (
    <>
      {components.map((node, idx) => {
        return (
          <motion.div
            key={idx}
            transition={SPRING_OPTIONS}
            className='flex-1 flex items-center justify-center'
          >
            {node}
          </motion.div>
        )
      })}
    </>
  )
}
