import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { LocationContact } from "@/components/LocationContact";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloating } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arthur Auto e Truck Center — Manutenção de caminhões e máquinas pesadas" },
      {
        name: "description",
        content:
          "Oficina especializada em manutenção, pintura, reforma de caminhões e máquinas pesadas. Troca de óleo, alinhamento, balanceamento e venda de peças. Fale no WhatsApp (98) 98411-2123.",
      },
      { property: "og:title", content: "Arthur Auto e Truck Center" },
      {
        property: "og:description",
        content:
          "Manutenção completa de caminhões e máquinas pesadas. Pintura, reforma, peças e mais. Solicite seu orçamento.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Services />
      <About />
      <LocationContact />
      <SiteFooter />
      <WhatsAppFloating />
    </main>
  );
}
