import type { LucideIcon } from 'lucide-react';
import { DollarSign, BadgeCheck, Heart, Zap, ArrowRight } from 'lucide-react';
import { useReveal, scrollToSection } from '../lib/useReveal';

const DIFF_IMG = 'https://storage.lucasmendes.dev/site-sp/lojao%20do%20parabrisa/img/colocando-parabrisa.webp';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: DollarSign,
    title: 'Melhor Preço de Salvador',
    description:
      'Oferecemos os melhores preços do mercado sem comprometer a qualidade. Peças originais e importadas com valores justos.',
  },
  {
    icon: BadgeCheck,
    title: 'Qualidade Garantida',
    description:
      'Todos os nossos serviços possuem garantia. Trabalhamos apenas com produtos certificados e de alta durabilidade.',
  },
  {
    icon: Heart,
    title: 'Atendimento Excepcional',
    description:
      'Equipe treinada e experiente pronta para atender você com agilidade, transparência e profissionalismo.',
  },
  {
    icon: Zap,
    title: 'Serviço Rápido',
    description:
      'Instalação e reparos realizados com rapidez, respeitando o seu tempo. Agende e seja atendido no menor prazo possível.',
  },
];

export default function Differentials() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section id="differentials" className="py-20 md:py-28 bg-white">
      <div ref={ref} className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`relative transition-all duration-700 ${
              shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={DIFF_IMG}
                alt="Troca de parabrisa"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Garantia em todos os serviços</p>
              </div>
            </div>
            <div className="absolute top-8 right-8 bg-[rgb(1,160,199)] p-6 rounded-2xl shadow-xl text-center">
              <p className="text-4xl font-bold text-white mb-1">19+</p>
              <p className="text-sm text-white/90">Anos de experiência</p>
            </div>
          </div>
          <div
            className={`transition-all duration-700 delay-200 ${
              shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-[rgb(1,160,199)] font-semibold text-sm tracking-widest uppercase mb-3">
              POR QUE ESCOLHER O LOJÃO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Diferenciais que Fazem a Diferença
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Somos referência em Salvador quando o assunto é vidros automotivos. Nossa missão é oferecer qualidade superior com preço justo.
            </p>
            <div className="space-y-6">
              {differentials.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex gap-4 transition-all duration-500 ${
                      shown ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="w-12 h-12 flex-shrink-0 bg-[rgb(1,160,199)]/10 rounded-xl flex items-center justify-center">
                      <Icon width={24} height={24} className="text-[rgb(1,160,199)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => scrollToSection('contact')}
              className="mt-10 inline-flex items-center gap-2 bg-[rgb(1,160,199)] hover:bg-[rgb(1,140,179)] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Conheça Nossa Loja
              <ArrowRight width={20} height={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
