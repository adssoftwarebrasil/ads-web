import { Disc3, Truck, Cog, CircleDot, Tractor, Wrench, ArrowUpRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Product {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

const products: Product[] = [
  {
    Icon: Disc3,
    iconClass: 'lucide lucide-disc3 w-7 h-7',
    title: 'Embreagens Agrícolas',
    desc: 'Para tratores, colheitadeiras e máquinas de grande porte que não podem parar na safra.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Embreagens%20Agr%C3%ADcolas.',
    badge: 'Mais procurado',
  },
  {
    Icon: Truck,
    iconClass: 'lucide lucide-truck w-7 h-7',
    title: 'Embreagens Linha Pesada',
    desc: 'Kits completos para caminhões e frotas com alta rodagem, montagem confiável.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Embreagens%20Linha%20Pesada.',
  },
  {
    Icon: Cog,
    iconClass: 'lucide lucide-cog w-7 h-7',
    title: 'Platôs e Discos',
    desc: 'Componentes de alta resistência, ideais para cargas pesadas e longas distâncias.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Plat%C3%B4s%20e%20Discos.',
  },
  {
    Icon: CircleDot,
    iconClass: 'lucide lucide-circle-dot w-7 h-7',
    title: 'Mancais de Rolamento',
    desc: 'Rolamentos e mancais de precisão para acoplamento suave e durável.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Mancais%20de%20Rolamento.',
  },
  {
    Icon: Tractor,
    iconClass: 'lucide lucide-tractor w-7 h-7',
    title: 'Volantes de Motor',
    desc: 'Volantes retificados e novos para linha agrícola e pesada, com alta precisão dimensional.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Volantes%20de%20Motor.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-7 h-7',
    title: 'Garfos de Embreagem',
    desc: 'Garfos robustos para substituição, compatíveis com as principais marcas do mercado.',
    href: 'https://wa.me/556696775369?text=Ol%C3%A1%2C%20Plat%C3%B4%20L%C3%ADder!%20Gostaria%20de%20um%20or%C3%A7amento%20de%3A%20Garfos%20de%20Embreagem.',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-[rgb(248,248,249)] relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-navy/5 blur-3xl"
        aria-hidden="true"
      ></div>
      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
            <span className="w-8 h-px bg-brand-red"></span>Nossos produtos
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold text-brand-navy leading-[1.05] text-balance">
            Componentes selecionados para quem exige desempenho de verdade.
          </h2>
          <p className="mt-5 text-brand-ink/75 text-lg leading-relaxed">
            Trabalhamos com peças novas e remanufaturadas, de marcas reconhecidas, com garantia e
            procedência. Envio rápido para todo o Brasil.
          </p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <article
              key={p.title}
              className="group relative p-7 bg-white rounded-2xl border border-black/5 hover:border-brand-navy/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-navy/10 overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-500"></div>
              {p.badge && (
                <span className="absolute top-5 right-5 text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white px-2.5 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-navy text-white group-hover:bg-brand-red transition-colors duration-500">
                  <p.Icon className={p.iconClass} />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold text-brand-navy">{p.title}</h3>
                <p className="mt-2 text-sm text-brand-ink/70 leading-relaxed">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red hover:text-brand-navy transition-colors"
                >
                  Consultar disponibilidade
                  <ArrowUpRight className="lucide lucide-arrow-up-right w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
