import WhatsAppIcon from './WhatsAppIcon';

const stats = [
  { value: '0+', title: 'Hectares Pulverizados', sub: 'Com precisão e eficiência' },
  { value: '0%', title: 'Economia em Insumos', sub: 'Comparado ao método convencional' },
  { value: '0%', title: 'Cobertura Nacional', sub: 'Atendemos qualquer estado' },
  { value: '0%', title: 'Satisfação do Cliente', sub: 'Compromisso com resultados' },
];

export default function Stats() {
  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-[#0a1205]">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/img/drone-agricola-pulverizando-lavoura-milho-soja_1024x1379.webp"
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1205] via-[#0a1205]/80 to-[#0a1205]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#6ab534] text-sm font-bold tracking-widest uppercase mb-3">
            Resultados
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">Números que falam por si</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((s) => (
            <div key={s.title} className="text-center group">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#6ab534] to-[#4a8427] mb-2 tabular-nums">
                {s.value}
              </div>
              <div className="text-white font-bold text-base sm:text-lg mb-1">{s.title}</div>
              <div className="text-white/45 text-sm">{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[#4a8427]/20 to-[#2d5218]/20 border border-[#4a8427]/30 rounded-2xl p-8 text-center backdrop-blur-sm">
          <p className="text-white/80 text-lg sm:text-xl font-medium mb-6 max-w-2xl mx-auto">
            Pronto para transformar sua lavoura com tecnologia de drones? Solicite um orçamento sem compromisso agora
            mesmo.
          </p>
          <a
            href="http://wa.me/556295016058?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20minha%20lavoura."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#4a8427] hover:bg-[#3d6d20] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 hover:shadow-xl hover:shadow-[#4a8427]/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Quero um Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}
