import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChoose from './components/WhyChoose';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import GoogleReviews from './components/GoogleReviews';
import InstagramFeed from './components/InstagramFeed';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <WhyChoose />
        <Products />
        <ImageGallery />
        <GoogleReviews />
        <InstagramFeed />
        <Advantages />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
