
import Hero from "./components/Hero"
import Intro from "./components/Intro";
import Navbar from "./components/Navbar"

import { ParallaxProvider } from 'react-scroll-parallax';


function App() {
  

  return (
    <>
      
      <Intro/>
         <ParallaxProvider>
      <Hero />
    </ParallaxProvider>
     
    </>
  )
}

export default App
