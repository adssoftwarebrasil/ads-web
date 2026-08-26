import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Gallery from './components/Gallery';
import Process from './components/Process';
import CTASection from './components/CTASection';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      
      {/* O Hero geralmente é o topo, não precisa de ID para o menu, 
          pois o logo joga para o topo da página */}
      <Hero />

      {/* Adicionado id="services" */}
      <section id="services">
        <Services />
      </section>

      {/* Adicionado id="differentials" */}
      <section id="differentials">
        <Differentials />
      </section>

      {/* Adicionado id="gallery" (No menu está como 'Projetos') */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* Adicionado id="process" */}
      <section id="process">
        <Process />
      </section>

      <CTASection />

      {/* Adicionado id="about" */}
      <section id="about">
        <About />
      </section>

      {/* Adicionado id="contact" */}
      <section id="contact">
        <ContactForm />
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;