import { useState } from 'react';
import { Wifi, Zap, TrendingUp, Check, MessageCircle, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=youconnectpe%2FAtivo%201%20(1).png&version_id=null';
const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/youconnectpe%2Ffundoheroo.jpeg';
const HERO_WOMAN = 'https://storage.lucasmendes.dev/site-sp/youconnectpe%2Fmulherhero.png';

interface Plan {
  category: string;
  speed: string;
  unit: string;
  Icon: typeof Wifi;
  features: string[];
  reais: string;
  cents: string;
  popular?: boolean;
}

const plans: Plan[] = [
  {
    category: 'Internet 100% fibra',
    speed: '200',
    unit: 'MEGA',
    Icon: Wifi,
    features: ['Ideal para casa', 'Streaming HD', 'Redes sociais'],
    reais: '64',
    cents: ',90',
  },
  {
    category: 'Internet 100% fibra',
    speed: '400',
    unit: 'MEGA',
    Icon: Zap,
    features: ['Home office', 'Jogos online', 'Streaming 4K'],
    reais: '89',
    cents: ',90',
  },
  {
    category: 'Internet 100% fibra',
    speed: '600',
    unit: 'MEGA',
    Icon: TrendingUp,
    features: ['Velocidade máxima', 'Múltiplos devices', 'Suporte personalizado'],
    reais: '122',
    cents: ',00',
    popular: true,
  },
  {
    category: 'Internet 100% fibra + Streaming',
    speed: '700',
    unit: 'MEGA',
    Icon: TrendingUp,
    features: ['Equipamento em comodato', 'Tela Globoplay inclusa', 'Ultra velocidade'],
    reais: '149',
    cents: ',90',
  },
  {
    category: 'Internet 100% fibra + Streamings Premium',
    speed: '1',
    unit: 'GIGA',
    Icon: TrendingUp,
    features: ['Equipamento em comodato', 'Premiere + Telecine', 'Velocidade máxima'],
    reais: '177',
    cents: ',00',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? plans.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === plans.length - 1 ? 0 : c + 1));

  return (
    <section id="hero">
      <section className="relative min-h-screen h-auto py-12 sm:py-16 md:py-20 lg:h-screen px-3 sm:px-4 overflow-hidden flex items-center">
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src={LOGO}
            alt="You Connect Logo"
            className="h-10 sm:h-12 md:h-14 w-auto brightness-0 invert"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${HERO_BG}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 via-transparent to-orange-900/20"></div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="relative flex justify-center items-end">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src={HERO_WOMAN}
                alt="Cliente satisfeita You Connect"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white/20 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="w-full -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 sm:px-4">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <div
                  className="flex transition-transform duration-700 ease-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {plans.map((plan, i) => {
                    const { Icon } = plan;
                    return (
                      <div className="min-w-full" key={i}>
                        <div className="relative bg-white p-4 sm:p-5 md:p-6 overflow-hidden">
                          {plan.popular && (
                            <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                              <Sparkles className="w-3 h-3" />
                              POPULAR
                            </div>
                          )}
                          <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full blur-3xl opacity-50"></div>
                          <div className="relative z-10 flex flex-col md:grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 items-center">
                            <div className="space-y-3 text-center md:text-left w-full">
                              <div className="inline-block">
                                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
                                  {plan.category}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 justify-center md:justify-start">
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-2 rounded-xl">
                                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                </div>
                                <div className="flex items-baseline gap-1">
                                  <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-none">
                                    {plan.speed}
                                  </span>
                                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">
                                    {plan.unit}
                                  </span>
                                </div>
                              </div>
                              <div className="space-y-1.5 pt-1">
                                {plan.features.map((f) => (
                                  <div className="flex items-center gap-2 justify-center md:justify-start" key={f}>
                                    <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-0.5 rounded-full flex-shrink-0">
                                      <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                    </div>
                                    <span className="text-xs sm:text-sm text-gray-700 font-medium">{f}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="w-full">
                              <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-4 sm:p-5 text-center shadow-lg">
                                <div className="mb-4">
                                  <p className="text-xs text-gray-600 mb-1 font-medium">A partir de</p>
                                  <div className="flex items-start justify-center gap-0.5">
                                    <span className="text-base sm:text-lg font-bold text-orange-600 mt-1">R$</span>
                                    <span className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-none">
                                      {plan.reais}
                                    </span>
                                    <div className="flex flex-col items-start mt-1">
                                      <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-none">
                                        {plan.cents}
                                      </span>
                                      <span className="text-xs text-gray-600">/mês</span>
                                    </div>
                                  </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg">
                                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                                  <span>ASSINAR AGORA</span>
                                </button>
                                <p className="text-gray-500 text-xs mt-2.5">Atendimento via WhatsApp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button
                  onClick={prev}
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-orange-600 p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg z-20 border border-orange-200"
                  aria-label="Slide anterior"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                </button>
                <button
                  onClick={next}
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 text-orange-600 p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg z-20 border border-orange-200"
                  aria-label="Próximo slide"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                </button>
              </div>
              <div className="flex justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                {plans.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 rounded-full h-2 ${
                      current === i
                        ? 'w-6 sm:w-8 bg-gradient-to-r from-orange-500 to-orange-600'
                        : 'w-2 bg-gray-300 hover:bg-orange-300'
                    }`}
                    aria-label={`Ir para slide ${i + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
