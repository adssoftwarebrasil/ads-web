import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Courses from './components/Courses';
import Gallery from './components/Gallery';
import Differentials from './components/Differentials';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('section');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <TrustBar />
      <About />
      <Courses />
      <Gallery />
      <Differentials />
      <Testimonials />
      <InstagramFeed />
      <Location />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
