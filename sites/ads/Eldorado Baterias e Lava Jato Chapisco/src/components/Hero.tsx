import { Phone, MapPin, Clock } from 'lucide-react';

const WA_URL =
  'https://api.whatsapp.com/send?phone=5531999364049&text=Ol%C3%A1%20vim%20pelo%20Google!';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-[90dvh] flex items-center overflow-hidden"
    >
      {/* Background com Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://storage.lucasmendes.dev/site-sp/Eldorado%20Baterias/fachada-hero-loja-eladordo-baterias-bandeira-moura_1204x1600.webp)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/70 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] md:text-xs font-barlow font-600 uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
            </span>
            Contagem – MG | Quase 27 Anos de Tradição
          </div>

          {/* Título Impactante */}
          <h1 className="font-condensed font-900 text-white text-6xl sm:text-7xl lg:text-8xl leading-[0.9] uppercase mb-6 italic">
            Eldorado Baterias <br />
            <span className="text-brand-yellow">Chapisco</span>
          </h1>

          <p className="text-white/90 text-lg md:text-xl font-barlow font-400 leading-relaxed mb-10 max-w-lg border-l-2 border-brand-yellow pl-4">
            Referência em <strong>Moura e Tudor</strong> para todos os veículos. 
            Qualidade e honestidade que você já conhece.
          </p>

          {/* CTA Principal e Telefone Fixo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-brand-yellow text-brand-blue font-barlow font-800 uppercase tracking-wider px-10 py-5 rounded-xl transition-all duration-300 hover:bg-white hover:scale-105 shadow-2xl flex items-center justify-center gap-3 text-base w-full sm:w-auto"
            >
              <Phone size={20} fill="currentColor" className="group-hover:animate-shake" />
              Pedir Orçamento Agora
            </a>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl backdrop-blur-sm">
              <Phone size={20} className="text-brand-yellow" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-tighter text-white/50 font-barlow">Telefone Fixo</span>
                <a href="tel:3133952775" className="text-white font-barlow font-700 text-lg hover:text-brand-yellow transition-colors">
                  (31) 3395-2775
                </a>
              </div>
            </div>
          </div>

          {/* Info de Contato Rápida */}
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-brand-yellow" />
              <p className="text-sm font-barlow font-500 text-white/80">Seg – Sáb: 08h às 18h</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-brand-yellow" />
              <p className="text-sm font-barlow font-500 text-white/80">Novo Eldorado, Contagem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}