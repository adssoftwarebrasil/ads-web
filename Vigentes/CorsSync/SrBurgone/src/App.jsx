import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppLink from './components/WhatsAppLink';
import Hero from './sections/Hero';
import Flavors from './sections/Flavors';
import Signature from './sections/Signature';
import Story from './sections/Story';
import Gallery from './sections/Gallery';
import Visit from './sections/Visit';
import Questions from './sections/Questions';

export default function App() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <Hero />
        <Flavors />
        <Signature />
        <Story />
        <Gallery />
        <Visit />
        <Questions />
      </main>
      <Footer />
      <WhatsAppLink
        className="floating-whatsapp"
        aria-label="Conversar com Sr Burgone pelo WhatsApp"
      >
        <span className="floating-whatsapp__label">Bora pedir?</span>
      </WhatsAppLink>
    </>
  );
}
