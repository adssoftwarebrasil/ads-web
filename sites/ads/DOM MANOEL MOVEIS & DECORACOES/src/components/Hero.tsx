import { Instagram, Facebook } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const noise =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==";

export default function Hero() {
  const scrollToProdutos = () =>
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/dom-manoel-moveis-e-decoracoes/img/hero-background-att.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(103,66,42)]/85 via-[rgb(103,66,42)]/70 to-[rgb(103,66,42)]/50"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url('${noise}')` }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-[rgb(183,149,108)]/20 border border-[rgb(183,149,108)]/50 text-[rgb(183,149,108)] px-5 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-8 backdrop-blur-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[rgb(183,149,108)] inline-block"></span>
          10 Anos de Tradição e Qualidade
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-cream font-bold leading-tight mb-6 animate-fade-up">
          Móveis que <span className="text-[rgb(183,149,108)] italic">duram</span>
          <br className="hidden sm:block" /> para sempre
        </h1>
        <p
          className="font-sans text-lg sm:text-xl text-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          Móveis vitalícios em madeira maciça com o melhor acabamento da região. Peças únicas,
          resistentes e elegantes para transformar o seu espaço.
        </p>
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="https://www.instagram.com/dom_manoel/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:opacity-90"
          >
            <Instagram size={17} /> Instagram
          </a>
          <a
            href="https://www.facebook.com/dommanoel1735"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1565d8] text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Facebook size={17} /> Facebook
          </a>
          <a
            href="http://wa.me/556696455950?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20os%20móveis."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba58] text-white font-semibold px-5 py-3.5 rounded-full text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <WhatsAppIcon width={18} height={18} /> WhatsApp
          </a>
          <button
            onClick={scrollToProdutos}
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/60 hover:border-cream text-cream font-semibold px-5 py-3.5 rounded-full text-sm transition-all duration-300 backdrop-blur-sm hover:bg-cream/10"
          >
            Ver Produtos
          </button>
        </div>
        <div
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up"
          style={{ animationDelay: '0.45s' }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[rgb(183,149,108)] font-serif">10+</div>
            <div className="text-cream/70 text-xs sm:text-sm mt-1 leading-tight">Anos no mercado</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[rgb(183,149,108)] font-serif">100%</div>
            <div className="text-cream/70 text-xs sm:text-sm mt-1 leading-tight">Madeira maciça</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[rgb(183,149,108)] font-serif">4.4★</div>
            <div className="text-cream/70 text-xs sm:text-sm mt-1 leading-tight">Avaliação Google</div>
          </div>
        </div>
      </div>
    </section>
  );
}
