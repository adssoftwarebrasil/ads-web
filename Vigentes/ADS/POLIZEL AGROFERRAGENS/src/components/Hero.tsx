import { ChevronDown, MessageCircle, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a1c00]/92 via-[#663300]/78 to-[#002e16]/75" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="mb-6">
          <img
            src="https://storage.lucasmendes.dev/site-sp/polizel/logo-com-fundo.png"
            alt="Polizel Agroferragens"
            className="h-28 md:h-36 w-auto mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        <div className="inline-flex items-center gap-2 bg-[#006633]/30 border border-[#006633]/40 text-green-200 text-xs md:text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
          <MapPin size={14} />
          Vila Mineira — Rondonópolis, MT
        </div>

        <h1
          className="font-heading font-black text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}
        >
          Tudo para Sua
          <span className="block text-green-300">Fazenda e Obra</span>
        </h1>

        <p className="text-white/85 text-base md:text-xl max-w-2xl leading-relaxed mb-10">
          Materiais de construção e insumos pecuários com qualidade, confiança e o melhor
          atendimento da região. Atendemos de segunda a sábado das 7h às 17h.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/5566999996760"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#006633] hover:bg-[#008844] text-white px-8 py-4 rounded-2xl font-bold text-base md:text-lg shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={22} />
            Falar pelo WhatsApp
          </a>
          <button
            onClick={() => scrollTo('#produtos')}
            className="flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white px-8 py-4 rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Ver Produtos
          </button>
        </div>

        <div className="mt-8 flex items-center gap-6 text-white/60 text-sm">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
            Aberto: 7h às 17h
          </span>
          <span className="hidden sm:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block" />
            Seg a Sábado
          </span>
        </div>
      </div>

      <button
        onClick={() => scrollTo('#produtos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
