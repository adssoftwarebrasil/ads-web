import Header from './components/Header';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import History from './components/History';
import Treatments from './components/Treatments';
import Technology from './components/Technology';
import Doctor from './components/Doctor';
import Results from './components/Results';
import Clinic from './components/Clinic';
import Location from './components/Location';
import Contents from './components/Contents';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';
import StickyWhatsApp from './components/StickyWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main id="conteudo">
        <Hero />
        <Positioning />
        <History />
        <Treatments />
        <Technology />
        <Doctor />
        <Results />
        <Clinic />
        <Location />
        <Contents />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
