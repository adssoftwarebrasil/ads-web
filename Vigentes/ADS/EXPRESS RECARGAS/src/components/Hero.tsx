import { Zap, Shield, Clock, ChevronDown } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const CAPA =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/caroba/objects/download?preview=true&prefix=scorpionxpress%2FCapa.jpeg&version_id=null';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b31115]/30 via-black to-black"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#fcc209]/10 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(252, 194, 9, 0.3) 40px, rgba(252, 194, 9, 0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(252, 194, 9, 0.3) 40px, rgba(252, 194, 9, 0.3) 41px)',
          }}
        ></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-[#fcc209]"></span>
              <span className="text-[#fcc209] text-sm font-semibold tracking-widest uppercase">
                Lins-SP e Guaiçara-SP
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white leading-tight">
              Sua Bateria{' '}
              <span className="text-[#fcc209] relative">
                Descarregou?
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#b31115] rounded-full"></span>
              </span>
              <br />
              <span className="text-white/90">A gente te atende</span>{' '}
              <span className="text-[#b31115]">rápido!</span>
            </h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-lg">
              Somos especialistas em baterias automotivas em Lins-SP. Trabalhamos com as melhores
              marcas do mercado — Moura, Heliar, Cral, Zetta e Pioneiro — com preço justo e
              atendimento de qualidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="https://wa.me/5514996487352?text=Ol%C3%A1!%20Gostaria%20de%20pedir%20um%20or%C3%A7amento%20de%20bateria%20automotiva."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#fcc209] hover:bg-[#e6b008] text-black font-black text-base px-8 py-4 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#fcc209]/30"
              >
                <WhatsAppIcon size={20} fill="currentColor" />
                Pedir Orçamento
              </a>
              <a
                href="#marcas"
                className="flex items-center justify-center gap-2 border-2 border-white/20 hover:border-[#fcc209] text-white hover:text-[#fcc209] font-bold text-base px-8 py-4 rounded-full transition-all duration-200"
              >
                Ver Marcas
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Zap size={16} className="lucide lucide-zap text-[#fcc209]" />
                Entrega Expressa
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Shield size={16} className="lucide lucide-shield text-[#fcc209]" />
                Garantia Total
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock size={16} className="lucide lucide-clock text-[#fcc209]" />
                Atendimento Rápido
              </div>
            </div>
          </div>
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <div className="absolute inset-0 rounded-full bg-[#fcc209]/10 blur-3xl scale-75"></div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[#fcc209]/20 animate-pulse"></div>
              <img
                src={CAPA}
                alt="Personagem Scorpion Xpress"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-auto lg:w-96 xl:w-[420px] object-cover object-top drop-shadow-2xl rounded-2xl"
              />
            </div>
            <div className="absolute z-20 top-4 right-0 lg:-right-4 bg-[#b31115] text-white rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs font-medium opacity-80">Melhores marcas</p>
              <p className="text-xl font-black">5 Marcas</p>
              <p className="text-xs opacity-80">disponíveis</p>
            </div>
            <div className="absolute z-20 bottom-4 left-0 lg:-left-4 bg-[#fcc209] text-black rounded-2xl px-4 py-3 shadow-xl">
              <p className="text-xs font-medium opacity-70">Atendimento</p>
              <p className="text-xl font-black">Lins-SP</p>
              <p className="text-xs opacity-70">e Guaiçara-SP</p>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#marcas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#fcc209] transition-colors animate-bounce"
      >
        <ChevronDown size={32} className="lucide lucide-chevron-down " />
      </a>
    </section>
  );
}
