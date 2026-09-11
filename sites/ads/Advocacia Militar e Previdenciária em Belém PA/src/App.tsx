import Hero from './components/Hero';
import Areas from './components/Areas';
import Sobre from './components/Sobre';
import Diferenciais from './components/Diferenciais';
import Atendimento from './components/Atendimento';
import Contato from './components/Contato';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Brazão Advocacia e Consultoria',
  telephone: '+55-91-99342-4086',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Travessa Vileta, 1963',
    addressLocality: 'Belém',
    addressRegion: 'PA',
    postalCode: '66095-346',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Areas />
      <Sobre />
      <Diferenciais />
      <Atendimento />
      <Contato />
      <Footer />
      <FloatingWhatsApp />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
