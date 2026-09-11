import { Clock, Truck, Star } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <img
          src="https://storage.lucasmendes.dev/site-sp/Imperio%20Gas%2Fimg%2Fcaminhao-botijoes-gas.webp"
          alt="Entrega de gás"
          className="w-full h-full object-cover opacity-60"
        />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 animate-pulse">
          <span className="bg-[#DEAC6C] text-black px-6 py-2 rounded-full font-semibold text-sm uppercase tracking-wide">
            Atendimento 24 Horas
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight slide-up animate-in">
          Gás e Água com Entrega Rápida em Aparecida de Goiânia
        </h1>
        <p
          className="text-lg sm:text-xl mb-8 text-white/90 max-w-3xl mx-auto slide-up animate-in"
          style={{ animationDelay: '0.2s' }}
        >
          Qualidade, agilidade e preços competitivos. Seu lar sempre abastecido, a qualquer hora do dia.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 slide-up animate-in"
          style={{ animationDelay: '0.4s' }}
        >
          <a
            href="https://wa.me/556281556605"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DEAC6C] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#F2DFBF] transition-all duration-300 hover:scale-105 text-center"
          >
            Fazer Pedido Agora
          </a>
          <button
            onClick={() => scrollToSection('produtos')}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300"
          >
            Nossos Produtos
          </button>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 justify-center items-center slide-up animate-in"
          style={{ animationDelay: '0.6s' }}
        >
          <div className="flex items-center gap-3">
            <Clock className="h-6 w-6 text-[#DEAC6C]" />
            <span className="text-sm sm:text-base">24h Disponível</span>
          </div>
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-[#DEAC6C]" />
            <span className="text-sm sm:text-base">Entrega Rápida</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="h-6 w-6 text-[#DEAC6C]" />
            <span className="text-sm sm:text-base">Melhor Custo-Benefício</span>
          </div>
        </div>
      </div>
    </section>
  );
}
