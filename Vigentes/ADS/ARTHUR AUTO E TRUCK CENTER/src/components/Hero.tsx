import heroImg from "@/assets/hero-truck.jpg";
import { WhatsAppButton } from "./WhatsAppButton";
import { ArrowRight, Wrench } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Oficina Arthur Auto e Truck Center"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="absolute inset-0 bg-grid-yellow opacity-40" />

      {/* yellow accent stripe */}
      <div className="absolute left-0 top-1/2 hidden h-32 w-2 -translate-y-1/2 bg-stripes md:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pt-28 pb-16 md:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur">
            <Wrench className="h-4 w-4 text-primary" />
            <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
              Oficina especializada em pesados
            </span>
          </div>

          <h1 className="text-display text-5xl leading-[0.9] text-foreground sm:text-6xl md:text-8xl lg:text-[7.5rem]">
            Força,
            <br />
            <span className="text-primary drop-shadow-[0_0_30px_var(--yellow)]">precisão</span>
            <br />
            e confiança.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Manutenção completa de caminhões, máquinas pesadas e veículos. A oficina que mantém sua frota
            rodando — com qualidade Arthur Auto e Truck Center.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <WhatsAppButton>Solicitar orçamento</WhatsAppButton>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-widest text-foreground/80 transition hover:text-primary"
            >
              Ver serviços <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-border/50 pt-8">
            {[
              { v: "10+", l: "Anos de estrada" },
              { v: "7", l: "Especialidades" },
              { v: "100%", l: "Compromisso" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-display text-3xl text-primary md:text-5xl">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
