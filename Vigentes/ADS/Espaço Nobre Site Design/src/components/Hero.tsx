import { Award, Calendar, Users } from 'lucide-react';
import { scrollToSection } from '../utils';

const stats = [
  { icon: Award, value: '11 Anos', label: 'de Excelência' },
  { icon: Calendar, value: '500+', label: 'Eventos Realizados' },
  { icon: Users, value: '100%', label: 'Satisfação' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#cba26c]/10 via-white to-[#cba26c]/5 pt-20"
    >
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#cba26c]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-[#cba26c]/15 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center py-8 sm:py-12 lg:py-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up leading-tight max-w-4xl px-4">
              Transformando Sonhos em
              <span
                className="block mt-2 bg-gradient-to-r from-[#cba26c] via-[#b8956a] to-[#cba26c] bg-clip-text text-transparent drop-shadow-lg"
                style={{
                  filter: 'drop-shadow(rgba(203, 162, 108, 0.3) 0px 2px 4px)',
                }}
              >
                Celebrações Inesquecíveis
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 max-w-2xl px-4">
              Há 11 anos criando momentos únicos em casamentos, festas de 15 anos
              e eventos que marcam vidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 w-full px-4 sm:w-auto">
              <button
                onClick={() => scrollToSection('contato')}
                className="px-6 sm:px-8 py-3 sm:py-4 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-xl text-sm sm:text-base"
                style={{
                  background:
                    'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 100%)',
                  boxShadow: 'rgba(203, 162, 108, 0.4) 0px 10px 40px',
                }}
              >
                Solicite um Orçamento
              </button>
              <button
                onClick={() => scrollToSection('eventos')}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 font-bold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
                style={{
                  borderColor: 'rgb(203, 162, 108)',
                  color: 'rgb(203, 162, 108)',
                  boxShadow: 'rgba(203, 162, 108, 0.2) 0px 4px 20px',
                }}
              >
                Conheça Nosso Espaço
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl px-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.value}
                    className="flex flex-col items-center p-6 sm:p-8 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-[#cba26c]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    style={{ boxShadow: 'rgba(203, 162, 108, 0.15) 0px 8px 30px' }}
                  >
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 shadow-xl"
                      style={{
                        background:
                          'linear-gradient(135deg, rgb(203, 162, 108) 0%, rgb(184, 149, 106) 100%)',
                        boxShadow: 'rgba(203, 162, 108, 0.4) 0px 8px 25px',
                      }}
                    >
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div
          className="w-6 h-10 border-2 rounded-full flex items-start justify-center p-2"
          style={{ borderColor: 'rgb(203, 162, 108)' }}
        >
          <div
            className="w-1 h-3 rounded-full"
            style={{ backgroundColor: 'rgb(203, 162, 108)' }}
          ></div>
        </div>
      </div>
    </section>
  );
}
