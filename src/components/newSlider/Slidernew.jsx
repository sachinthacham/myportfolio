// BlogSlider.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../Assets/MyImages/github image.jpg';
import img2 from '../../Assets/MyImages/sorting image.jpg';
import img3 from '../../Assets/MyImages/oop image.jpg';

const blogs = [
  {
    id: 1,
    image: img1,
    title: 'Understanding Object-Oriented Programming (OOP) Concepts with C#',
    excerpt: 'Encapsulation is a basic concept in Object-Oriented Programming (OOP). It means combining data (like variables) and the methods (functions) that work on that data into one unit, called an object. The main idea is to hide the internal details of an object from ...',
    link: 'https://medium.com/@sachinthachamindu26/understanding-object-oriented-programming-oop-concepts-with-c-55bcdb16f4de', // Replace with your actual link
  },
  {
    id: 2,
    image:img2,
    title: 'Understanding Basic Sorting Algorithms',
    excerpt: 'Sorting algorithms are essential for optimizing the performance of other algorithms, such as search algorithms. In this article, we’ll take a closer look at three of the most basic sorting algorithms: Bubble Sort, Selection Sort, and Insertion Sort....',
    link: 'https://medium.com/@sachinthachamindu26/understanding-basic-sorting-algorithms-93cb5980cc43', // Replace with your actual link
  },
  {
    id: 3,
    image: img3,
    title: 'Introduction to CI/CD Pipeline Using GitHub Actions',
    excerpt: 'In today’s fast-paced software development world, delivering high-quality products quickly and efficiently is critical. To achieve this, many development teams have adopted Continuous Integration and Continuous Deployment/Delivery (CI/CD) pipelines. ...',
    link: 'https://medium.com/@sachinthachamindu26/introduction-of-ci-cd-pipeline-using-github-actions-051b9a71d5b0', // Replace with your actual link
  },
];

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="overflow-hidden">
        <motion.div
          key={blogs[currentIndex].id}
          className="flex items-center p-4 border rounded-lg shadow-lg bg-white"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={blogs[currentIndex].image}
            alt={blogs[currentIndex].title}
            className="w-1/3 h-auto rounded-l-lg xl:h-[400px] xl:w-[400px]"
          />
          <div className="w-2/3 pl-4">
            <h2 className="text-xl font-bold">{blogs[currentIndex].title}</h2>
            <p className="mt-2 text-gray-700">{blogs[currentIndex].excerpt}</p>
            <a
              href={blogs[currentIndex].link}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              Read More
            </a>
          </div>
        </motion.div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left--40 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
      >
        &#10095;
      </button>
    </div>
  );
};

export default BlogSlider;
