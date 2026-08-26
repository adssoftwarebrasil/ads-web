import { CheckCircle2, Users, TrendingUp, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Highlight {
  Icon: LucideIcon;
  lucideClass: string;
  title: string;
  description: string;
  color: string;
}

const highlights: Highlight[] = [
  {
    Icon: CheckCircle2,
    lucideClass: 'lucide lucide-check-circle2',
    title: 'Qualidade Garantida',
    description:
      'Trabalhamos exclusivamente com marcas renomadas e materiais de primeira linha.',
    color: 'rgb(164, 209, 58)',
  },
  {
    Icon: Users,
    lucideClass: 'lucide lucide-users',
    title: 'Mão de Obra Especializada',
    description: 'Equipe treinada e certificada para entregar acabamentos de alto padrão.',
    color: 'rgb(124, 205, 223)',
  },
  {
    Icon: TrendingUp,
    lucideClass: 'lucide lucide-trending-up',
    title: '25+ Anos de Mercado',
    description:
      'Experiência que só o tempo constrói — e a confiança dos nossos clientes confirma.',
    color: 'rgb(252, 224, 15)',
  },
  {
    Icon: Zap,
    lucideClass: 'lucide lucide-zap',
    title: 'Eficiência e Prazo',
    description: 'Compromisso com cronogramas e resultados que superam expectativas.',
    color: 'rgb(217, 164, 0)',
  },
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: 'rgb(2, 2, 2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://storage.lucasmendes.dev/site-sp/atual%20tintas/img/sobre-nos.webp"
                alt="Equipe Atual Tintas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div
                className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-sm border border-white/10"
                style={{ backgroundColor: 'rgba(2, 2, 2, 0.7)' }}
              >
                <p className="text-white text-sm font-semibold">Atual Tintas — Sinop, MT</p>
                <p className="text-white/60 text-xs mt-0.5">
                  Av. André Antônio Maggi, 6256 — Jardim das Violetas
                </p>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl"
              style={{ backgroundColor: 'rgb(164, 209, 58)' }}
            >
              <span className="text-3xl font-black" style={{ color: 'rgb(2, 2, 2)' }}>
                25+
              </span>
              <span
                className="text-xs font-semibold leading-tight mt-1"
                style={{ color: 'rgb(2, 2, 2)' }}
              >
                Anos de
                <br />
                experiência
              </span>
            </div>
          </div>
          <div>
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4 text-brand-dark"
              style={{ backgroundColor: 'rgb(164, 209, 58)' }}
            >
              Quem somos
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
              Tradição e <span style={{ color: 'rgb(164, 209, 58)' }}>Excelência</span> em Cada
              Pincelada
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              Tudo começou com a{' '}
              <strong className="text-white font-semibold">Linkoski Pinturas</strong>, fundada há
              mais de 25 anos para suprir a demanda por mão de obra especializada em pintura em
              Sinop-MT — trazendo confiança, agilidade e profissionalismo a cada obra executada.
            </p>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Em 2009, nasceu a{' '}
              <strong className="text-white/80 font-medium">Atual Tintas</strong>: uma evolução
              natural para agregar ainda mais valor aos nossos clientes. No mesmo local, passamos a
              oferecer a linha completa de tintas, vernizes, revestimentos, sprays e todos os
              acessórios de pintura — proporcionando maior segurança, praticidade e comodidade do
              início ao fim do seu projeto.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.04)' }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.Icon
                      className={item.lucideClass}
                      width={18}
                      height={18}
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{item.description}</p>
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
