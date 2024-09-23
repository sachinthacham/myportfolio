import React, { useState } from 'react';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className='flex justify-center items-center '>
      <div id='blogs' className="slider-container w-full relative">
        {/* Image and Overlay */}
        <div className="slider-image relative max-w-full">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className="w-full h-[200px] md:h-[300px] lg:h-[300px] object-cover rounded-lg"
          />

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 bottom-[40%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 bottom-[40%] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          >
            &#10095;
          </button>

          {/* Dots for Navigation */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
