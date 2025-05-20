import React from 'react'
import cat from  '../assets/cat.jpg'

const Hero = () => {
  return (
    <div className='min-h-screen custom-gradient-bg'>
       <div className='flex flex-col   items-center justify-center p-30'>
        <div className='text-center '>
          <div className='text-4xl md:text-5xl  font-bold text-center w-90'>Hi, I’m Nisha. Let’s Create Something Amazing Together.</div>
          <div className='mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus repudiandae molestias et corporis quas labore quidem</div>

          <div className='flex flex-row gap-10 justify-center mt-7'>
            <i class="fa-brands fa-linkedin-in border text-gray-600 border-gray-50 p-2 rounded-full"></i>
            <i class="fa-brands fa-whatsapp border font-bold text-gray-600 border-gray-50 p-2 rounded-full"></i>
         <i class="fa-solid fa-phone border font-bold text-gray-600 border-gray-50 p-2 rounded-full"></i>
          </div>
        </div>
        
       {/* photo */}
        <div>
          <img src={cat} className=' rounded-full mt-8 w-40 h-40'></img>
           </div>
         <div className='mt-10 text-gray-600'>click here to see my <a href='/' className='underline'>resume</a></div>

       </div>

       <h1>Skills</h1>
       
    </div>
  )
}

export default Hero