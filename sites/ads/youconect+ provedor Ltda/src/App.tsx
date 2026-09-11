import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problems from './components/Problems';
import Differentials from './components/Differentials';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappFloat from './components/WhatsappFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <div className="h-16 sm:h-20"></div>
      <Hero />
      <Problems />
      <Differentials />
      <Coverage />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
