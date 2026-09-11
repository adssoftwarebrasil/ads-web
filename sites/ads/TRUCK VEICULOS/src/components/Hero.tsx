import { ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../useScrollReveal';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#010101]"
    >
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/truck-veiculos/img/hero-bg-att.webp")',
          backgroundPosition: 'center 50%',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#010101] via-[#010101]/80 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#010101]/20 to-[#010101] z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-32 sm:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#af0201]/30 border border-[#af0201]/50 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#af0201] animate-pulse"></span>
            <span className="text-sm font-medium text-[#fefefe] tracking-wide">
              Manaus – AM · Alvorada
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#fefefe] leading-[1.05] tracking-tight text-shadow-xl mb-6">
            Seu Próximo{' '}
            <span className="text-[#af0201] relative inline-block">
              Caminhão
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#af0201] rounded-full"></span>
            </span>{' '}
            Está Aqui.
          </h1>
          <p className="text-lg sm:text-xl text-[#fefefe]/90 leading-relaxed mb-10 max-w-xl text-shadow-md font-medium">
            A maior variedade de caminhões e utilitários em Manaus. Ford Cargo,
            VW Worker, Mercedes-Benz e muito mais — com estrutura coberta e
            atendimento direto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://wa.me/559292834895?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20consultar%20o%20estoque%20de%20ve%C3%ADculos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-[#af0201] hover:bg-[#600202] text-[#fefefe] font-bold text-base sm:text-lg px-8 py-4 rounded-md transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-1"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current flex-shrink-0" />
              Consultar Estoque Agora
            </a>
            <button
              onClick={() => scrollToSection('estoque')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-[#fefefe] font-semibold text-base sm:text-lg px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              Ver Veículos
            </button>
          </div>
          <div className="mt-12 flex items-center gap-8">
            <div className="hidden sm:block text-left">
              <p className="text-[#af0201] font-black text-lg leading-tight">+ Variedade</p>
              <p className="text-[#fefefe]/70 text-xs font-medium">em Manaus</p>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[#af0201] font-black text-lg leading-tight">Caminhões</p>
              <p className="text-[#fefefe]/70 text-xs font-medium">e Utilitários</p>
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-[#af0201] font-black text-lg leading-tight">Pátio Coberto</p>
              <p className="text-[#fefefe]/70 text-xs font-medium">e Estruturado</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#fefefe]/60 hover:text-[#fefefe] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
