import { Star, Shield, Clock, ArrowRight } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://storage.lucasmendes.dev/site-sp/helena%20despachante/img/hero-background.webp")' }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="transition-all duration-700 opacity-100 translate-y-0">
            <span className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
              <Star width={12} height={12} fill="currentColor" className="lucide lucide-star" />
              Despachante em Primavera do Leste - MT
            </span>
          </div>
          <h1 className="transition-all duration-700 delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-shadow-lg mb-6 opacity-100 translate-y-0">
            Regularize seu <span className="text-brand-yellow">veículo</span>
            <br />
            com quem entende
          </h1>
          <p className="transition-all duration-700 delay-200 text-lg md:text-xl text-brand-gray-light/90 max-w-xl leading-relaxed mb-10 opacity-100 translate-y-0">
            Mais de <strong className="text-white">9 anos de experiência</strong> em documentação veicular. Transferência, licenciamento, quitação de débitos e muito mais — tudo com agilidade e transparência.
          </p>
          <div className="transition-all duration-700 delay-300 flex flex-col sm:flex-row gap-4 mb-16 opacity-100 translate-y-0">
            <a
              href="http://wa.me/556696535401?text=Olá%20Helena!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark font-bold text-base px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:shadow-xl hover:shadow-brand-yellow/30 hover:-translate-y-0.5"
            >
              <WhatsAppIcon width={20} height={20} />
              Falar com Helena
              <ArrowRight width={16} height={16} className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full hover:border-brand-yellow hover:text-brand-yellow transition-all duration-200"
            >
              Ver Serviços
            </a>
          </div>
          <div className="transition-all duration-700 delay-500 flex flex-wrap gap-6 opacity-100 translate-y-0">
            <div className="flex items-center gap-2 text-sm text-brand-gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
                <Star width={14} height={14} fill="currentColor" className="lucide lucide-star text-brand-yellow" />
              </div>
              <span>Avaliação <strong className="text-white">5.0</strong> no Google</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
                <Shield width={14} height={14} className="lucide lucide-shield text-brand-yellow" />
              </div>
              <span><strong className="text-white">+9 anos</strong> de experiência</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-brand-gray">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-brand-yellow/10 border border-brand-yellow/20">
                <Clock width={14} height={14} className="lucide lucide-clock text-brand-yellow" />
              </div>
              <span>Atendimento <strong className="text-white">ágil e humano</strong></span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-brand-gray uppercase tracking-widest">Role para baixo</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-brand-yellow to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
