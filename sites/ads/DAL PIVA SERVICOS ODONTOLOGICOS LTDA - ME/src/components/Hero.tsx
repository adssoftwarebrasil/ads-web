import { ChevronDown, Star, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/dra%20rafaella%20dal%20piva/img/hero-background.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
            <Star size={14} className="text-[#a4376e] fill-[#a4376e]" />
            Avaliação 5.0 no Google
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            O sorriso que você{' '}
            <span className="text-[#a4376e]">sempre quis</span>{' '}
            está mais perto do que você imagina
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
            Odontologia estética e reabilitadora de alto padrão em Várzea Grande - MT. Atendimento humanizado, tecnologia moderna e resultados que transformam vidas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="http://wa.me/556592693908"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#a4376e] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#8e2d5e] transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Agendar Consulta Gratuita
            </a>
            <button
              onClick={() => document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-all duration-200"
            >
              Conhecer Serviços
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Award size={18} className="text-[#098b90]" />
                <span className="text-2xl sm:text-3xl font-bold text-white">+7</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">Anos de experiência</p>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Users size={18} className="text-[#098b90]" />
                <span className="text-2xl sm:text-3xl font-bold text-white">+1k</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">Pacientes satisfeitos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Star size={18} className="text-[#098b90] fill-[#098b90]" />
                <span className="text-2xl sm:text-3xl font-bold text-white">5.0</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm">Avaliação Google</p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
