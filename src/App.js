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
import Blog from './components/Blogs/Blogs';
import Resume from './components/Resume/Resume';
import Spinner from './components/Spinner';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false); // Stop loading once the image has been fully loaded
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className='bg-[#141414]'>
          <NavBar />
          <Hero onImageLoad={handleImageLoad} /> {/* Pass handleImageLoad to Hero */}
          <About />
          <Resume />
          <ProjectTest />
          <Blog />
          <ContactTest />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
