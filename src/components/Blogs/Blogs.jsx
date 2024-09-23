import React from 'react'
import img1 from '../../Assets/MyImages/github image.jpg';
import img2 from '../../Assets/MyImages/sorting image.jpg';
import img3 from '../../Assets/MyImages/oop image.jpg';
import Slider from '../Slider'

const Blogs = () => {
    const images = [
        { src: img1, title: "CI/CD pipeline with github actions", link: "https://medium.com/@sachinthachamindu26/introduction-of-ci-cd-pipeline-using-github-actions-051b9a71d5b0?source=user_profile---------1----------------------------" },
        { src: img2, title: "Understanding Basic Sorting Algorithms", link: "https://medium.com/@sachinthachamindu26/understanding-basic-sorting-algorithms-93cb5980cc43?source=user_profile---------0----------------------------" },
        { src: img3, title: "OOP Concepts With Real World Examples", link: "#" },
    
      ];
  return (
    <div>
      <Slider images={images}/>
    </div>
  )
}

export default Blogs
