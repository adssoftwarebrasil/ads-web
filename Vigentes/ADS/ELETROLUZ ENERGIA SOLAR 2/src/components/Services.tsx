import { Sun, Zap, Check, Phone } from 'lucide-react';
import { BLUE, BLUE_LIGHT, YELLOW, WA_SOLAR_MSG, WA_MATERIAL_MSG } from '../theme';
import { useInView } from '../useInView';

interface ServiceCard {
  img: string;
  alt: string;
  Icon: typeof Sun;
  iconGradient: string;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  ctaStyle: React.CSSProperties;
  delay: string;
}

const cards: ServiceCard[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FPaineis_haras.webp',
    alt: 'Energia Solar Comercial',
    Icon: Sun,
    iconGradient: 'linear-gradient(135deg, rgb(254, 201, 1) 0%, rgb(255, 217, 7) 100%)',
    title: 'Energia Solar Comercial',
    desc: 'Sistemas fotovoltaicos completos para empresas e indústrias. Reduza seus custos com energia e contribua para um futuro sustentável.',
    features: [
      'Economia de até 95% na conta de luz',
      'Instalação profissional e certificada',
      'Garantia de fábrica e desempenho',
      'Monitoramento em tempo real',
    ],
    cta: 'Solicitar Orçamento',
    href: WA_SOLAR_MSG,
    ctaStyle: {
      backgroundColor: BLUE,
      color: 'white',
      animation: '3s ease-in-out 0s infinite normal none running pulse-subtle',
      boxShadow: 'rgba(0, 73, 176, 0.3) 0px 10px 25px',
    },
    delay: '600ms',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/eletroluz%2Fimg%2FFunciona%CC%81rio-tecnico.webp',
    alt: 'Material Elétrico',
    Icon: Zap,
    iconGradient: 'linear-gradient(135deg, rgb(0, 73, 176) 0%, rgb(96, 174, 220) 100%)',
    title: 'Material Elétrico',
    desc: 'Amplo catálogo de materiais elétricos de qualidade para projetos residenciais, comerciais e industriais.',
    features: [
      'Marcas reconhecidas no mercado',
      'Estoque completo e variado',
      'Atendimento especializado',
      'Preços competitivos',
    ],
    cta: 'Falar com Vendedor',
    href: WA_MATERIAL_MSG,
    ctaStyle: {
      backgroundColor: YELLOW,
      color: BLUE,
      animation: '3s ease-in-out 0s infinite normal none running pulse-subtle',
      boxShadow: 'rgba(254, 201, 1, 0.4) 0px 10px 25px',
    },
    delay: '800ms',
  },
];

export default function Services() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="serviços"
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(rgb(245, 248, 252) 0%, white 100%)' }}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className={`text-sm font-semibold tracking-wider mb-4 transition-all duration-600 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE_LIGHT, letterSpacing: '2px' }}
          >
            NOSSOS SERVIÇOS
          </p>
          <h2
            className={`text-3xl lg:text-5xl font-extrabold mb-4 transition-all duration-600 delay-200 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: BLUE }}
          >
            Soluções Completas para Sua Necessidade
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto transition-all duration-600 delay-400 ${
              inView ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ color: 'rgb(60, 60, 60)' }}
          >
            Energia sustentável e materiais de qualidade para projetos residenciais e comerciais
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className={`bg-white rounded-3xl overflow-hidden border-2 border-transparent transition-all duration-700 hover:scale-[1.01] ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ boxShadow: 'rgba(0, 0, 0, 0.06) 0px 10px 40px', transitionDelay: card.delay }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div
                  className="absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm"
                  style={{ background: card.iconGradient }}
                >
                  <card.Icon width={32} height={32} className="text-white" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-3xl font-black mb-4" style={{ color: BLUE }}>
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed mb-6 font-medium" style={{ color: 'rgb(80, 80, 80)' }}>
                  {card.desc}
                </p>
                <ul className="space-y-3 mb-10">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start space-x-3">
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm"
                        style={{ backgroundColor: YELLOW }}
                      >
                        <Check width={14} height={14} strokeWidth={3} className="lucide lucide-check " style={{ color: BLUE }} />
                      </div>
                      <span className="font-semibold" style={{ color: 'rgb(60, 60, 60)' }}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full flex items-center justify-center space-x-3 py-5 rounded-2xl font-black text-lg transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg"
                  style={card.ctaStyle}
                >
                  <Phone width={22} height={22} className="lucide lucide-phone fill-current" />
                  <span className="uppercase tracking-tight">{card.cta}</span>
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shine-fast"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
