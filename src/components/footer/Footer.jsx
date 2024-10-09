import React from 'react'
import { FaMedium, FaGithub, FaLinkedin } from 'react-icons/fa';
import sololearn from '../../Assets/sololearn.svg';
import Hackerrank from '../../Assets/hackerrank.svg';
import { HiOutlineHashtag } from 'react-icons/hi'; 



const Footer = () => {
  return (
    <div className='bg-[#232323] w-full h-[150px] text-white flex flex-col md:flex-row justify-center md:justify-around items-center p-4 mt-8 '>
  <div className='flex space-x-8 mb-4 md:mb-0'>
    <a href="https://medium.com/@sachinthachamindu26" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff014f] transition-colors duration-300">
      <FaMedium size={30} />
    </a>

    <a href="https://github.com/sachinthacham" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff014f]  transition-colors duration-300">
      <FaGithub size={30} />
    </a>

    <a href="https://www.linkedin.com/in/sachinthacham/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff014f]  transition-colors duration-300">
      <FaLinkedin size={30} />
    </a>

    <a href="https://www.sololearn.com/en/profile/31368471" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff014f]  transition-colors duration-300">
      
    </a>

    <a href="https://www.hackerrank.com/profile/sachinthachamin1" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff014f] text-white transition-colors duration-300">
    
    </a>
  </div>

  <div className='text-center'>
    © Sachintha Chamindu, All Rights Reserved
  </div>
</div>

  )
}

export default Footer
