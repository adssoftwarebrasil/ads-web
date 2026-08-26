import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import ServiceCoverage from './components/ServiceCoverage';
import FAQ from './components/FAQ';
import BookNow from './components/BookNow';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Fleet />
      <Testimonials />
      <ServiceCoverage />
      <FAQ />
      <BookNow />
      <Footer />
    </div>
  );
}

export default App;
