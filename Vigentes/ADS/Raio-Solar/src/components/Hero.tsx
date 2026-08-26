import { ArrowRight, ChevronDown } from 'lucide-react';

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/raio-solar/img/hero-background.webp"
          alt="Energia Solar Raio-Solar"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/90 via-brand-blue/75 to-brand-blue-dark/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/60 via-transparent to-transparent"></div>
      </div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-56 h-56 bg-brand-yellow/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-brand-yellow/20 border border-brand-yellow/40 text-brand-yellow text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
          <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full animate-pulse-slow"></span>
          Santo Antônio de Jesus – BA e região do Recôncavo Baiano
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
          Reduza até <span className="text-brand-yellow">95%</span>
          <br />
          da sua conta de luz
        </h1>
        <p
          className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '150ms' }}
        >
          Soluções completas em energia solar fotovoltaica para residências e empresas. Economia real, tecnologia de
          ponta e sustentabilidade para o seu futuro.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '300ms' }}
        >
          <button
            onClick={() => scrollTo('#contact')}
            className="group flex items-center gap-2 bg-brand-yellow text-brand-blue font-bold text-base px-8 py-4 rounded-full shadow-xl hover:bg-brand-yellow-light hover:shadow-brand-yellow/30 hover:shadow-2xl transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Solicite um Orçamento Grátis
            <ArrowRight
              width={18}
              height={18}
              className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform duration-200"
            />
          </button>
          <a
            href="http://wa.me/5575988443984"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-2 border-white/40 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow backdrop-blur-sm transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Falar no WhatsApp
          </a>
        </div>
        <div
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm animate-fade-in"
          style={{ animationDelay: '500ms' }}
        >
          <div className="flex items-center gap-2">
            <span className="text-brand-yellow text-base font-bold">★★★★★</span>
            <span>Nota 4.9 no Google</span>
          </div>
          <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></span>
          <div className="flex items-center gap-2">
            <span className="text-brand-yellow font-bold">✓</span>
            <span>Instalação Garantida</span>
          </div>
          <span className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></span>
          <div className="flex items-center gap-2">
            <span className="text-brand-yellow font-bold">✓</span>
            <span>Projetos Personalizados</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollTo('#stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-yellow transition-colors duration-200 animate-bounce-gentle"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
