import { useEffect, useState } from 'react'

export default () => {
  const [isIn, setIn] = useState(false)

  useEffect(() => {
    setIn(true)
  }, [])

  return isIn
}
