// import React from 'react';

// import { motion } from 'framer-motion';

// const slideVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: '-220%',
//     transition: {
//       repeat: Infinity,
//       repeatType: 'mirror',
//       duration: 20,
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <div className="relative text-center h-screen overflow-hidden" id='hero'>
     
//      <div>
//       <motion.div
//         className="slidingTextContainer absolute hidden lg:block bottom-1/9 w-full text-center whitespace-nowrap text-[#ffffff04] font-bold mt-[-50px]"
//         variants={slideVariants}
//         initial="initial"
//         animate="animate"
//       >
//         <span className="text-[100px] md:text-[50px] lg:text-[300px] xl:text-[300px] text-slate-700 opacity-[0.2]">SACHINTHA CHAMINDU</span>
//       </motion.div>

//       <div className="flex justify-center items-center my-5 mt-[150px] z-40">
//         <div className="flex justify-center w-[300px] h-[300px] bg-cover bg-center bg-white shadow-lg shadow-blue-300 animate-animateBlob transition-all duration-1000 ease-in-out z-30"></div>
//       </div>

//       <h2 className="text-5xl py-2 font-medium text-teal-600 dark:text-teal-400">
//         SACHINTHA <span className="text-white">CHAMINDU</span>
//       </h2>
//       <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
//         FULL STACK <span className="text-teal-600 dark:text-teal-400">DEVELOPER</span>
//       </h3>
//       <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
//       Creative problem-solver and tech enthusiast, bringing ideas to life through code and design. Let's collaborate and build something extraordinary!
//       </p>
//       <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
//         {/* Social icons */}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { FaGithub,FaLinkedin,FaYoutube,FaTwitter,FaMedium } from 'react-icons/fa';
import { Link } from 'react-scroll';
import HeroImage2 from '../Assets/Heroimages/HeroImage2.png';
import NewImage from '../components/BlobImage';
import image from '../Assets/Heroimages/new_image7.png';



const Hero = () => {

 

  const socials = [
    {icon:<FaGithub/>, path:"https://github.com/sachinthacham"},
    {icon:<FaLinkedin/>, path:"https://www.linkedin.com/in/sachinthacham/"},
    {icon:<FaMedium/>, path:"https://medium.com/@sachinthachamindu26"},
   
  ]

  
  
  
  return (
    <section id='hero' className='min-h-screen text-white bg-[#232323]  sm:pt-28 pt-16 px-6 sm:px-12  relative mt-12'>
    <div className='h-full'>
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        {/* Left Section - Text */}
        <div className='text-center xl:text-left order-2 xl:order-none'>
          <span className='text-lg sm:text-xl'>Hi There, I am</span>
          <h1 className='text-[32px] sm:text-[48px] xl:text-[60px] leading-[1.1] font-semibold mb-6'>
           <span className='text-[#ff014f]'>SACHINTHA </span>CHAMINDU<br />

            <span className='text-white text-[40px]'  >FULL STACK <span className=' font-[400]'>DEVELOPER</span></span>
          
     
  
          
          
          
          
          </h1>
          <p className='max-w-[400px] sm:max-w-[500px] mb-6 text-white/70'>
            Creative problem-solver and tech enthusiast, bringing ideas to life through code and design.
          </p>
          <div className='flex flex-col xl:flex-row items-center gap-6 xl:gap-8 z-[300] '>
          <button className='hidden uppercase  items-center gap-2 px-6 py-3 border-2 border-[#ff014f] text-[#ff014f]  hover:text-white cursor-pointer transition-all duration-300 rounded-lg'>
  <span className='z-50'>Download CV</span>
  <FaFileDownload className='text-xl' />
</button>

            <div className='mb-8 xl:mb-0'>
              <div className="flex gap-6 z-[100000]">
                {socials.map((social, index) => (
                 <a
                 key={index}
                 href={social.path}
                 className="z-[40] w-8 h-8 sm:w-9 sm:h-9 bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]  flex justify-center items-center text-white text-[30px] transition-transform duration-300 hover:text-[#ff014f]  hover:scale-105 hover:-translate-y-1"
               >
                 {social.icon}
               </a>
               
                ))}
              </div>
            </div>
          </div>
        </div>
  
        {/* Right Section - Image with SVG */}
        <div className='order-1 xl:order-none mb-8 xl:mb-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] xl:w-[498px] xl:h-[498px] grid place-items-center'>
          <div className="relative w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] mx-auto mt-[-50px]">
            <div className="absolute top-[40px] right-[-50px] w-[150%] h-auto">
              <svg id="animated-div" data-aos="zoom-in" data-aos-once="false" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path fill="#ff014f" d="M29.8,-47.1C39,-40.5,47.2,-32.9,55.4,-22.9C63.6,-13,71.9,-0.7,72.9,12.3C73.9,25.4,67.6,39.3,57.4,48C47.1,56.8,33,60.4,19.7,62C6.4,63.7,-6.1,63.3,-20.8,62.7C-35.5,62,-52.5,61.1,-60.2,52.2C-67.9,43.2,-66.4,26.3,-65.5,11.4C-64.6,-3.6,-64.4,-16.4,-61,-29.5C-57.5,-42.5,-50.9,-55.6,-40.2,-61.6C-29.5,-67.5,-14.7,-66.2,-2.2,-62.7C10.3,-59.3,20.6,-53.7,29.8,-47.1Z" transform="translate(100 100)" />
              </svg>
            </div>
  
            {/* Image */}
            <img
              src={image}
              alt="Decorative"
              className="relative w-full rounded-lg"
              
            />
          </div>
        </div>
      </div>
    </div>
  
    {/* SVG Background */}
    <div className="absolute bottom-0 left-0 w-full z-[10]">
      <svg width="100%" height="100%" viewBox="0 0 1440 240" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
        <path d="M 0,400 L 0,150 C 172,186.39999999999998 344,222.79999999999998 505,221 C 666,219.20000000000002 816,179.20000000000002 970,161 C 1124,142.79999999999998 1282,146.39999999999998 1440,150 L 1440,400 L 0,400 Z" fill="#141414" />
      </svg>
    </div>
  </section>
  
  
  )
}

export default Hero;

{/* <div className="flex justify-center w-[200px] h-[200px] sm:w-[300px] sm:h-[400px] items-center bg-cover bg-center bg-[url('Assets/favicon.ico.png')] shadow-lg shadow-blue-300 animate-animateBlob transition-all duration-1000 ease-in-out z-30"></div>
             */}
