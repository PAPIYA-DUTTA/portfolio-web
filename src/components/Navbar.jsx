import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (

    <div className='bg-black glass text-gray-400 h-[100px] border-b border-neutral-700/80 backdrop-blur-lg max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-0'>
          <h1 className=' text-3xl font-bold primary-color ml-4'>Papiya Dutta</h1>
          <ul className='hidden md:flex'>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#about'>About</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none '><a href='#skills'>Skills</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#work'>Work</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#expeience'>Experience</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#contact'>Contact</a></li>
          </ul>

         <div onClick={handleNav} className='block md:hidden mr-6'>
            {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500':'fixed left-[-100%]'}>
      <h1 className='text-3xl primary-color m-4'></h1>
          <ul className='p-8 text-2xl'>
          <li className='p-2'><a href='#about'>About</a></li>
            <li className='p-2'><a href='#skills'>Skills</a></li>
            <li className='p-2'><a href='#work'>Work</a></li>
            <li className='p-2'><a href='#expeience'>Experience</a></li> 
            <li className='p-2'><a href='#contact'>Contact</a></li>
          </ul>
     </div>
 </div>
  )
}

export default Navbar