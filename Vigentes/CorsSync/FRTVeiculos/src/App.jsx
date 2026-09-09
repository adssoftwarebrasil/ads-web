import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import Discover from "./sections/Discover";
import Negotiation from "./sections/Negotiation";
import Trust from "./sections/Trust";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import Visit from "./sections/Visit";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Discover />
        <Negotiation />
        <Trust />
        <Experience />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
