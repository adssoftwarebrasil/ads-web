import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/site/Navbar";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  Hero,
  About,
  Courses,
  Reviews,
  Rental,
  Gallery,
  Shop,
  LeadForm,
  ContactFooter,
} from "@/components/site/sections";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clube do Kite PF — Escola de Kitesurf na Praia do Futuro, Fortaleza" },
      {
        name: "description",
        content:
          "Aprenda kitesurf na Praia do Futuro, Fortaleza. Cursos para iniciantes, avançados e downwind. +10 anos de experiência, +500 alunos. Aluguel de equipamento.",
      },
      { property: "og:title", content: "Clube do Kite PF — Kitesurf na Praia do Futuro" },
      { property: "og:description", content: "A escola de kitesurf mais completa de Fortaleza." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LanguageProvider>
      <SiteContent />
    </LanguageProvider>
  );
}

function SiteContent() {
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Reviews />
        <Rental />
        <Gallery />
        <Shop />
        <LeadForm />
        <ContactFooter />
      </main>
      <WhatsAppFloat />
    </div>
  );
}
