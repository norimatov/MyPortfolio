import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollTop } from './components/ScrollTop';

export default function App() {
  return (
    <>
      <div className="bg-scene" />
      <div className="grid-overlay" />
      <ScrollTop />
      <Navbar />
      <main>
        <div className="container">
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
