import React, { useLayoutEffect, useState } from 'react'

import LottieIcon from '~atoms/lottie-icon'

import scrollDown from '~assets/scroll-down-6-auto-edited.json'

function MouseIndicator() {
  // https://www.react-spring.io/docs/hooks/basics

  const [{ opacity }, set] = useState({ opacity: 1 })

  const hide = () => set({ opacity: 0 })

  useLayoutEffect(() => {
    window.addEventListener('scroll', hide, { capture: true })

    return window.removeEventListener('scroll', hide)
  }, [])

  const onClick = () => {
    const element = document.getElementById('stats')
    if (!element) {
      return
    }
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    })
  }

  return (
    <button
      className="hidden md:block w-16"
      style={{
        opacity,
      }}
      type="button"
      onClick={onClick}
    >
      <LottieIcon icon={scrollDown} loop autoplay />
    </button>
  )
}

export default MouseIndicator
