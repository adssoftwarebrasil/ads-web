import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MediaDialog from './components/MediaDialog';
import Hero from './sections/Hero';
import Products from './sections/Products';
import HowToOrder from './sections/HowToOrder';
import Story, { mediaItems } from './sections/Story';
import Contact from './sections/Contact';

export default function App() {
  const [activeMedia, setActiveMedia] = useState(null);

  return (
    <div id="inicio">
      <Header />
      <main id="conteudo">
        <Hero />
        <Products />
        <HowToOrder />
        <Story onOpenMedia={setActiveMedia} />
        <Contact />
      </main>
      <Footer />
      <MediaDialog
        items={mediaItems}
        activeIndex={activeMedia}
        onClose={() => setActiveMedia(null)}
        onChange={setActiveMedia}
      />
    </div>
  );
}
