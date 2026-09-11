import {
  Truck,
  HardHat,
  SprayCan,
  Droplet,
  Gauge,
  Hammer,
  Cog,
} from "lucide-react";
import paintImg from "@/assets/service-paint.jpg";
import engineImg from "@/assets/service-engine.jpg";
import heavyImg from "@/assets/service-heavy.jpg";

const services = [
  {
    icon: Truck,
    title: "Manutenção de caminhões",
    desc: "Diagnóstico completo, mecânica preventiva e corretiva para sua frota não parar.",
    img: engineImg,
    featured: true,
  },
  {
    icon: HardHat,
    title: "Máquinas pesadas",
    desc: "Suporte técnico para escavadeiras, retroescavadeiras e equipamentos de obra.",
    img: heavyImg,
    featured: true,
  },
  {
    icon: SprayCan,
    title: "Pintura para caminhões",
    desc: "Acabamento profissional em cabine e baú com tinta automotiva de alta durabilidade.",
    img: paintImg,
    featured: true,
  },
  { icon: Droplet, title: "Troca de óleo", desc: "Óleo, filtros e fluidos para todos os tipos de veículos." },
  { icon: Gauge, title: "Alinhamento e balanceamento", desc: "Mais segurança, conforto e economia de pneus." },
  { icon: Hammer, title: "Reforma de caminhões", desc: "Recuperação estrutural, lataria e revitalização completa." },
  { icon: Cog, title: "Peças e acessórios", desc: "Venda de peças automotivas originais e acessórios." },
];

export function Services() {
  return (
    <section id="servicos" className="relative border-t border-border bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-display text-xs font-bold uppercase tracking-widest text-primary">
                O que fazemos
              </span>
            </div>
            <h2 className="text-display text-5xl leading-none text-foreground md:text-7xl">
              Serviços <span className="text-primary">completos</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Tudo que sua frota precisa em um só lugar. Do diagnóstico à entrega, com técnicos especializados.
          </p>
        </div>

        {/* Featured services with images */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {services
            .filter((s) => s.featured)
            .map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_60px_-20px_var(--yellow)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img!}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg">
                    <s.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-display text-2xl text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
        </div>

        {/* Additional services */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {services
            .filter((s) => !s.featured)
            .map((s) => (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:-translate-y-1"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="text-display text-lg text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
