import { Users, Package, Ship } from 'lucide-react';
import { scrollToSection, WHATSAPP_URL } from '../lib/scroll';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/coimbra%20navegacoes%2Fimg%2Fhero-background.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(41,41,41)]/90 via-[rgb(41,41,41)]/70 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Os rios são nossas{' '}
              <span className="text-[rgb(253,133,17)]">estradas</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Conectamos vidas, histórias e impulsionamos o desenvolvimento da
              Amazônia através do transporte fluvial seguro e eficiente no Rio
              Madeira.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="bg-[rgb(6,172,50)] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[rgb(5,150,43)] transition-all hover:shadow-2xl hover:scale-105"
              >
                Solicitar Cotação
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[rgb(41,41,41)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 text-center"
              >
                Fale no WhatsApp
              </a>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-1 gap-6">
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(6,172,50)] p-3 rounded-lg">
                  <Users size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,41,41)] mb-2">
                    2.300 passageiros/semana
                  </h3>
                  <p className="text-[rgb(160,180,187)]">
                    Transporte seguro e confortável
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(253,133,17)] p-3 rounded-lg">
                  <Package size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,41,41)] mb-2">
                    1.800 toneladas/semana
                  </h3>
                  <p className="text-[rgb(160,180,187)]">
                    Capacidade de carga garantida
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="bg-[rgb(41,41,41)] p-3 rounded-lg">
                  <Ship size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(41,41,41)] mb-2">
                    +20 anos de experiência
                  </h3>
                  <p className="text-[rgb(160,180,187)]">
                    Tradição e confiança na Amazônia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:hidden gap-4 mt-12">
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
            <Users
              size={28}
              className="lucide lucide-users text-[rgb(6,172,50)] mx-auto mb-2"
            />
            <p className="text-2xl font-bold text-[rgb(41,41,41)]">2.300</p>
            <p className="text-xs text-[rgb(160,180,187)]">passageiros/semana</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center">
            <Package
              size={28}
              className="text-[rgb(253,133,17)] mx-auto mb-2"
            />
            <p className="text-2xl font-bold text-[rgb(41,41,41)]">1.800t</p>
            <p className="text-xs text-[rgb(160,180,187)]">cargas/semana</p>
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-4 rounded-lg text-center col-span-2 sm:col-span-1">
            <Ship size={28} className="text-[rgb(41,41,41)] mx-auto mb-2" />
            <p className="text-2xl font-bold text-[rgb(41,41,41)]">+20</p>
            <p className="text-xs text-[rgb(160,180,187)]">anos navegando</p>
          </div>
        </div>
      </div>
    </section>
  );
}
