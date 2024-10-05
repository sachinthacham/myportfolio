// import React from 'react'
// import { SiJavascript, SiReact, SiMongodb, SiNodedotjs, SiExpress, SiMysql, SiMicrosoftsqlserver, SiPostman, SiDotnet } from 'react-icons/si';

// const about ={
//     title: "About me",
//     description: "nkjn jkjnk jnkj jkj kjnk jnkj kjnk",
//     info:[
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },
//         {
//             fieldName:"Name",
//             fieldValue:"sachb jkjkk"
//         },

//     ]
// }
// const experience = {
//     icon:"icon",
//     title:"jnkjnk",
//     description:"jnkj kjnkj kjn nkjnkj jnj jnk knjn kjnkj",
//     items:[
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       }  ,
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       } ,
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       }  
//     ]
// }

// const education = {
//     icon:"icon",
//     title:"jnkjnk",
//     description:"jnkj kjnkj kjn nkjnkj jnj jnk knjn kjnkj",
//     items:[
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       }  ,
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       } ,
//       {
//         company:"jnkjnkjn",
//         position:"kjnkjnkjn",
//         duration:"kjnkjn",
//       }  
//     ]
// }

// const skills ={
//     title:"jnkjnk",
//     description:"jnkj kjnkj kjn nkjnkj jnj jnk knjn kjnkj",
//    skillList:[
//     {
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     },
//     {
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     },
//     {
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     },
//     {
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     },
//     {
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     }
//     ,{
//         icon:<SiJavascript/>,
//         name:"jkjn"
//     }
//    ]
// }

// import {Tabs, TabContent, TabsList,TabsTrigger} from '../../components/ui/Tabs';
// import {Tooltip, TooltipContent, TooltipProvider,TooltipTrigger} from '../../components/ui/Tooltip';
// import {motion} from "framer-motion";

// const Resume = () => {
//   return (
//     <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
//      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
//     >
//       <div className='container mx-auto'>
//         <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
//             <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
//                 <TabsTrigger value="experience">Experience</TabsTrigger>
//                 <TabsTrigger value="education">Education</TabsTrigger>
//                 <TabsTrigger value="skills">skills</TabsTrigger>
//                 <TabsTrigger value="about">about</TabsTrigger>
                
//             </TabsList>
//             <div className='min-h-[70vh] w-full' >
//                 <TabContent value="experience" className="w-full ">
//                     experience
//                 </TabContent>
//             </div>
//         </Tabs>
//       </div>
//     </motion.div>
//   )
// }

// export default Resume

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SiJavascript, SiReact, SiMongodb, SiNodedotjs } from 'react-icons/si';
import Langauges from '../Resume/Langauges';
import Web from '../Resume/WebDev';
import Database from '../Resume/Database';
import SoftSkill from '../Resume/Softskills'

const tabs = [
  { label: "Programming Langauges", value: "Programming" },
  { label: "Web Development", value: "Web" },
  { label: "Database", value: "Database" },
  { label: "skills", value: "skills" }
];

const Resume = () => {
  const [activeTab, setActiveTab] = useState("Programming");

  return (
    <div className="container h-screen  flex flex-col justify-center text-white ">
       
      <div className=' text-[40px] h-[20%] mx-[100px]  flex justify-center items-center '><h1>Why Hire me?</h1></div>
       
      <div className=" h-[80%] mx-[100px] grid grid-cols-1 sm:grid-cols-6  gap-20 ">
   
        {/* Tabs List */}
      
        <div className="grid col-span-2 p-8 sm:grid-rows-4 gap-4 max-h-[80%] m-auto grid-cols-1  sm:grid-cols-1 min-w-[300px]">
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

        {/* Tab Content */}
        <div className=" grid col-span-4 p-8 justify-start ">
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
                <Langauges/>
                {/* Add more experience content */}
              </div>
            )}
            {activeTab === "Web" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Web development</h2>
                
               <Web/>
            
              </div>
            )}
            {activeTab === "Database" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Database</h2>
                <Database/>
                {/* Add more skills content */}
              </div>
            )}
            {activeTab === "skills" && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <SoftSkill/>
              </div>
            )}
          </motion.div>
        </div>
        </div>
        </div>
      

  );
};

export default Resume;

