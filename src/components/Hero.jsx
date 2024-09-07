import React from 'react';
import heroimage from '../Assets/sachintha_image_removebg.png';
import scrollIcon from '../Assets/scrollIcon.png';
import NavBar  from './navbar/NavBar';
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

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
    <div className='hero relative  h-[100vh] overflow-hidden text-white'>
      <NavBar/>
      <div className='wrapper max-w-[1100px] h-full m-auto'>
        <motion.div
          className='text-container h-full flex flex-col gap-[20px] justify-center'
          initial="initial"
          whileInView="whileInView"
          variants={textVariants}
        >
          <motion.h2
            variants={textVariants}
            className='text-[36px]  tracking-[10px] text-[#0096ff] '
          >
            SACHINTHA CHAMINDU
          </motion.h2>
          <motion.h1 variants={textVariants} className='text-[88px]'>
            Full Stack <span className='text-[#0096ff]'>Developer</span>
          </motion.h1>

          <motion.div variants={buttonVariants} className="flex gap-4">
            <motion.button
              variants={buttonVariants}
              className='inline-block px-6 py-3 bg-transparent text-[#13bbff] border-2 border-[#13bbff] rounded-lg text-[15px] font-semibold  ease-in-out transform hover:bg-[#13bbff] hover:text-white  hover:scale-110 cursor-pointer z-10'
            >
              See the latest work
            </motion.button>
           
          </motion.div>

          <motion.img
            variants={textVariants}
            src={scrollIcon}
            alt="scroll icon"
            className="h-[30px] w-[30px]"
          />
        </motion.div>
      </div>

      <motion.div
        className='slidingTextContainer absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold'
        variants={slideVariants}
        initial="initial"
        animate="animate"
      >
        Programmer developer
      </motion.div>

      <div className='imageContainer absolute top-0 right-0 h-full'>
        <img src={heroimage} alt='hero image' className="h-[500px] w-[300px] mt-[100px]"/>
      </div>
    </div>
  );
};

export default Hero;
