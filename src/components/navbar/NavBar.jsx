// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll';

// const NavBar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [active, setActive] = useState('home');

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className='container text-white bg-black z-50 fixed '>
//       <div className='navbar flex items-center justify-between px-6 md:px-[60px] py-4'>
//         {/* Hamburger Icon */}
//         <div className='flex md:hidden'>
//           <button onClick={toggleMenu} aria-label='Toggle Menu'>
//             {isMenuOpen ? <FaTimes className='text-2xl' /> : <FaBars className='text-2xl' />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <div className={`fixed top-0 left-0 h-full w-full bg-black flex-col items-center justify-center md:relative md:flex md:bg-transparent md:h-auto md:w-auto z-50 ${isMenuOpen ? 'flex' : 'hidden'}`}>
//           <ul className='nav-menu flex flex-col items-center md:flex-row gap-[40px] text-[20px] list-none'>
//             <li
//               className={`relative cursor-pointer ${active === 'home' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="hero"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('home')}
//                 spy={true}
//               >
//                 Home
//               </Link>
//             </li>
//             <li
//               className={`relative cursor-pointer ${active === 'about' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('about')}
//                 spy={true}
//               >
//                 About me
//               </Link>
//             </li>
//             <li
//               className={`relative cursor-pointer ${active === 'technology' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="skills"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('technology')}
//                 spy={true}
//               >
//                 Skills
//               </Link>
//             </li>
//             <li
//               className={`relative cursor-pointer ${active === 'project' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="project"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('project')}
//                 spy={true}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li
//               className={`relative cursor-pointer ${active === 'blogs' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="blogs"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('blogs')}
//                 spy={true}
//               >
//                 Blogs
//               </Link>
//             </li>
//             <li
//               className={`relative cursor-pointer ${active === 'contact' ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
//             >
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('contact')}
//                 spy={true}
//               >
//                 Contact
//               </Link>
//             </li>

//           </ul>
//         </div>

//         {/* Connect Button */}
//         <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 onSetActive={() => setActive('contact')}
//                 spy={true}
//                 className='nav-connect inline-block px-6 py-3 bg-transparent text-teal-600 dark:text-teal-400 border-2 border-teal-600 rounded-lg text-[15px] font-semibold hover:bg-teal-600 hover:text-white cursor-pointer ml-auto'>
//                 Hire Me
//               </Link>
        
//       </div>
//     </div>
//   );
// };

// export default NavBar;

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='container text-white bg-black z-50 fixed'>
      <div className='navbar flex items-center justify-between px-6 md:px-[60px] py-4'>
        {/* Hamburger Icon */}
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} aria-label='Toggle Menu'>
            {isMenuOpen ? <FaTimes className='text-2xl text-white' /> : <FaBars className='text-2xl' />}
          </button>
        </div>

        {/* Navigation Links */}
        <div className={`fixed top-0 left-0 h-full w-full bg-black flex-col items-center justify-center md:relative md:flex md:bg-transparent md:h-auto md:w-auto z-50 ${isMenuOpen ? 'flex' : 'hidden'}`}>
          <ul className='nav-menu flex flex-col items-center md:flex-row gap-[40px] text-[20px] list-none'>
            {['hero', 'about', 'skills', 'project', 'blogs', 'contact'].map((section) => (
              <li
                key={section}
                className={`relative cursor-pointer ${active === section ? '' : 'text-gray-500'} after:block after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-[#13bbff] after:transition-width after:duration-700 hover:after:w-full`}
              >
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActive(section);
                    closeMenu();
                  }}
                  spy={true}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect Button */}
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className='nav-connect inline-block px-6 py-3 bg-transparent text-teal-600 dark:text-teal-400 border-2 border-teal-600 rounded-lg text-[15px] font-semibold hover:bg-teal-600 hover:text-white cursor-pointer ml-auto'
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

