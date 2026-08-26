import {
  ShoppingCart,
  Tag,
  RefreshCw,
  CreditCard,
  BadgeCheck,
  Handshake,
  ArrowUpRight,
  type LucideIcon,
} from 'lucide-react';

interface Servico {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    icon: ShoppingCart,
    iconClass: 'lucide-shopping-cart',
    title: 'Compra de motos',
    desc: 'Motos revisadas, com procedência e os melhores preços da região. Encontre o modelo ideal para você.',
  },
  {
    icon: Tag,
    iconClass: 'lucide-tag',
    title: 'Venda rápida',
    desc: 'Vendemos sua moto com agilidade. Anuncie conosco e alcance milhares de interessados.',
  },
  {
    icon: RefreshCw,
    iconClass: 'lucide-refresh-cw',
    title: 'Troca com avaliação justa',
    desc: 'Troque sua moto pela que você sempre quis. Avaliação transparente e negociação honesta.',
  },
  {
    icon: CreditCard,
    iconClass: 'lucide-credit-card',
    title: 'Financiamento facilitado',
    desc: 'Financiamento com ou sem entrada. Aprovação rápida e parcelas que cabem no seu bolso.',
  },
  {
    icon: BadgeCheck,
    iconClass: 'lucide-badge-check',
    title: 'Procedência garantida',
    desc: 'Todas as motos com documentação em dia e revisão completa antes da venda.',
  },
  {
    icon: Handshake,
    iconClass: 'lucide-handshake',
    title: 'Negociação transparente',
    desc: 'Atendimento próximo, honesto e sem surpresas. A sua confiança é nossa prioridade.',
  },
];

export default function Servicos() {
  return (
    <section
      id="servicos"
      className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-black to-[#0a0a0a]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,1,16,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(233,1,16,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-brand-red mb-4">
            O que oferecemos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-5">
            Tudo o que você precisa,<br />
            em um <span className="text-brand-red">só lugar</span>.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Da compra à revenda, passando por financiamento e troca — cuidamos de cada etapa com
            clareza, agilidade e o melhor atendimento.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => {
            const Icon = s.icon;
            const featured = i === 0;
            return (
              <div
                key={s.title}
                className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${
                  featured
                    ? 'bg-gradient-to-br from-brand-red to-brand-red-dark border-brand-red shadow-[0_20px_60px_-15px_rgba(233,1,16,0.5)]'
                    : 'bg-white/[0.03] border-white/10 hover:border-brand-red/50 hover:bg-white/[0.05]'
                }`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/5 group-hover:scale-150 transition-transform duration-700"></div>
                <div
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    featured
                      ? 'bg-white/20 text-white'
                      : 'bg-brand-red/10 text-brand-red group-hover:bg-brand-red group-hover:text-white group-hover:scale-110'
                  }`}
                >
                  <Icon className={`lucide ${s.iconClass}`} width={26} height={26} />
                </div>
                <h3 className="relative font-display text-2xl font-black text-white mb-3">
                  {s.title}
                </h3>
                <p
                  className={`relative text-sm leading-relaxed ${
                    featured ? 'text-white/90' : 'text-white/65'
                  }`}
                >
                  {s.desc}
                </p>
                <ArrowUpRight
                  className={`lucide lucide-arrow-up-right absolute top-7 right-7 transition-all duration-500 ${
                    featured
                      ? 'text-white'
                      : 'text-white/20 group-hover:text-brand-red group-hover:rotate-45'
                  }`}
                  width={22}
                  height={22}
                />
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5566999980270?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20GM%20Motos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-red hover:text-white transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Falar com um consultor
            <ArrowUpRight className="lucide lucide-arrow-up-right" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
