import { MessageCircle, TrendingUp } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-20 flex items-center bg-gradient-to-br from-[#021C3F] via-[#0F3460] to-[#021C3F] overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Gás e Água Mineral com{' '}
              <span className="text-[#DBCC5E]">Entrega Rápida</span> em Sinop
            </h1>
            <p className="text-lg lg:text-xl text-gray-200">
              Atendimento de qualidade, promoções regulares e entrega eficiente no
              Jardim Imperial e toda Sinop
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#DBCC5E] text-[#021C3F] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#c9ba4d] transition-all hover:scale-105 shadow-lg"
              >
                <MessageCircle className="lucide lucide-message-circle w-6 h-6" />
                Peça Agora
              </a>
              <button
                onClick={() => scrollTo('promocoes')}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#021C3F] transition-all"
              >
                <TrendingUp className="lucide lucide-trending-up w-6 h-6" />
                Ver Promoções
              </button>
            </div>
          </div>
          <div className="relative animate-slide-in-right">
            <div className="absolute -top-8 -right-8 bg-[#DBCC5E] text-[#021C3F] px-6 py-3 rounded-full font-bold shadow-lg animate-pulse z-20">
              Entrega em até 30 minutos
            </div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Fbotijao-foguete-entrega-rapida.webp"
              alt="Entrega Rápida"
              className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
