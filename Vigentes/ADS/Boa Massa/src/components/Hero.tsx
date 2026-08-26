import { Package, Truck, Headphones, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL, PHONE_TEL, PHONE_DISPLAY } from '../constants';

const features = [
  { Icon: Package, label: 'Variedade de Produtos' },
  { Icon: Truck, label: 'Entrega Rápida e Eficiente' },
  { Icon: Headphones, label: 'Suporte Especializado' },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://storage.lucasmendes.dev/site-sp/boamassa%2Fheroimagemdefundo.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50"></div>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: 'rgb(255, 220, 2)' }}
      ></div>
      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-10 py-32 sm:py-24 lg:py-0 w-full">
        <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] sm:min-h-0">
          <div className="text-white space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in text-center max-w-4xl w-full">
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm bg-white/5">
                <div className="w-2 h-2 rounded-full bg-[rgb(255,220,2)] animate-pulse"></div>
                <span className="text-xs sm:text-sm font-medium whitespace-nowrap">
                  Há mais de 10 anos no mercado
                </span>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.2] tracking-tight px-2">
              Argamassas e Rejuntes de{' '}
              <span
                className="relative inline-block"
                style={{ color: 'rgb(255, 220, 2)' }}
              >
                Qualidade
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full hidden sm:block"
                  height="8"
                  viewBox="0 0 200 8"
                  fill="none"
                >
                  <path
                    d="M0 6C50 2 100 2 150 6C175 8 200 4 200 4"
                    stroke="rgb(255, 220, 2)"
                    strokeWidth="3"
                    fill="none"
                  ></path>
                </svg>
              </span>{' '}
              em João Pessoa
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
              Produtos que Garantem{' '}
              <span className="font-bold" style={{ color: 'rgb(255, 220, 2)' }}>
                Durabilidade
              </span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-4 max-w-3xl mx-auto px-4">
              {features.map(({ Icon, label }) => (
                <div
                  key={label}
                  className="group relative overflow-hidden rounded-xl p-3 sm:p-4 backdrop-blur-md border border-white/10 hover:border-[rgb(255,220,2)]/50 transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                    <div
                      className="p-2 sm:p-3 rounded-full transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: 'rgba(255, 220, 2, 0.15)',
                        border: '2px solid rgba(255, 220, 2, 0.3)',
                      }}
                    >
                      <Icon
                        size={20}
                        color="rgb(255, 220, 2)"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold leading-tight">
                      {label}
                    </span>
                  </div>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-[rgb(255,220,2)]/10 to-transparent"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center items-stretch px-4 max-w-2xl mx-auto">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden flex-1 sm:flex-initial"
                style={{
                  backgroundColor: 'rgb(255, 220, 2)',
                  color: 'rgb(0, 0, 0)',
                }}
              >
                <span className="relative z-10">Solicitar Orçamento</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-md border-2 flex-1 sm:flex-initial"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  borderColor: 'rgba(255, 220, 2, 0.3)',
                }}
              >
                <Headphones size={18} className="flex-shrink-0" />
                <span className="whitespace-nowrap text-xs sm:text-sm lg:text-base">
                  {PHONE_DISPLAY}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
}
