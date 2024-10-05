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

import React from 'react'
import { FaFileDownload } from 'react-icons/fa';
import { FaGithub,FaLinkedin,FaYoutube,FaTwitter } from 'react-icons/fa';
import { Link } from 'react-scroll';
import HeroImage2 from '../Assets/Heroimages/HeroImage2.png'


const Hero = () => {
  const socials = [
    {icon:<FaGithub/>, path:""},
    {icon:<FaLinkedin/>, path:""},
    {icon:<FaYoutube/>, path:""},
    {icon:<FaTwitter/>,path:""}
  ]
  return (
    <section className='h-full text-white'>
      <div className='container nx-auto h-full'>
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24'>
        <div className='text-center xl:text-left order-2 xl:order-none'>
          <span className='text-xl'>Software Developer</span>
          <h1 className='text-[48px] xl:text-[80px] leading-[1.1] font-semibold mb-6'>Hello i am <br/> <span className='text-green-500'>sachintha chamindu</span></h1>
          <p className='max-w-[500px] mb-9 text-white/80'>Creative problem-solver and tech enthusiast, bringing ideas to life through code and design. Let's collaborate and build something extraordinary</p>
          <div className='flex flex-col xl:flex-row items-center gap-8'>
            <button variant="outline" size="lg" className='uppercase flex items-center gap-2'>
              <span>Download CV</span>
              <FaFileDownload className='text-xl'/>
            </button>
            <div className='mb-8 xl:mb-0'>
              <div className="flex gap-6">
                {
                  socials.map((social, index) => (
                    <Link key={index} href={social.path} className="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-blue-600 text-base hover:bg-blue-600 hover:text-primary hover:transition-all duration-500">{social.icon}</Link>
                  ))
                }
              </div>

            </div>
          <div>

        </div>
          </div>
        </div>
        <div className='order-1 xl:order-none mb-8 xl:mb-0'>
          <div className='w-full h-full relative'>
               <div>
                <div className='w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]'>
                <div className="flex justify-center w-[300px] h-[300px] bg-cover bg-center bg-[url('Assets/favicon.ico.png')] shadow-lg shadow-blue-300 animate-animateBlob transition-all duration-1000 ease-in-out z-30"></div>
                </div>
              </div> 
          </div>
        </div>
      </div>
        </div>
    
      
    </section>
  )
}

export default Hero
