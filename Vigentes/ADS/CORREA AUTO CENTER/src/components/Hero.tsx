import { Star, Clock, MapPin, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/correa%20auto%20center%2Fimg%2Fhero-background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6 animate-fade-in">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 font-medium">Avaliado 5.0 por nossos clientes</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Sua Oficina de <span className="text-[rgb(207,30,37)]">Confiança</span> em Sinop
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Diagnóstico preciso, serviços completos e atendimento profissional para manter seu
            veículo sempre em perfeito estado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up animation-delay-400">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <Clock className="w-6 h-6 text-[rgb(207,30,37)]" />
              <div>
                <p className="text-white font-semibold">Horário de Atendimento</p>
                <p className="text-gray-300 text-sm">Seg-Sex: 7h-11:30 | 13h-17:30</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/20">
              <MapPin className="w-6 h-6 text-[rgb(207,30,37)]" />
              <div>
                <p className="text-white font-semibold">Localização</p>
                <p className="text-gray-300 text-sm">Sinop-MT e Região</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-600">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[rgb(207,30,37)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(187,20,27)] transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-[rgb(207,30,37)]/50 transform hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>Agende Seu Serviço</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 font-bold text-lg border-2 border-white/30 hover:border-white/50"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
}
