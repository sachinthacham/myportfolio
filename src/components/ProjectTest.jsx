import React from 'react'
import ProjectData from '../Assets/Data.jsx/ProjectData'
import Slider from '../components/SliderComponent'
import img1 from '../Assets/MyImages/github image.jpg';
import img2 from '../Assets/MyImages/sorting image.jpg';
import img3 from '../Assets/MyImages/oop image.jpg';
import { BsEye } from 'react-icons/bs';

const ProjectTest = () => {
  
  return (
    <div className=" text-white py-20 " id="project">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12" data-aos="zoom-in" data-aos-once="false"><span className='text-[#ff014f]'>Creations</span> I've Been a Part Of</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {ProjectData.map(project =>(
           <div key={project.id} data-aos="fade-up"
           //data-aos-easing="ease-out-cubic"
           data-aos-duration={2000}
           data-aos-delay={project.id > 3? project.id * 80 : project.id * 300}

           className="bg-[#202020] p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 grid grid-cols-1 gap-3">
           {/* <img src={project.img} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" /> */}
           <img src={project.img}/>
           
           <h3 className=" md:text-2xl font-bold mb-2">{project.name}</h3>
           
           <p className=" mb-4 text-[#ff014f] font-bold">{project.tech}</p>
           
           <div className='text-justify'>
            {project.descript}
           </div>
           <div className='w-full flex justify-center items-center'>
           <button 
  className={`px-6 py-2 rounded-md text-white flex ${project.isdisable ? 'bg-gray-500' : 'bg-[#ff014f]'}`} 
  disabled={project.isdisable}
            ><a href={project.link}> View</a></button>
           </div>
         </div>
         
           ))} 
      </div>
    </div>
  
  </div>
  
  )
}

export default ProjectTest
