import { Zap, Heart, History, CreditCard, Star, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Differential {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  tag: string;
}

const differentials: Differential[] = [
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Entrega Express',
    description:
      'Pediu, chegou. Nossa equipe está sempre de prontidão para levar o gás até você no menor tempo possível.',
    tag: 'Rapidez acima de tudo',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Atendimento Humanizado',
    description:
      'Aqui você fala com gente de verdade. Cada pedido é tratado com atenção e cuidado, do primeiro contato à entrega.',
    tag: 'Tratamos cada cliente com cuidado',
  },
  {
    Icon: History,
    iconClass: 'lucide lucide-history',
    title: '+20 Anos no Mercado',
    description:
      'Empresa sólida, com o mesmo dono desde o início. Tradição e confiança que só o tempo constrói.',
    tag: 'Tradição em Goiânia',
  },
  {
    Icon: CreditCard,
    iconClass: 'lucide lucide-credit-card',
    title: 'Pagamento Facilitado',
    description:
      'Aceitamos PIX, cartão de débito, cartão de crédito e dinheiro. Sem complicação na hora de pagar.',
    tag: 'PIX · Cartão · Dinheiro',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Nota 5.0 no Google',
    description:
      'Avaliação máxima. Nossos clientes comprovam o que a gente sempre soube: qualidade faz diferença.',
    tag: 'Aprovado por quem usa',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check',
    title: 'Distribuidora Oficial',
    description:
      'Trabalhamos exclusivamente com a Supergasbras, seguindo todas as normas da ANP para máxima segurança.',
    tag: 'Supergasbras · ANP',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="section-padding bg-brand-navy relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgb(249, 77, 1), transparent)' }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-brand-orange text-sm font-bold uppercase tracking-widest">Por que nos escolher</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 mb-4">
            O gás que você precisa, <span className="text-gradient">quando você precisa</span>
          </h2>
          <p className="text-brand-light/60 max-w-xl mx-auto">
            Não somos apenas mais uma distribuidora. Somos a escolha de quem não quer depender de sorte para ter gás em
            casa.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://storage.lucasmendes.dev/site-sp/gas%20forte/publi/botijoes-gas-app-celular-gas-do-povo_1024x1280.webp"
                alt="Peça também pelo nosso Aplicativo"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 order-2 lg:order-1">
            {differentials.map(({ Icon, iconClass, title, description, tag }) => (
              <div
                key={title}
                className="group bg-brand-dark/60 hover:bg-brand-dark/90 border border-white/5 hover:border-brand-orange/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                    <Icon width={22} height={22} className={`${iconClass} text-brand-orange`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                    <p className="text-brand-light/55 text-sm leading-relaxed mb-3">{description}</p>
                    <span className="text-brand-orange/70 text-xs font-semibold">{tag}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
