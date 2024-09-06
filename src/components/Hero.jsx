import React from 'react';
import heroimage from '../Assets/sachintha_image_removebg.png';
import scrollIcon from '../Assets/scrollIcon.png';
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
      <div className='wrapper max-w-[1100px] h-full m-auto'>
        <motion.div
          className='text-container h-full flex flex-col gap-[40px] justify-center'
          initial="initial"
          whileInView="whileInView"
          variants={textVariants}
        >
          <motion.h2
            variants={textVariants}
            className='text-[30px] text-[rebeccapurple] tracking-[10px]'
          >
            HARVEY TYLER
          </motion.h2>
          <motion.h1 variants={textVariants} className='text-[88px]'>
            Full Stack Developer
          </motion.h1>

          <motion.div variants={buttonVariants} className="flex gap-4">
            <motion.button
              variants={buttonVariants}
              className='p-[20px] border border-white rounded-[10px] bg-transparent text-white cursor-pointer font-[300]'
            >
              See the latest work
            </motion.button>
            <motion.button
              variants={buttonVariants}
              className='p-[20px] border border-white rounded-[10px] bg-transparent text-white cursor-pointer font-[300]'
            >
              Contact Me
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
        <img src={heroimage} alt='hero image' className="h-[300px] w-[200px]"/>
      </div>
    </div>
  );
};

export default Hero;
