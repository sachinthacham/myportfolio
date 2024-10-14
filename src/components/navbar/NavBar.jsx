// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Nav = () => {
//   const [active, setActive] = useState('HOME'); // Active state to track the active link
//   const [open, setOpen] = useState(false);

//   const Links = [
//     { name: 'HOME', link: '#hero' },
//     { name: 'ABOUT', link: '#about' },
//     { name: 'SKILLS', link: '#resume' },
//     { name: 'PROJECTS', link: '#project' },
//     { name: 'BLOGS', link: '#blog' },
//   ];

//   // Function to handle the click event and set active state
//   const handleLinkClick = (linkName) => {
//     setActive(linkName); // Set clicked link as active
//     setOpen(false); // Close the mobile menu when a link is clicked
//   };

//   return (
//     <div className="shadow-md w-full fixed top-0 left-0 z-50 text-white">
//       <div className="md:flex items-center justify-between bg-[#232323] py-2 md:px-10 px-7">
//         <button className="border-[#ff014f] border-[2px] text-[#ff014f] font-[Poppins] py-2 px-6 rounded md:ml-8 duration-500">
//           <a href="#contact">Hire Me</a>
//         </button>

//         <div
//           onClick={() => setOpen(!open)}
//           className="absolute right-8 top-6 cursor-pointer md:hidden"
//         >
//           {open ? <FaTimes /> : <FaBars />}
//         </div>

//         <ul
//           className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
//             open ? 'top-0 text-white bg-[#232323]' : 'top-[-490px]'
//           }`}
//         >
//           {Links.map(link => (
//             <li
//               key={link.name}
//               className={`relative cursor-pointer ${
//                 active === link.name ? 'text-[#ff014f]' : 'text-gray-500'
//               } md:ml-8 text-xl md:my-0 my-7`}
//               onClick={() => handleLinkClick(link.name)} // Handle click event
//             >
//               <a
//                 href={link.link}
//                 className={`hover:text-[#ff014f] duration-500 text-[18px] ${
//                   active === link.name ? 'text-[#ff014f]' : 'text-white'
//                 }`}
//               >
//                 {link.name}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Nav;

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [active, setActive] = useState('HOME'); // State to track the active link
  const [open, setOpen] = useState(false);

  const Links = [
    { name: 'HOME', link: '#hero' },
    { name: 'ABOUT', link: '#about' },
    { name: 'SKILLS', link: '#resume' },
    { name: 'PROJECTS', link: '#project' },
    { name: 'BLOGS', link: '#blog' },
 
   
  ];

  useEffect(() => {
    // Function to check which section is currently in view
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const sectionId = section.getAttribute('id');

        // Check if the section is in view
        if (sectionTop <= window.innerHeight / 2 && sectionTop + sectionHeight >= window.innerHeight / 2) {
          setActive(sectionId.toUpperCase());
        }
      });
    };

    // Add event listener to detect scroll
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle clicking on nav links
  const handleLinkClick = (linkName) => {
    setActive(linkName);
    setOpen(false);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 text-white">
      <div className="md:flex items-center justify-between bg-[#232323] py-2 md:px-10 px-7">
        <button className="border-[#ff014f] border-[2px] text-[#ff014f] font-[Poppins] py-2 px-6 rounded md:ml-8 duration-500">
          <a href="#contact">Hire Me</a>
        </button>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <FaTimes style={{height:"25px" , width:"25px"}}/> : <FaBars  style={{height:"25px" , width:"25px"}}/>}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-10 text-white bg-[#232323]' : 'top-[-490px]'
          }`}
        >
          {Links.map(link => (
            <li
              key={link.name}
              className={`relative cursor-pointer ${
                active === link.name ? 'text-[#ff014f]' : 'text-gray-500'
              } md:ml-8 text-xl md:my-0 my-7`}
              onClick={() => handleLinkClick(link.name)}
            >
              <a
                href={link.link}
                className={`hover:text-[#ff014f] duration-500 text-[18px] ${
                  active === link.name ? 'text-[#ff014f]' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

