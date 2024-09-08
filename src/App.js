import './App.css';

import Hero from './components/Hero'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import Project from './components/projects/Projects'
import { useState } from 'react';

function App() {

  const[productValidate, setProductvalidate] = useState(false);
  

  const submit = () => {
   if(productValidate == true){

   }
  }
  return (
    <div className="App background-col bg-[#1b1f24]">
      
       <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/> 
 
      
     
  <button onClick={submit}>submit</button>


    </div>
  );
}
export default App;
