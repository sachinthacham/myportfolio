import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Uom_logo from '../../Assets/uom_logo.png'
import { FaGraduationCap } from 'react-icons/fa';
import { MdBook } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';


const About = () => {
 
  return (
<div className="flex flex-col justify-center items-center min-h-screen">
  {/* Title Section */}
  <div className="contact-title text-center px-4 md:px-0 m-[30px]">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white">
      My Journey
    </h1>
  </div>

  {/* Content Section */}
  <div
    id="content-section"
    className="flex flex-col md:flex-row justify-around w-[90%] min-h-[80vh] min-w-[300px] mt-8 md:mt-0"
  >
    {/* Left Side */}
    <div
      className="w-full md:w-[48%]  flex flex-col gap-8 p-4 h-full"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
      data-aos-delay="50"
    >
      {/* First child */}
      <div className="flex flex-col gap-3 justify-center p-4 text-white flex-grow border-[3px] border-teal-600 dark:border-teal-400 rounded-[8px]">
        <div className="w-full h-[37%] "><FaGraduationCap size={50} color="white" />During my school years, I achieved significant milestones both academically and beyond. In 2015, I completed my Ordinary Level examinations with 7 A’s and 2 B’s, reflecting my dedication to academic excellence. </div>
        <div className="w-full h-[37%] "><FaGraduationCap size={50} color="white" />By 2018, I furthered my education by completing the Advanced Level, earning 1 A and 2 B’s. Alongside my studies, I actively participated in various competitions, which provided me with valuable experiences and recognition through awards</div>
        
      </div>

      {/* Second child */}
      <div className="border-[3px] border-teal-600 dark:border-teal-400 rounded-[8px] p-4 text-white flex-grow ">
        <div className="flex justify-start m-[10px] h-[30%] ">
          <img src={Uom_logo} alt="logo" className="h-[80px] w-[80px] ml-[-10px]" />
          <div className="flex flex-col gap-[10px] justify-start ml-4">
            <div>BSc. (Hons) Information Technology</div>
            <div>Undergraduate (University of Moratuwa)</div>
          </div>
        </div>
        <div className="h-[60%]">
          <p>
         
            I am currently pursuing my degree as an Information Technology
            undergraduate at the University of Moratuwa, building on the strong
            foundation. My academic journey has equipped me with skills in
            software development, web technologies, and database management,
            fueling my passion for tech innovation and problem-solving.
          </p>
        </div>
      </div>
    </div>

    {/* Right Side */}
    <div
      className="w-full md:w-[48%]   flex flex-col gap-8 p-4 h-full"
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      {/* First child */}
      <div className="border-[3px] border-teal-600 dark:border-teal-400 p-4 text-white flex-grow rounded-[8px] ">
      
      <GiSkills size={50} color="white" />
      Throughout my academic journey, I have successfully completed several projects at university, each contributing to my growth as a technical professional.
      Beyond university, I have taken the initiative to work on personal projects, which allowed me to further refine my technical expertise and experiment with new tools and technologies. 
      
      </div>

      {/* Second child */}
      <div className="flex justify-around items-center flex-row flex-wrap gap-4 text-white flex-grow rounded-[8px] border-red-500 ">
        <div className="flex flex-col justify-center gap-[10px] h-[60%] w-[30%] bg-gray-800 rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px]">
          <div className="text-[60px] text-white flex justify-center items-center">
            5+
          </div>
          <div className="text-[20px] text-white flex justify-center items-center">
            Projects
          </div>
        </div>

        <div className="flex flex-col justify-center gap-[10px] h-[60%] w-[30%] bg-gray-800 rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px]">
          <div className="text-[60px] text-white flex justify-center items-center">
            2+
          </div>
          <div className="text-[20px] text-white flex justify-center items-center">
            Experience
          </div>
        </div>

        <button className="flex flex-col items-center justify-center h-[20%] w-[40%] bg-gray-800 rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px]">
          Download CV
        </button>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;
