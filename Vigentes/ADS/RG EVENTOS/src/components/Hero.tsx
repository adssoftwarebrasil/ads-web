import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScroll = () => {
    const el = document.querySelector('#servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Adicionado pt-24 (ou ajuste para a altura do seu header) aqui na section
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/multidao-festa-noite-luzes-palco_1280x852.webp)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(3,7,8)]/70 via-[rgb(3,7,8)]/50 to-[rgb(3,7,8)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9962F]/40 bg-[#C9962F]/10 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#C9962F] animate-pulse" />
            <span className="text-[#C9962F] text-xs font-semibold tracking-widest uppercase">
              Desde 1995 · Mais de 30 Anos de Experiência
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9962F] bg-[#C9962F] backdrop-blur-sm">
            <span className="text-[rgb(3,7,8)] text-xs font-bold tracking-widest uppercase">
              Única empresa FULL SERVICE da região
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[rgb(245,244,249)] leading-tight mb-6 tracking-tight">
          Transformamos Eventos em{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
            Memórias Inesquecíveis
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[rgb(245,244,249)]/80 max-w-3xl mx-auto mb-4 leading-relaxed">
          Sonorização importada, iluminação profissional e estrutura completa para eventos de alto padrão.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-[rgb(245,244,249)]/65 max-w-3xl mx-auto mb-3 leading-relaxed">
          Atendemos eventos corporativos, casamentos, shows e grandes celebrações com equipamentos
          profissionais e equipe especializada.
        </p>

        <p className="text-xs sm:text-sm text-[rgb(245,244,249)]/65 max-w-3xl mx-auto mb-10 tracking-wide">
          Sorriso, Sinop, Lucas do Rio Verde e toda a região de Mato Grosso.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/556699022313"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#C9962F] hover:bg-[#b8841f] text-[rgb(3,7,8)] font-bold text-base rounded-full transition-all duration-200 uppercase tracking-wider shadow-xl hover:shadow-[#C9962F]/40 hover:scale-105"
          >
            Solicitar Orçamento Grátis
          </a>
          <button
            onClick={handleScroll}
            className="w-full sm:w-auto px-8 py-4 border border-white/30 hover:border-[#C9962F] text-[rgb(245,244,249)] hover:text-[#C9962F] font-semibold text-base rounded-full transition-all duration-200 uppercase tracking-wider backdrop-blur-sm hover:bg-[#C9962F]/10"
          >
            Ver Nossos Serviços
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
          {[
            { value: '+30', label: 'Anos de Experiência' },
            { value: '+1000', label: 'Eventos Realizados' },
            { value: '4.7★', label: 'Avaliação no Google' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#C9962F]">{stat.value}</div>
              <div className="text-xs text-[rgb(245,244,249)]/60 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[rgb(245,244,249)]/50 hover:text-[#C9962F] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}