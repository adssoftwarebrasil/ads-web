import {
  Coffee,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  title: string;
  text: string;
  delay: number;
}

const features: Feature[] = [
  {
    Icon: Zap,
    iconBg: 'rgba(38, 182, 230, 0.08)',
    iconColor: 'rgb(38, 182, 230)',
    title: 'Ciclo Completo em 75 min',
    text: 'Lave e seque suas roupas em menos de 2 horas. Máquinas de alta performance que entregam resultados profissionais.',
    delay: 0,
  },
  {
    Icon: Users,
    iconBg: 'rgba(84, 46, 145, 0.08)',
    iconColor: 'rgb(84, 46, 145)',
    title: 'Autoatendimento Prático',
    text: 'Você tem total autonomia no processo. Sem precisar de atendente, sem burocracia. Simples e rápido.',
    delay: 80,
  },
  {
    Icon: Sparkles,
    iconBg: 'rgba(118, 203, 199, 0.15)',
    iconColor: 'rgb(118, 203, 199)',
    title: 'Máquinas Modernas',
    text: 'Equipamentos de última geração que garantem limpeza profunda e proteção completa para seus tecidos.',
    delay: 160,
  },
  {
    Icon: ShieldCheck,
    iconBg: 'rgba(190, 83, 160, 0.08)',
    iconColor: 'rgb(190, 83, 160)',
    title: 'Ambiente Seguro e Limpo',
    text: 'Espaço sempre higienizado, monitorado e confortável. Traga sua família com total tranquilidade.',
    delay: 240,
  },
  {
    Icon: ShoppingBag,
    iconBg: 'rgba(38, 182, 230, 0.08)',
    iconColor: 'rgb(38, 182, 230)',
    title: 'Produtos na Hora',
    text: 'Máquina de venda automática com sabão, amaciante e tudo que você precisa disponível a qualquer momento.',
    delay: 320,
  },
  {
    Icon: Coffee,
    iconBg: 'rgba(84, 46, 145, 0.08)',
    iconColor: 'rgb(84, 46, 145)',
    title: 'Espaço de Descanso',
    text: 'Aguarde confortavelmente em nossa sala de espera moderna, com cadeiras, mesas e espaço kids.',
    delay: 400,
  },
];

export default function Features() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 section-fade">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(38, 182, 230, 0.1)', color: 'rgb(38, 182, 230)' }}
          >
            Por que escolher a Lavup?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4">
            Tudo que você precisa em{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, rgb(84, 46, 145), rgb(38, 182, 230)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              um só lugar
            </span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Combinamos tecnologia, praticidade e conforto para tornar o cuidado
            com suas roupas uma experiência simples e eficiente.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ Icon, iconBg, iconColor, title, text, delay }) => (
            <div
              key={title}
              className="section-fade"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: iconBg, color: iconColor }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
