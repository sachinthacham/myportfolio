import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container text-white bg-black  z-50'>
      <div className='navbar flex items-center justify-between px-6 md:px-[60px] py-4'>
        {/* Hamburger Icon */}
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
          </button>
        </div>

        {/* Navigation Links - Hidden on mobile, visible inside hamburger */}
        <div className={`fixed top-0 left-0 h-full w-full bg-black flex-col items-center justify-center md:relative md:flex md:bg-transparent md:h-auto md:w-auto  z-50 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='nav-menu flex flex-col items-center md:flex-row gap-[40px] text-[20px] list-none'>
            <li
              onClick={() => {
                setActive('home');
                setIsMenuOpen(false);
              }}
              className={`relative cursor-pointer ${active === 'home' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
            >
              Home
            </li>
            <li
              onClick={() => {
                setActive('about');
                setIsMenuOpen(false);
              }}
              className={`relative cursor-pointer ${active === 'about' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
            >
              About Me
            </li>
            <li
              onClick={() => {
                setActive('technology');
                setIsMenuOpen(false);
              }}
              className={`relative cursor-pointer ${active === 'technology' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
            >
              Technology
            </li>
            <li
              onClick={() => {
                setActive('project');
                setIsMenuOpen(false);
              }}
              className={`relative cursor-pointer ${active === 'project' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
            >
              Projects
            </li>
          </ul>
        </div>

        {/* Connect Button - Always on the right */}
        <div className='nav-connect inline-block px-6 py-3 bg-transparent text-teal-600 dark:text-teal-400 border-2 border-teal-600 rounded-lg text-[15px] font-semibold hover:bg-teal-600 hover:text-white cursor-pointer ml-auto'>
          Connect with Me
        </div>
      </div>
    </div>
  );
};

export default NavBar;
