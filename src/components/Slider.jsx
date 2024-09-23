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
    <div className='h-screen flex justify-center items-center '>
      <div id='blogs' className="slider-container w-full max-w-[700px] mx-auto relative pt-[100px]">
        {/* Title */}
        <div className='flex justify-center items-center'>
          <h2 className='text-white text-[50px]'>Blogs</h2>
        </div>

        {/* Image and Overlay */}
        <div className="slider-image mt-[50px] relative">
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {/* Overlay with Title and Button */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
            <h3 className='text-2xl font-bold'>{images[currentIndex].title}</h3>
            <a href={images[currentIndex].link} className='mt-4 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-full text-white'>
              View
            </a>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 bottom-[150px] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
        >
          &#10094;
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bottom-[150px] transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
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
  );
};

export default Slider;
