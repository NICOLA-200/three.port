import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {useRef}  from 'react'


const RotatingCube = () => {

  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x +=  0.01
    }
  })
    return (
      <mesh ref={meshRef}>
         <cylinderGeometry args={[1,1,1]} />
         <meshLambertMaterial color="#468585" emissive="3468585" />
      </mesh>
    )
}


const App = () => {
  return (
     
       

          <div className="bg-white c-space  transition-colors text-red-900">hello world </div>
        
     
  )
}

export default App