import { ChevronDown } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Hero() {
  const scrollToMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#cardapio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#sobre')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/botequim%20do%20comandante/img/hero-background.webp"
          alt="Botequim do Comandante"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        <div className="inline-flex items-center gap-3 border border-brand-gold/40 px-5 py-2 mb-8 animate-fade-in">
          <span className="w-6 h-px bg-brand-gold"></span>
          <span className="section-label">Bar Temático em Goiânia</span>
          <span className="w-6 h-px bg-brand-gold"></span>
        </div>

        <h1 className="font-serif font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-brand-white leading-tight mb-6 animate-fade-in-up">
          Onde o Sabor
          <br />
          <span className="text-brand-gold">Decola</span>
        </h1>

        {/* PARÁGRAFO ATUALIZADO COM A FRASE DO CLIENTE */}
        <p className="text-brand-gray-light text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed animate-fade-in-up animate-delay-200">
          Prepare-se para embarcar em uma viagem gastronômica nas alturas, onde cada sabor é um novo destino.
          Comida de verdade, cerveja gelada e ambiente que conta história.
        </p>

        <div className="flex items-center justify-center gap-2 mb-10 animate-fade-in-up animate-delay-300">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg key={star} className={`w-5 h-5 ${star <= 4 ? 'text-brand-gold' : 'text-brand-gold/50'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-brand-white font-semibold ml-1">4.7</span>
          <span className="text-brand-gray text-sm">no Google</span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-400">
          <button onClick={scrollToMenu} className="btn-primary w-full sm:w-auto">
            Ver Cardápio
          </button>
          <a
            href="https://wa.me/556285601337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 btn-outline w-full sm:w-auto"
          >
            <WhatsAppIcon />
            Falar no WhatsApp
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-gray animate-fade-in-up animate-delay-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Seg–Sex: 11h–14h e 17h–23h30
          </span>
          <span className="hidden sm:block w-px h-4 bg-brand-gray/30"></span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            Sábado: 11h–23h30
          </span>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-white/60 hover:text-brand-gold transition-colors duration-300 animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}