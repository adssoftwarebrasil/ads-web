import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-20 sm:pt-24 flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/img/hero-background.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="animate-fade-in-up">
          <img
            src="https://storage.lucasmendes.dev/site-sp/ferreira-moveis-planejados/img/logo-sem-fundo.webp"
            alt="Ferreira Móveis Planejados"
            className="h-20 sm:h-28 w-auto mx-auto mb-6 drop-shadow-2xl brightness-0 invert"
          />
        </div>
        <div className="animate-fade-in-up animation-delay-200">
          <span className="inline-block text-[#e4e6e7] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-4 opacity-80">
            Sinop · Mato Grosso · Desde 2016
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Transformamos Espaços em <span className="text-[#e4e6e7] italic font-light">Ambientes Únicos</span>
          </h1>
          <p className="text-sm sm:text-lg text-[#e4e6e7]/85 max-w-2xl mx-auto leading-relaxed mb-8">
            Móveis planejados de alto padrão, projetados sob medida para cada ambiente. Mais de{' '}
            <strong className="text-white">8 anos</strong> criando projetos exclusivos com materiais premium e
            acabamento impecável.
          </p>
        </div>
        <div className="animate-fade-in-up animation-delay-400 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="http://wa.me/556696510268?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20móveis%20planejados."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#212121] font-bold text-sm sm:text-base px-8 py-4 rounded-full hover:bg-[#e4e6e7] transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current text-[#25D366]" />
            Solicitar Orçamento Grátis
          </a>
          <button
            onClick={() => scrollTo('projetos')}
            className="inline-flex items-center justify-center gap-2 border-2 border-[#e4e6e7]/60 text-[#e4e6e7] font-semibold text-sm sm:text-base px-8 py-4 rounded-full hover:border-white hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            Ver Projetos
          </button>
        </div>
        <div className="animate-fade-in-up animation-delay-600 flex items-center gap-4 sm:gap-8 mt-10 pt-8 border-t border-white/10">
          <div className="text-center">
            <span className="block text-xl sm:text-3xl font-bold text-white">8+</span>
            <span className="block text-[10px] sm:text-xs text-[#e4e6e7]/70 mt-1 tracking-wide uppercase">Anos</span>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center">
            <span className="block text-xl sm:text-3xl font-bold text-white">5.0</span>
            <span className="block text-[10px] sm:text-xs text-[#e4e6e7]/70 mt-1 tracking-wide uppercase">Google</span>
          </div>
          <div className="w-px h-10 bg-white/20"></div>
          <div className="text-center">
            <span className="block text-xl sm:text-3xl font-bold text-white">100%</span>
            <span className="block text-[10px] sm:text-xs text-[#e4e6e7]/70 mt-1 tracking-wide uppercase">
              Sob Medida
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('sobre')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#e4e6e7]/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={28} height={28} />
      </button>
    </section>
  );
}
