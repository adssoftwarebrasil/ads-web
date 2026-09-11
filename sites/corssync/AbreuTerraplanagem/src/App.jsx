import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import ProofRail from "./sections/ProofRail";
import Machines from "./sections/Machines";
import Structure from "./sections/Structure";
import FieldGallery from "./sections/FieldGallery";
import History from "./sections/History";
import Videos from "./sections/Videos";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <ProofRail />
        <Machines />
        <Structure />
        <FieldGallery />
        <History />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
