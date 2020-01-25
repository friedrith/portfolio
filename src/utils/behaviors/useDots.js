import { useEffect, useRef } from 'react'

import Dots from 'vanta/dist/vanta.dots.min'

// https://www.vantajs.com/?effect=dots#(backgroundAlpha:1,backgroundColor:0,color:16250871,color2:16746528,minHeight:200,minWidth:200,mouseControls:!t,scale:1,scaleMobile:1,showLines:!f,size:3.5,spacing:51,touchControls:!t)
export default options => {
  const myRef = useRef(null)
  const vantaEffect = useRef(null)
  useEffect(() => {
    vantaEffect.current = Dots({
      el: myRef.current,
      ...options,
    })
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return myRef
}
