import { Tractor, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProducts = () =>
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/tradicao%20pecas%20agricolas%2Fimg%2Fhero.webp"
          alt="Máquinas Agrícolas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(1,52,47)]/95 via-[rgb(1,52,47)]/85 to-[rgb(1,52,47)]/70"></div>
      </div>
      <div className="container mx-auto px-4 z-10 py-32">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-6 animate-fadeInUp">
            <Tractor className="w-8 h-8 text-[rgb(221,183,120)]" />
            <span className="text-[rgb(221,183,120)] font-semibold text-sm uppercase tracking-widest">
              20 Anos de Experiência
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp"
            style={{ animationDelay: '0.1s' }}
          >
            Agricultura tem que ter{' '}
            <span className="text-[rgb(221,183,120)]">Tradição!</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-200 mb-4 animate-fadeInUp"
            style={{ animationDelay: '0.2s' }}
          >
            🌱 Onde o Agro e a Tradição se Encontram!
          </p>
          <p
            className="text-lg md:text-2xl text-gray-200 mb-4 animate-fadeInUp"
            style={{ animationDelay: '0.3s' }}
          >
            🚜 Plantadeira, colheitadeira, Cummins, correias e parafusos. Tudo
            num só lugar!
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
            style={{ animationDelay: '0.4s' }}
          >
            <a
              href="https://wa.me/557736281005?text=Olá! Gostaria de saber mais sobre as peças agrícolas."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-[rgb(221,183,120)] hover:bg-[rgb(173,132,84)] text-[rgb(1,52,47)] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToProducts}
              className="inline-flex items-center justify-center space-x-3 bg-transparent border-2 border-white hover:bg-white hover:text-[rgb(1,52,47)] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            >
              <span>Ver Produtos</span>
            </button>
          </div>
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16 animate-fadeInUp"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-[rgb(221,183,120)] mb-2">
                20+
              </div>
              <div className="text-sm text-gray-200">Anos de Tradição</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl md:text-4xl font-bold text-[rgb(221,183,120)] mb-2">
                100%
              </div>
              <div className="text-sm text-gray-200">Qualidade Garantida</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 col-span-2 md:col-span-1">
              <div className="text-3xl md:text-4xl font-bold text-[rgb(221,183,120)] mb-2">
                5★
              </div>
              <div className="text-sm text-gray-200">Avaliação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
