import { ArrowDown, Clock, Star, Shield } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/ss%20moura%20transportes/img/guincho-rebocando-carro-preto-plataforma-amarela_1536x1024.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-black/95 lg:via-black/60 lg:to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex flex-col items-center lg:items-start text-center lg:text-left">
        <span className="inline-flex items-center gap-2 bg-brand-blue/20 border border-brand-blue/40 text-brand-blue-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
          Disponível Agora — Arcos e Região
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] max-w-3xl mb-6 mx-auto lg:mx-0">
          Seu Veículo em <span className="text-brand-blue-light">Boas Mãos,</span>
          <br />
          24 Horas por Dia
        </h1>
        <p className="text-base sm:text-lg text-white/80 max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
          Guincho rápido, seguro e acessível para qualquer emergência. Atendemos carros, utilitários, tratores e máquinas
          em Arcos, Bambuí, Formiga e região — a qualquer hora.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-16 justify-center lg:justify-start w-full sm:w-auto">
          <a
            href="https://wa.me/553799568191?text=Ol%C3%A1!%20Preciso%20de%20um%20guincho.%20Pode%20me%20ajudar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-2xl hover:shadow-brand-blue/40 hover:-translate-y-1"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Solicitar Guincho Agora
          </a>
          <a
            href="#servicos"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-base px-8 py-4 rounded-full border border-white/30 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1"
          >
            Conheça Nossos Serviços
            <ArrowDown width={18} height={18} strokeWidth={2} className="lucide lucide-arrow-down " />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full max-w-xl mx-auto lg:mx-0">
          <div className="stat-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-3 sm:px-5 py-4 text-center flex flex-col items-center gap-1">
            <Clock width={20} height={20} strokeWidth={2} className="lucide lucide-clock text-brand-blue-light mb-1" />
            <span className="text-white font-extrabold text-xl sm:text-2xl leading-none">24h</span>
            <span className="text-white/65 text-[10px] sm:text-xs leading-tight uppercase tracking-wide font-medium">
              Atendimento Contínuo
            </span>
          </div>
          <div className="stat-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-3 sm:px-5 py-4 text-center flex flex-col items-center gap-1">
            <Star width={20} height={20} strokeWidth={2} className="lucide lucide-star text-brand-blue-light mb-1" />
            <span className="text-white font-extrabold text-xl sm:text-2xl leading-none">5.0</span>
            <span className="text-white/65 text-[10px] sm:text-xs leading-tight uppercase tracking-wide font-medium">
              Avaliação no Google
            </span>
          </div>
          <div className="stat-card bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl px-3 sm:px-5 py-4 text-center flex flex-col items-center gap-1">
            <Shield width={20} height={20} strokeWidth={2} className="lucide lucide-shield text-brand-blue-light mb-1" />
            <span className="text-white font-extrabold text-xl sm:text-2xl leading-none">+2 anos</span>
            <span className="text-white/65 text-[10px] sm:text-xs leading-tight uppercase tracking-wide font-medium">
              de Experiência
            </span>
          </div>
        </div>
      </div>
      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ArrowDown width={28} height={28} strokeWidth={2} className="lucide lucide-arrow-down " />
      </a>
    </section>
  );
}
