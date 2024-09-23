import React, { useState } from 'react';
import img1 from '../Assets/MyImages/img01.jpg'
import img2 from '../Assets/MyImages/img02.jpg'
import img3 from '../Assets/MyImages/img03.jpg'
import img4 from '../Assets/MyImages/img04.jpg'
import img5 from '../Assets/MyImages/img05.jpg'

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    img1, img2,img3,img4,img5
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-container w-full max-w-[500px] mx-auto relative">
      {/* Image */}
      <div className="slider-image">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[300px] object-cover rounded-lg"
        />
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
      >
        &#10095;
      </button>

      {/* Dots for Navigation */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
