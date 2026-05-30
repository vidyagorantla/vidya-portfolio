import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackgroundEffects from "./components/BackgroundEffects";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden min-h-screen">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

      <Achievements />

      <Certificates />

      <Contact />
      <BackgroundEffects />

    </div>
  );
}

export default App;