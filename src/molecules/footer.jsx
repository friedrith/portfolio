import React from 'react'

import skyLine from '~assets/skyline.png'

const Footer = () => (
  <footer className="text-center text-lg font-normal text-purple-500 relative">
    <img
      src={skyLine}
      alt="skyline"
      className="block opacity-30 relative z-20"
    />
    <div className="pt-12 pb-6 absolute bottom-2 left-0 right-0 z-30">
      Made with <i className="las la-heart" /> in Montreal
    </div>
  </footer>
)

export default Footer
