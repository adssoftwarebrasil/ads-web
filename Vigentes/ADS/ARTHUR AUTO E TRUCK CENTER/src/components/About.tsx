import { Check } from "lucide-react";
import logo from "@/assets/arthur-logo.png";
import { WhatsAppButton } from "./WhatsAppButton";

const highlights = [
  "Equipe técnica especializada em pesados",
  "Atendimento ágil e transparente",
  "Peças e acessórios de qualidade",
  "Compromisso com prazos e segurança",
];

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-border bg-card py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-yellow opacity-30" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 md:grid-cols-2 md:px-8">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-stripes opacity-20 blur-xl" />
          <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-border bg-background p-12">
            <img src={logo} alt="Arthur Auto e Truck Center" className="w-full max-w-sm" />
          </div>
        </div>

        <div>
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="h-px w-12 bg-primary" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Sobre a empresa
            </span>
          </div>
          <h2 className="text-display text-4xl leading-none text-foreground md:text-6xl">
            A oficina que <span className="text-primary">sua frota</span> merece.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            A <strong className="text-foreground">Arthur Auto e Truck Center</strong> é referência em manutenção
            de caminhões, máquinas pesadas e veículos em geral. Reunimos experiência técnica, estrutura
            completa e atendimento próximo para entregar serviços de mecânica, pintura, alinhamento, troca de
            óleo, reforma e venda de peças — tudo no mesmo lugar.
          </p>
          <p className="mt-4 text-muted-foreground">
            Nosso compromisso é manter você na estrada com segurança, eficiência e o cuidado de quem entende
            do que faz.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-sm text-foreground">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <WhatsAppButton>Fale com a Arthur</WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
