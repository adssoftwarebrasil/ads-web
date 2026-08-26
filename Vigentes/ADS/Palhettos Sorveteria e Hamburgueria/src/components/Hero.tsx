import { ArrowRight, MapPin, Clock } from 'lucide-react';

const HERO_BG = 'https://storage.lucasmendes.dev/site-sp/palhetos%20sorveteria%20e%20hamburgueria%20%2Fimg%2Fhero-paralax.webp';
const WHATSAPP = 'http://wa.me/556299822672';

export default function Hero() {
  const scrollToMenu = () => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[rgb(35,31,32)]/95 via-[rgb(35,31,32)]/70 to-[rgb(35,31,32)]/30"></div>
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-[rgb(255,204,26)]/10 border border-[rgb(255,204,26)] px-4 py-2 rounded-full mb-6 animate-pulse backdrop-blur-sm">
            <span className="text-[rgb(255,204,26)] font-semibold text-sm drop-shadow-md">✨ 12 Anos de Tradição Artesanal</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Sabor Artesanal que
            <span className="text-[rgb(255,204,26)] block mt-2 drop-shadow-md">Conquista Corações</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed drop-shadow-md max-w-2xl">
            Sorvetes cremosos e hambúrgueres irresistíveis, produzidos diariamente com dedicação artesanal. Qualidade gourmet a preços acessíveis no coração de Goiânia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[rgb(255,204,26)] text-[rgb(35,31,32)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-2xl hover:shadow-yellow-500/50 hover:scale-105 flex items-center justify-center group"
            >
              Peça Agora
              <ArrowRight size={24} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={scrollToMenu}
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[rgb(35,31,32)] transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Ver Cardápio
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/50 transition-all duration-300 shadow-lg">
              <div className="bg-[rgb(255,204,26)] p-3 rounded-xl shrink-0">
                <MapPin size={24} className="text-[rgb(35,31,32)]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1 drop-shadow">Localização Privilegiada</h3>
                <p className="text-gray-300 text-sm">Vila Isaura, Goiânia - GO</p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-black/40 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-black/50 transition-all duration-300 shadow-lg">
              <div className="bg-[rgb(255,204,26)] p-3 rounded-xl shrink-0">
                <Clock size={24} className="text-[rgb(35,31,32)]" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-1 drop-shadow">Sempre Fresquinho</h3>
                <p className="text-gray-300 text-sm">Produção diária artesanal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
