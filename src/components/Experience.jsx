import React from 'react'
import ex3 from "../assets/ex-3.jpeg"
import ex2 from "../assets/ex-2.jpg"
import ex1 from "../assets/ex1.jpeg"
const Experience = () => {
  return (
    <div className='py-10 bg-[#232325]' id='expeience'>
        <h2 className='mb-8 text-3xl text-white text-center font-bold'>
        My <span className='primary-color'>Experience</span><br/>
        </h2>
        <div className='flex mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto'>
        <div className='flex items-center m-4 sm:my-0 w-[60px] md:w-[60px] '>
          <img src={ex1} alt=''/>
          </div>
          <div className='flex-col text-center'>
            <p>Internship Trainee at CipherByte Technologies</p>
            <p>Mar 2024 - Apr-2024</p>
            <p>Remote</p>
            <p> skills: Java ,Oops concept ,Sql ,Git, Github</p>
            </div>
        </div>
        <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>

        <div className=' flex mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[500px] mx-auto'>
        <div className='flex items-center m-4 sm:my-0 w-[60px] md:w-[60px] '>
          <img src={ex2} alt=''/>
          </div>
          <div className='flex-col text-center'>
            <p>Internship Trainee at Codeway Solutions</p>
            <p>Apr 2024 - May 2024</p>
            <p>Remote</p>
            <p>skills : Html,Css,JavaScript,Reactjs, TailwindCss,firebase ,Git ,GitHub</p>
        </div>
        </div>

        <div className='h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto'></div>
        
        <div className='flex mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[400px] mx-auto'>
        <div className='flex items-center m-4 sm:my-0 w-[60px] md:w-[60px] '>
          <img src={ex3} alt=''/>
          </div>
          <div className='flex-col text-center'>
            <p>Open Source Contributor  at</p>
            <h2>GirlScript Summer of Code</h2>
            <p>May 2024 - present . 2 mos</p>
              </div>
            </div>

        
      </div>
    
  )
}

export default Experience