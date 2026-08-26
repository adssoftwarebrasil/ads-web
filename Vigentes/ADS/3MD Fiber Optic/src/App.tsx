import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ResidentialPlans from './components/ResidentialPlans';
import Differentials from './components/Differentials';
import Coverage from './components/Coverage';
import BeyondInternet from './components/BeyondInternet';
import Corporate from './components/Corporate';
import SecurityAbout from './components/SecurityAbout';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TrustBar />
      <ResidentialPlans />
      <Differentials />
      <Coverage />
      <BeyondInternet />
      <Corporate />
      <SecurityAbout />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
