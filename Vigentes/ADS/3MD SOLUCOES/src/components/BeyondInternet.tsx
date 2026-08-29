import { Zap, Smartphone, Clock, TrendingUp, Play, Wifi, Star } from 'lucide-react';

const particles = Array.from({ length: 40 }, () => ({
  width: `${(2 + Math.random() * 4).toFixed(4)}px`,
  height: `${(2 + Math.random() * 4).toFixed(4)}px`,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${(Math.random() * 5).toFixed(4)}s`,
  animationDuration: `${(8 + Math.random() * 12).toFixed(4)}s`,
}));

const cards = [
  { icon: Smartphone, iconClass: 'lucide lucide-smartphone', grad: 'from-blue-500 to-cyan-500', value: '+50GB', title: 'De dados móveis inclusos', sub: '(em planos selecionados)' },
  { icon: Clock, iconClass: 'lucide lucide-clock', grad: 'from-purple-500 to-pink-500', value: '24/7', title: 'Suporte técnico sempre disponível', sub: 'Todos os dias da semana' },
  { icon: TrendingUp, iconClass: 'lucide lucide-trending-up', grad: 'from-emerald-500 to-teal-500', value: '100%', title: 'Uptime garantido com fibra óptica', sub: 'Estabilidade máxima' },
];

const metrics = [
  { icon: Wifi, iconClass: 'lucide lucide-wifi', value: '500MB+', label: 'Velocidade' },
  { icon: Star, iconClass: 'lucide lucide-star', value: '4K/8K', label: 'Qualidade' },
  { icon: Zap, iconClass: 'lucide lucide-zap', value: '0ms', label: 'Latência' },
  { icon: TrendingUp, iconClass: 'lucide lucide-trending-up', value: '99.9%', label: 'Uptime' },
];

export default function BeyondInternet() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <div key={i} className="absolute bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full blur-sm animate-float" style={{ width: p.width, height: p.height, left: p.left, top: p.top, animationDelay: p.animationDelay, animationDuration: p.animationDuration }}></div>
        ))}
      </div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md border border-cyan-400/30 px-5 py-2.5 rounded-full mb-6 animate-fadeInDown">
            <Zap className="lucide lucide-zap w-4 h-4 text-cyan-400" />
            <span className="text-xs sm:text-sm font-bold text-white">EXPERIÊNCIA COMPLETA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-4 sm:mb-6 leading-tight animate-fadeInUp">Muito Além da <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">Internet</span></h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>Conecte-se ao mundo do entretenimento sem limites</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 max-w-6xl mx-auto">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="group relative" style={{ animation: `0.6s ease-out ${i * 0.15}s 1 normal both running fadeInUp` }}>
                <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.grad} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${c.grad} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-black/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className={`${c.iconClass} w-8 h-8 sm:w-10 sm:h-10 text-white`} />
                    </div>
                    <div className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r ${c.grad}`}>{c.value}</div>
                    <p className="text-base sm:text-lg font-semibold text-white mb-2 leading-tight">{c.title}</p>
                    <p className="text-xs sm:text-sm text-slate-400">{c.sub}</p>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full"></div>
                </div>
                <div className={`absolute -inset-1 bg-gradient-to-r ${c.grad} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <p className="text-base sm:text-lg leading-relaxed text-slate-300">Conexão que acompanha seu estilo de vida. Assista, jogue, trabalhe e estude sem interrupções. Com a 3MD, você tem a infraestrutura completa para aproveitar todos os serviços de streaming, games online e videochamadas em altíssima qualidade.</p>
        </div>
        <div className="max-w-5xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-center gap-3">
              <Play className="lucide lucide-play w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />Perfeito Para Streaming<Play className="lucide lucide-play w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
            </h3>
            <p className="text-sm sm:text-base text-slate-400">Aproveite todas as plataformas em 4K sem travamentos</p>
          </div>
          <div className="flex justify-center">
            <div className="group relative w-full max-w-xs" style={{ animation: '0.5s ease-out 0.5s 1 normal both running scaleIn' }}>
              <div className="relative bg-gradient-to-br from-purple-600 to-purple-500 rounded-3xl aspect-video flex items-center justify-center overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 border border-white/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="relative z-10 text-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center px-4">HBO Max</div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="lucide lucide-play w-16 h-16 text-white fill-white" />
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-purple-500 rounded-3xl opacity-50 group-hover:opacity-75 blur-2xl transition-opacity duration-300 -z-10"></div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300">
                  <Icon className={`${m.iconClass} w-6 h-6 text-cyan-400 mx-auto mb-2`} />
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-xs sm:text-sm text-slate-400">{m.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
