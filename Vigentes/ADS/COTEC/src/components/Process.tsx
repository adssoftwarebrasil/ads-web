import { Sparkles, Users, CheckCircle, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Step {
  num: string;
  img: string;
  title: string;
  text: string;
  icon: LucideIcon;
  iconClass: string;
  badgeGradient: string;
  connector?: string;
  delay: number;
}

const steps: Step[] = [
  {
    num: '01',
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2Fcolocandoprotese.webp',
    title: 'Personalização e Adaptação',
    text: 'Cada produto é cuidadosamente moldado e ajustado às suas necessidades únicas',
    icon: Users,
    iconClass: 'lucide lucide-users w-10 h-10 text-white',
    badgeGradient: 'from-[#FB6F11] to-[#ff8c42]',
    connector: 'from-[#FB6F11] to-[#ff8c42]',
    delay: 400,
  },
  {
    num: '02',
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2Fadandocomprotese.webp',
    title: 'Reabilitação e Movimento',
    text: 'Acompanhamento especializado para garantir sua adaptação e conforto total',
    icon: CheckCircle,
    iconClass: 'lucide lucide-check-circle w-10 h-10 text-white',
    badgeGradient: 'from-[#ff8c42] to-[#ffaa66]',
    connector: 'from-[#ff8c42] to-[#ffaa66]',
    delay: 550,
  },
  {
    num: '03',
    img: 'https://storage.lucasmendes.dev/site-sp/cotec%2Falogandocomprotese.webp',
    title: 'Qualidade de Vida',
    text: 'Recupere sua independência e viva cada momento com plenitude e confiança',
    icon: Heart,
    iconClass: 'lucide lucide-heart w-10 h-10 text-white',
    badgeGradient: 'from-[#ffaa66] to-[#FB6F11]',
    delay: 700,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#333333] overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FB6F11]/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FB6F11]/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-6 transition-all duration-700 opacity-100 translate-y-0">
            <Sparkles className="lucide lucide-sparkles w-4 h-4 text-[#FB6F11]" />
            <span className="text-white text-sm font-semibold tracking-wide uppercase">Nosso Processo</span>
          </div>
          <h2 className="text-white font-bold mb-6 transition-all duration-800 text-3xl md:text-4xl lg:text-5xl xl:text-6xl opacity-100 translate-y-0">
            Como{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#FB6F11]">Transformamos</span>
            </span>{' '}
            Vidas
          </h2>
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-800 delay-200 opacity-100 translate-y-0">
            Um processo cuidadoso e personalizado para garantir os melhores resultados
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group relative transition-all duration-500 opacity-100 translate-y-0"
                style={{ transitionDelay: `${s.delay}ms` }}
              >
                {s.connector && (
                  <div className="hidden md:block absolute top-20 left-full w-full h-[2px] -translate-y-1/2 z-0">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${s.connector} transition-all duration-1000 w-0`}></div>
                    </div>
                  </div>
                )}
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden hover:bg-white/10 hover:border-[#FB6F11]/50 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#FB6F11]/20">
                  <div className="absolute top-4 right-4 z-20">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.badgeGradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {s.num}
                    </div>
                  </div>
                  <div className="relative h-56 lg:h-64 overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover transition-all duration-700 scale-100 brightness-100"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#333333] via-[#333333]/50 to-transparent transition-opacity duration-500 opacity-90"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 opacity-0 scale-50">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${s.badgeGradient} flex items-center justify-center shadow-2xl`}>
                        <Icon className={s.iconClass} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-white font-bold text-xl lg:text-2xl mb-3 leading-tight">{s.title}</h3>
                    <p className="text-white/70 text-sm lg:text-base leading-relaxed">{s.text}</p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${s.badgeGradient} transition-all duration-500 opacity-0`}></div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mb-12 transition-all duration-800 delay-1000 opacity-100 translate-y-0">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#FB6F11] to-[#ff8c42] rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="lucide lucide-heart w-8 h-8 text-white" fill="currentColor" />
            </div>
            <p className="text-white text-lg lg:text-xl xl:text-2xl font-medium leading-relaxed mb-6">
              Na COTEC, acreditamos que o <span className="text-[#FB6F11] font-bold">movimento é essencial</span> para a
              vida, e estamos aqui para garantir que nossos pacientes possam{' '}
              <span className="text-[#FB6F11] font-bold">vivê-la ao máximo</span>.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FB6F11] mb-1">15+</div>
                <div className="text-white/60 text-xs lg:text-sm font-medium">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FB6F11] mb-1">5000+</div>
                <div className="text-white/60 text-xs lg:text-sm font-medium">Vidas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-[#FB6F11] mb-1">100%</div>
                <div className="text-white/60 text-xs lg:text-sm font-medium">Dedicação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
