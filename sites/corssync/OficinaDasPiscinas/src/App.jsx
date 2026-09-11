import { Header } from "./components/Header";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Contact } from "./sections/Contact";
import { Experience } from "./sections/Experience";
import { Expertise } from "./sections/Expertise";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { ServiceExplorer } from "./sections/ServiceExplorer";
import { WorkGallery } from "./sections/WorkGallery";
import { useScrollReveal } from "./hooks/useScrollReveal";

function App() {
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ServiceExplorer />
        <Expertise />
        <WorkGallery />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
