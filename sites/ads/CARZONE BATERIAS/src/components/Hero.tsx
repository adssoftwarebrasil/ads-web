import { Zap, Phone, Truck, ChevronDown } from 'lucide-react';
import { WhatsAppIcon } from './icons';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-scroll hero-bg"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/carzone%20baterias/img/hero-background-baterias-automotivas-pioneiro-e-heliar-na-loja_4032x1816.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#000E27]/90 via-[#000E27]/70 to-[#000E27]/30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#000E27]/80 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 md:py-0 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#F7EE30]/15 border border-[#F7EE30]/30 text-[#F7EE30] text-sm font-semibold px-4 py-2 rounded-full mb-6 backdrop-blur-sm animate-fade-in">
            <Zap className="lucide lucide-zap" width={14} height={14} fill="currentColor" />
            Entrega e Instalação GRÁTIS
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.05] mb-6 animate-fade-in-up">
            Bateria Morreu? <span className="text-[#F7EE30]">A Gente Resolve</span> Agora Mesmo!
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl animate-fade-in-up animate-delay-200">
            Baterias automotivas para carro, moto, caminhão e trator com{' '}
            <strong className="text-white">entrega e instalação gratuita</strong> em Cuiabá e Várzea Grande.
            Atendimento de Seg a Sex até as 21h e Sábado até as 17h!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-in-up animate-delay-300">
            <a
              href="http://wa.me/556593448962"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#F7EE30] text-[#000E27] px-7 py-4 rounded-xl text-base font-black hover:bg-yellow-300 transition-all duration-200 hover:scale-105 shadow-2xl shadow-yellow-400/30"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" />
              Chamar no WhatsApp
            </a>
            <a
              href="tel:+556593448962"
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-all duration-200"
            >
              <Phone className="lucide lucide-phone" width={18} height={18} />
              (65) 9 9344-8962
            </a>
          </div>
          <div className="flex flex-wrap gap-5 animate-fade-in-up animate-delay-400">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-8 h-8 rounded-lg bg-[#F7EE30]/20 flex items-center justify-center flex-shrink-0">
                <Truck className="lucide lucide-truck text-[#F7EE30]" width={15} height={15} />
              </div>
              <span className="text-sm font-medium">Delivery Grátis</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-8 h-8 rounded-lg bg-[#F7EE30]/20 flex items-center justify-center flex-shrink-0">
                <Zap className="lucide lucide-zap text-[#F7EE30]" width={15} height={15} />
              </div>
              <span className="text-sm font-medium">Instalação Grátis</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-8 h-8 rounded-lg bg-[#F7EE30]/20 flex items-center justify-center flex-shrink-0">
                <Phone className="lucide lucide-phone text-[#F7EE30]" width={15} height={15} />
              </div>
              <span className="text-sm font-medium">Seg-Sex até 21h | Sáb até 17h</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce-gentle">
        <a
          href="#servicos"
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors"
        >
          <span className="text-xs font-medium tracking-widest uppercase">Saiba mais</span>
          <ChevronDown className="lucide lucide-chevron-down" width={20} height={20} />
        </a>
      </div>
    </section>
  );
}
