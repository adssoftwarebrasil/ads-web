import { ChevronDown } from 'lucide-react';

const HERO_BG =
  'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/65 to-brand-black" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-brand-red/15 border border-brand-red/40 rounded-full text-brand-red text-sm font-semibold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
          Rondonópolis — MT
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-6">
          Realizando{' '}
          <span className="text-brand-red">Sonhos</span>{' '}
          <br className="hidden md:block" />
          sobre Rodas
        </h1>

        <p className="text-lg md:text-xl text-[#C0C0C0] max-w-2xl mx-auto leading-relaxed mb-10">
          Venda, compra, troca e consignação de veículos seminovos de procedência
          confiável. Consórcio YAMAHA e locação de veículos.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5566999755005?text=Olá! Gostaria de saber mais sobre os veículos disponíveis."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold text-base rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-brand-red/30"
          >
            Ver Veículos Disponíveis
          </a>
          <a
            href="#sobre"
            className="w-full sm:w-auto px-10 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 text-white font-semibold text-base rounded-2xl backdrop-blur-sm transition-all duration-300"
          >
            Conheça a JR
          </a>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '+5 anos', label: 'no mercado' },
            { value: '100%', label: 'procedência' },
            { value: 'Pai & Filho', label: 'tradição familiar' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-brand-red">{stat.value}</div>
              <div className="text-xs text-[#9CA3AF] uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#servicos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#C0C0C0] hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}
