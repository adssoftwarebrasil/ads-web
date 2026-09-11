import { useEffect } from "react";
import Header from "./components/Header";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Hero from "./sections/Hero";
import ServiceHighlights from "./sections/ServiceHighlights";
import ServiceExplorer from "./sections/ServiceExplorer";
import About from "./sections/About";
import Coverage from "./sections/Coverage";
import ContactCta from "./sections/ContactCta";
import Location from "./sections/Location";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((element) => {
        element.classList.add("is-visible");
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceHighlights />
        <ServiceExplorer />
        <About />
        <Coverage />
        <ContactCta />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default App;

