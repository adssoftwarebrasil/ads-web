import { Cog, Zap, Fuel, Sparkles, Car, Truck, ArrowUpRight, LucideIcon } from 'lucide-react';

interface Product {
  icon: LucideIcon;
  iconCls: string;
  badge: string;
  title: string;
  desc: string;
  href: string;
  delay: string;
}

const products: Product[] = [
  {
    icon: Cog,
    iconCls: 'lucide-cog',
    badge: 'Mais vendidas',
    title: 'Peças Mecânicas',
    desc: 'Motor, suspensão, freios, transmissão e componentes estruturais para performance e durabilidade.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20Pe%C3%A7as%20Mec%C3%A2nicas.',
    delay: '0ms',
  },
  {
    icon: Zap,
    iconCls: 'lucide-zap',
    badge: 'Estoque amplo',
    title: 'Elétrica Automotiva',
    desc: 'Alternadores, motores de partida, sensores, chicotes e sistemas completos de elétrica.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20El%C3%A9trica%20Automotiva.',
    delay: '60ms',
  },
  {
    icon: Fuel,
    iconCls: 'lucide-fuel',
    badge: 'Alta tecnologia',
    title: 'Injeção Eletrônica',
    desc: 'Bombas, bicos injetores, sondas lambda e módulos de gerenciamento para diagnóstico preciso.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20Inje%C3%A7%C3%A3o%20Eletr%C3%B4nica.',
    delay: '120ms',
  },
  {
    icon: Sparkles,
    iconCls: 'lucide-sparkles',
    badge: 'Novidades',
    title: 'Acessórios',
    desc: 'Itens de manutenção, conservação e personalização para todo tipo de veículo.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20Acess%C3%B3rios.',
    delay: '180ms',
  },
  {
    icon: Car,
    iconCls: 'lucide-car',
    badge: 'Catálogo completo',
    title: 'Linha Leve',
    desc: 'Componentes nacionais e importados para carros de passeio, utilitários e comerciais leves.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20Linha%20Leve.',
    delay: '240ms',
  },
  {
    icon: Truck,
    iconCls: 'lucide-truck',
    badge: 'Linha pesada',
    title: 'Linha Pesada',
    desc: 'Peças robustas para caminhões, ônibus e máquinas — prontas para o uso intenso.',
    href: 'https://wa.me/5575981960232?text=Ol%C3%A1!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20Linha%20Pesada.',
    delay: '300ms',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="relative py-20 md:py-28 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="reveal inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-navy text-xs font-bold uppercase tracking-[0.2em] mb-5">Catálogo</span>
          <h2 className="reveal font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy mb-5 leading-[1.05]">
            Tudo o que sua oficina precisa — <span className="text-gradient-brand">em um só lugar.</span>
          </h2>
          <p className="reveal text-base md:text-lg text-slate-600">
            Trabalhamos com as principais marcas do mercado para entregar performance e confiança, com atendimento técnico especializado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="reveal group relative p-6 md:p-8 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-navy/10 overflow-hidden"
                style={{ transitionDelay: p.delay }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-blue/0 to-brand-blue/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:from-brand-red/10 group-hover:to-brand-blue/20 transition-all"></div>
                <div className="relative flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-blue to-brand-navy text-white flex items-center justify-center shadow-lg shadow-brand-navy/20 group-hover:from-brand-red group-hover:to-brand-wine transition-all">
                    <Icon className={`lucide ${p.iconCls} w-7 h-7`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-wine bg-brand-red/10 px-3 py-1 rounded-full">{p.badge}</span>
                </div>
                <h3 className="relative font-display text-2xl font-bold text-brand-navy mb-2">{p.title}</h3>
                <p className="relative text-sm text-slate-600 leading-relaxed mb-5">{p.desc}</p>
                <div className="relative flex items-center gap-2 text-brand-blue font-bold text-sm group-hover:text-brand-red transition">
                  <span>Consultar disponibilidade</span>
                  <ArrowUpRight className="lucide lucide-arrow-up-right w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
