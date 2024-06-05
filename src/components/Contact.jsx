import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    
        function sendEmail(e){
         e.preventDefault();
         emailjs.sendForm('service_apnrmkg','template_bky7zom',e.target,'J3eiqeAjyF9P2FS9M').then(res=>{
           console.log(res);
         }).catch(err=> console.log(err));
   
        }
   
  return (
    <div className="flex justify-center my-5 h-full sm:h-[70vh] items-center">
        <div className="max-w-[1200px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-2 ">

               <div className="p-6 mr-2 bg-gray-800 rounded-x1 flex flex-col justify-around">
               <h2 className='mb-8 text-3xl text-white text-center font-bold'>
        Contact <span className='primary-color'> Me </span><br/>
        </h2>
              <p className="text-normal text-lg text-gray-400 mt-2">
                  Let's connect on LinkedIn <br/> or send me an Email
                </p>

              <div class="flex items-center mt-2 text-gray-400 " id='contact'>

              <p className=' w-40 h-14 px-4 ml item-center gap-10 flex'> <a href='https://www.linkedin.com/in/papiya-dutta-7330b8216/'><FaLinkedin size={30}/></a><a className='flex gap-2' href='mailto:duttapapiya2507@gmail.com'> <HiOutlineMail size={30}/>Mail</a> </p>
                
         
        </div>
        </div>
        <form onSubmit={sendEmail} action=' ' method='' className='p-6 flex flex-col justify-center max-w-[700px]'>
            <div className='flex flex-col'>
                <input type='name' name='name' id='name' placeholder='Full Name' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
            </div>
            <div className='flex flex-col'>
                <input type='email' name='email' id='email' placeholder='Enter Email' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'/>
            </div>
            <div className='flex flex-col'>
                <textarea type='message' name='message' id='message' placeholder='Your message' className='w-100 mt-2 py-3 px-3 rounded-lg bg-gray-800 border border-gray-700 text-white'></textarea>
            </div>
            <button type='submit' className='md:w-32 bg-primary-color text-white py-3 px-6 rounded-lg mt-3'>submit</button>
        </form>
        </div>
        </div>
        </div>

  )
}

export default Contact