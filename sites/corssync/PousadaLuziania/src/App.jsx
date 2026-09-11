import { MessageCircle } from "lucide-react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import StayOptions from "./sections/StayOptions";
import Gallery from "./sections/Gallery";
import VideoTour from "./sections/VideoTour";
import Location from "./sections/Location";
import Footer from "./sections/Footer";
import { contact } from "./data/siteData";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Highlights />
        <StayOptions />
        <Gallery />
        <VideoTour />
        <Location />
      </main>
      <Footer />
      <a
        className="floating-contact"
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar disponibilidade pelo WhatsApp"
        title="Consultar disponibilidade"
      >
        <MessageCircle aria-hidden="true" />
        <span>Disponibilidade</span>
      </a>
    </>
  );
}

export default App;
