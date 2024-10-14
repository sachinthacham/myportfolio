import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Langauges from '../Resume/Langauges';
import Web from '../Resume/WebDev';
import Database from '../Resume/Database';
import SoftSkill from '../Resume/Softskills';

const tabs = [
  { label: "Programming Languages", value: "Programming"},
  { label: "Web Development", value: "Web" },
  { label: "Database", value: "Database" },
  { label: "Skills", value: "skills" }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  return (
    <div id='resume' className="main flex flex-col justify-center text-white sm:pt-20 md:pt-8 xl:pt-14  md:mt-0">
      <div className="text-xl sm:mx-[10%] flex justify-center items-center md:text-3xl lg:text-4xl mb-8">
        <h1 data-aos="zoom-in" data-aos-once="false">
         <span className='text-[#ff014f]'> Skills </span>that makes me strong
        </h1>
      </div>

      <div className="main2 sm:mx-20 rounded-xl grid place-items-center py-8  bg-[#292929] sm:px-12 lg:px-2 xl:px-12 sm:mt-12 xl:mt-5">
        <div className="grid w-full max-w-7xl gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-6 lg:gap-1 xl:gap-20">
          {/* Tabs Section */}
          <div className="tabcom grid gap-6 p-4 grid-cols-1 md:col-span-2 ">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-4 py-4 text-white text-[12px] sm:text-[14px] font-semibold rounded-lg transition-all duration-300 ease-in-out w-full 
                ${activeTab === tab.value ? 'bg-[#ff014f] scale-105 shadow-lg' : 'bg-[#232323] shadow-[5px_5px_15px_rgba(0,0,0,0.5)] hover:bg-gray-700'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="contentcom p-8 md:col-span-2 lg:col-span-4 min-h-[400px] xl:min-h-[500px] xl:max-h-[60vh] overflow-y-auto ">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === "Programming" && (
                <div>
                  <Langauges />
                </div>
              )}
              {activeTab === "Web" && (
                <div>
                  <Web />
                </div>
              )}
              {activeTab === "Database" && (
                <div>
                  <Database />
                </div>
              )}
              {activeTab === "skills" && (
                <div>
                  <SoftSkill />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;




{/* <div className=" main h-screen  flex flex-col justify-center text-white bg-yellow-300">
       
       <div className=' text-[30px] h-[20%] sm:mx-[10%]  flex justify-center items-center sm:text-[40px]'><h1>Why Hire me?</h1></div>
        
       <div className="main2 sm:h-[80%] sm:mx-[10%] grid grid-cols-1 md:grid-cols-6  gap-20  bg-green-600">
    
         
       
         <div className="tabcom bg-red-500 grid  md:col-span-2 sm:p-8 sm:grid-rows-4 gap-4 sm:h-[80%] m-auto grid-cols-1 sm:grid-cols-2  md:grid-cols-1 ">
           {tabs.map((tab) => (
             <button
               key={tab.value}
               onClick={() => setActiveTab(tab.value)}
               className={`px-7 py-6  h-[80px]  text-white text-[10px] font-semibold rounded-lg transition-all duration-300 ease-in-out w-full
                 ${activeTab === tab.value ? 'bg-blue-600 scale-105 shadow-lg' : 'bg-gray-800 hover:bg-gray-700'}
               `}
             >
               {tab.label}
             </button>
           ))}
         </div>
 
    
         <div className="contentcom grid md:col-span-4 p-8 justify-start bg-orange-600 m-8">
           <motion.div
             key={activeTab}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.5 }}
           >
             {activeTab === "Programming" && (
               <div>
                 <h2 className="text-2xl font-semibold mb-4">Programming Langauges</h2>
               
                
               </div>
             )}
             {activeTab === "Web" && (
               <div>
                 <h2 className="text-2xl font-semibold mb-4">Web development</h2>
                 
           
             
               </div>
             )}
             {activeTab === "Database" && (
               <div>
                 <h2 className="text-2xl font-semibold mb-4">Database</h2>
             
               </div>
             )}
             {activeTab === "skills" && (
               <div>
                 <h2 className="text-2xl font-semibold mb-4">Skills</h2>
               
               </div>
             )}
           </motion.div>
         </div>
         </div>
         </div> */}