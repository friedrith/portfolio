'use client'
import { motion } from 'framer-motion'
import { LampContainer } from '@/components/ui/lamp'
import Image from 'next/image'

export function Confoo() {
  return (
    <div className='w-full h-full overflow-hidden'>
      <LampContainer className='h-full'>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
        >
          <div>
            <h1 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 pt-10 bg-clip-text text-transparent font-sans text-3xl md:text-4xl font-bold text-center mb-9'>
              Speaker at the Confoo
              <br /> Conference 2025
            </h1>
            <div className='relative h-60 '>
              <Image
                src='/confoo.jpeg'
                objectFit='contain'
                fill
                alt='Confoo 2025'
                priority
                className='relative z-10'
              />
              <div className='absolute inset-0 z-20'></div>
            </div>
          </div>
        </motion.div>
      </LampContainer>
    </div>
  )
}
