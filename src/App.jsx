import React from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Intro />
      <ParallaxProvider>
        {/* Target for 'Let's Explore' */}
        <div id="hero">
          <Hero />
        </div>

        {/* Target for 'Let's Connect' */}

      </ParallaxProvider>
    </>
  );
}

export default App;
