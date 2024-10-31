'use client'

import { useEffect, useState } from 'react'

const options = {
  hour: 'numeric',
  minute: 'numeric',
  timeZone: 'Canada/Eastern',
  timeZoneName: 'short',
} as const

const currenTime = () =>
  new Intl.DateTimeFormat('en-GB', options).format(new Date())

export function LocalTime() {
  const [time, setTime] = useState(currenTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(currenTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <>{time} Local time</>
}
