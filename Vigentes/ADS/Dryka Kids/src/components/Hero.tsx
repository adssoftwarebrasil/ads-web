import { Sparkles, ArrowRight, Heart } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-50 via-orange-50 to-yellow-50 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-orange-300 rounded-full opacity-20 blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center justify-center gap-2 bg-white px-3 py-2 rounded-full shadow-md max-w-[calc(100vw-3rem)] mx-auto lg:mx-0">
              <Sparkles className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight text-center lg:text-left break-words whitespace-normal">
                Mais de 6 anos de experiência
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block text-gray-900">Moda Infantil</span>
              <span className="block bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                que Encanta
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Descubra o universo mágico da Shop Dryka Kids! Roupas, brinquedos, moda praia e muito
              mais para deixar seu filho ainda mais feliz e estiloso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/558888033252?text=Olá! Gostaria de conhecer mais sobre os produtos da Shop Dryka Kids!"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Ver Produtos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://www.instagram.com/shopdrykakids"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-full border-2 border-gray-300 hover:border-pink-500 hover:text-pink-600 hover:shadow-lg transition-all duration-300"
              >
                <Heart className="mr-2 w-5 h-5" />
                Siga no Instagram
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Produtos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-orange-500">6+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-yellow-600">100%</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Satisfação</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FConjuntos%20femininos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2015.42.02_0248521b.webp"
                  alt="Conjunto infantil feminino"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FBrinquedos%20infantis%20Eletronicos%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2021.58.41_09370b6d.webp"
                  alt="Brinquedos eletrônicos"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FVestido%20femininos%20alinhados%2FImagem%20do%20WhatsApp%20de%202025-11-18%20%C3%A0(s)%2015.42.02_101a588b.webp"
                  alt="Vestido feminino"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dryka%20kids%2FConjuntos%20Masculinos%20Bebe%2FImagem%20do%20WhatsApp%20de%202025-11-19%20%C3%A0(s)%2009.06.47_4b0fe5c7.webp"
                  alt="Conjunto masculino bebê"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl hidden lg:block">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-3 rounded-xl">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Qualidade</div>
                  <div className="text-sm text-gray-600">Garantida</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
