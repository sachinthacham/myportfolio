import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiMicrosoftsqlserver, SiPostman, SiDotnet } from 'react-icons/si';
import { motion } from 'framer-motion';



const Skills = () => {
  const technologies = [
    { name: 'React', icon: <SiReact className='text-7xl' style={{ color: '#61DBFB',width:"65px", height:"65px" }} /> }, // React original color
    { name: 'MongoDB', icon: <SiMongodb className='text-7xl' style={{ color: '#47A248',width:"65px", height:"65px"  }} /> }, // MongoDB green
    { name: 'Express.js', icon: <SiExpress className='text-7xl' style={{ color: '#000000',width:"65px", height:"65px"  }} /> }, // Express.js black
    { name: 'Node.js', icon: <SiNodedotjs className='text-7xl' style={{ color: '#339933',width:"65px", height:"65px"  }} /> }, // Node.js green
    { name: 'JavaScript', icon: <SiJavascript className='text-7xl' style={{ color: '#F7DF1E',width:"65px", height:"65px"  }} /> }, // JavaScript yellow
    { name: 'Microsoft SQL Server', icon: <SiMicrosoftsqlserver className='text-7xl' style={{ color: '#CC2927',width:"65px", height:"65px"  }} /> }, // SQL Server red
    { name: '.NET', icon: <SiDotnet className='text-7xl' style={{ color: '#512BD4',width:"65px", height:"65px"  }} /> }, // .NET purple
    { name: 'CSS3', icon: <SiCss3 className='text-7xl' style={{ color: '#1572B6',width:"65px", height:"65px"  }} /> }, // CSS3 blue
    { name: 'HTML5', icon: <SiHtml5 className='text-7xl' style={{ color: '#E34F26',width:"65px", height:"65px"  }} /> }, // HTML5 orange
    { name: 'MySQL', icon: <SiMysql className='text-7xl' style={{ color: '#4479A1',width:"65px", height:"65px"  }} /> }, // MySQL blue
    { name: 'Postman', icon: <SiPostman className='text-7xl' style={{ color: '#FF6C37',width:"65px", height:"65px"  }} /> }, // Postman orange
  ];
  

  return (
    <div id="skills"className='border-b border-neutral-800 pb-24 h-[100vh]'>
      <h1 className='my-20 text-center text-4xl text-white'>Technologies</h1>
      <div className='flex justify-center  bg-[#22282f] px-[100px] py-[60px] rounded-[20px] mt-[-50px] mx-[100px] '>
        <div
         
          className='flex flex-wrap items-center justify-center gap-14 w-[70%]'
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className='group relative rounded-2xl  p-4 hover:bg-white transition duration-300 '
              
            >
              {tech.icon}
            
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
