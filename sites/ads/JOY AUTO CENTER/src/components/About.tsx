import { Award, ThumbsUp, CheckCircle, Users, type LucideIcon } from 'lucide-react';

const FACADE =
  'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/fachada-joy-auto-center-carros-estrada_1024x1024.webp';

const checks = [
  'Equipe técnica especializada e certificada',
  'Equipamentos modernos e de alta precisão',
  'Peças originais e genuínas com garantia',
  'Atendimento transparente e honesto',
  'Excelente custo-benefício na região',
  'Diagnóstico eletrônico computadorizado',
];

const stats = [
  { value: '22+', label: 'Anos de Experiência' },
  { value: '4.8', label: 'Avaliação no Google' },
  { value: '100%', label: 'Compromisso' },
  { value: 'Iporá', label: 'e Região' },
];

interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    desc: '22 anos atendendo motoristas de Iporá-GO e região com excelência e dedicação.',
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    desc: 'Técnicos capacitados e atualizados com as mais recentes tecnologias automotivas.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfação Garantida',
    desc: 'Nossa prioridade é a sua satisfação. Atendimento transparente do início ao fim.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-black py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={FACADE}
                alt="Fachada Joy Auto Center"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[rgb(246,122,55)] text-white rounded-2xl p-5 shadow-2xl">
              <div className="flex items-center gap-3">
                <Award size={28} />
                <div>
                  <p className="font-black text-2xl leading-none">22+</p>
                  <p className="text-xs font-medium opacity-80 mt-0.5">Anos no mercado</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -left-5 bg-white text-black rounded-2xl p-4 shadow-2xl hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                <ThumbsUp size={18} className="text-[rgb(246,122,55)]" />
              </div>
              <div>
                <p className="font-black text-xl leading-none">4.8★</p>
                <p className="text-xs text-gray-500 mt-0.5">Google Reviews</p>
              </div>
            </div>
          </div>
          <div>
            <span className="inline-block text-[rgb(246,122,55)] text-xs font-bold uppercase tracking-widest mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Mais de duas décadas cuidando do seu veículo
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              A JOY AUTO CENTER é referência em manutenção e reparação automotiva na região de
              Iporá-GO e cidades vizinhas. Fundada com o propósito de oferecer serviços de alta
              qualidade, transparência e compromisso, a empresa cresceu e se tornou a escolha de
              confiança de milhares de motoristas.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Nossa equipe é especializada e apaixonada pelo que faz. Investimos continuamente em
              equipamentos modernos e capacitação para entregar sempre o melhor resultado,
              priorizando a segurança e a satisfação de cada cliente.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {checks.map((check) => (
                <div key={check} className="flex items-start gap-2.5">
                  <CheckCircle
                    size={16}
                    className="text-[rgb(246,122,55)] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-gray-300 text-sm leading-snug">{check}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <p className="text-[rgb(246,122,55)] font-black text-2xl leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-xs leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex gap-4 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[rgb(246,122,55)]/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[rgb(246,122,55)]/15 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-[rgb(246,122,55)]" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
