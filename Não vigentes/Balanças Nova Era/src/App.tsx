import { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import AboutSection from './components/AboutSection';
import PartnersSection from './components/PartnersSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import AdvantagesSection from './components/AdvantagesSection';
import WhyHireSection from './components/WhyHireSection';
import CTABanner from './components/CTABanner';
import TestimonialsSection from './components/TestimonialsSection';
import InstagramSection from './components/InstagramSection';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    document.title = 'Balanças Nova Era - Assistência Técnica Autorizada IPEM | Curitiba';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Assistência técnica em balanças com mais de 30 anos de experiência. Autorizado IPEM-PR. Calibração, manutenção e venda de balanças em Curitiba.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Assistência técnica em balanças com mais de 30 anos de experiência. Autorizado IPEM-PR. Calibração, manutenção e venda de balanças em Curitiba.';
      document.head.appendChild(meta);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Balanças Nova Era',
      telephone: '+55-41-9720-3764',
      email: 'balancasnovaera@hotmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rua João Reffo, 872',
        addressLocality: 'Curitiba',
        addressRegion: 'PR',
        postalCode: '82000-000',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -25.4156,
        longitude: -49.3344,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      priceRange: '$$',
      description: 'Assistência técnica em balanças com mais de 30 anos de experiência. Autorizado IPEM-PR.',
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <FloatingWhatsApp />
      <main>
        <HeroSection />
        <HighlightsSection />
        <AboutSection />
        <PartnersSection />
        <StatsSection />
        <ServicesSection />
        <AdvantagesSection />
        <WhyHireSection />
        <CTABanner />
        <TestimonialsSection />
        <InstagramSection />
        <ContactSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
