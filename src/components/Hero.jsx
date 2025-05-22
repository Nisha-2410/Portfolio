
import cat from "../assets/cat.jpg";
import { About } from "./About";
import { Skills } from "./Skills";
import Contact from "./Contact";

const Hero = () => {
  return (
    <div className="min-h-screen custom-gradient-bg">
      <div className="flex flex-col   items-center justify-center  md:flex-row ">
        <div className="text-center md:text-left md:mt-10 lg:ml-50 mt-30 md:ml-20 ">
          <div className="text-4xl md:text-5xl  font-bold text-center md:text-left md:mt-15 lg:text-6xl">
            Hi, I’m Nisha. Let’s Create Something Amazing Together.
          </div>
          <div className="mt-5 md:w-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Necessitatibus repudiandae molestias et corporis quas labore quidem
          </div>
          <div className="mt-5 text-gray-600 ">
            click here to see my{" "}
            <a href="/" className="underline">
              resume
            </a>
          </div>

          <div className="flex flex-row gap-10 md:justify-start justify-center mt-7">
            <i class="fa-brands fa-linkedin-in border text-gray-600 border-gray-50 p-2 rounded-full"></i>
            <i class="fa-brands fa-whatsapp border font-bold text-gray-600 border-gray-50 p-2 rounded-full"></i>
            <i class="fa-solid fa-phone border font-bold text-gray-600 border-gray-50 p-2 rounded-full"></i>
          </div>
        </div>

        {/* photo */}
        <div className="md:flex md:flex-col">
          <div className="lg:mr-70">
            <img
              src={cat}
              className=" rounded-full mt-8 w-40 h-auto md:w-xl md:-ml-6  lg:w-xl lg:my-1  "
            ></img>
          </div>
        </div>
          {/* about me button */}
        <button className="mt-7 hidden">more about me</button>
      </div>
      
       <About/>
       <Skills/>
       <Contact/>
      
    </div>
  );
};

export default Hero;
