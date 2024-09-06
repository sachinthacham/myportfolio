import React from 'react'
import logo from '../../Assets/logo.svg'


const NavBar = () => {
  return (
    <div className='container text-white'>
    <div className='navbar flex items-center justify-end mx-[60px] gap-[100px] pt-[20px]'>
     
      <ul className='nav-menu flex items-center gap-[60px] text-[20px] list-none '>
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
       
      </ul>
      <div className='nav-connect px-[20px] py-[10px] rounded-[50px] bg-red-400 text-[18px] cursor-pointer'>Connect with Me</div>
    </div>
    </div>
  )
}

export default NavBar
