import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiMicrosoftsqlserver, SiPostman, SiDotnet } from 'react-icons/si';
import { motion } from 'framer-motion';

const skillsAnimation = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.2, 1], // Keyframes for scaling up and down
    transition: {
      duration: 2,     // Duration of the scale animation
      repeat: Infinity, // Repeat indefinitely
      repeatType: 'loop', // Continuous loop
    }
  }
};

const Skills = () => {
  const technologies = [
    { name: 'React', icon: <SiReact className='text-7xl' style={{ color: '#61DBFB' }} /> }, // React original color
    { name: 'MongoDB', icon: <SiMongodb className='text-7xl' style={{ color: '#47A248' }} /> }, // MongoDB green
    { name: 'Express.js', icon: <SiExpress className='text-7xl' style={{ color: '#000000' }} /> }, // Express.js black
    { name: 'Node.js', icon: <SiNodedotjs className='text-7xl' style={{ color: '#339933' }} /> }, // Node.js green
    { name: 'JavaScript', icon: <SiJavascript className='text-7xl' style={{ color: '#F7DF1E' }} /> }, // JavaScript yellow
    { name: 'Microsoft SQL Server', icon: <SiMicrosoftsqlserver className='text-7xl' style={{ color: '#CC2927' }} /> }, // SQL Server red
    { name: '.NET', icon: <SiDotnet className='text-7xl' style={{ color: '#512BD4' }} /> }, // .NET purple
    { name: 'CSS3', icon: <SiCss3 className='text-7xl' style={{ color: '#1572B6' }} /> }, // CSS3 blue
    { name: 'HTML5', icon: <SiHtml5 className='text-7xl' style={{ color: '#E34F26' }} /> }, // HTML5 orange
    { name: 'MySQL', icon: <SiMysql className='text-7xl' style={{ color: '#4479A1' }} /> }, // MySQL blue
    { name: 'Postman', icon: <SiPostman className='text-7xl' style={{ color: '#FF6C37' }} /> }, // Postman orange
  ];

  return (
    <div id="skills"className='border-b border-neutral-800 pb-24 h-[100vh]'>
      <h1 className='my-20 text-center text-4xl text-white'>Technologies</h1>
      <div className='flex justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='flex flex-wrap items-center justify-center gap-12 w-[70%]'
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className='group relative rounded-2xl border-4 border-neutral-800 p-4 hover:bg-cyan-900 transition duration-300'
              variants={skillsAnimation}
              initial='initial'
              animate='animate'
            >
              {tech.icon}
            
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
