import { Sparkles, ShoppingBag, MessageCircle, ChevronDown } from 'lucide-react';

const FACHADA =
  'https://storage.lucasmendes.dev/site-sp/wec%20digital%2Fimg3%2Ffachada-loja-digital.webp';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="absolute top-32 -right-20 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 md:bottom-20 md:left-10 w-64 h-64 md:w-96 md:h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="hidden md:block absolute inset-0 bg-[linear-gradient(rgba(237,27,38,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(237,27,38,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4 md:mb-6 animate-in slide-in-from-top duration-500 delay-200">
              <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full text-[11px] md:text-xs font-bold shadow-lg shadow-red-500/20">
                <Sparkles size={12} className="animate-pulse" />
                <span>17 Anos de Confiança</span>
              </div>
            </div>
            <div className="mb-4 md:mb-6 animate-in fade-in slide-in-from-bottom duration-600 delay-400">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 md:mb-4 leading-[1.1]">
                <span className="text-gray-900 block mb-1 md:mb-2">A Tecnologia Que</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500 block">
                  Você Merece Ter
                </span>
              </h1>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed animate-in fade-in duration-500 delay-600">
              Celulares, Smart TVs, Eletrodomésticos e Móveis com{' '}
              <span className="text-red-600 font-bold">
                {' '}
                os melhores preços e formas de pagamento
              </span>
            </p>
            <div className="mb-6 md:mb-8 animate-in fade-in duration-500 delay-700">
              <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600 text-xs font-medium">Parcele em até</p>
                    <p className="text-red-600 font-black text-lg sm:text-xl">15x no cartão</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-gray-200"></div>
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600 text-xs font-medium">Produtos com</p>
                    <p className="text-red-600 font-black text-lg sm:text-xl">Garantia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 animate-in fade-in scale-in duration-400 delay-900 mb-6 md:mb-8">
              <a
                href="https://wa.me/c/558491775185"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-r from-red-600 to-red-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:shadow-2xl hover:shadow-red-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <ShoppingBag size={18} className="relative z-10 flex-shrink-0" />
                <span className="relative z-10">Ver Catálogo</span>
              </a>
              <a
                href="https://wa.me/5584991775185"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-red-600 hover:shadow-lg"
              >
                <MessageCircle size={18} className="text-red-600 flex-shrink-0" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
            <div className="animate-in fade-in duration-500 delay-1000">
              <p className="text-xs md:text-sm text-gray-600">
                <span className="font-bold text-gray-900">+10.000 clientes</span> satisfeitos em São
                Miguel/RN
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 animate-in slide-in-from-right duration-600 delay-300">
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src={FACHADA}
                alt="W&C Digital - Fachada da Loja"
                className="absolute bottom-0 left-0 w-full h-full rounded-3xl shadow-2xl object-cover object-bottom"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border-4 border-red-600">
                <p className="text-red-600 font-black text-2xl">17</p>
                <p className="text-gray-600 text-sm font-semibold">Anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#diferenciais"
          aria-label="Scroll para baixo"
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-red-600 transition-colors"
        >
          <span className="text-[10px] font-medium uppercase tracking-wider">Role</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </section>
  );
}
