import { ArrowRight, Clock, MapPin, Shield } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Fhero-fachada-loja-informatica.webp"
          alt="Fachada Armazém da Informática"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(46,47,147)]/95 via-[rgb(46,47,147)]/85 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block bg-[rgb(0,168,89)] text-white px-4 py-2 rounded-full mb-6 animate-fadeIn">
            <span className="font-semibold">Mais de 20 anos de mercado</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slideUp">
            Sua Solução Completa em{' '}
            <span className="text-[rgb(0,168,89)]">Tecnologia</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed animate-slideUp">
            Laboratório especializado em notebooks multimarcas, upgrades de performance e estações de trabalho.
            Acessórios e configurações ideais para sua necessidade.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slideUp">
            <a
              href="http://wa.me/554191217176"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgb(0,168,89)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(0,148,79)] transition-all shadow-2xl hover:shadow-[rgb(0,168,89)]/50 hover:scale-105 font-semibold text-lg"
            >
              Falar com Consultor
              <ArrowRight size={20} />
            </a>
            <a
              href="https://www.instagram.com/armazemdainfo/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border-2 border-white/30 font-semibold text-lg"
            >
              Conheça Nossa Loja
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-slideUp">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
              <Shield className="text-[rgb(0,168,89)] flex-shrink-0" size={24} />
              <span className="text-white text-sm font-medium">Garantia Certificada</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
              <Clock className="text-[rgb(0,168,89)] flex-shrink-0" size={24} />
              <span className="text-white text-sm font-medium">Seg-Sex: 9h às 18:00h</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20">
              <MapPin className="text-[rgb(0,168,89)] flex-shrink-0" size={24} />
              <span className="text-white text-sm font-medium">Jardim das Américas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
    </section>
  );
}
