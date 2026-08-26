import { MessageCircle, Star, HelpCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-start overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 pt-32 md:pt-40">
        <div className="max-w-4xl animate-slide-in-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-6 tracking-tight leading-tight animate-slide-in-up [animation-delay:100ms]">
            Aumente sua <span className="red-gradient-text tw-word">Autoestima</span> com um corte que realmente te valoriza
          </h1>
          <h2 className="text-lg md:text-xl font-light text-zinc-300 max-w-2xl leading-relaxed mb-10 animate-fade-in-up [animation-delay:250ms]">
            Na <span className="text-white font-semibold">Barbearia Zero19</span>, você encontra corte e barba feitos para valorizar seu estilo e elevar sua confiança com resultado imediato e sem complicação.
          </h2>
          <div className="flex flex-col items-center md:items-start gap-8 animate-fade-in-up [animation-delay:400ms]">
            <a
              href={WHATSAPP_URL}
              className="btn-whatsapp inline-flex items-center justify-center gap-3 bg-premium-red text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-outfit font-bold text-sm md:text-lg btn-hover shadow-xl shadow-premium-red/20 group w-fit uppercase"
            >
              <span aria-hidden="true">👉 </span> QUERO AUMENTAR MINHA AUTOESTIMA
              <MessageCircle className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </a>
            <div className="flex flex-wrap justify-start items-center gap-8 md:gap-12 border-t border-white/10 pt-8 mt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-outfit font-bold text-white mb-1">+200</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">Avaliações</span>
              </div>
              <div className="flex flex-col relative group">
                <div className="absolute bottom-full mb-4 left-0 w-56 md:w-[280px] bg-white/15 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] p-5 md:p-6 z-[100] transition-all duration-200 opacity-0 translate-y-2 scale-95 pointer-events-none">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="flex flex-col text-left">
                      <span className="text-4xl md:text-5xl font-outfit font-bold text-white leading-none">4,9</span>
                      <div className="flex gap-0.5 mt-2">
                        {[0, 1, 2, 3, 4].map((i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-premium-google-yellow text-premium-google-yellow"
                          />
                        ))}
                      </div>
                      <span className="text-zinc-300 text-xs md:text-sm mt-1 font-medium">214 avaliações no Google</span>
                    </div>
                    <HelpCircle className="w-5 h-5 text-zinc-500" />
                  </div>
                  <div className="space-y-2">
                    {['5', '4', '3', '2', '1'].map((n) => (
                      <div key={n} className="flex items-center gap-3 text-xs md:text-sm font-medium text-zinc-300">
                        <span className="w-1 leading-none text-white">{n}</span>
                        <div className="flex-1 h-2 bg-zinc-200/50 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-premium-google-yellow rounded-full"
                            style={{ width: '0%', transition: 'width 0.8s ease-out 0.2s' }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white/15 border-r border-b border-white/10 rotate-45"></div>
                </div>
                <div className="flex items-center gap-2 mb-1 group-hover:text-premium-google-yellow transition-colors">
                  <span className="text-2xl font-outfit font-bold text-white transition-colors group-hover:text-premium-google-yellow">4.9</span>
                  <Star className="w-5 h-5 fill-premium-google-yellow text-premium-google-yellow group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm text-zinc-500 uppercase tracking-widest flex items-center gap-1">
                  Nota Google
                  <HelpCircle className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-8 md:pl-12">
                <span className="text-2xl font-outfit font-bold text-white mb-1">+10 Anos</span>
                <span className="text-sm text-zinc-500 uppercase tracking-widest">De Experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
