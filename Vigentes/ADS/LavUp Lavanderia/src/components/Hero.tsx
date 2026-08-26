import { ArrowRight, ChevronDown, Star, Timer } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5516992979707';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/lavup/img/hero-background.webp"
          alt="Lavup Araraquara - Lavanderia de Autoatendimento"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(84, 46, 145, 0.88) 0%, rgba(38, 182, 230, 0.72) 60%, rgba(118, 203, 199, 0.6) 100%)',
          }}
        ></div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      <div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'rgb(190, 83, 160)' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/4 w-48 h-48 rounded-full opacity-10 blur-2xl"
        style={{ background: 'rgb(118, 203, 199)' }}
      ></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-32">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-8 border border-white/20 backdrop-blur-sm"
          style={{ background: 'rgba(255, 255, 255, 0.12)' }}
        >
          <Timer size={14} className="text-[rgb(118,203,199)]" />
          Lavanderia de Autoatendimento · Araraquara - SP
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
          Lave e Seque em
          <span
            className="block mt-1"
            style={{
              background:
                'linear-gradient(90deg, rgb(118, 203, 199), rgb(38, 182, 230)) text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            75 Minutos
          </span>
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
          Autoatendimento moderno, prático e acessível para toda a família.
          Equipamentos de última geração com ciclo completo em um único lugar.
        </p>
        <p className="text-base text-white/60 italic mb-10 font-medium tracking-wide">
          "Enquanto gira, a vida acontece."
        </p>
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white/80 text-sm font-medium">
            5.0 no Google · Avaliação máxima
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-[rgb(38,182,230)]/30"
            style={{
              background:
                'linear-gradient(135deg, rgb(84, 46, 145), rgb(190, 83, 160))',
            }}
          >
            Fale pelo WhatsApp
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#como-funciona"
            className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-base text-white border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/50"
          >
            Como Funciona
          </a>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
