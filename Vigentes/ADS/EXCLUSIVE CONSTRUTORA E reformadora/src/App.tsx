import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Contact />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
