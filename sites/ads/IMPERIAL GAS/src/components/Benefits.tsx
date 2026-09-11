import {
  Zap,
  Heart,
  Award,
  CreditCard,
  ShieldCheck,
  Building2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  border: string;
  iconBg: string;
  iconColor: string;
}

const benefits: Benefit[] = [
  {
    icon: Zap,
    title: 'Entrega Ultrarrápida',
    description:
      'Seu pedido processado imediatamente. Sem enrolação, sem espera — chegamos antes do fogão esfriar.',
    border: 'border-orange-100 hover:border-orange-300',
    iconBg: 'bg-orange-50 text-orange-500',
    iconColor: '',
  },
  {
    icon: Heart,
    title: 'Atendimento Humanizado',
    description:
      'Equipe treinada, cordial e prestativa. Cada cliente é tratado com atenção e cuidado genuínos.',
    border: 'border-rose-100 hover:border-rose-300',
    iconBg: 'bg-rose-50 text-rose-500',
    iconColor: '',
  },
  {
    icon: Award,
    title: '+20 Anos de Tradição',
    description:
      'Empresa sólida com mais de duas décadas no mercado goianiense. Mesmo dono, mesma confiança.',
    border: 'border-amber-100 hover:border-amber-300',
    iconBg: 'bg-amber-50 text-amber-500',
    iconColor: '',
  },
  {
    icon: CreditCard,
    title: 'Pagamento Facilitado',
    description:
      'PIX, cartão de débito/crédito ou dinheiro. Escolha a forma que for mais conveniente para você.',
    border: 'border-teal-100 hover:border-teal-300',
    iconBg: 'bg-teal-50 text-teal-500',
    iconColor: '',
  },
  {
    icon: ShieldCheck,
    title: 'Revendedor Autorizado',
    description:
      'Distribuidor oficial Supergasbras, dentro das normas da ANP. Gás com procedência e qualidade garantida.',
    border: 'border-blue-100 hover:border-blue-300',
    iconBg: 'bg-blue-50 text-blue-500',
    iconColor: '',
  },
  {
    icon: Building2,
    title: 'Entrega no Seu Andar',
    description:
      'Moradores de apartamento não precisam descer. Nosso entregador leva o botijão direto até a sua porta.',
    border: 'border-green-100 hover:border-green-300',
    iconBg: 'bg-green-50 text-green-500',
    iconColor: '',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
            Por que escolher a Imperial?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Diferenciais que fazem{' '}
            <span className="text-orange-500">toda a diferença</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais de 20 anos entregando qualidade, agilidade e segurança para
            residências e comércios em Goiânia.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`bg-white rounded-2xl p-7 border-2 ${benefit.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className={`w-12 h-12 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
