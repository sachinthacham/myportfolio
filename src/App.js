import './App.css';

import Hero from './components/Hero'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import SoftSkills from './components/softskill/SoftSkill'
import Project from './components/project/Project'
import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import ProjectTest from './components/ProjectTest'
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/NavBar';

function App() {
  useEffect(() => {
    Aos.init();
  },[])


  
return (
    <div  className='bg-gray-950'>
       <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <SoftSkills/>
      <ProjectTest/>
      {/* <Contact/>  */}
      <Footer/>
    </div>
  );
}
export default App;
