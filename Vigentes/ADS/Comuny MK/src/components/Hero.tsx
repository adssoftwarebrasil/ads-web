import { Users, TrendingUp, Sparkles } from 'lucide-react';
import FloatingParticles from './FloatingParticles';

const stats = [
  {
    Icon: Users,
    iconColor: 'text-purple-600',
    glow: 'from-purple-600/10',
    glowBall: 'bg-purple-600/10',
    bar: 'from-purple-600 via-blue-500 to-transparent',
    valueClass: 'from-white to-white/80',
    value: <span>550</span>,
    title: 'CLIENTES',
    subtitle: 'ATENDIDOS EM TODO O BRASIL',
    delay: '0.2s',
  },
  {
    Icon: TrendingUp,
    iconColor: 'text-green-400',
    glow: 'from-green-400/10',
    glowBall: 'bg-green-400/10',
    bar: 'from-green-400 via-blue-500 to-transparent',
    valueClass: 'from-green-400 to-green-300',
    value: (
      <>
        R$ <span>70</span>M
      </>
    ),
    title: 'GERENCIADOS',
    subtitle: 'NO TRÁFEGO PAGO',
    delay: '0.4s',
  },
  {
    Icon: Sparkles,
    iconColor: 'text-blue-500',
    glow: 'from-blue-500/10',
    glowBall: 'bg-blue-500/10',
    bar: 'from-blue-500 via-purple-600 to-transparent',
    valueClass: 'from-blue-500 to-blue-400',
    value: (
      <>
        <span>6</span>+
      </>
    ),
    title: 'ANOS',
    subtitle: 'DE MERCADO E EXPERIÊNCIA',
    delay: '0.6s',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black pt-24 md:pt-28 lg:pt-20 pb-12 md:pb-16">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(124, 7, 216, 0.1) 35px, rgba(124, 7, 216, 0.1) 36px), repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(1, 255, 106, 0.1) 35px, rgba(1, 255, 106, 0.1) 36px)',
          }}
        ></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingParticles
          count={30}
          colors={['rgb(124, 7, 216)', 'rgb(1, 255, 106)', 'rgb(16, 44, 246)']}
          minDuration={8}
          maxDuration={15}
        />
      </div>
      <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-green-400/20 rounded-full blur-[120px] animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      ></div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center transition-all duration-1000 opacity-100 translate-y-0">
          <div className="space-y-4 md:space-y-5 lg:space-y-6 order-2 lg:order-1">
            {stats.map((s, i) => (
              <div
                key={i}
                className="group relative glassmorphism rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                style={{ animationDelay: s.delay, transform: 'translate(0px, 0px)' }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.glow} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute top-0 right-0 w-24 h-24 ${s.glowBall} rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700`}
                ></div>
                <div className="relative flex items-start gap-3 md:gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <s.Icon className={`w-4 h-4 md:w-5 md:h-5 ${s.iconColor} flex-shrink-0`} />
                      <p className="text-blue-500 text-xs md:text-sm font-bold tracking-wider">MAIS DE</p>
                    </div>
                    <h3
                      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-1 bg-gradient-to-r ${s.valueClass} bg-clip-text text-transparent`}
                    >
                      {s.value}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-white/90 mb-1">{s.title}</p>
                    <p className="text-white/60 text-xs md:text-sm">{s.subtitle}</p>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${s.bar} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                ></div>
              </div>
            ))}
            <div className="pt-2 md:pt-4">
              <button className="group relative w-full md:w-auto px-6 md:px-10 lg:px-12 py-3 md:py-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-size-200 bg-pos-0 hover:bg-pos-100 text-white font-bold text-sm md:text-base lg:text-lg rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-600/50">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  IMPULSIONAR MEU MARKETING
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              </button>
            </div>
          </div>
          <div
            className="relative group order-1 lg:order-2 max-w-md md:max-w-lg mx-auto lg:mx-0"
            style={{ transform: 'translate(0px, 0px)' }}
          >
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 rounded-2xl md:rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-500 to-green-400 rounded-2xl md:rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate"></div>
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-purple-600/50 transition-all duration-500">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/comuny/objects/download?preview=true&prefix=image%2064.png&version_id=null"
                alt="Equipe COMUNY"
                className="w-full h-auto object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-700"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
