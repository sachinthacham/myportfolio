import React, { useEffect, useRef } from 'react';
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiTypescript, SiJava, SiCsharp, SiC } from 'react-icons/si';

const Web = () => {
  const technologiesPartOne = [
    { name: 'JavaScript', icon: <SiJavascript className='text-6xl md:text-7xl' style={{ color: '#F7DF1E', width: '55px', height: '55px' }} />, percentage: 80 },
    { name: 'TypeScript', icon: <SiTypescript className='text-6xl md:text-7xl' style={{ color: '#007ACC', width: '55px', height: '55px' }} />, percentage: 70 },
    { name: 'C#', icon: <SiCsharp className='text-6xl md:text-7xl' style={{ color: '#239120', width: '55px', height: '55px' }} />, percentage: 65 },
    { name: 'Java', icon: <SiReact className='text-6xl md:text-7xl' style={{ color: '#007396', width: '55px', height: '55px' }} />, percentage: 60 },
    { name: 'C', icon: <SiC className='text-6xl md:text-7xl' style={{ color: '#A8B400', width: '55px', height: '55px' }} />, percentage: 50 },
    { name: 'TypeScript', icon: <SiTypescript className='text-6xl md:text-7xl' style={{ color: '#007ACC', width: '55px', height: '55px' }} />, percentage: 70 },
    { name: 'C#', icon: <SiCsharp className='text-6xl md:text-7xl' style={{ color: '#239120', width: '55px', height: '55px' }} />, percentage: 65 },
    { name: 'Java', icon: <SiReact className='text-6xl md:text-7xl' style={{ color: '#007396', width: '55px', height: '55px' }} />, percentage: 60 },
    
];

  const progressRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const progressBar = entry.target.querySelector('.progress-bar-inner');
          const dot = entry.target.querySelector('.progress-bar-dot');
          if (entry.isIntersecting) {
            // When in view, animate the progress bar to its full width
            progressBar.style.width = `${entry.target.dataset.percentage}%`;
            dot.style.left = `${entry.target.dataset.percentage-3}%`;
          } else {
            // Reset the progress bar when it exits the view
            progressBar.style.width = '0%';
            dot.style.left = '0%';
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
    <div className='grid grid-cols-1 sm:grid-cols-2  gap-4'>
    {technologiesPartOne.map((tech, index) => (
      <div
        key={index}
        ref={(el) => (progressRefs.current[index] = el)}
        data-percentage={tech.percentage}
        className='flex justify-between items-center min-w-[250px] py-[10px] p-3 gap-[15px]'
      >
        <div className='flex justify-center items-center'>{tech.icon}</div>
        <div className='bar w-[70%] h-[5px] rounded-[25px] bg-[#333] mt-[10px] relative flex justify-center items-center'>
          <span
            className='absolute left-0 h-full bg-[#ff014f] rounded-[25px] progress-bar-inner'
            style={{ width: '0%', transition: 'width 1s ease-in-out' }}
          ></span>
           <span
              className='absolute top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.3)] progress-bar-dot'
              style={{ left: '0%', transition: 'left 1s ease-in-out' }}
            ></span>
        </div>
        <div className='text-white mt-[10px]'>{tech.percentage}%</div>
      </div>
    ))}
  </div>
  );
};

export default Web;
