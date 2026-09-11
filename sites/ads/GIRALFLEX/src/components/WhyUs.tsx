import { ShieldCheck, Zap, Headphones, CreditCard, MapPin, Clock } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Reason = { icon: LucideIcon; iconClass: string; title: string; desc: string };

const reasons: Reason[] = [
  {
    icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-brand-yellow',
    title: 'Garantia e Procedência',
    desc: 'Materiais de primeira linha com procedência comprovada e garantia em todos os produtos.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-brand-yellow',
    title: 'Entrega e Serviços Express',
    desc: 'Entrega grátis na compra de cadeira nova. Serviços rápidos para não parar sua rotina.',
  },
  {
    icon: Headphones,
    iconClass: 'lucide lucide-headphones text-brand-yellow',
    title: 'Pós-Venda de Excelência',
    desc: 'Atendimento presencial, online, por telefone e em domicílio. Estamos onde você precisa.',
  },
  {
    icon: CreditCard,
    iconClass: 'lucide lucide-credit-card text-brand-yellow',
    title: 'Até 6x Sem Juros',
    desc: 'Aceitamos todos os cartões de crédito em até 6 vezes sem juros. Preço justo garantido.',
  },
  {
    icon: MapPin,
    iconClass: 'lucide lucide-map-pin text-brand-yellow',
    title: 'Ponto Estratégico',
    desc: 'Showroom de 225m² na Av. Carvalho Leal, no coração de Manaus, fácil de encontrar.',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-brand-yellow',
    title: 'Peças Pronta Entrega',
    desc: 'Peças de reposição em estoque para atendimento imediato. Nada de espera prolongada.',
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-blue relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-red/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative container-max section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <p className="text-brand-yellow font-semibold text-sm uppercase tracking-wider mb-2">Por que nos escolher</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Diferenciais que Fazem a <span className="text-brand-yellow">Diferença</span>
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            Mais de 24 anos construindo confiança com cada cliente. Conheça os motivos que nos tornam referência em Manaus.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 lg:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-brand-yellow/30 transition-all duration-300">
                  <Icon width={24} height={24} className={r.iconClass} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
