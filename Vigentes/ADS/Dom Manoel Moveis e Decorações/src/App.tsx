import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import InstagramFeed from './components/InstagramFeed';
import Delivery from './components/Delivery';
import About from './components/About';
import Differentials from './components/Differentials';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';
import InstagramCTA from './components/InstagramCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Products />
        <InstagramFeed />
        <Delivery />
        <About />
        <Differentials />
        <CTA />
        <Testimonials />
        <InstagramCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
