import React from 'react'

import skyLine from '~assets/skyline.png'

const Footer = () => (
  <footer className="text-center text-lg font-normal text-purple-500 ">
    <div className="pt-12 pb-6">Made with love in Montreal</div>
    <img src={skyLine} alt="skyline" className="block opacity-30" />
  </footer>
)

export default Footer
