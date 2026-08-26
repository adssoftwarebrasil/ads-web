import { Clock, MapPin, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/central%20gas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-dark/90 to-primary/80"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
              Atendimento 7h às 22h — Todos os dias
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight text-shadow-lg mb-6">
              Gás e Água <span className="text-accent">Entregues</span> <br className="hidden sm:block" />
              na Sua Porta
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Qualidade garantida, preço justo e entrega rápida em toda Primavera do Leste. Botijões lacrados e água
              mineral de qualidade com a confiança que sua família merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="http://wa.me/556696555500"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-accent hover:bg-accent-bright text-primary font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 active:scale-95 text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Fazer Pedido Agora
              </a>
              <button
                onClick={() => scrollToSection('produtos')}
                className="flex items-center justify-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-white active:scale-95 text-base backdrop-blur-sm"
              >
                Ver Produtos
              </button>
            </div>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm">
                <Clock size={15} className="lucide lucide-clock text-accent" />
                7h às 22h — Todos os dias
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-white/90 text-sm">
                <MapPin size={15} className="lucide lucide-map-pin text-accent" />
                Primavera do Leste — MT
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl scale-110"></div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/central%20gas/imagens/anuncio-gas-do-povo-central-gas_1024x1536.webp"
                alt="Central Gás - Gás e Água Mineral em Primavera do Leste"
                className="relative z-10 w-80 xl:w-96 rounded-3xl shadow-2xl object-cover animate-float"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
          <button
            onClick={() => scrollToSection('produtos')}
            className="text-white/50 hover:text-accent transition-colors animate-bounce"
          >
            <ChevronDown size={32} className="lucide lucide-chevron-down " />
          </button>
        </div>
      </div>
    </section>
  );
}
