import React from "react";
import Intro from "./components/Intro";
import ParallaxSection from "./components/Parallax";
import Hero from "./components/Hero";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Intro />
    <ParallaxProvider>
    
      
      <Hero />
    </ParallaxProvider>
    </>
  );
}

export default App;