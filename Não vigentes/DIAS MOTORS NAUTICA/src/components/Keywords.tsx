const KEYWORDS = [
  'Motor de popa em Goiânia',
  'Motor de popa Yamaha em Goiânia',
  'Lancha em Goiânia',
  'Jet-ski em Goiânia',
  'Waverunner em Goiânia',
  'Embarcação em Goiânia',
  'Motor Yamaha',
  'Jetski Yamaha',
  'Levefort Goiânia',
  'Lancha de pesca em Goiânia',
  'Lancha de alumínio em Goiânia',
  'Yamaha Náutica em Goiânia',
];

export default function Keywords() {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[rgb(30,43,75)] text-center mb-8 lg:mb-10 transition-all duration-700 opacity-0 translate-y-8">
          Encontre o Que Você Procura
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 transition-all duration-700 delay-200 opacity-0 translate-y-8">
          {KEYWORDS.map((keyword) => (
            <span
              key={keyword}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-[rgb(19,161,209)]/10 text-[rgb(30,43,75)] rounded-full text-xs sm:text-sm font-medium hover:bg-[rgb(19,161,209)]/20 hover:scale-105 transition-all cursor-default"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
