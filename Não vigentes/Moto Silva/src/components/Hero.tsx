import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContato = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/motosilv/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Peças e Acessórios para <span className="text-[#FFE600]">Motocicletas</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 font-light mb-8 leading-relaxed">
            Qualidade e Tradição em Motopeças
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
            Há mais de 40 anos fornecendo peças de qualidade para oficinas e lojas em todo o Brasil
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://wa.me/551937138008"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-[#FFE600] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#FFE600]/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              <span>(19) 3713-8008</span>
            </a>
            <button
              onClick={scrollToContato}
              className="inline-flex items-center justify-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
