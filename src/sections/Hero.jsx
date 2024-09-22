import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

function Hero() {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[0,0,30]} />          
    </Canvas>
  )
}

export default Hero