import { CalendarDays, Award, Users, MapPin, type LucideIcon } from 'lucide-react';
import { LOGO_URL } from '../constants';

const audience = [
  'Mecânicas Parceiras',
  'Caminhoneiros',
  'Empresas de Transporte',
  'Donos de Caminhonetes Diesel',
  'Vans e Ônibus',
  'Máquinas Agrícolas',
];

const stats: { icon: LucideIcon; iconClass: string; value: string; label: string }[] = [
  { icon: CalendarDays, iconClass: 'lucide-calendar-days', value: '6+', label: 'Anos de Experiência' },
  { icon: Award, iconClass: 'lucide-award', value: '100%', label: 'Compromisso com Qualidade' },
  { icon: Users, iconClass: 'lucide-users', value: 'Milhares', label: 'de Clientes Atendidos' },
  { icon: MapPin, iconClass: 'lucide-map-pin', value: 'RO & MT', label: 'Área de Cobertura' },
];

const features = [
  {
    title: 'Diagnóstico Transparente',
    description: 'Cada problema é explicado com clareza. Você entende o que está sendo feito e por quê.',
  },
  {
    title: 'Equipe Técnica Qualificada',
    description:
      'Profissionais especializados em sistemas de injeção diesel com experiência prática comprovada.',
  },
  {
    title: 'Agilidade para quem trabalha',
    description:
      'Sabemos que seu veículo é sua fonte de renda. Trabalhamos com processos organizados para minimizar o tempo parado.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-widest mb-3">
            Nossa História
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4">Quem é a MTTORK?</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-700 opacity-100 translate-x-0">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red/10 rounded-2xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-dark/10 rounded-2xl"></div>
              <div className="relative bg-gradient-to-br from-brand-dark to-brand-darkDeep rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={LOGO_URL}
                    alt="MTTORK"
                    className="h-14 w-auto object-contain brightness-0 invert"
                  />
                </div>
                <p className="text-white/80 leading-relaxed mb-6 text-sm sm:text-base">
                  Fundada em <strong className="text-white">29 de junho de 2018</strong>, a MTTORK nasceu com
                  um propósito claro: oferecer soluções técnicas confiáveis para o segmento diesel em
                  Rondonópolis e região.
                </p>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                  Nossa missão é unir <strong className="text-brand-light">conhecimento técnico</strong>,{' '}
                  <strong className="text-brand-light">transparência no atendimento</strong> e soluções
                  eficientes — porque sabemos que você não pode ficar parado.
                </p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-xs text-white/50 uppercase tracking-wider">Categoria de atuação</p>
                  <p className="text-white font-semibold mt-1 text-sm">
                    Venda, Assistência e Reparação da Linha de Injeção Eletrônica Diesel
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-gray-700 font-bold mb-4 text-sm uppercase tracking-wider">Quem atendemos</h4>
              <div className="flex flex-wrap gap-2">
                {audience.map((item) => (
                  <span
                    key={item}
                    className="bg-brand-dark/5 text-brand-dark border border-brand-dark/10 px-3 py-1.5 rounded-full text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="transition-all duration-700 delay-200 opacity-100 translate-x-0">
            <div className="grid grid-cols-2 gap-5 mb-10">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-brand-dark rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Icon className={`lucide ${stat.iconClass} text-white`} width={22} height={22} />
                    </div>
                    <div className="text-2xl font-black text-brand-dark mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
            <div className="space-y-5">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-1.5 h-full min-h-[60px] bg-gradient-to-b from-brand-red to-brand-dark rounded-full"></div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
