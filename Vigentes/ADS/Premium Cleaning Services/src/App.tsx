import Header from './components/Header';
import Hero from './components/Hero';
import WhyChoose from './components/WhyChoose';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCall from './components/FloatingCall';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChoose />
        <Services />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
