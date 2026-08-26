import { Clock, MapPin, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/espetaria%20fio%20de%20prata/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/80 via-[#1a1a1a]/60 to-[#1a1a1a]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-amber-600/8 rounded-full blur-2xl"></div>
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto transition-all duration-1000 opacity-100 translate-y-0">
        <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
          <span className="text-amber-300 text-xs font-semibold tracking-[0.15em] uppercase">Aberto das 18h às 23h</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-[rgb(230,232,234)] leading-[1.05] mb-6 tracking-tight">
          Sabor que <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">conquista</span>{' '}
          <br className="hidden sm:block" />
          cada pedaço
        </h1>
        <p className="text-[rgb(230,232,234)]/65 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Espetinhos artesanais feitos com ingredientes selecionados, capricho de verdade e um ambiente acolhedor para reunir família e amigos em Sinop-MT.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
          <a
            href="http://wa.me/5566996043627?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20na%20Fio%20de%20Prata%20Espetaria."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-[#1a1a1a] font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-0.5"
          >
            Reservar pelo WhatsApp
          </a>
          <button
            onClick={() => scrollToSection('cardapio')}
            className="w-full sm:w-auto border border-[rgb(230,232,234)]/25 hover:border-amber-500/50 text-[rgb(230,232,234)]/80 hover:text-amber-400 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 hover:bg-amber-500/5"
          >
            Ver o Cardápio
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10">
          <div className="flex items-center gap-2 text-[rgb(230,232,234)]/55 text-sm">
            <Clock size={15} className="lucide lucide-clock text-amber-400/70" />
            <span>Ter – Dom: 18h às 23h</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-white/10"></div>
          <div className="flex items-center gap-2 text-[rgb(230,232,234)]/55 text-sm">
            <MapPin size={15} className="lucide lucide-map-pin text-amber-400/70" />
            <span>Av. das Sibipirunas, 954 – Sinop, MT</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgb(230,232,234)]/40 hover:text-amber-400 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
