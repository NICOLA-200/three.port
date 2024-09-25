import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import {useRef}  from 'react'
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Clients from './sections/Clients.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';


// const RotatingCube = () => {

//   const meshRef = useRef()

//   useFrame(() => {
//     if (meshRef.current) {
//       meshRef.current.rotation.y += 0.01
//       meshRef.current.rotation.x +=  0.01
//     }
//   })
//     return (
//       <mesh ref={meshRef}>
//          <cylinderGeometry args={[1,1,1]} />
//          <meshLambertMaterial color="#468585" emissive="3468585" />
//       </mesh>
//     )
// }


const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
      </main>
  )
}

export default App