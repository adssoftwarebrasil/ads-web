import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import HotelStory from "./sections/HotelStory";
import Accommodations from "./sections/Accommodations";
import Experience from "./sections/Experience";
import Gallery from "./sections/Gallery";
import StayInfo from "./sections/StayInfo";
import Location from "./sections/Location";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <HotelStory />
        <Accommodations />
        <Experience />
        <Gallery />
        <StayInfo />
        <Location />
      </main>
      <Footer />
    </>
  );
}
