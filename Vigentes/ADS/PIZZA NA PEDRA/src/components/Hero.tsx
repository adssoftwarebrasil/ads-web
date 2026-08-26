import { ChevronDown } from 'lucide-react';

const stats = [
  { value: '34+', label: 'Anos de Tradição' },
  { value: '4.9', label: 'Nota no iFood' },
  { value: '5★', label: 'Avaliação no Google' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-block text-brand-cream text-sm font-semibold tracking-[0.3em] uppercase mb-4 border border-brand-cream/40 px-4 py-1.5 rounded-full">
            Há mais de 34 anos em Goiânia
          </span>
        </div>
        <div className="transition-all duration-1000 delay-200 opacity-100 translate-y-0">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mt-4">
            A Pizza Mais <span className="text-brand-cream italic">Recheada</span>
            <br />
            de Goiânia
          </h1>
        </div>
        <div className="transition-all duration-1000 delay-400 opacity-100 translate-y-0">
          <p className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Massa artesanal assada na hora, ingredientes frescos selecionados e recheios generosos
            que conquistaram gerações em Goiânia.
          </p>
        </div>
        <div className="transition-all duration-1000 delay-600 flex flex-col sm:flex-row gap-4 justify-center mt-10 opacity-100 translate-y-0">
          <a
            href="http://wa.me/556292358068"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/50 hover:-translate-y-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir pelo WhatsApp
          </a>
          <a
            href="#cardapio"
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold text-lg px-8 py-4 rounded-full border border-white/30 transition-all duration-300 hover:-translate-y-1"
          >
            Ver Cardápio
          </a>
        </div>
        <div className="transition-all duration-1000 delay-700 flex flex-wrap justify-center gap-6 mt-12 opacity-100 translate-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-brand-cream font-serif font-bold text-3xl">{stat.value}</div>
              <div className="text-white/70 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce-slow"
        aria-label="Rolar para baixo"
        onClick={() =>
          document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <ChevronDown width={32} height={32} />
      </button>
    </section>
  );
}
