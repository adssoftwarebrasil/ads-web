import { Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { scrollToId } from '../useReveal';

const stats = [
  { value: '+6', label: 'Anos de Mercado' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100+', label: 'Cidades Atendidas' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/duquesa%20joias/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/55 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(188, 151, 96), transparent)' }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(240, 113, 171), transparent)' }}
      ></div>
      <div className="relative z-10 container-max px-4 md:px-8 text-center pt-28 md:pt-16 pb-20">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 border border-gold/40 bg-gold/10 backdrop-blur-sm text-gold-light text-xs font-semibold tracking-[0.2em] uppercase px-5 py-2.5 rounded-full mb-8">
            <Sparkles width={12} height={12} className="lucide lucide-sparkles " />
            Desde 2019 — Mato Grosso
            <Sparkles width={12} height={12} className="lucide lucide-sparkles " />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Elegância que
            <br />
            <span className="italic text-gold-gradient">transforma.</span>
            <br />
            Renda que
            <br />
            <span className="italic text-gold-gradient">liberta.</span>
          </h1>
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            Semijoias e joias em prata 925 de alto padrão, direto para você ou para revender.
            Junte-se a centenas de consultoras em todo o Mato Grosso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToId('consultora')}
              className="btn-rose text-base w-full sm:w-auto"
            >
              Seja uma Consultora
              <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
            </button>
            <button
              onClick={() => scrollToId('produtos')}
              className="btn-outline-white text-base w-full sm:w-auto"
            >
              Ver Coleção
            </button>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-6 transition-all duration-1000 delay-500 opacity-100 translate-y-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center px-4 md:px-6 md:border-r border-white/20 last:border-0"
            >
              <div className="font-serif text-3xl font-bold text-gold-light">{s.value}</div>
              <div className="text-white/60 text-xs tracking-wide mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => scrollToId('sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-float"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </button>
    </section>
  );
}
