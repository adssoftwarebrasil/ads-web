import { Star, CheckCircle2, ArrowRight, MessageCircle, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/goes%20flex%2Fimg%2Fhero-background.webp"
          alt="Quarto com colchão Goes Flex"
          className="w-full h-full object-cover object-center scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90 z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
      <div className="container mx-auto px-6 lg:px-12 relative z-20 h-full flex items-center justify-center">
        <div className="max-w-4xl flex flex-col items-center text-center pt-20 lg:pt-0">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full shadow-xl animate-fade-in-down">
            <div className="flex -space-x-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="lucide lucide-star fill-yellow-400 text-yellow-400"
                  width={12}
                  height={12}
                  fill="none"
                />
              ))}
            </div>
            <span className="text-white text-xs md:text-sm font-bold tracking-wide uppercase border-l border-white/30 pl-3 ml-2">
              15 Anos de História
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 drop-shadow-2xl">
            <span className="block text-[rgb(240,53,41)] text-xl md:text-2xl font-bold uppercase tracking-[0.2em] mb-2">
              Dores nas costas?
            </span>
            O conforto que você sonha, <br className="hidden md:block" />a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-white to-blue-100">
              saúde que você precisa.
            </span>
          </h1>
          <p className="text-base md:text-lg text-gray-100 mb-8 leading-relaxed font-light max-w-2xl drop-shadow-md">
            Tecnologia <b className="text-white font-semibold">Magnética &amp; Terapêutica</b> aprovada por
            especialistas. Não vendemos apenas colchões, devolvemos sua qualidade de vida.
          </p>
          <div className="hidden lg:flex justify-center gap-6 mb-8 text-white/90 font-medium text-sm">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 shadow-sm">
              <CheckCircle2 className="lucide lucide-check-circle2 text-green-400" width={16} height={16} /> Terapeutas
              Especializados
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10 shadow-sm">
              <CheckCircle2 className="lucide lucide-check-circle2 text-green-400" width={16} height={16} /> Entrega em
              Sergipe
            </div>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 justify-center">
            <button
              onClick={() => scrollTo('contato')}
              className="group bg-[rgb(240,53,41)] hover:bg-[rgb(200,40,30)] text-white px-8 py-3.5 rounded-full font-bold text-base md:text-lg shadow-[0_0_20px_rgba(240,53,41,0.4)] hover:shadow-[0_0_30px_rgba(240,53,41,0.6)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Consultar um Terapeuta
              <ArrowRight
                className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform"
                width={24}
                height={24}
              />
            </button>
            <a
              href="https://wa.me/557988094313?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Goes%20Flex%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20colch%C3%B5es%20e%20tratamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full font-bold text-white border-2 border-white/20 hover:bg-white hover:text-[rgb(26,91,178)] hover:border-white transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="lucide lucide-message-circle" width={20} height={20} />
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:block">
        <button
          onClick={() => scrollTo('beneficios')}
          className="flex flex-col items-center animate-bounce cursor-pointer group"
        >
          <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/90 px-3 py-1 rounded-full backdrop-blur-md shadow-sm group-hover:bg-white transition-colors">
            Descubra a tecnologia
          </span>
          <ChevronDown
            className="lucide lucide-chevron-down text-slate-500 group-hover:text-slate-700 transition-colors"
            width={24}
            height={24}
          />
        </button>
      </div>
    </section>
  );
}
