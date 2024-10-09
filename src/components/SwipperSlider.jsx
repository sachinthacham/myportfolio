import { useState } from 'react';
import { motion } from 'framer-motion';
import certify1 from '../Assets/Certificates/certify1.png';
import certify2 from '../Assets/Certificates/certify2.png';
import certify3 from '../Assets/Certificates/certify3.png';
import certify4 from '../Assets/Certificates/certify4.png';
import certify5 from '../Assets/Certificates/certify5.jpg';
import certify6 from '../Assets/Certificates/certify6.png';
import certify7 from '../Assets/Certificates/certify7.png';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
const images = [
certify1,certify2,certify3,certify4,certify5,certify6,certify7
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for right, -1 for left

  const handlePrev = () => {
    setDirection(-1); // Slide from right to left when clicking left
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1); // Slide from left to right when clicking right
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%', // Start from right if direction is positive, else left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%', // Exit to the left if direction is positive, else right
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-lg mx-auto lg:h-[270px]">
      {/* Image container */}
      <div className="overflow-hidden">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex}`}
            className="w-full h-auto"
          />
        </motion.div>
      </div>

      {/* Left and Right buttons */}
      <button
         onClick={handleNext}
        className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-[#ff014f] text-white p-2 rounded-full"
      >
       <FaArrowLeft/>
      </button>
      <button
       onClick={handlePrev}
       
        className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-[#ff014f] text-white p-2 rounded-full"
      >
          <FaArrowRight/>
        
      </button>
    </div>
  );
};

export default ImageSlider;
