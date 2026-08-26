import { ChevronDown } from 'lucide-react';
import { WHATSAPP_LINK, WHATSAPP_DEFAULT_MSG } from '../constants';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/herivan-motos%2Fimg%2Fhero-background.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[rgb(219,55,51)] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded mb-6">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            Sinop e Região desde 2014
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6">
            Sua próxima moto
            <br />
            <span className="text-[rgb(219,55,51)]">está aqui.</span>
          </h1>

          <p className="text-[rgb(187,189,191)] text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Motos novas e seminovas com qualidade garantida, procedência verificada e as melhores condições
            de financiamento da região. Mais de 10 anos construindo confiança.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`${WHATSAPP_LINK}?text=${WHATSAPP_DEFAULT_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[rgb(219,55,51)] text-white px-8 py-4 rounded font-bold text-base uppercase tracking-wider hover:bg-red-700 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.555 4.107 1.523 5.83L.057 23.886a.5.5 0 00.612.612l6.056-1.466A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.543 9.543 0 01-4.888-1.344l-.35-.208-3.625.878.892-3.515-.228-.362A9.543 9.543 0 012.4 12C2.4 6.699 6.699 2.4 12 2.4S21.6 6.699 21.6 12 17.301 21.6 12 21.6z"/>
              </svg>
              Consultar no WhatsApp
            </a>
            <a
              href="#motos"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-base uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200"
            >
              Ver Estoque
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '+10', label: 'Anos no Mercado' },
            { value: '100%', label: 'Procedência Garantida' },
            { value: 'Sinop', label: 'e Toda a Região' },
            { value: 'Fácil', label: 'Financiamento' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-[rgb(219,55,51)]">{stat.value}</div>
              <div className="text-[rgb(187,189,191)] text-xs uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce z-10"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
