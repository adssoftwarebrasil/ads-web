import { MapPin, ArrowRight, Shield, Award, Clock } from 'lucide-react';
import { buildWhatsAppUrl, scrollToSection } from '../lib/whatsapp';

const features = [
  { icon: Shield, title: 'Garantia Total', desc: 'Segurança em cada detalhe' },
  { icon: Award, title: 'Acabamento Premium', desc: 'Corte e polimento perfeitos' },
  { icon: Clock, title: 'Entrega Ágil', desc: 'Compromisso com prazos' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-auto min-h-[70vh] lg:h-screen flex items-start lg:items-center overflow-hidden bg-stone-900"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/cozinha-moderna-elegante.webp"
          alt="Cozinha moderna com bancada de mármore de alto padrão"
          className="w-full h-full object-cover lg:scale-105 lg:animate-pulse-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40 sm:to-transparent lg:via-black/50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent lg:hidden"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-36 pb-20 lg:py-0">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <MapPin className="w-4 h-4" />
            <span>Atendendo Goiânia e Região</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
            Transforme Seus Ambientes com{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 pb-2 inline-block">
              Pedras Nobres
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-light">
            Especialistas em mármores, granitos e quartzos. Unimos a beleza natural da pedra com acabamento de alta precisão para elevar o padrão da sua obra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-16">
            <a
              href={buildWhatsAppUrl('Olá! Gostaria de solicitar um orçamento para minha obra.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(217,119,6,0.3)]"
            >
              Orçamento via WhatsApp
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection('galeria')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 hover:border-white/40"
            >
              Ver Projetos Realizados
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 border-t border-white/10 pt-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="flex items-center gap-4 sm:block sm:space-y-3 bg-black/60 sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-white/10 backdrop-blur-sm sm:backdrop-blur-none"
                >
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                    <Icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{f.title}</h3>
                    <p className="text-gray-300 sm:text-gray-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
