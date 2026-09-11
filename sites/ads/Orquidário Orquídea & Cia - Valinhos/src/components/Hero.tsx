import { ArrowRight, MapPin, Clock } from 'lucide-react';

export default function Hero() {
  const scrollToProdutos = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fimg%2Fhero-background.webp"
          alt="Orquídeas"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6 animate-fade-in">
            <span className="bg-[rgb(163,206,15)] text-white px-5 py-2 rounded-full text-sm font-semibold shadow-lg">
              Mais de 16 anos de experiência
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            Especialistas em
            <span className="block text-[rgb(163,206,15)]">Orquídeas &amp; Plantas</span>
            Ornamentais
          </h1>
          <p
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            Transforme seu ambiente com a beleza única das nossas orquídeas. Qualidade excepcional,
            atendimento personalizado e entrega rápida em Valinhos e região.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            <a
              href="http://wa.me/551941171827"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-[rgb(22,126,79)] text-white px-8 py-4 rounded-full hover:bg-[rgb(22,126,79)]/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105 font-semibold text-lg"
            >
              <span>Fale Conosco</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={scrollToProdutos}
              className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border-2 border-white/30 font-semibold text-lg"
            >
              <span>Ver Produtos</span>
            </button>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20">
              <MapPin className="w-5 h-5 text-[rgb(163,206,15)] flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Valinhos, SP</p>
                <p className="text-gray-300 text-sm">R. Paiquerê, 1600</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-4 border border-white/20">
              <Clock className="w-5 h-5 text-[rgb(163,206,15)] flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Seg-Sex: 9h às 18h</p>
                <p className="text-gray-300 text-sm">Sáb: 9h às 14h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
