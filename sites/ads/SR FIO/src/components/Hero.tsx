import { Sparkles, Award, ChevronDown } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-slate-dark pt-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] opacity-20 animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#D4AF37"
            d="M44.7,-76.4C58.2,-69.2,70.1,-58.5,78.2,-45.3C86.3,-32.1,90.6,-16.1,88.4,-1.3C86.2,13.5,77.5,27,68.2,38.5C58.9,50,49.1,59.5,37.4,66.1C25.7,72.7,12.8,76.4,-0.6,77.5C-14.1,78.6,-28.1,77.1,-40.7,71.2C-53.3,65.3,-64.4,55,-71.9,42.4C-79.5,29.9,-83.4,14.9,-82.2,0.7C-81,-13.5,-74.7,-27,-65.8,-38C-56.9,-49,-45.3,-57.4,-33,-65.2C-20.7,-73,-7.7,-80.1,6.5,-81.4C20.6,-82.7,31.2,-78.2,44.7,-76.4Z"
            transform="translate(100 100)"
          />
        </svg>
        <div className="absolute inset-0 bg-brand-slate-dark/40 backdrop-blur-[80px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="transition-all duration-1000 opacity-100 translate-x-0">
              <span className="inline-flex items-center gap-2 text-brand-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-brand-gold/10 border border-brand-gold/20 px-4 py-2 rounded-full">
                <Sparkles size={14} />
                Terapia Capilar Integrativa
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6 transition-all duration-1000 delay-200 opacity-100 translate-y-0">
              Saúde Capilar com{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-white to-brand-gold italic">
                Ética e Resultado
              </span>
            </h1>
            <p className="font-body text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl transition-all duration-1000 delay-300 opacity-100 translate-y-0">
              Tratamentos reais para queda de cabelo e alopecia. Avaliação personalizada com tecnologia
              avançada e foco no seu bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
              <a
                href="https://wa.me/5516991998208"
                className="bg-brand-gold hover:bg-white text-brand-slate-dark font-body font-bold px-8 py-4 rounded-xl text-base transition-all duration-300 hover:scale-105 text-center shadow-lg shadow-brand-gold/20"
              >
                Agendar Minha Avaliação
              </a>
              <button
                onClick={() => scrollToId('servicos')}
                className="border border-white/20 text-white font-body font-medium px-8 py-4 rounded-xl text-base hover:bg-white/5 transition-all duration-300"
              >
                Ver Tratamentos
              </button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-1000 delay-500 opacity-100 scale-100">
            <div className="relative group max-w-[400px]">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-gold/10 rounded-full blur-2xl group-hover:bg-brand-gold/20 transition-all"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand-gold/10 rounded-full blur-3xl"></div>
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-brand-gold/40 to-transparent shadow-2xl">
                <div className="overflow-hidden rounded-[calc(1.5rem-4px)] bg-brand-slate">
                  <img
                    src="https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-terapeuta-silvia-ruivo-bracos-cruzados_720x875.webp"
                    alt="Dra. Silvia Ruivo"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-brand-slate-dark/60 font-bold uppercase tracking-tighter">
                      Especialista
                    </p>
                    <p className="text-sm font-bold text-brand-slate-dark leading-none">Tricologista</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 hover:text-brand-gold transition-all duration-300 animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
