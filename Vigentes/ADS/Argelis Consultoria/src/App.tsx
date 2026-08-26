import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import Services from './components/Services';
import ServicesDetailed from './components/ServicesDetailed';
import Journey from './components/Journey';
import Differentials from './components/Differentials';
import Counters from './components/Counters';
import WhereWeWork from './components/WhereWeWork';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import InstagramFeed from './components/InstagramFeed';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsStrip />
      <Services />
      <ServicesDetailed />
      <Journey />
      <Differentials />
      <Counters />
      <WhereWeWork />
      <Team />
      <Testimonials />
      <InstagramFeed />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
