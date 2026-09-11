import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Areas from './components/Areas';
import InstagramFeed from './components/InstagramFeed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppFAB from './components/WhatsAppFAB';

function App() {
  return (
    <div className="min-h-screen bg-[#003438] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Philosophy />
        <Services />
        <Areas />
        <InstagramFeed />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}

export default App;
