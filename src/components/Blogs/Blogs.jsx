import React from 'react';
import img1 from '../../Assets/MyImages/github image.jpg';
import img2 from '../../Assets/MyImages/sorting image.jpg';
import img3 from '../../Assets/MyImages/oop image.jpg';
import Slider from '../newSlider/Slidernew';


const Blogs = () => {
    const images = [
        { src: img1, title: "CI/CD pipeline with github actions", link: "https://medium.com/@sachinthachamindu26/introduction-of-ci-cd-pipeline-using-github-actions-051b9a71d5b0?source=user_profile---------1----------------------------" },
        { src: img2, title: "Understanding Basic Sorting Algorithms", link: "https://medium.com/@sachinthachamindu26/understanding-basic-sorting-algorithms-93cb5980cc43?source=user_profile---------0----------------------------" },
        { src: img3, title: "understanding oop concepts with c#", link: "https://medium.com/@sachinthachamindu26/understanding-object-oriented-programming-oop-concepts-with-c-55bcdb16f4de" },
    
      ];
  return (
    <div className=' h-screen z-[1000]'>
      <div>
       <div className='flex justify-center items-center'>
            <h2 className='heading   px-[1rem] pt-0 pb-[2rem] text-[50px] text-white xl:p-10' >The<span className='text-[#ff014f]'> Blog </span>Journey</h2>
       </div>
      
    <Slider/>
    </div>
    
    </div>
  )
}

export default Blogs
