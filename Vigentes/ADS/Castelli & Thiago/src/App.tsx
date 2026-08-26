import Hero from './components/Hero';
import About from './components/About';
import Connect from './components/Connect';
import Music from './components/Music';
import Material from './components/Material';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Connect />
      <Music />
      <Material />
      <Contact />
      <Footer />
    </div>
  );
}
