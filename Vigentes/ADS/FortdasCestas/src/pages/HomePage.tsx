import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Differentials from '../components/Differentials';
import BasicBaskets from '../components/BasicBaskets';
import AdditionalProducts from '../components/AdditionalProducts';
import SocialCommitment from '../components/SocialCommitment';
import Testimonials from '../components/Testimonials';
import HowItWorks from '../components/HowItWorks';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import CatalogDownload from '../components/CatalogDownload';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <Hero />
      <Differentials />
      <BasicBaskets />
      <About />
      <AdditionalProducts />
      <HowItWorks />
      <SocialCommitment />
      <Testimonials />
      <FAQ />
      <CatalogDownload />
      <Contact />
      <FinalCTA />
      <Footer />
    </div>
  );
}
