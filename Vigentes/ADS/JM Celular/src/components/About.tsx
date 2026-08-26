import { CheckCircle2, Award, Users, ThumbsUp, type LucideIcon } from 'lucide-react';

const features = [
  'Atendemos todas as marcas: iPhone, Samsung, Motorola, Xiaomi e muito mais',
  'Diagnóstico gratuito — sem surpresas no orçamento',
  'Peças de reposição com procedência garantida',
  'Profissionais treinados e em constante atualização',
  'Serviço rápido — muitos reparos entregues no mesmo dia',
  'Localização estratégica em Itapuã, Salvador',
];

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Award, value: '+13', label: 'Anos de mercado' },
  { icon: Users, value: 'Milhares', label: 'de clientes atendidos' },
  { icon: ThumbsUp, value: '4.8★', label: 'Nota no Google' },
];

export default function About() {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-[#F4F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#004AAC] font-semibold text-sm tracking-widest uppercase mb-3">
            Nossa história
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Quem Somos
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
              <img
                src="https://storage.lucasmendes.dev/site-sp/jm-celular/img/quem-somos.webp"
                alt="JM Celular - Quem Somos"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004AAC]/30 to-transparent" />
            </div>
            <div className="absolute -bottom-5 -right-2 sm:-right-6 bg-white rounded-2xl shadow-xl px-6 py-4 border border-gray-100">
              <p className="text-3xl font-extrabold text-[#004AAC] leading-none">2012</p>
              <p className="text-sm text-gray-500 mt-1">Fundação da empresa</p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Desde <strong className="text-gray-800">2012</strong>, a JM Celular está no mercado de
              Salvador oferecendo serviços de assistência técnica com qualidade, confiança e
              excelência. Nascemos com um propósito simples: ser a assistência técnica que as
              pessoas indicam com orgulho.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Com mais de uma década de experiência, nos tornamos referência nos bairros de Itapuã,
              Patamares, Piatã, Jaguaribe, Aeroporto e Lauro de Freitas. Nossa missão é entregar cada
              aparelho consertado como se fosse o nosso próprio.
            </p>
            <ul className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    width={20}
                    height={20}
                    className="text-[#004AAC] shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white border border-gray-100 rounded-2xl p-4 text-center shadow-sm"
                  >
                    <Icon width={20} height={20} className="text-[#004AAC] mx-auto mb-2" />
                    <p className="text-xl font-extrabold text-gray-900 leading-none">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
