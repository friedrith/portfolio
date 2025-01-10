'use client'
import Image from 'next/image'

export function Confoo() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div>
        <h1 className="text-foreground py-4 pt-10 bg-clip-text font-sans text-3xl md:text-4xl font-bold text-center mb-9">
          Speaker at the Confoo
          <br /> Conference 2025
        </h1>
        {/* <h1 className='bg-gradient-to-br from-slate-300 to-slate-500 py-4 pt-10 bg-clip-text text-transparent font-sans text-3xl md:text-4xl font-bold text-center mb-9'>
          Speaker at the Confoo
          <br /> Conference 2025
        </h1> */}
        <p className="text-center font-sans text-foreground/80 mt-2 mb-3 font-normal text-base md:text-2xl max-w-xl m-auto">
          I will be speaker at the Confoo conference in 2025 with the topic
          &quot;How to not be scared of Abstract Syntax Trees (AST)?&quot;
        </p>
        <div className="relative h-60 ">
          <Image
            src="/confoo.jpeg"
            style={{ objectFit: 'contain' }}
            fill
            alt="Confoo 2025"
            priority
            className="relative z-10"
          />
          <div className="absolute inset-0 z-20"></div>
        </div>
      </div>
      {/* <LampContainer className='h-full'>
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
            <p className='text-center font-sans text-foreground/80 mt-2 mb-3 font-normal text-base md:text-2xl max-w-xl m-auto'>
              I will be speaker at the Confoo conference in 2025 with the topic
              "How to not be scared of Abstract Syntax Trees (AST)?"
            </p>
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
      </LampContainer> */}
    </div>
  )
}
