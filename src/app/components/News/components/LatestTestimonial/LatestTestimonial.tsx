'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import Image from 'next/image'

const testimonial = {
  name: 'Yulong Song',
  title: 'Team Lead at Plusgrade',
  avatar: '/images/yulong.jpeg',
  content:
    'I had the pleasure of working with Thibault at Plusgrade, where he consistently demonstrated his strengths as a highly skilled frontend developer and a valuable team player. As a frontend developer, Thibault has an impressive ability to write clean, efficient, and maintainable code.',
  url: 'https://www.linkedin.com/in/thibault-friedrich/#recommendations',
}

export function LatestTestimonial() {
  return (
    <AuroraBackground className="h-full w-full">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-left p-10 max-w-3xl">
          <div className="font-sans text-3xl md:text-4xl font-bold text-foreground text-center mb-9">
            Latest testimonial
          </div>

          <div className="flex flex-row gap-4">
            <Image
              src={testimonial.avatar}
              alt="Aurora"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <div className="font-sans font-bold text-xl text-foreground">
                {testimonial.name}
              </div>
              <div className="font-sans font-light text-muted-foreground text-center">
                {testimonial.title}
              </div>
            </div>
          </div>
          <div className="font-sans font-normal text-base md:text-2xl text-foreground/80 py-4">
            {testimonial.content}
          </div>
          <a
            href={testimonial.url}
            target="_blank"
            className="font-sans bg-white rounded-full flex items-center w-fit mt-2 text-black font-semibold px-4 py-2"
          >
            See all testimonials
          </a>
        </div>

        {/* <div className='text-3xl md:text-7xl font-bold dark:text-white text-center'>
          Background lights are cool you know.
        </div> */}
      </motion.div>
    </AuroraBackground>
  )
}
