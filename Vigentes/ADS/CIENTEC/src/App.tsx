import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Courses from './components/Courses';
import CtaBanner from './components/CtaBanner';
import Gallery from './components/Gallery';
import VideoTestimonials from './components/VideoTestimonials';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Location from './components/Location';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      <Header />
      <Hero />
      <Stats />
      <About />
      <Courses />
      <CtaBanner />
      <Gallery />
      <VideoTestimonials />
      <Testimonials />
      <ContactForm />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
