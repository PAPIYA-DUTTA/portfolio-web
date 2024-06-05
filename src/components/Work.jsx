import React from 'react'
import todo from "../assets/todo.png"
import landingpage from "../assets/landingpage.png";
import netflix from "../assets/netflix.png";
import gym from "../assets/gym.png";
import rps from "../assets/rps.png"
import mxplayer from "../assets/mx-player.png"
const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 ' id='work'>
        <div className='pb-8'>
        <h2 className='mb-8 text-3xl text-white text-center font-bold'>
        My <span className='primary-color'>Projects</span><br/>
        </h2>
                    <p className='text-gray-500 text-center'>
                         These are my latest projects.
                    </p>
               </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
             
             <div className=' transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px]  bg-cover relative'>
              <img src={landingpage} layout="fill" objectFit="cover" alt='' />
              <div className=' opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center '>
                 <a href=' https://papiya-dutta.github.io/landing-page/'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>
               

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/landing-page'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>

             <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px] bg-cover relative'>
              <img src={todo} layout="fill" objectFit="cover" alt='' />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                 <a href=' https://papiya-dutta.github.io/react-todo/'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/react-todo'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>

             <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px] bg-cover relative'>
              <img src={netflix} layout="fill" objectFit="cover" alt='' />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                 <a href=' https://papiya-dutta.github.io/Netflix-clone/'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/Netflix-clone'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>


             <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px] bg-cover relative'>
              <img src={gym} layout="fill" objectFit="cover" alt='' />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/gym-website'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/gym-website'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>


             <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px] bg-cover relative'>
              <img src={rps} layout="fill" objectFit="cover" alt='' />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                 <a href=' https://papiya-dutta.github.io/Rock-Paper-Scissor-game/'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/Rock-Paper-Scissor-game'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>

             <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden
             shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center  h-[200px] bg-cover relative'>
              <img src={mxplayer} layout="fill" objectFit="cover" alt='' />
              <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                <span className='text-2xl font-bold text-white tracking-wider'></span>
                <div className='pt-8 text-center'>
                 <a href=' https://papiya-dutta.github.io/spotify-clone-using-html-css-javascript/'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Live
                  </button>
                 </a>
                </div>

                <div className='pt-8 text-center'>
                 <a href='https://github.com/PAPIYA-DUTTA/music-player'>
                  <button className='text-center rounded-lg px-3 py-1 m-2 bg-white text-gray-700 font-bold text-lg'>
                  Source code
                  </button>
                 </a>
                </div>
              </div>

             </div>


             
              </div>

             </div>

             
              








        

    
  )
}

export default Work