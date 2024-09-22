import React, { useEffect, useRef } from 'react';
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiMicrosoftsqlserver, SiPostman, SiDotnet } from 'react-icons/si';

const Skills = () => {
  const technologiesPartOne = [
    { name: 'React', icon: <SiReact className='text-6xl md:text-7xl' style={{ color: '#61DBFB', width: '55px', height: '55px' }} />, percentage: 75 },
    { name: 'MongoDB', icon: <SiMongodb className='text-6xl md:text-7xl' style={{ color: '#47A248', width: '55px', height: '55px' }} />, percentage: 65 },
    { name: 'Express.js', icon: <SiExpress className='text-6xl md:text-7xl' style={{ color: '#a8eb0a', width: '55px', height: '55px' }} />, percentage: 70 },
    { name: 'Node.js', icon: <SiNodedotjs className='text-6xl md:text-7xl' style={{ color: '#339933', width: '55px', height: '55px' }} />, percentage: 65 },
    
  ];

  const technologiesPartTwo = [
    { name: '.NET', icon: <SiDotnet className='text-6xl md:text-7xl' style={{ color: '#512BD4', width: '55px', height: '55px' }} />, percentage: 70},
    { name: 'MS SQL', icon: <SiMicrosoftsqlserver className='text-6xl md:text-7xl' style={{ color: '#CC2927', width: '55px', height: '55px' }} />, percentage: 65 },
    { name: 'MySQL', icon: <SiMysql className='text-6xl md:text-7xl' style={{ color: '#4479A1', width: '55px', height: '55px' }} />, percentage: 60},
    { name: 'JavaScript', icon: <SiJavascript className='text-6xl md:text-7xl' style={{ color: '#F7DF1E', width: '55px', height: '55px' }} />, percentage: 75 },
  ];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progressBar = entry.target.querySelector('.progress-bar-inner');
          if (entry.isIntersecting) {
            // When in view, animate the progress bar to its full width
            progressBar.style.width = `${entry.target.dataset.percentage}%`;
          } else {
            // Reset the progress bar when it exits the view
            progressBar.style.width = '0%';
          }
        });
      },
      { threshold: 0.5 }
    );

    progressRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-3xl md:text-4xl text-red-700'>Technologies & Skills</h1>
      <div className='flex justify-center items-center'>
        <div className='flex flex-wrap gap-10 md:gap-14 items-start justify-around w-[70%] max-w-7xl  py-[30px] md:py-[60px] px-4 md:px-8 rounded-[20px] mt-[-50px] '>

          {/* First column */}
          <div className='w-[90%] md:w-[45%] flex flex-wrap justify-center gap-[20px] border-gray-800'>
            {technologiesPartOne.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (progressRefs.current[index] = el)}
                data-percentage={tech.percentage}
                className='flex w-full justify-between items-center min-w-[250px] py-[10px]  p-3 gap-[15px] '
              >
                <div>{tech.icon}</div>
                <div className='bar w-[70%] h-[10px] rounded-[25px] bg-[#333] mt-[10px] relative'>
                  <span
                    className='absolute left-0 h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-[25px] progress-bar-inner'
                    style={{ width: '0%', transition: 'width 1s ease-in-out' }}
                  ></span>
                 
                </div>
                <div className='text-white'>{tech.percentage}%</div>
              </div>
            ))}
          </div>

          {/* Second column */}
          <div className='w-[90%] md:w-[45%] flex flex-wrap justify-center gap-[20px]'>
            {technologiesPartTwo.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (progressRefs.current[technologiesPartOne.length + index] = el)}
                data-percentage={tech.percentage}
                className='flex w-full justify-between items-center min-w-[250px] py-[10px]  p-3 gap-[15px]'
              >
                <div>{tech.icon}</div>
                <div className='bar w-[70%] h-[10px] bg-[#333] rounded-[25px] mt-[10px] relative'>
                  <span
                    className='absolute left-0 h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-[25px] progress-bar-inner'
                    style={{ width: '0%', transition: 'width 1s ease-in-out' }}
                  ></span>
                </div>
                <div className='text-white'>{tech.percentage}%</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
