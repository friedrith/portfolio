import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei'
import { useSpring } from '@react-spring/web'
import { a as three } from '@react-spring/three'
import useResponsive from '~utils/hooks/useResponsive'

import Model from './Model'

const useAdaptedValue = props => {
  const screenSizes = useResponsive()

  return ['sm', 'md', 'lg', 'xl', 'xl2'].reduce(
    (value, size) =>
      screenSizes[size] && props[size] !== undefined ? props[size] : value,
    props.default
  )
}

const Laptop = () => {
  const [open, setOpen] = useState(false)
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) })

  useEffect(() => {
    setTimeout(() => {
      setOpen(true)
    }, 2000)
  }, [])

  const scale = useAdaptedValue({
    default: 0.5,
    lg: 0.5,
    xl: 0.6,
    xl2: 0.8,
  })

  const position = useAdaptedValue({
    default: [0, 2, 0],
    sm: [0, 2, 0],
    md: [-4, 0, 0],
    lg: [-6, 0, 0],
    xl2: [-6, 0, 0],
  })

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [-10, 0, -25], fov: 35 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group
          rotation={[0, Math.PI, 0]}
          onClick={e => (e.stopPropagation(), setOpen(!open))}
          position={position}
        >
          <Model
            scale={scale}
            open={open}
            hinge={props.open.to([0, 1], [1.575, -0.425])}
          />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[-0, -3.5, 0]}
        opacity={1}
        width={20}
        height={20}
        blur={2}
        far={4.5}
      />
      {/* <OrbitControls
        enablePan={false}
        // enableZoom={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      /> */}
    </Canvas>
  )
}

export default Laptop
