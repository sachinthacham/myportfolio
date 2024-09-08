import { useState } from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiMicrosoftsqlserver, SiPostman, SiDotnet } from 'react-icons/si';

const Skills = () => {
  const technologies = [
    { name: 'React', icon: <SiReact className='text-7xl' style={{ color: '#61DBFB', width: '65px', height: '65px' }} /> },
    { name: 'MongoDB', icon: <SiMongodb className='text-7xl' style={{ color: '#47A248', width: '65px', height: '65px' }} /> },
    { name: 'Express.js', icon: <SiExpress className='text-7xl' style={{ color: '#000000', width: '65px', height: '65px' }} /> },
    { name: 'Node.js', icon: <SiNodedotjs className='text-7xl' style={{ color: '#339933', width: '65px', height: '65px' }} /> },
    { name: 'JavaScript', icon: <SiJavascript className='text-7xl' style={{ color: '#F7DF1E', width: '65px', height: '65px' }} /> },
    { name: 'MS SQL', icon: <SiMicrosoftsqlserver className='text-7xl' style={{ color: '#CC2927', width: '65px', height: '65px' }} /> },
    { name: '.NET', icon: <SiDotnet className='text-7xl' style={{ color: '#512BD4', width: '65px', height: '65px' }} /> },
    { name: 'CSS3', icon: <SiCss3 className='text-7xl' style={{ color: '#1572B6', width: '65px', height: '65px' }} /> },
    { name: 'HTML5', icon: <SiHtml5 className='text-7xl' style={{ color: '#E34F26', width: '65px', height: '65px' }} /> },
    { name: 'MySQL', icon: <SiMysql className='text-7xl' style={{ color: '#4479A1', width: '65px', height: '65px' }} /> },
    { name: 'Postman', icon: <SiPostman className='text-7xl' style={{ color: '#FF6C37', width: '65px', height: '65px' }} /> },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="skills" className='border-b border-neutral-800 pb-24 h-[100vh]'>
      <h1 className='my-20 text-center text-4xl text-white'>Technologies</h1>
      <div className='flex justify-center items-center'>
        <div className='flex justify-center items-center w-[70%] bg-[#22282f] py-[60px] rounded-[20px] mt-[-50px]'>
          <div className='flex flex-wrap items-center justify-center gap-14 w-[80%] relative'>
            {technologies.map((tech, index) => (
              <div
                key={index}
                className='relative p-4'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div>{tech.icon}</div>
                {hoveredIndex === index && (
                  <div
                    className='absolute left-1/2 transform -translate-x-1/2  p-2 bg-none text-white rounded shadow-lg'
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {tech.name}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
