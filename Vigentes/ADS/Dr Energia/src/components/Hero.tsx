import { ArrowRight, ShieldCheck, Zap, Award, ChevronDown } from 'lucide-react';
import { scrollToId, WHATSAPP_URL } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica%2Fimg%2Fbackground-img.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-dark/75 to-brand-dark/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-3xl">
          <div className="transition-all duration-700 delay-100 opacity-100 translate-y-0">
            <span className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-brand-red px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse"></span>
              Norte de Mato Grosso
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-brand-white leading-tight text-shadow-lg transition-all duration-700 delay-200 opacity-100 translate-y-0">
            Energia que<span className="text-brand-red"> move </span>o futuro
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-brand-white/75 leading-relaxed max-w-2xl transition-all duration-700 delay-300 opacity-100 translate-y-0">
            Elaboração de projetos eletricos, Assessorias em demandas do setor
            eletricos, construção e manutenção de rede de media e baixa tensão e
            Energia solar.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-400 opacity-100 translate-y-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-brand-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-2xl hover:shadow-brand-red/40 hover:-translate-y-1"
            >
              Solicitar Orçamento
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <button
              onClick={() => scrollToId('servicos')}
              className="inline-flex items-center gap-2 border border-brand-white/30 hover:border-brand-white/60 text-brand-white/80 hover:text-brand-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:bg-white/5"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="mt-14 flex flex-wrap gap-6 transition-all duration-700 delay-500 opacity-100 translate-y-0">
            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <ShieldCheck size={16} className="text-brand-red flex-shrink-0" />
              <span>Licenciados e Certificados</span>
            </div>
            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <Zap size={16} className="text-brand-red flex-shrink-0" />
              <span>Engenharia de Alta Tensão</span>
            </div>
            <div className="flex items-center gap-2 text-brand-white/60 text-sm">
              <Award size={16} className="text-brand-red flex-shrink-0" />
              <span>5 Anos de Excelência</span>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('servicos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-brand-white/40 hover:text-brand-white/80 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
