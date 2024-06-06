import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [nav,setNav]=useState(false)

    const handleNav=()=>{
        setNav(!nav)
    }

  return (

    <div className='bg-black text-gray-400 h-[100px] border-b border-neutral-700/80 backdrop-blur-lg max-w-[1200px] mx-auto flex justify-between items-center px-4 md:px-0'>
          <h1 className=' text-3xl font-bold primary-color ml-4'>Papiya Dutta</h1>
          <ul className='hidden md:flex'>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#about'>About</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none '><a href='#skills'>Skills</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#work'>Work</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#expeience'>Experience</a></li>
            <li className='p-2 hover:bg-gradient-to-br rounded from-orange-500 to-pink-500 text-white hover:border-none'><a href='#contact'>Contact</a></li>
          </ul>

         <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        </div>

      <div className={nav ? 'text-gray-300 fixed h-full left-0  w-[60%] border-r-gray bg-[#202121] ease-in-out duration-500':'fixed left-[-100%]'}>
      <ul className='p-16 text-xl bg-black'>
          <li className='p-2 font-bold hover:text-white'><a href='#about'>About</a></li>
            <li className='p-2 font-bold  hover:text-white'><a href='#skills'>Skills</a></li>
            <li className='p-2 font-bold  hover:text-white'><a href='#work'>Work</a></li>
            <li className='p-2 font-bold  hover:text-white'><a href='#expeience'>Experience</a></li> 
            <li className='p-3 font-bold  hover:text-white'><a href='#contact'>Contact</a></li>
          </ul>
     </div>
 </div>
  )
}

export default Navbar