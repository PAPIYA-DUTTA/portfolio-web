import React from 'react'
import profilepic from "../assets/profile.jpg";
import {TypeAnimation} from "react-type-animation";

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8'>
        
         <div className='col-span-1 my-auto mx-auto w-[150px] h-auto lg:w-[200px]'>
        <img src={profilepic} alt='picture'/>
       </div>
       <div className='col-span-2 px-5 my-auto'>

       <h1 className='text-white text-2xl sm:text-2xl lg:text-6xl font-extrabold'>
        
        <span className='primary-color'>
          I'm a
          </span> <br/>
         <TypeAnimation 
         sequence={[
          "frontend Developer",
          1000,
          "Web Designer",
          1000,
          "Java programmer",
          1000,
         ]}
         wrapper='span'
         speed={50}
         repeat={Infinity}
         />
       </h1>
       
       <div className='my-8'>
         <a href='https://drive.google.com/file/d/1-X3Ik8VEgm8uGNj7LpQg-zU2RydzpLL8/view?usp=drivesdk' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white '>Download CV</a>
       
        
         <a href='#contact' className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact</a>
       </div>
      </div>
    </div>
    
  )
}

export default Hero