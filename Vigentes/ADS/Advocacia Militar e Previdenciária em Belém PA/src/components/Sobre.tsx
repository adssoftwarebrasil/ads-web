import {
  Scale,
  Award,
  Shield,
  Briefcase,
  Users,
  CheckCircle2,
  Clock,
  type LucideIcon,
} from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

interface WhyCard {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const whyCards: WhyCard[] = [
  {
    Icon: Users,
    iconClass: 'lucide-users',
    title: 'Atendimento Personalizado',
    text: 'Cada caso é único e merece atenção especial',
  },
  {
    Icon: CheckCircle2,
    iconClass: 'lucide-check-circle2',
    title: 'Análise Minuciosa',
    text: 'Estudo detalhado de todas as particularidades',
  },
  {
    Icon: Clock,
    iconClass: 'lucide-clock',
    title: 'Pronto Atendimento',
    text: 'Resposta rápida quando você mais precisa',
  },
  {
    Icon: Briefcase,
    iconClass: 'lucide-briefcase',
    title: 'Experiência Sólida',
    text: 'Décadas de atuação no serviço público',
  },
];

const numbers = [
  { value: '8+', label: 'anos de experiência' },
  { value: '5', label: 'estados de atuação' },
  { value: '100%', label: 'atendimento personalizado' },
  { value: '24h', label: 'resposta inicial' },
];

export default function Sobre() {
  return (
    <section
      id="sobre"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-0 right-0 w-1/2 h-1/2">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="sobre-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1" fill="rgb(172, 0, 0)"></circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sobre-grid)"></rect>
          </svg>
        </div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white border-2 shadow-sm"
            style={{ borderColor: BRAND }}
          >
            <Scale width={18} height={18} className="lucide lucide-scale " style={{ color: BRAND }} />
            <span
              className="text-sm font-bold tracking-wider uppercase"
              style={{ color: BRAND }}
            >
              Nossa História
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Experiência que <span style={{ color: BRAND }}>Faz a Diferença</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de 8 anos dedicados à defesa dos seus direitos com excelência e compromisso
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://i0.wp.com/brazaoadvocacia.com/wp-content/uploads/2024/06/IMG_20230612_113610462-scaled.jpg?w=1920&ssl=1"
                alt="Dr. Manoel Brazão - Escritório de Advocacia"
                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-6 left-6 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform transition-transform duration-300 hover:scale-105">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                >
                  <Award
                    width={22}
                    height={22}
                    className="lucide lucide-award "
                    style={{ color: BRAND }}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-semibold">Desde</div>
                  <div className="text-lg font-black text-gray-900">2016</div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 bg-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 transform transition-transform duration-300 hover:scale-105">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                >
                  <Shield
                    width={22}
                    height={22}
                    className="lucide lucide-shield "
                    style={{ color: BRAND }}
                  />
                </div>
                <div>
                  <div className="text-xs text-gray-600 font-semibold">Registro</div>
                  <div className="text-lg font-black text-gray-900">OAB/PA</div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32">
                <div
                  className="absolute top-0 right-0 w-full h-full opacity-20"
                  style={{ background: 'linear-gradient(135deg, transparent 50%, rgb(172, 0, 0) 50%)' }}
                ></div>
              </div>
            </div>
            <div
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: BRAND }}
            ></div>
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-2xl"
              style={{ backgroundColor: BRAND }}
            ></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                Fundado em{' '}
                <strong className="font-extrabold" style={{ color: BRAND }}>
                  2016
                </strong>
                , o escritório <strong>Brazão Advocacia e Consultoria</strong> atua há mais de 8 anos
                no mercado jurídico, especializando-se em{' '}
                <strong>
                  direito civil, militar, previdenciário, à saúde, notarial/registral e do
                  consumidor
                </strong>
                .
              </p>
              <div
                className="relative bg-white p-8 rounded-2xl shadow-lg border-l-4 hover:shadow-xl transition-shadow duration-300"
                style={{ borderColor: BRAND }}
              >
                <div className="absolute top-4 right-4 opacity-10">
                  <Scale
                    width={80}
                    height={80}
                    className="lucide lucide-scale "
                    style={{ color: BRAND }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                    >
                      <Briefcase
                        width={24}
                        height={24}
                        className="lucide lucide-briefcase "
                        style={{ color: BRAND }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900">Dr. MANOEL BRAZÃO</h3>
                      <p className="text-sm text-gray-600 font-semibold">Titular do Escritório</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Servidor público federal militar por <strong>décadas</strong>, com vasta
                    experiência no
                    <strong> Instituto de Gestão Previdenciária do Estado do Pará</strong> e no ramo
                    de<strong> Direito Notarial e Registral</strong>.
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nosso diferencial está no{' '}
                <strong className="font-extrabold" style={{ color: BRAND }}>
                  pronto atendimento
                </strong>{' '}
                e na abordagem{' '}
                <strong className="font-extrabold" style={{ color: BRAND }}>
                  humanizada
                </strong>
                , combinando conhecimento técnico profundo com compreensão das necessidades
                individuais de cada cliente.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
            Por que escolher <span style={{ color: BRAND }}>Brazão Advocacia</span>?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((c, i) => {
              const { Icon } = c;
              return (
                <div
                  key={i}
                  className="group bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-opacity-0 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{ backgroundColor: BRAND }}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                    >
                      <Icon
                        width={28}
                        height={28}
                        className={`lucide ${c.iconClass} `}
                        style={{ color: BRAND }}
                      />
                    </div>
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{c.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{c.text}</p>
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ backgroundColor: BRAND }}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Números que <span style={{ color: BRAND }}>Comprovam</span> Nossa Experiência
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {numbers.map((n, i) => (
              <div
                key={i}
                className="group relative bg-white border-2 border-gray-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(172, 0, 0, 0.05) 0%, rgba(172, 0, 0, 0.1) 100%)',
                  }}
                ></div>
                <div
                  className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: BRAND }}
                ></div>
                <div className="relative z-10">
                  <div
                    className="text-5xl md:text-6xl font-black mb-3 transition-all duration-500 group-hover:scale-110"
                    style={{ color: BRAND }}
                  >
                    {n.value}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base font-bold uppercase tracking-wide">
                    {n.label}
                  </div>
                </div>
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: BRAND }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-gray-100">
            <div className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: BRAND }}
              ></div>
              <span className="text-sm font-bold text-gray-700">2016</span>
            </div>
            <div className="w-24 h-0.5 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND }}></div>
              <span className="text-sm font-bold text-gray-700">Hoje</span>
            </div>
            <div className="ml-2 text-sm font-semibold" style={{ color: BRAND }}>
              8+ Anos de Sucesso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
