import { ArrowRight } from 'lucide-react'

// Foto de capa (fundo do hero). Para trocar, basta substituir este arquivo.
const COVER = '/img/capa.jpg'
const WHATSAPP_HERO =
  'https://wa.me/5562984256606?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos.'

const stats = [
  { value: '+40', label: 'Anos de história' },
  { value: '11', label: 'Cidades' },
  { value: '100%', label: 'Satisfação' },
]

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-brand-black"
    >
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 animate-slow-zoom"
          style={{ backgroundImage: `url('${COVER}')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-black via-brand-black/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue/10 border border-brand-blue/20 text-brand-blue text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
            </span>
            Tradição em Rialma - GO
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
            Tudo que você <span className="text-brand-blue">precisa,</span>
            <br className="hidden sm:block" /> em um só lugar.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
            Material escolar, brinquedos, aviamentos e bolsas.
            <span className="block mt-2 font-medium text-white/90 italic">
              "Economia na ponta do lápis!"
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={WHATSAPP_HERO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-blue hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-brand-blue/20"
            >
              Fale no WhatsApp
              <ArrowRight size={20} />
            </a>
            <a
              href="#categorias"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-md"
            >
              Ver Categorias
            </a>
          </div>

          <div className="grid grid-cols-2 md:flex md:items-center gap-8 md:gap-12 py-8 border-t border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <p className="text-3xl font-black text-white group-hover:text-brand-blue transition-colors">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-tighter">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-center gap-4">
        <span className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-[0.2em] text-white/30 font-bold">
          Scroll Down
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-blue to-transparent" />
      </div>
    </section>
  )
}
