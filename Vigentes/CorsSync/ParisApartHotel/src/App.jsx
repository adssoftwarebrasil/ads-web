import { useEffect } from "react";
import Header from "./components/Header";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import Story from "./sections/Story";
import Rooms from "./sections/Rooms";
import Breakfast from "./sections/Breakfast";
import Essentials from "./sections/Essentials";
import VideoTour from "./sections/VideoTour";
import Gallery from "./sections/Gallery";
import Parking from "./sections/Parking";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Story />
        <Rooms />
        <Breakfast />
        <Essentials />
        <VideoTour />
        <Gallery />
        <Parking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
