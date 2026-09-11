import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialMedia from './components/SocialMedia';
import CatalogGrid from './components/CatalogGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <CatalogGrid />
        <SocialMedia />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
