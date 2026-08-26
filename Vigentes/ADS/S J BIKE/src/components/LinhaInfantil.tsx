import { Heart, Sparkles, Star, ArrowRight } from 'lucide-react';

export default function LinhaInfantil() {
  return (
    <section
      id="infantil"
      className="relative py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-pink-400 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(253, 88, 34) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl hover:scale-105 transition-transform duration-300">
            <Heart className="lucide lucide-heart w-5 h-5 fill-white animate-pulse" />
            <span>Para os Pequenos Aventureiros</span>
            <Sparkles className="lucide lucide-sparkles w-5 h-5" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            Linha{' '}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Infantil
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Diversão garantida com{' '}
            <span className="font-bold text-pink-600">segurança</span>,{' '}
            <span className="font-bold text-purple-600">conforto</span> e{' '}
            <span className="font-bold text-blue-600">estilo</span> para os
            pequenos ciclistas
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-pink-200">
              <Star className="lucide lucide-star w-5 h-5 text-pink-500 fill-pink-500" />
              <span className="font-bold text-gray-800 text-sm">
                Certificado de Segurança
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-purple-200">
              <Star className="lucide lucide-star w-5 h-5 text-purple-500 fill-purple-500" />
              <span className="font-bold text-gray-800 text-sm">
                Garantia de 3 meses
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border-2 border-blue-200">
              <Star className="lucide lucide-star w-5 h-5 text-blue-500 fill-blue-500" />
              <span className="font-bold text-gray-800 text-sm">
                Rodinhas Incluídas no aro 16
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 max-w-7xl mx-auto mb-12">
          <div className="relative group lg:col-span-7 h-[400px] md:h-[500px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-white h-full">
              <div className="absolute top-6 right-6 z-10">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-2xl flex items-center gap-2">
                  <Sparkles className="lucide lucide-sparkles w-4 h-4" />
                  Mais Vendido
                </div>
              </div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-infantil%2FWhatsApp%20Image%202025-11-27%20at%2009.49.01%20(1).jpeg"
                alt="Linha Infantil Destaque"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                <h3 className="text-white font-bold text-2xl mb-2">
                  Modelo Premium Kids
                </h3>
                <p className="text-gray-200 text-base mb-4">
                  Design moderno com cores vibrantes e máxima segurança
                </p>
                <div className="flex gap-2">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Rodinhas
                  </span>
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Cestinha
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div className="relative group col-span-2 h-[240px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white h-full">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-infantil%2FWhatsApp%20Image%202025-11-27%20at%2009.49.01.jpeg"
                  alt="Linha Infantil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative group h-[240px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white h-full">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-infantil%2FWhatsApp%20Image%202025-11-27%20at%2009.49.02%20(1).jpeg"
                  alt="Linha Infantil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="relative group h-[240px]">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-pink-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white h-full">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-infantil%2FWhatsApp%20Image%202025-11-27%20at%2009.49.02%20(2).jpeg"
                  alt="Linha Infantil"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
          <div className="relative group lg:col-span-12 h-[280px]">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition-all duration-500"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white h-full">
              <img
                src="https://storage.lucasmendes.dev/site-sp/sj0bike%2Flinha-infantil%2FWhatsApp%20Image%202025-11-27%20at%2009.49.02.jpeg"
                alt="Linha Infantil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-purple-600/30 to-blue-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group/btn relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3">
                <Sparkles className="lucide lucide-sparkles w-6 h-6" />
                Ver Todos os Modelos
                <ArrowRight className="lucide lucide-arrow-right w-6 h-6 group-hover/btn:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
            <button className="group/btn border-3 border-purple-500 text-purple-600 bg-white px-10 py-5 rounded-2xl font-bold text-lg inline-flex items-center gap-3 hover:scale-105 hover:bg-purple-50 transition-all duration-300 shadow-xl">
              <Heart className="lucide lucide-heart w-6 h-6 group-hover/btn:fill-purple-500 transition-all" />
              Consultar Disponibilidade
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            🎁 <span className="font-semibold">Promoção especial:</span> Capacete
            infantil grátis na compra de qualquer modelo!
          </p>
        </div>
      </div>
    </section>
  );
}
