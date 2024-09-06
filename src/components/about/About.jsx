import React from 'react';
import heroimage from '../../Assets/sachintha_image_removebg.png';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id='about' className='about flex flex-col items-center justify-center gap-[80px] my-[80px] mx-[170px] h-[100vh]'>
      <div className='about-title relative'>
        <h1 className='px-[0px] py-[30px] text-[80px] font-[600] text-white'>About Me</h1>
      </div>

      <div className='about-section flex justify-between w-[80%]'>
        <div className='about-left mt-[-80px]'>
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1, ease: 'easeInOut' }} // Slow down the animation
            src={heroimage}
            alt="hero image"
            height="300px"
            width="300px"
          />
        </div>

        <motion.div
          whileInView = {{ opacity: 1, x: 0 }}
          initial = {{ opacity: 0, x: 100 }}
          transition = {{ duration: 1, ease: 'easeInOut' }} // Slow down the animation
          className = 'about-right flex flex-col gap-[80px]'
        >
          <div className="about-para flex flex-col gap-[20px] text-[19px] font-[500]  text-white w-[550px]">
            <p>In this tutorial you will learn to build and deploy complete responsive portfolio website using React JS. This Portfolio website will be completely responsive and we will add react smooth scroll and working contact form on this personal portfolio website.</p>
            <p>In this tutorial you will learn to build and deploy complete responsive portfolio website using React JS. This Portfolio website will be completely responsive and we will add react smooth scroll and working contact form on this personal portfolio website.</p>
          </div>
          <button className='p-[20px] border border-white rounded-[10px] bg-black text-white cursor-pointer font-[300] w-[180px]'>Download CV</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
