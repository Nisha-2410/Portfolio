// src/components/ParallaxBackground.jsx
import { Parallax } from "react-scroll-parallax";

const ParallaxBackground = () => {
  return (
    <Parallax speed={-20}>
      <div className="fixed inset-0 z-0">
        <img
          src="/parallax.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30 pointer-events-none"
        />
      </div>
    </Parallax>
  );
};

export default ParallaxBackground;

