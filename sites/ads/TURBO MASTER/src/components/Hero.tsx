import { ChevronDown } from 'lucide-react';
import WhatsappIcon from './WhatsappIcon';
import { scrollToId } from '../lib/scroll';

const stats = [
  { value: '30+', label: 'Anos de Experiência' },
  { value: '100%', label: 'Compromisso com Qualidade' },
  { value: 'MT', label: 'Todo Mato Grosso' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/fachada-%20hero-turbo-master-vans-estacionadas_1600x1200.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/65 to-gray-950/90"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/60 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-4 py-1.5 mb-6"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 text-shadow-lg">
            Sua Turbina &amp;<br />
            <span className="text-primary-500">Bomba Injetora</span>
            <br />
            em boas mãos.
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 max-w-xl">
            Mais de <strong className="text-white font-semibold">30 anos de experiência</strong> em
            manutenção e reparo de sistemas diesel. Atendemos veículos leves e pesados em todo o Mato
            Grosso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5565992174220"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-primary-900/50 hover:-translate-y-0.5 text-base"
            >
              <WhatsappIcon className="w-5 h-5" />
              Falar pelo WhatsApp
            </a>
            <button
              onClick={() => scrollToId('services')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 text-base backdrop-blur-sm"
            >
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-6 mt-10">
            {stats.map((stat) => (
              <div key={stat.value} className="flex items-center gap-3">
                <span className="text-2xl font-black text-primary-500">{stat.value}</span>
                <span className="text-gray-400 text-xs font-medium max-w-[80px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={() => scrollToId('stats')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="lucide lucide-chevron-down" width={28} height={28} />
      </button>
    </section>
  );
}
