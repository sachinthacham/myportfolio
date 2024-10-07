import React from 'react';
import image from '../Assets/Heroimages/HeroImage3.png'

const BlobImage = () => {
  return (
    
<div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto mt-[-50px]">
  
  {/* Container for the SVG */}
  <div className="absolute top-[20%] right-[-25%] w-[50%] h-auto">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#FF0066" d="M29.8,-47.1C39,-40.5,47.2,-32.9,55.4,-22.9C63.6,-13,71.9,-0.7,72.9,12.3C73.9,25.4,67.6,39.3,57.4,48C47.1,56.8,33,60.4,19.7,62C6.4,63.7,-6.1,63.3,-20.8,62.7C-35.5,62,-52.5,61.1,-60.2,52.2C-67.9,43.2,-66.4,26.3,-65.5,11.4C-64.6,-3.6,-64.4,-16.4,-61,-29.5C-57.5,-42.5,-50.9,-55.6,-40.2,-61.6C-29.5,-67.5,-14.7,-66.2,-2.2,-62.7C10.3,-59.3,20.6,-53.7,29.8,-47.1Z" transform="translate(100 100)" />
    </svg>
  </div>

  {/* Image */}
  <img
    src={image}
    alt="Decorative"
    className="relative w-full rounded-lg shadow-lg"
  />
</div>


      
 
  )
}

export default BlobImage
