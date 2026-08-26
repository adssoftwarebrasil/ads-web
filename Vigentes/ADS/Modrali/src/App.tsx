import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PromoBanners } from './components/PromoBanners';
import { Categories } from './components/Categories';
import { VantagensBanner } from './components/VantagensBanner';
import { Products } from './components/Products';
import { About } from './components/About';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  return (
    <div className="relative w-full max-w-[100vw] overflow-x-hidden bg-white">
      <Header onScrollTo={scrollToSection} />
      <Hero />
      <About />
      <PromoBanners />
      <Categories />
      <VantagensBanner />
      <Products />
  
      <ContactCTA />
      <Footer onScrollTo={scrollToSection} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
