import React from 'react';

import { motion } from 'framer-motion';

const slideVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="relative text-center h-screen overflow-hidden" id='hero'>
     
     <div>
      <motion.div
        className="slidingTextContainer absolute hidden lg:block bottom-1/9 w-full text-center whitespace-nowrap text-[#ffffff04] font-bold mt-[-50px]"
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        <span className="text-[100px] md:text-[50px] lg:text-[300px] xl:text-[300px] text-slate-700 opacity-[0.2]">SACHINTHA CHAMINDU</span>
      </motion.div>

      <div className="flex justify-center items-center my-5 mt-[150px] z-40">
        <div className="flex justify-center w-[300px] h-[300px] bg-cover bg-center bg-[url('Assets/favicon.ico.jpg')] shadow-lg shadow-blue-300 animate-animateBlob transition-all duration-1000 ease-in-out z-30"></div>
      </div>

      <h2 className="text-5xl py-2 font-medium text-teal-600 dark:text-teal-400">
        SACHINTHA <span className="text-white">CHAMINDU</span>
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        FULL STACK <span className="text-teal-600 dark:text-teal-400">DEVELOPER</span>
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Freelancer providing services for programming and design content
        needs. Join me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        {/* Social icons */}
      </div>
    </div>
    </div>
  );
};

export default Hero;
