import React, { useEffect, useRef } from 'react';
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTypescript, SiJava, SiCsharp, SiC } from 'react-icons/si';

const Skills = () => {
  const technologiesPartOne = [
    { name: 'JavaScript', icon: <SiJavascript className='text-6xl md:text-7xl' style={{ color: '#F7DF1E', width: '55px', height: '55px' }} />, percentage: 80 },
    { name: 'TypeScript', icon: <SiTypescript className='text-6xl md:text-7xl' style={{ color: '#007ACC', width: '55px', height: '55px' }} />, percentage: 70 },
    { name: 'C#', icon: <SiCsharp className='text-6xl md:text-7xl' style={{ color: '#239120', width: '55px', height: '55px' }} />, percentage: 65 },
    { name: 'Java', icon: <SiReact className='text-6xl md:text-7xl' style={{ color: '#007396', width: '55px', height: '55px' }} />, percentage: 60 },
    { name: 'C', icon: <SiC className='text-6xl md:text-7xl' style={{ color: '#A8B400', width: '55px', height: '55px' }} />, percentage: 50 },
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
    <div className='w-[90%] md:w-[45%] flex flex-wrap justify-center gap-[20px] border-gray-800'>
            {technologiesPartOne.map((tech, index) => (
              <div
                key={index}
                ref={(el) => (progressRefs.current[index] = el)}
                data-percentage={tech.percentage}
                className='flex w-full justify-between items-center min-w-[250px] py-[10px] p-3 gap-[15px] '
              >
                <div className='flex justify-center items-center'>{tech.icon}</div>
                <div className='bar w-[70%] h-[10px] rounded-[25px] bg-[#333] mt-[10px] relative flex justify-center items-center'>
                  <span
                    className='absolute left-0 h-full bg-gradient-to-r from-teal-600 to-teal-400 rounded-[25px] progress-bar-inner'
                    style={{ width: '0%', transition: 'width 1s ease-in-out' }}
                  ></span>
                </div>
                <div className='text-white mt-[10px]'>{tech.percentage}%</div>
              </div>
            ))}
          </div>
  );
};

export default Skills;
