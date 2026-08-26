import { MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/boutique%20das%20linguicas%2Fimg%2Fhero-background-paralax.webp"
          alt="Linguiças gourmet artesanais"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 lg:px-8 text-center">
        <div className="bg-[rgb(242,51,52)] text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
          Inovação Única em Goiânia
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6">
          Monte Sua Linguiça<br />Gourmet do Seu Jeito
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 font-light max-w-2xl mx-auto mb-8">
          Escolha entre 3 massas e 14 recheios premium. Acompanhe a montagem ao vivo e leve para casa uma linguiça artesanal feita especialmente para você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
          <a
            href="https://wa.me/556293474673?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido%20de%20linguiça%20gourmet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(242,51,52)] hover:bg-red-700 px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Peça Agora pelo WhatsApp
          </a>
          <a
            href="#produtos"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            Conheça Nossos Sabores
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white opacity-75 animate-bounce"
        aria-label="Scroll para próxima seção"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
