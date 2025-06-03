// ParallaxSection.jsx
import React from "react";
import { Parallax } from "react-scroll-parallax";

const ParallaxSection = () => (
  <div className="relative h-[60vh] overflow-hidden flex items-center justify-center bg-black text-white">
    <Parallax speed={-20}>
      <img
        src="/parallax.jpg"
        alt="Parallax"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
    </Parallax>

    <div className="absolute inset-0 bg-black/50 z-10"></div>
    <div className="z-20 px-6 text-center">
      <h2 className="text-3xl md:text-5xl font-bold">Vision. Vibes. Velocity. 🌌</h2>
      <p className="mt-4 max-w-xl mx-auto text-lg">Scroll down to see the magic unfold.</p>
    </div>
  </div>
);

export default ParallaxSection;
