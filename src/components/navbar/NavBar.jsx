import React, { useState } from 'react'
import Mylogo from '../../Assets/mylogo2.png'
import { Link } from 'react-scroll';

const NavBar = () => {
   
  const[active, setActive] = useState("home");

  return (
    <div className='container text-white'>
    <div className='navbar flex items-center justify-between mx-[60px] gap-[100px] pt-[20px]'>
     <div>
      <img src={Mylogo} alt="company logo" width="100px" height="100px" className='rounded-md'/>
     </div>
     <div className='flex justify-end gap-[100px]'>
  <ul className='nav-menu flex items-center gap-[60px] text-[20px] list-none'>
    <li
      onClick={() => setActive("home")}
      className={`home relative cursor-pointer ${active === "home" ? "after:w-0 " : "text-gray-500 after:w-0"} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
    >
      Home
    </li>
    <li
      onClick={() => setActive("about")}
      className={`about relative cursor-pointer ${active === "about" ? " after:w-0 " : "text-gray-500 after:w-0"} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff]  after:transition-width after:duration-700 hover:after:w-full`}
    >
      About Me
    </li>
    <li
      onClick={() => setActive("technology")}
      className={`technology relative cursor-pointer ${active === "technology" ? "after:w-0 " : "text-gray-500 after:w-0"} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff]  after:transition-width after:duration-700 hover:after:w-full`}
    >
      Technology
    </li>
    <li
      onClick={() => setActive("project")}
      className={`project relative cursor-pointer ${active === "project" ? " after:w-0" : "text-gray-500 after:w-0"} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
    >
      Projects
    </li>
  </ul>
  <div className='nav-connect inline-block px-6 py-3 bg-transparent text-[#13bbff] border-2 border-[#13bbff] rounded-lg text-[15px] font-semibold hover:bg-[#13bbff] hover:text-white z-10 cursor-pointer'>
    Connect with Me
  </div>
</div>
    </div>
    </div>
  )
}

export default NavBar
