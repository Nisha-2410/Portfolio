import flower from '../assets/flower.png'; 
export function About() {
  return (
<>
<div className='flex flex-col justify-center items-center mt-12 '>
  <div className=' text-4xl font-bold  md:text-5xl lg:6xl'>
    About Me
  </div>
  <div className=' bg-white flex  shadow-amber-600 shadow bg-opacity-80 flex-col justify-center items-center mt-5 rounded-4xl  w-95 md:w-[60%] lg:w-[70%] h-100% '>

    <div className='p-2'>
    <div className='w-11/12 md:w-[65%] lg:w-[75%] text-center mx-auto font-serif text-xl md:text-2xl mt-8'>
    I’m a curious and driven student with a strong interest in web development. I enjoy creating responsive, visually appealing interfaces using HTML, CSS, JavaScript, and React. Coding allows me to blend creativity with logic, and I’m always exploring new tools and technologies to improve my skills.

As I continue to learn and grow, I’m excited to take on new challenges, build real-world projects, and collaborate with others who share the same passion for tech.
    </div>
    </div>
        <div className='w-30 h-30'>
      <img src={flower}/>
    </div>


  </div>
</div>

</>
  );
}