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
import { Link } from 'react-scroll';
const Header = () => {

  const Links = [
    {
      name: "home",
      path:"/"
    },
    {
      name:"services",
      path:"/services"
    },
    {
      name:"resume",
      path:"/resume"
    },
    {
      name:"work",
      path:"/work"
    },
    {
      name:"contact",
      path:"/contact"
    }
  ]

  return (
    <header className=" xl:py-5 text-white">
      <div className=" mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke<span className="text-red-500">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <nav className="flex gap-8">
          {
            Links.map((link, index) => (
              <Link href={link.path} key={index}>{link.name}</Link>
            )
          )}
        </nav>
       
      </div>
    </header>
  );
};

export default Header;

