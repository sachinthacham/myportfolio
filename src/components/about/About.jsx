// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import Uom_logo from '../../Assets/uom_logo.png'
// import { FaGraduationCap } from 'react-icons/fa';
// import { MdBook } from 'react-icons/md';
// import { GiSkills } from 'react-icons/gi';
// import cv from '../../Assets/sachintha chamindu.pdf'


// const About = () => {
 
//   return (
// <div className="container flex flex-col justify-center items-center min-h-screen pt-[100px]" id="about">
//   {/* Title Section */}
//   <div className="contact-title text-center px-4 md:px-0 m-[30px]">
//     <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-white">
//       My Journey
//     </h1>
//   </div>

//   {/* Content Section */}
//   <div
//     id="content-section"
//     className="flex flex-col md:flex-row justify-around w-[90%] min-h-[80vh] min-w-[300px] mt-8 md:mt-0"
//   >
//     {/* Left Side */}
//     <div
//       className="w-full md:w-[48%]  flex flex-col gap-8 p-4 h-full "
//       data-aos="fade-up"
//       data-aos-anchor-placement="center-bottom"
//       data-aos-duration="1000"
//        data-aos-delay="30"
      
//     >
//       {/* First child */}
//       <div className="flex flex-col gap-3 justify-center p-4 text-white flex-grow border-[3px] border-teal-600 dark:border-teal-400 rounded-[8px]">
//         <div className="w-full h-[37%] "><FaGraduationCap size={50} color="white" />During my school years, I achieved significant milestones both academically and beyond. In 2015, I completed my Ordinary Level examinations with 7 A’s and 2 B’s, reflecting my dedication to academic excellence. </div>
//         <div className="w-full h-[37%] "><FaGraduationCap size={50} color="white" />By 2018, I furthered my education by completing the Advanced Level, earning 1 A and 2 B’s. Alongside my studies, I actively participated in various competitions, which provided me with valuable experiences and recognition through awards</div>
        
//       </div>

//       {/* Second child */}
//       <div className="border-[3px] border-teal-600 dark:border-teal-400 rounded-[8px] p-4 text-white flex-grow ">
//         <div className="flex justify-start m-[10px] h-[30%] ">
//           <img src={Uom_logo} alt="logo" className="h-[80px] w-[80px] ml-[-10px]" />
//           <div className="flex flex-col gap-[10px] justify-start ml-4">
//             <div>BSc. (Hons) Information Technology</div>
//             <div>Undergraduate (University of Moratuwa)</div>
//           </div>
//         </div>
//         <div className="h-[60%]">
//           <p>
         
//             I am currently pursuing my degree as an Information Technology
//             undergraduate at the University of Moratuwa, building on the strong
//             foundation. My academic journey has equipped me with skills in
//             software development, web technologies, and database management,
//             fueling my passion for tech innovation and problem-solving.
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Right Side */}
//     <div
//       className="w-full md:w-[48%]  flex flex-col gap-8 p-4 h-full "
//       data-aos="fade-up"
//       data-aos-anchor-placement="center-bottom"
//       data-aos-duration="1000"
//       data-aos-delay="30"
//     >
//       {/* First child */}
//       <div className="border-[3px] border-teal-600 dark:border-teal-400 p-4 text-white flex-grow rounded-[8px] h-[50%]">
      
//       <GiSkills size={50} color="white" />
//       Throughout my academic journey, I have successfully completed several projects at university, each contributing to my growth as a technical professional.
//       Beyond university, I have taken the initiative to work on personal projects, which allowed me to further refine my technical expertise and experiment with new tools and technologies. 
      
//       </div>

//       {/* Second child */}
//       <div className="flex justify-around items-center flex-row flex-wrap gap-4 text-white flex-grow rounded-[8px] border-red-500 ">
//         <div className="flex flex-col justify-center gap-[0px] h-[60%] w-[30%] bg-gray-800 rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px] p-[10px]">
//           <div className="text-[60px] bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent flex justify-center items-center">
//             5+
//           </div>
//           <div className="text-[15px] bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent flex justify-center items-center">
//             Projects
//           </div>
//         </div>

//         <div className="flex flex-col justify-center gap-[0px] h-[60%] w-[30%] bg-gray-800 rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px] p-[10px]">
//           <div className="text-[60px] bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent flex justify-center items-center">
//             2+
//           </div>
//           <div className="text-[15px] bg-gradient-to-r from-teal-600 to-teal-400 dark:from-teal-400 dark:to-teal-600 bg-clip-text text-transparent flex justify-center items-center ">
//             Experience
//           </div>
//         </div>

//         <a download="" href={cv} className="flex flex-col px-6 py-3 items-center justify-center h-[20%] w-[50%]  rounded-lg max-w-[300px] md:max-w-[250px] lg:max-w-[300px] bg-transparent text-teal-600 dark:text-teal-400 border-2 border-teal-600">
//           Download CV
//         </a>

       

//       </div>
//     </div>
//   </div>
// </div>

//   );
// };

// export default About;


import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import certify1 from '../../Assets/Certificates/certify1.png';
import certify2 from '../../Assets/Certificates/certify2.png';
import certify3 from '../../Assets/Certificates/certify3.png';
import certify4 from '../../Assets/Certificates/certify4.png';
import certify5 from '../../Assets/Certificates/certify5.jpg';
import certify6 from '../../Assets/Certificates/certify6.png';
import certify7 from '../../Assets/Certificates/certify7.png';

import Uom_logo from '../../Assets/uom_logo.png';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const About = () => {
  
  const certificates = [
    certify1,certify2,certify3,certify4,certify5,certify6,certify7
  ]
  
  return (
    <section id='about' className='education text-white flex justify-center flex-col  pb-[5rem] xl:pt-14' style={{minHeight: "auto"}} >
            <div className='flex justify-center items-center'>
            <h2 className='heading   px-[1rem] pt-0 pb-[2rem] text-[50px] text-white text-xl' ><span>Find Out <span className='text-[#ff014f]'>More...</span></span></h2>
            </div>
         
     
      
      <div className = 'education-row grid grid-cols-1 md:grid-cols-2 gap-14 sm:px-12 sm:grid-cols-1 sm:mt-8 sm:mx-20 sm:py-12 rounded-xl bg-[#292929]'>

        {/* left column */}
        <div className='education-column flex flex-col flex-grow flex-shrink basis-[40rem] mx-5 sm:mx-0 my-5 sm:my-0'>
      
          <div className="education-box border-l-[#ff014f] border-l-[0.1rem] ">
          <motion.div 
      className="education-content  relative pl-[2rem] before:absolute before:top-0 before:left-[-0.8rem] before:w-6 before:h-6 before:bg-[#ff014f] before:rounded-full before:content-empty"
      initial={{ y: 0 }} // Start at original position
      animate={{ y: [0, -10, 0] }} // Move up and down
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }} // Repeats infinitely
    >
      <div className="content bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] relative sm:p-[1.5rem]  rounded-[0.6rem] mb-[2rem] sm:grid sm:grid-cols-6 grid-cols-1 p-[0.6rem]">
        <div className="grid col-span-2 place-items-center">
          <img src={Uom_logo} alt="logo" className="h-[120px] w-[120px] ml-[-10px]" />
        </div>
        <div className="grid col-span-4 grid-col-1 gap-3">
          <div>IT Undergraduate</div>
          <div>University Of Moratuwa</div>
          <div>Faculty of Information Technology</div>
          <div>2022 - 2026</div>
        </div>
      </div>
    </motion.div>
            <motion.div 
            initial={{ y: 0 }} // Start at original position
            animate={{ y: [0, -10, 0] }} // Move up and down
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="education-content relative pl-[2rem] before:absolute before:top-0 before:left-[-0.8rem] before:w-6 before:h-6 before:bg-[#ff014f] before:rounded-full before:content-empty">
              <div className="content relative p-[1.5rem]  bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]  rounded-[0.6rem] mb-[2rem]">
                <div className="year text-2xl"><FaGraduationCap/></div>
                <h3>Aspiring Software Engineer Intern</h3>
                <p>
                With a strong foundation in modern web development, I am actively seeking a Software Engineer internship. I specialize in<span className='text-[#ff014f]'>  React</span> for building dynamic user interfaces and <span className='text-[#ff014f]'>.NET </span>  for robust backend services.</p>
              </div>
            </motion.div>
            <motion.div
            initial={{ y: 0 }} // Start at original position
            animate={{ y: [0, -10, 0] }} // Move up and down
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="education-content relative pl-[2rem] before:absolute before:top-0 before:left-[-0.8rem] before:w-6 before:h-6 before:bg-[#ff014f] before:rounded-full before:content-empty">
              <div className="content relative p-[1.5rem]  bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)]  rounded-[0.6rem] mb-[2rem]">
              <div className="year text-2xl"><FaGraduationCap/></div>
                <h3></h3>
                <p>My passion for continuous learning allows me to quickly adapt to new tools and frameworks. I have hands-on experience in full-stack development, building dynamic user interfaces and robust backend systems.</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* right column */}
        <div className='education-column flex flex-col  flex-grow flex-shrink basis-[40rem]'>
          
          <div className="education-box">
          <div className="education-content relative flex justify-center ">
          <div className="content w-48 sm:w-full rounded-[0.6rem] mb-[2rem] flex flex-col sm:flex-row   flex-wrap sm:justify-between justify-center pt-0 gap-4">
 
  <div  data-aos="zoom-in" data-aos-once="false" className="bg-[#232323] p-4 ml-4 sm:ml-0 sm:p-8 lg:p-8 w-[80%] sm:w-[48%] text-white flex flex-col justify-center items-center rounded-[0.6rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] font-bold text-center ">
    <div className='text-[50px] text-[#ff014f] sm:text-[60px] md:text-[70px] lg:text-[80px] font-[500] pr-5'>
      5+
    </div>
    <div className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px]'>
      Projects
    </div>
  </div>

  
  <div data-aos="zoom-in" data-aos-once="false"className="bg-[#232323] ml-4  sm:ml-0 p-4 sm:p-8 w-[80%] lg:p-8  sm:w-[48%] text-white flex flex-col justify-center items-center rounded-[0.6rem] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] font-bold text-center">
    <div className='text-[50px] text-[#ff014f] sm:text-[60px] md:text-[70px] lg:text-[80px] font-[500]'>
      2+
    </div>
    <div className='text-[20px] sm:text-[25px] md:text-[25px] lg:text-[30px]'>
      Experience
    </div>
  </div>
</div>

            </div>
            <div className="education-content relative flex  sm:pl-[2rem] justify-center items-center ">
            <div className='w-[300px] h-[300px] sm:w-[70%] sm:h-[80%] sm:mt-8'>
          
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="swiper-container"
            data-aos="zoom-in"
          >
            {certificates.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center">
                  <motion.img
                    src={image}
                   
                    className="object-cover rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
            </div>
           
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About

