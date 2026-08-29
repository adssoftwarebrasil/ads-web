import Hero from '../components/Hero';
import Differentials from '../components/Differentials';
import Services from '../components/Services';
import Location from '../components/Location';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Differentials />
      <Services />
      <Location />
      <Contact />
    </>
  );
}
