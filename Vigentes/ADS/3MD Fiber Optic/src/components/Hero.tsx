import { Star, Zap, Wifi, Shield } from 'lucide-react';

const particles = Array.from({ length: 30 }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  animationDelay: `${(Math.random() * 5).toFixed(4)}s`,
  animationDuration: `${(8 + Math.random() * 12).toFixed(4)}s`,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-blue-500/20 rounded-full blur-3xl -top-24 sm:-top-36 lg:-top-48 -left-24 sm:-left-36 lg:-left-48 animate-pulse"></div>
        <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-cyan-500/20 rounded-full blur-3xl top-1/2 -right-24 sm:-right-36 lg:-right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] bg-purple-500/10 rounded-full blur-3xl -bottom-16 sm:-bottom-24 lg:-bottom-32 left-1/4 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:50px_50px] sm:bg-[size:60px_60px]"></div>
        {particles.map((p, i) => (
          <div key={i} className="absolute w-1 h-1 bg-cyan-400/40 rounded-full animate-float" style={{ left: p.left, top: p.top, animationDelay: p.animationDelay, animationDuration: p.animationDuration }}></div>
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="text-white space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md px-4 sm:px-5 py-2.5 rounded-full border border-cyan-400/30 animate-slideDown">
              <Star className="lucide lucide-star w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-xs sm:text-sm">Melhor Avaliada em Jaboatão</span>
              <span className="bg-green-500/20 text-green-300 text-xs px-2 py-0.5 rounded-full">4.9★</span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight animate-fadeInUp">Internet que<span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">Não Trava</span></h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-300 leading-relaxed animate-fadeInUp max-w-xl" style={{ animationDelay: '0.1s' }}>Fibra óptica 100% dedicada com velocidade simétrica e suporte 24h.<span className="text-cyan-400 font-semibold"> Instalação grátis hoje!</span></p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                <span className="relative z-10 flex items-center justify-center gap-2">ASSINAR AGORA<Zap className="lucide lucide-zap w-4 h-4 sm:w-5 sm:h-5" /></span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button className="border-2 border-cyan-400/50 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">VER PLANOS</button>
            </div>
          </div>
          <div className="relative animate-fadeInRight mt-8 lg:mt-0">
            <div className="relative space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="text-xs sm:text-sm text-cyan-400 font-semibold mb-1 uppercase tracking-wide">Plano Mais Vendido</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">500 MEGA</div>
                  </div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse-icon">
                    <Wifi className="lucide lucide-wifi w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                </div>
                <div className="space-y-3 sm:space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/10"><span className="text-sm sm:text-base text-slate-300">Download/Upload</span><span className="text-xl sm:text-2xl font-bold text-white">500MB</span></div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10"><span className="text-sm sm:text-base text-slate-300">Wi-Fi 6 incluso</span><span className="text-green-400 font-semibold flex items-center gap-1"><span className="text-lg">✓</span> Grátis</span></div>
                  <div className="flex justify-between items-center py-2"><span className="text-sm sm:text-base text-slate-300">Instalação</span><span className="text-green-400 font-semibold flex items-center gap-1"><span className="text-lg">✓</span> Grátis</span></div>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mb-4">
                    <span className="text-base sm:text-lg text-slate-400 line-through">R$ 149,90</span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">R$ 99</span>
                    <div className="flex flex-col items-start"><span className="text-2xl sm:text-3xl font-bold text-cyan-400">,00</span><span className="text-xs sm:text-sm text-slate-400">/mês</span></div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">CONTRATAR AGORA</button>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto"><Wifi className="lucide lucide-wifi w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                  <div className="text-xs sm:text-sm font-semibold text-white leading-tight">Fibra 100%</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto"><Shield className="lucide lucide-shield w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                  <div className="text-xs sm:text-sm font-semibold text-white leading-tight">Suporte 24h</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 group text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg sm:rounded-xl flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 mx-auto"><Zap className="lucide lucide-zap w-5 h-5 sm:w-6 sm:h-6 text-white" /></div>
                  <div className="text-xs sm:text-sm font-semibold text-white leading-tight">Ultra Rápido</div>
                </div>
              </div>
            </div>
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 rounded-3xl blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
