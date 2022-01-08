import React, { useState } from 'react'

const backgrounds = [
  'bg-purple-500',
  'bg-purple-600',
  'bg-blue-300',
  'bg-blue-500',
]

const WebPage = () => {
  const [index, setIndex] = useState(0)

  const nextBg = () => {
    setIndex(index >= backgrounds.length - 1 ? 0 : index + 1)
  }

  return (
    <button
      className={`cursor-pointer relative h-full w-full flex items-center text-center text-3xl ${backgrounds[index]} text-white-500 margin: 0 font-mono`}
      onClick={nextBg}
      type="button"
    >
      &lt;Born to Code/&gt;
    </button>
  )
}

export default WebPage
