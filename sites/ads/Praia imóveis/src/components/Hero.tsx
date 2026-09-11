import { ChevronDown } from 'lucide-react';

const WHATSAPP_NUMBER = '5585989253428';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Gostaria%20de%20conhecer%20os%20imóveis%20disponíveis%20da%20Praia%20Imóveis.`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Vista aérea da praia de Fortaleza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00484e]/80 via-[#00484e]/55 to-[#002e33]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002e33]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/25 text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Especialistas em Lançamentos no Litoral do Ceará
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Invista com
            <br />
            <span className="text-white/90 italic font-light">
              Critério.
            </span>
            <br />
            <span className="text-white">
              Cresça com Estratégia.
            </span>
          </h1>

          <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
            Mais de 17 anos conectando investidores às melhores oportunidades no litoral cearense.
            Decisões baseadas em dados, cenário econômico e potencial real de valorização.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white hover:bg-white/90 text-[#00484e] font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-xl shadow-black/20 hover:shadow-white/20 hover:scale-105 text-base"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar com Corretor
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-base"
            >
              Conhecer a Empresa
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { value: '17+', label: 'Anos no Mercado' },
              { value: '6', label: 'Regiões Nobres' },
              { value: 'CRECI', label: '15740' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/55 text-sm leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#003438] to-transparent z-10" />
    </section>
  );
}
