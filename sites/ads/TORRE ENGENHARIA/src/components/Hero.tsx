import { ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

const badges = ['Desde 2013', 'Empresa Familiar', 'Atendimento Completo'];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0">
        <img
          src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=torreengenharia%2FWhisk_5002f5499a67e34baeb488c6c30595b3dr.jpeg&version_id=null"
          alt="Projeto de Arquitetura Moderna"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-navy/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/20 via-brand-navy/30 to-brand-navy/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent h-1/2 mt-auto"></div>
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center justify-center gap-2 bg-black/20 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-5 py-2 mb-6 sm:mb-8 text-xs sm:text-sm font-medium text-white/95 animate-fade-in shadow-lg max-w-full">
          <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse shrink-0"></span>
          <span className="truncate sm:whitespace-normal">
            Especialistas em Regularização em Rondonópolis - MT
          </span>
        </div>
        <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 animate-fade-in-up drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Regularize, Construa e
          <br className="hidden sm:block" />
          <span className="text-brand-sky drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            {' '}
            Valorize seu Imóvel
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed animate-fade-in-up drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] px-2 sm:px-0 font-medium">
          Da arquitetura à documentação completa. A Torre Engenharia cuida de tudo para você
          construir com segurança e vender sem complicações.
        </p>
        <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 animate-fade-in-up">
          <a
            href="https://wa.me/5566996194229?text=Ol%C3%A1%21+Gostaria+de+uma+consulta+gratuita+sobre+meu+im%C3%B3vel."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-blue hover:bg-brand-blue/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-brand-blue/40"
          >
            Consulta Gratuita
            <ArrowRight size={20} />
          </a>
          <a
            href="#servicos"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm border border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300"
          >
            Conhecer Serviços
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-3 sm:gap-6 animate-fade-in">
          {badges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-1.5 sm:gap-2 text-white/90 text-sm font-semibold drop-shadow-md"
            >
              <CheckCircle2
                size={16}
                className="text-brand-sky shrink-0 sm:w-[18px] sm:h-[18px]"
              />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
      <a
        href="#servicos"
        className="hidden max-h-[600px]:hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-white/70 hover:text-white transition-colors group"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-70 group-hover:opacity-100 transition-opacity">
          Serviços
        </span>
        <ChevronDown size={24} className="animate-bounce" />
      </a>
    </section>
  );
}
