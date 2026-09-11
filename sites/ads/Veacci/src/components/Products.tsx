import type { ReactNode } from 'react';
import { Video, ShieldCheck, Building2 } from 'lucide-react';
import { ArrowRight } from './icons';

type Product = {
  href: string;
  num: string;
  category: string;
  name: string;
  tagline: string;
  desc: string;
  icon: ReactNode;
};

const products: Product[] = [
  {
    href: '/produtos/vealapse',
    num: '01',
    category: 'Monitoramento visual de obras',
    name: 'Vealapse',
    tagline: 'Acompanhamento de obras com timelapse',
    desc: 'Câmeras e timelapse de alta resolução para acompanhar, documentar e divulgar a evolução da obra — em tempo real, de qualquer lugar.',
    icon: <Video className="size-5" />,
  },
  {
    href: '/produtos/sentinela',
    num: '02',
    category: 'Controle de acesso e segurança',
    name: 'Sentinela',
    tagline: 'Portaria completa para canteiros de obra',
    desc: 'Controle de acesso, cargas, documentos de SST, leitura de placa por IA e LGPD — toda a portaria da obra em um único sistema.',
    icon: <ShieldCheck className="size-5" />,
  },
  {
    href: '/produtos/construpro',
    num: '03',
    category: 'ERP para construção civil',
    name: 'ConstruPRO',
    tagline: 'Gestão de obras de ponta a ponta',
    desc: 'Obras, orçamento, financeiro, suprimentos, frota, BIM e BI no mesmo sistema — funcionando inclusive offline, no canteiro.',
    icon: <Building2 className="size-5" />,
  },
];

const clients = [
  { src: '/clients/coca-cola.png', alt: 'Coca-Cola' },
  { src: '/clients/amazon.png', alt: 'Amazon' },
  { src: '/clients/suzano.png', alt: 'Suzano' },
  { src: '/clients/braskem.png', alt: 'Braskem' },
  { src: '/clients/kingspan-isoeste.png', alt: 'KingSpan Isoeste' },
  { src: '/clients/ginco.png', alt: 'Ginco Urbanismo' },
];

export default function Products() {
  return (
    <section className="bg-ivory py-20 text-ink md:py-32">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div data-reveal className="max-w-xl is-in">
            <p className="eyebrow">Construtech · Produtos próprios</p>
            <h2 className="mt-4 font-serif text-3xl leading-[1.08] tracking-tight md:text-4xl lg:text-[2.7rem]">
              Tecnologia que já está em obra.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-stone">
              Além dos serviços, desenvolvemos e operamos sistemas usados por grandes empresas para acompanhar, controlar e gerir obras de ponta a ponta.
            </p>
          </div>
          <a
            className="group/btn mb-1 inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-line-strong bg-transparent px-5 py-2.5 text-[0.95rem] font-medium text-ink transition-colors duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-ink/30 hover:bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moss"
            href="/produtos"
          >
            Ver todos os produtos
            <ArrowRight className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <a
              key={p.href}
              href={p.href}
              data-reveal
              className="group flex flex-col rounded-lg border border-line bg-ivory p-7 transition-colors duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] is-in hover:bg-sand md:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex size-11 items-center justify-center rounded-md bg-paper text-ink ring-1 ring-line transition-colors duration-300 group-hover:bg-lime group-hover:ring-lime">
                  {p.icon}
                </span>
                <span className="font-mono text-xs tracking-[0.2em] text-mist">{p.num}</span>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.12em] text-moss">{p.category}</p>
              <h3 className="mt-2 font-serif text-2xl tracking-tight">{p.name}</h3>
              <p className="mt-1.5 text-[0.95rem] font-medium text-stone">{p.tagline}</p>
              <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-stone">{p.desc}</p>
              <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Conhecer
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="mt-14 border-t border-line pt-12">
          <div data-reveal>
            <p className="text-center text-sm font-medium uppercase tracking-[0.14em] text-mist">
              +200 obras acompanhadas para empresas como
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-7 md:gap-x-14 lg:gap-x-16">
              {clients.map((c) => (
                <img
                  key={c.alt}
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-6 w-auto opacity-75 transition-opacity duration-300 hover:opacity-100 md:h-[1.75rem]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
