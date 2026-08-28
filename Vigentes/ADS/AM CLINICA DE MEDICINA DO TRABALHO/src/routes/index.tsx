import { createFileRoute } from "@tanstack/react-router";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Location from "../components/Location";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AM Clínica - Medicina e Segurança do Trabalho" },
      {
        name: "description",
        content:
          "Soluções completas em Medicina e Segurança do Trabalho. Reduza riscos trabalhistas e mantenha sua empresa 100% regularizada. Atendimento em todo DF.",
      },
      { property: "og:title", content: "AM Clínica - Medicina e Segurança do Trabalho" },
      {
        property: "og:description",
        content:
          "Soluções completas em Medicina e Segurança do Trabalho para sua empresa. 500+ empresas atendidas.",
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <About />
      <Gallery />
      <Services />
      <WhyUs />
      <Location />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
