import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Products from './components/Products';
import Differentials from './components/Differentials';
import Hours from './components/Hours';
import Contact from './components/Contact';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Products />
      <Differentials />
      <Hours />
      <Contact />
      <InstagramFeed />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
