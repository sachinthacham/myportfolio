// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';

import { m } from "framer-motion";

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [active, setActive] = useState('home');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <div className='container text-white bg-black z-50 fixed'>
//       <div className='navbar flex items-center justify-between px-6 md:px-[60px] py-4'>
//         {/* Hamburger Icon */}
//         <div className='flex md:hidden'>
//           <button onClick={toggleMenu} aria-label='Toggle Menu'>
//             {isMenuOpen ? <FaTimes className='text-2xl text-white' /> : <FaBars className='text-2xl' />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className={`fixed top-0 left-0 h-full w-full bg-black flex-col items-center justify-center md:relative md:flex md:bg-transparent md:h-auto md:w-auto z-50 ${isMenuOpen ? 'flex' : 'hidden'}`}>
//           <ul className='nav-menu flex flex-col items-center md:flex-row gap-[40px] text-[20px] list-none'>
//             {['hero', 'about', 'skills', 'project', 'blogs', 'contact'].map((section) => (
//               <li
//                 key={section}
//                 className={`relative cursor-pointer ${active === section ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//               >
//                 <Link
//                   to={section}
//                   smooth={true}
//                   duration={500}
//                   onClick={() => {
//                     setActive(section);
//                     closeMenu();
//                   }}
//                   spy={true}
//                 >
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Connect Button */}
//         <Link
//           to="contact"
//           smooth={true}
//           duration={500}
//           onClick={closeMenu}
//           className='nav-connect inline-block px-6 py-3 bg-transparent text-teal-600 dark:text-teal-400 border-2 border-teal-600 rounded-lg text-[15px] font-semibold hover:bg-teal-600 hover:text-white cursor-pointer ml-auto'
//         >
//           Hire Me
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing react-icons

const Nav = () => {

  const [active, setActive] = useState('home');
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "SKILLS", link: "/" },
    { name: "PROJECTS", link: "/" },
    { name: "BLOGS", link: "/" },
    
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 text-white">
  <div className="md:flex items-center justify-between bg-[#232323]  py-4 md:px-10 px-7">
  <button className="border-[#ff014f] border-[2px] text-[#ff014f] font-[Poppins] py-2 px-6 rounded md:ml-8  duration-500">
       Hire Me
      </button>

    {/* Hamburger Menu for Mobile */}
    <div
      onClick={() => setOpen(!open)}
      className=" absolute right-8 top-6 cursor-pointer md:hidden"
    >
      {open ? <FaTimes /> : <FaBars />} {/* Toggle between open/close icons */}
    </div>

    {/* Links */}
    <ul
      className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
        open ? "top-20 " : "top-[-490px]"
      }`}
    >
      {Links.map((link) => (
        <li key={link.name}
         className={`relative cursor-pointer ${active === link.name ? '' : 'text-gray-500'} md:ml-8 text-xl md:my-0 my-7 `}>
          <a
            href={link.link}
            className="text-white hover:text-[#ff014f] duration-500 text-[18px]"
          >
            {link.name}
          </a>
          
        </li>
      ))}

     
     
    </ul>
  </div>
</div>

  )
}

export default Nav;
