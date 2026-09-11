import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Brands } from './components/Brands';
import { Categories } from './components/Categories';
import { Differentials } from './components/Differentials';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Categories />
        <Differentials />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
