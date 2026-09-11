import { useState } from 'react';
import WelcomeModal from './components/WelcomeModal';
import HeroSection from './components/HeroSection';
import DiagnosisSection from './components/DiagnosisSection';
import SolutionSection from './components/SolutionSection';
import ExperienceSection from './components/ExperienceSection';
import AdditionalSolutionsSection from './components/AdditionalSolutionsSection';
import SpecialOfferSection from './components/SpecialOfferSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

export default function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <main className="min-h-screen bg-white">
      {showModal && <WelcomeModal onClose={() => setShowModal(false)} />}
      <HeroSection />
      <DiagnosisSection />
      <SolutionSection />
      <ExperienceSection />
      <AdditionalSolutionsSection />
      <SpecialOfferSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
