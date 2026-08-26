import { Star, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/tatiane-terapeuta-capilar/img/hero-background-att.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  width={12}
                  height={12}
                  className="lucide lucide-star fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-white text-xs font-medium">
              Nota 5.0 no Google • +200 pacientes atendidos
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Recupere seus cabelos <span className="italic text-[#F8E5E4]">com ciência</span>
            <br />e cuidado especializado
          </h1>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            Dra. Tatiane Fernandes, biomédica e tricologista capilar, oferece tratamentos
            personalizados para queda de cabelo, alopecia, psoríase e calvície. Recupere a autoestima
            com protocolos modernos e resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="http://wa.me/553588973804?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#F8E5E4] hover:bg-white text-[#737373] font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
            >
              Agendar Avaliação
            </a>
            <button
              onClick={() => scrollTo('servicos')}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/60 hover:border-white text-white font-medium px-8 py-4 rounded-full transition-all duration-300 text-sm"
            >
              Conhecer os Tratamentos
            </button>
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#F8E5E4] font-serif">+200</span>
              <span className="text-white/70 text-xs mt-0.5">Pacientes atendidos</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#F8E5E4] font-serif">4 anos</span>
              <span className="text-white/70 text-xs mt-0.5">De experiência</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#F8E5E4] font-serif">100%</span>
              <span className="text-white/70 text-xs mt-0.5">Tratamentos personalizados</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
