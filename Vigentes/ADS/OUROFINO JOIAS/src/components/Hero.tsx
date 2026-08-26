import { Sparkles } from 'lucide-react';
import { WHATSAPP_URL, IMG, scrollToSection } from '../constants';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${IMG.hero}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(29,29,27)]/80 via-[rgb(29,29,27)]/70 to-[rgb(29,29,27)]"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[rgb(186,176,97)]/10 backdrop-blur-sm border border-[rgb(186,176,97)]/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles size={20} className="text-[rgb(186,176,97)]" />
            <span className="text-[rgb(186,176,97)] text-sm font-medium">Joias Personalizadas e Exclusivas</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Ouro Fino Joias
            <span className="block text-[rgb(186,176,97)] mt-2">Sua Joalheria de Confiança</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-slide-up-delay">
            Transformamos memórias em arte. Cada peça é feita sob medida, unindo tradição e tecnologia para criar joias que contam sua história.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
            >
              Criar Minha Joia
            </a>
            <button
              onClick={() => scrollToSection('sobre')}
              className="border-2 border-[rgb(186,176,97)] text-[rgb(186,176,97)] px-8 py-4 rounded-md hover:bg-[rgb(186,176,97)] hover:text-[rgb(29,29,27)] transition-all duration-300 font-bold text-lg"
            >
              Conheça Nossa História
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[rgb(186,176,97)] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[rgb(186,176,97)] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
