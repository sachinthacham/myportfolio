import React from 'react';
import BlogsData from '../../Assets/Data/BlogData';

const ProjectTest = () => {
  return (
    <div className="text-white py-20 mt-0 sm:mt-[6rem] md:mt-0" id="blog">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2
          className="text-xl md:text-3xl lg:text-4xl text-center mb-12"
          data-aos="zoom-in"
          data-aos-once="false"
        >
         The <span className="text-[#ff014f]">Blog </span>Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BlogsData.map((blog) => (
            <div
              key={blog.id}
              data-aos="fade-up"
              data-aos-duration={2000}
              data-aos-delay={blog.id > 3 ? blog.id * 80 : blog.id * 300}
              className="bg-white text-black p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 flex flex-col"
              style={{ height: 'auto', maxHeight: '450px' }}
            >
              <div className="w-full h-[200px] overflow-hidden rounded-lg mb-4">
                <img
                  src={blog.src}
                  alt={blog.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="md:text-xl font-bold mb-2">{blog.title}</h4>
              <div className="text-justify bg-white text-black flex-grow">
                {blog.description}
                <a href={blog.link} target="_blank" className="text-blue-700">
                  {' '}
                  ...Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTest;
