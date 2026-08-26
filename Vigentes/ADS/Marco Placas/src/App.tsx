import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Products from './components/Products';
import About from './components/About';
import Trust from './components/Trust';
import InstagramSection from './components/InstagramSection';
import Homenagens from './components/Homenagens';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Products />
        <About />
        <Trust />
        <InstagramSection />
        <Homenagens />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
