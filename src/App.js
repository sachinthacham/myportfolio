import './App.css';
import Hero from './components/Hero';
import About from './components/about/About';

import { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import ProjectTest from './components/ProjectTest';
import Footer from './components/footer/Footer';
import NavBar from './components/navbar/NavBar';
import ContactTest from './components/contact/ContactTest';
import Blog from './components/Blogs/Blogs'
import Resume from './components/Resume/Resume';
import Spinner from './components/Spinner';


function App() {

  useEffect(() => {
    Aos.init();
  },[])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (e.g., fetch data or wait for assets)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false once the page has loaded
    }, 3000); // Simulate a 2-second loading delay

    // Cleanup the timeout
    return () => clearTimeout(timer);
  }, []);

  

  
return (
<>
  {loading ? (
    <Spinner /> 
  ) : (
   
    <div  className='bg-[#141414]'>
    <NavBar/> 
    
    <Hero/>  
   
 <About/>
    
    <Resume/> 
    
 <ProjectTest/>
  <Blog/>
    
    <ContactTest/>
    <Footer/>  
   
  </div>
  )}
   </>
  );
}
export default App;
