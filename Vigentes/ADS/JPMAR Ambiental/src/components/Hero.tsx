const highlights = [
  { title: 'Experiência Comprovada', subtitle: 'Desde 2008 no mercado' },
  { title: 'Equipe Multidisciplinar', subtitle: 'Engenheiros, biólogos e técnicos' },
  { title: 'Compromisso com a Qualidade', subtitle: 'Resultados que você pode medir' },
];

export default function Hero() {
  return (
    <section id="inicio" className="relative w-full min-h-[100dvh] flex flex-col bg-[#013413]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          alt="Paisagem JPMAR Ambiental"
          className="w-full h-full object-cover scale-105 select-none"
          loading="eager"
          src="https://storage.lucasmendes.dev/site-sp/jpmarambiental/hero.jpeg"
          style={{ filter: 'brightness(0.5) saturate(1.3) contrast(1.1)', pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#013413] via-black/50 to-black/40 mix-blend-multiply" />
      </div>
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 md:px-8 pt-28 pb-12 text-center">
        <div className="hero-fade-up mb-6" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block px-4 py-1.5 border border-white/30 rounded-full text-white text-[0.68rem] font-medium tracking-[0.22em] uppercase bg-white/10 backdrop-blur-md shadow-sm">
            Engenharia Ambiental &amp; SST
          </span>
        </div>
        <h1
          className="hero-fade-up text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-3 drop-shadow-lg"
          style={{ animationDelay: '0.4s' }}
        >
          JPMAR
        </h1>
        <p
          className="hero-fade-up text-xl md:text-2xl text-[#4ade80] font-medium mb-5 drop-shadow-md"
          style={{ animationDelay: '0.6s' }}
        >
          Engenharia Ambiental e SST
        </p>
        <p
          className="hero-fade-up max-w-xl text-gray-200 text-base md:text-lg leading-relaxed mb-10 drop-shadow-sm"
          style={{ animationDelay: '0.8s' }}
        >
          Sustentabilidade, Segurança e Saúde do Meio Ambiente
        </p>
        <div
          className="hero-fade-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: '1s' }}
        >
          <a
            href="https://wa.me/5579991570550"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[#013413] text-[#f8f1e1] font-medium rounded-full text-sm tracking-wide hover:bg-[#2d7a3a] transition-all duration-300 hover:shadow-lg hover:shadow-[#013413]/50 border border-[#013413] hover:-translate-y-0.5"
          >
            Solicitar Consultoria
          </a>
          <a
            href="#servicos"
            className="px-8 py-3.5 border border-white text-white font-medium rounded-full text-sm tracking-wide hover:bg-white hover:text-[#013413] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
          >
            Nossos Serviços
          </a>
        </div>
      </div>
      <div className="relative z-10 w-full mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 bg-[#013413]/90 backdrop-blur-md divide-y md:divide-y-0 md:divide-x divide-[#f8f1e1]/20 border-t border-[#f8f1e1]/10">
          {highlights.map((h) => (
            <div key={h.title} className="px-6 py-4 text-center transition-colors hover:bg-white/5">
              <p className="text-[#f8f1e1] text-sm font-medium">{h.title}</p>
              <p className="text-[#f8f1e1]/60 text-xs mt-0.5">{h.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
