import { CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/agroplantec%2Fhero1.jpg"
          alt="Agro Plantec"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl space-y-6 sm:space-y-8 transition-all duration-1000 opacity-100 translate-y-0">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 bg-[rgb(138,154,39)]/20 backdrop-blur-md border border-[rgb(138,154,39)]/40 rounded-full text-[rgb(138,154,39)] text-xs sm:text-sm font-semibold tracking-wide">
              <CheckCircle className="lucide lucide-check-circle w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Certificado de Qualidade
            </span>
          </div>
          <div className="space-y-3 sm:space-y-4">
            <p className="text-[rgb(138,154,39)] text-sm sm:text-base lg:text-lg font-semibold tracking-[0.15em] uppercase">
              Da Nossa Terra para a sua Mesa
            </p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1]">
              Frutas e Verduras
              <span className="block text-[rgb(138,154,39)] mt-2 sm:mt-3">com Qualidade Garantida</span>
            </h1>
          </div>
          <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
            Produtos certificados de qualidade excepcional, levando saúde e bem-estar para todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
            <button
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-4 sm:py-5 bg-[rgb(138,154,39)] text-white text-base sm:text-lg font-bold rounded-lg sm:rounded-xl hover:bg-[rgb(118,134,29)] transition-all duration-300 shadow-2xl shadow-[rgb(138,154,39)]/40 hover:shadow-[rgb(138,154,39)]/60 hover:-translate-y-1"
            >
              Entrar em Contato
              <ArrowRight className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white text-base sm:text-lg font-bold rounded-lg sm:rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-7 h-12 sm:w-8 sm:h-14 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-2.5 sm:w-2 sm:h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
