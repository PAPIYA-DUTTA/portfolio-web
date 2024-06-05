import React from 'react'


const About = () => {
  return (
    <div className='py-10 text-white h-auto ' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>
         <div>
          <div className='p-2'>
          <div className='text-gray-300 my-3'>
          <h2 className='mb-8 text-3xl text-white text-center font-bold'>
        About <span className='primary-color'>Me</span><br/>
        </h2>
            <br/>
             <p className='text-justify leading-7 w-11/12 mx-auto'>
             I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
             </p>
          </div>
          </div>
         </div>
        </div>

    </div>
  )
}

export default About