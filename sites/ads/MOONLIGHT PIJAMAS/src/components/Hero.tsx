import { Sparkles, MapPin, Clock } from 'lucide-react';

const WHATSAPP_URL = 'http://wa.me/5548988277661';

export default function Hero() {
  const scrollToCatalogo = () => {
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(223,202,178)]/30 via-[rgb(254,254,252)] to-[rgb(223,202,178)]/20"></div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-[rgb(223,202,178)]/40 px-4 py-2 rounded-full">
              <Sparkles width={18} height={18} className="text-[rgb(102,78,56)]" />
              <span className="text-[rgb(102,78,56)] font-medium text-sm">Avaliação 5 Estrelas no Google</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(102,78,56)] leading-tight">
              Conforto &amp; Elegância
              <span className="block text-[rgb(111,86,60)] mt-2">Para Noites Perfeitas</span>
            </h1>
            <p className="text-lg md:text-xl text-[rgb(102,78,56)]/80 leading-relaxed">
              Descubra a coleção mais completa de pijamas, lingeries e pantufas em Florianópolis. Qualidade premium,
              tamanhos variados incluindo plus size, e um atendimento que faz a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(102,78,56)] text-[rgb(254,254,252)] px-8 py-4 rounded-full hover:bg-[rgb(111,86,60)] transition-all duration-300 font-semibold text-center shadow-lg hover:shadow-xl hover:scale-105 transform"
              >
                Fale Conosco no WhatsApp
              </a>
              <button
                onClick={scrollToCatalogo}
                className="border-2 border-[rgb(102,78,56)] text-[rgb(102,78,56)] px-8 py-4 rounded-full hover:bg-[rgb(102,78,56)] hover:text-[rgb(254,254,252)] transition-all duration-300 font-semibold text-center"
              >
                Ver Coleção
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-3">
                <MapPin width={20} height={20} className="text-[rgb(102,78,56)]" />
                <span className="text-[rgb(102,78,56)]/70 text-sm">Centro de Florianópolis</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock width={20} height={20} className="text-[rgb(102,78,56)]" />
                <span className="text-[rgb(102,78,56)]/70 text-sm">Seg-Sex 9h-18h30 | Sáb 9h-13h</span>
              </div>
            </div>
          </div>
          <div className="relative animate-slide-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-[rgb(223,202,178)] to-[rgb(111,86,60)] rounded-3xl opacity-20 blur-2xl"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/moonlight%20pijamas%2Fimg%2Fvitrine-hero.webp"
              alt="Coleção Moonlight Pijamas"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
