import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center flex-wrap justify-center lg:justify-start gap-3 text-sm bg-blue-50 rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-blue-100">
              <span className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-semibold text-gray-700">10+ Anos</span>
              </span>
              <span className="w-1 h-1 bg-gray-400 rounded-full hidden sm:block"></span>
              <span className="text-gray-600">1000+ Clientes</span>
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                10 ANOS CUIDANDO DO SEU CARRO
              </h1>
              <p className="text-lg sm:text-xl text-blue-600 font-semibold">
                Centro Automotivo Completo em Alexânia
              </p>
            </div>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Da revisão simples aos reparos mais complexos, tudo em um só lugar
              com a qualidade que você merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5562992222332"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center space-x-2 sm:space-x-3 transition-all duration-300 hover:shadow-lg"
              >
                <Phone className="lucide lucide-phone w-5 h-5 sm:w-6 sm:h-6" />
                <span>AGENDAR SERVIÇO</span>
                <ArrowRight className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#servicos"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg flex items-center justify-center transition-all duration-300"
              >
                <span>NOSSOS SERVIÇOS</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  10+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  5000+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Atendimentos
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">
                  Satisfação
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-blue-600">
              <img
                src="https://storage.lucasmendes.dev/site-sp/caetano%2Fcentro-automotivo-fachada.webp"
                alt="Caetano Auto Center 1"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-opacity duration-700 opacity-100"
              />
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                <button
                  className="h-2 rounded-full transition-all bg-white w-8"
                  aria-label="Ir para slide 1"
                ></button>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-red-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg">
              <div className="text-xs sm:text-sm font-semibold">Fundada em</div>
              <div className="text-2xl sm:text-3xl font-bold">2015</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
