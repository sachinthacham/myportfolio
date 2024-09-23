import React from 'react'
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className='bg-slate-900 w-full h-[150px] text-white flex flex-col md:flex-row justify-center md:justify-around items-center p-4 mt-[50px]'>
  <div className='flex space-x-8 mb-4 md:mb-0'>
    <a href="https://medium.com/@sachinthachamindu26" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
      <FaMedium size={30} />
    </a>

    <a href="https://github.com/sachinthacham" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
      <FaGithub size={30} />
    </a>

    <a href="https://www.linkedin.com/in/sachinthacham/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors duration-300">
      <FaLinkedin size={30} />
    </a>
  </div>

  <div className='text-center'>
    © Sachintha Chamindu, All Rights Reserved
  </div>
</div>

  )
}

export default Footer
