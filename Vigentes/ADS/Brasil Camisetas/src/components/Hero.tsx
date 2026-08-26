import { Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 45, 100) 0%, rgb(6, 138, 80) 50%, rgb(0, 45, 100) 100%)',
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ backgroundColor: 'rgb(255, 241, 20)' }}
        ></div>
        <div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10"
          style={{ backgroundColor: 'rgb(255, 241, 20)' }}
        ></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-white opacity-5 transform -rotate-12"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-white opacity-5 transform rotate-12"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full my-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center justify-items-center">
          <div className="text-center">
            <div
              className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-in-up"
              style={{
                backgroundColor: 'rgba(255, 241, 20, 0.2)',
                border: '1px solid rgba(255, 241, 20, 0.3)',
              }}
            >
              <Sparkles size={16} style={{ color: 'rgb(255, 241, 20)' }} />
              <span
                className="text-sm font-medium"
                style={{ color: 'rgb(255, 241, 20)' }}
              >
                Quase 30 anos de tradição
              </span>
            </div>
            <h1 className="animate-on-scroll text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-fade-in-up">
              Qualidade que
              <span className="block mt-2" style={{ color: 'rgb(255, 241, 20)' }}>
                Veste o Brasil
              </span>
            </h1>
            <p
              className="animate-on-scroll text-lg lg:text-xl text-white mb-10 leading-relaxed opacity-0 max-w-xl mx-auto animate-fade-in-up"
              style={{ animationDelay: '200ms', color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Camisetas personalizadas com produção própria e acabamento premium
            </p>
            <div
              className="animate-on-scroll flex flex-col sm:flex-row gap-4 opacity-0 justify-center animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
                style={{ backgroundColor: 'rgb(6, 138, 80)' }}
              >
                <MessageCircle
                  size={20}
                  className="group-hover:rotate-12 transition-transform"
                />
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection('products')}
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white transition-all duration-300 hover:bg-white"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              >
                Ver Produtos
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
            <div
              className="animate-on-scroll mt-12 grid grid-cols-3 gap-6 opacity-0 max-w-lg mx-auto animate-fade-in-up"
              style={{ animationDelay: '600ms' }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                  30
                </div>
                <div className="text-sm text-white text-opacity-80">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                  100%
                </div>
                <div className="text-sm text-white text-opacity-80">Própria</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: 'rgb(255, 241, 20)' }}>
                  BR
                </div>
                <div className="text-sm text-white text-opacity-80">Nacional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
