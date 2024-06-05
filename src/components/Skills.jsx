import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import tailwind from "../assets/tailwind.png"
import git from "../assets/git-logo.png"
import github from "../assets/github.jpeg"
import java from "../assets/JAVA.png"
import firebase from "../assets/firebase.jpg"


const Skills = () => {
  return (
    <div className='bg-black' id='skills'>
    
    <h2 className='mb-8 text-3xl text-white text-center font-bold'>
        My <span className='primary-color'>Skills</span><br/>
        </h2>
     <div className=' md:h-[100px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>
               
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={html} alt=''/>
          <p className='mt-2'>Html</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={css} alt=''/>
          <p className='mt-2'>Css</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={javascript} alt=''/>
          <p className='mt-2'>JavaScript</p>
        </div>

        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={react} alt=''/>
          <p className='mt-2'>React</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={tailwind} alt=''/>
          <p className='mt-2'>TailwindCss</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={git} alt=''/>
          <p className='mt-2'>Git</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={java} alt=''/>
          <p className='mt-2'>Java</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={github} alt=''/>
          <p className='mt-2'>GitHub</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[60px] md:w-[60px]'>
          <img src={firebase} alt=''/>
          <p className='mt-2'>Firebase</p>
        </div>
      </div>
    </div>
  )
}

export default Skills