import { Award, Users, Zap, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

interface Feature {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[#102694]',
    title: 'Qualidade Premium',
    description:
      'Equipamentos de última geração para impressões com cores vivas e acabamento impecável.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[#102694]',
    title: 'Atendimento Personalizado',
    description:
      'Cada projeto é tratado de forma única. Ouvimos, planejamos e entregamos o que você precisa.',
  },
  {
    icon: Zap,
    iconClass: 'lucide lucide-zap text-[#102694]',
    title: 'Agilidade e Pontualidade',
    description: 'Produção eficiente com prazos respeitados. Sua urgência é a nossa prioridade.',
  },
  {
    icon: Shield,
    iconClass: 'lucide lucide-shield text-[#102694]',
    title: 'Tecnologia e Diversidade',
    description:
      'Do corte a laser à impressão digital de grande formato. Soluções completas em um só lugar.',
  },
];

interface TimelineEntry {
  year: string;
  text: string;
}

const timeline: TimelineEntry[] = [
  { year: '2010', text: 'Fundação da AL Personaliza em Sinop por Almir e Laércio.' },
  { year: '2011', text: 'Primeiro designer contratado e expansão do espaço físico.' },
  { year: '2017', text: 'Investimento em laser e nova estrutura moderna e planejada.' },
  { year: '2018', text: 'Início de um novo ciclo solo, com identidade e propósito renovados.' },
  { year: '2022', text: 'Quitação de dívidas e aquisição de 3 novas plotters de impressão.' },
  { year: '2023', text: 'Expansão para 600m² e início de mentoria de gestão e liderança.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center mb-20">
          <div>
            <span className="inline-block text-[#102694] font-semibold text-sm uppercase tracking-widest mb-3">
              Nossa história
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              14 anos construindo marcas que <span className="text-[#102694]">marcam presença</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Em 10 de outubro de 2010, Almir Gonçalves e Laércio Dahmer fundaram a AL Personaliza em
              Sinop — MT. O nome é a junção das iniciais dos sócios e a essência da empresa: algo
              pessoal, feito com cuidado.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              Tudo começou em uma sala de 40m², com dois computadores e duas motos. Hoje, com mais de
              600m² de estrutura, tecnologia de ponta e uma equipe experiente, a AL Personaliza é
              referência em comunicação visual em Sinop e região.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              Superamos crises, pandemias e desafios com resiliência e trabalho. Cada projeto entregue
              é a prova do nosso compromisso com a excelência e a satisfação de quem confia em nosso
              trabalho.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFC734] hover:bg-yellow-400 text-[#102694] font-bold text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
            >
              Fale com nossa equipe
            </a>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Equipe AL Personaliza"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102694]/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#FFC734] rounded-2xl p-5 shadow-xl">
              <div className="text-3xl font-extrabold text-[#102694]">14+</div>
              <div className="text-[#102694] font-semibold text-sm">Anos de experiência</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#102694] rounded-2xl p-4 shadow-xl">
              <div className="text-2xl font-extrabold text-[#FFC734]">600m²</div>
              <div className="text-white text-xs font-medium">de estrutura</div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-[#102694]/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#102694]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon width={22} height={22} strokeWidth={2} className={feature.iconClass} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div>
          <div className="text-center mb-10">
            <span className="inline-block text-[#102694] font-semibold text-sm uppercase tracking-widest mb-3">
              Linha do tempo
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Nossa trajetória de crescimento
            </h3>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            <div className="space-y-6 lg:space-y-0">
              {timeline.map((entry, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={entry.year}
                    className={`lg:flex items-center gap-8 lg:mb-8 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    <div className={`lg:w-1/2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="bg-gray-50 rounded-xl p-4 border border-gray-100 inline-block max-w-xs w-full">
                        <span className="text-[#FFC734] font-extrabold text-lg">{entry.year}</span>
                        <p className="text-gray-600 text-sm mt-1">{entry.text}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center w-10 flex-shrink-0 relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#102694] border-4 border-white shadow-md"></div>
                    </div>
                    <div className="lg:w-1/2"></div>
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
