import './App.css';
import Navbar from './components/navbar/NavBar'
import Hero from './components/Hero'
import About from './components/about/About'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'

function App() {
  return (
    <div className="App background-col bg-[linear-gradient(180deg,#0c0c1d,#111132)]">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>

    </div>
  );
}
export default App;
