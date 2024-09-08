import React from 'react';
import slide1 from '../../Assets/slide1.png';
import slide2 from '../../Assets/slide2.png';
import slide3 from '../../Assets/slide3.png';
import slide4 from '../../Assets/slide4.png';
import slide5 from '../../Assets/slide5.png';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';



const Projects = () => {

  const settings = {
    dots:true,
    infinite:false,
    speed:500,
    slidesToShow:3,
    slidesToScroll:1,
   
  };

  const data = [
    
    {
      Projectname:'Automated washroom system',
      Description:"chilaw",
      Tech:slide2
    },
    {
      Projectname:'Employee Management System',
      Description:"A full stack web application that involves the development of a comprehensive company website for Clipess (Pvt) Ltd, with a focus on both static and dynamic features to address the management and operational needs of the organization in the software sector",
      Tech:slide3
    },
    {
      Projectname:'Hotel Booking System',
      Description:"This project created an automated system to keep restrooms clean and well-maintained. It includes features like automatic air fresheners, smoke detectors, and real-time toilet paper monitoring. The system also maintains a constant water temperature in bathtubs. Overall, it reduces the workload for cleaning staff and improves the user experience.",
      Tech:slide4
    },
    {
      Projectname:'Leo Portal',
      Description:"I developed a system for managing Leo Club projects that fosters collaboration and real-time updates, improving communication among all members. This platform enhances transparency by providing timely insights into project progress, benefiting both management and general members. It streamlines coordination, making the entire project management process more efficient throughout the Leoistic year.",
      Tech:slide5
    },
    {
      Projectname:'E-commerce website',
      Description:"I developed a dynamic e-commerce platform designed to streamline online shopping experiences. The website features a user-friendly interface with product browsing, a shopping cart, and a secure checkout process. It integrates advanced functionalities like real-time inventory management, order tracking, and payment gateway integration to ensure a seamless and efficient shopping journey for users.",
      Tech:slide5
    }
  ]
  return (
    <div className='w-3/4 m-auto h-[100vh]'>
      <div className='mt-20'>
        <Slider {...settings}>
          {data.map((d) => (
              <div className='bg-white h-[570px] w-[30%] text-black rounded-xl'>
                <div className=" h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.img} alt="" className='h-44 w-[300px] rounded-full'/>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                  <p className='text-xl font-semibold relative'>{d.Projectname}</p>
                  <p>{d.Tech}</p>
                  <p className='w-200px'>{d.Description}</p>
                </div>

              </div>
          ))}
          </Slider>
      </div>
      
    </div>
  )
}

export default Projects
