import { useState, useEffect, useRef } from 'react'

// import * as THREE from 'three'
import Dots from 'vanta/dist/vanta.dots.min'

// https://www.vantajs.com/?effect=dots#(backgroundAlpha:1,backgroundColor:0,color:16250871,color2:16746528,minHeight:200,minWidth:200,mouseControls:!t,scale:1,scaleMobile:1,showLines:!f,size:3.5,spacing:51,touchControls:!t)
export default options => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  // const vantaEffect
  useEffect(() => {
    if (!vantaEffect && myRef.current) {
      // const scene = new THREE.Scene()
      setVantaEffect(
        Dots({
          el: myRef.current,
          // THREE: THREE, // use a custom THREE when initializing
          ...options,
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return myRef
}
