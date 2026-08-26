import { ChevronDown } from 'lucide-react';

const WA_LINK = 'http://wa.me/5562981442263';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://storage.lucasmendes.dev/site-sp/lima%20advocacia/img/hero-background-fachada-escritorio-advocacia-lima-casa-cinza_1280x720.webp')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex justify-center animate-fade-in">
          <img
            src="https://storage.lucasmendes.dev/site-sp/lima%20advocacia/logos/icone-dourado.webp"
            alt="Símbolo Lima Advocacia"
            className="h-20 w-auto opacity-90"
          />
        </div>

        <p className="font-sans text-xs tracking-[0.4em] text-[#A1825A] uppercase mb-4 animate-fade-in">
          Direito do Trabalho &amp; Direito Previdenciário
        </p>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 animate-fade-up">
          Defendemos <br />
          <span className="gold-text-gradient">Seus Direitos</span>
          <br />
          Com Excelência
        </h1>

        <p className="font-sans text-base sm:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up">
          Assessoria jurídica séria, técnica e comprometida com resultados reais.
          Do planejamento previdenciário à ação trabalhista — estamos ao seu lado em cada etapa.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-gradient text-white font-sans font-semibold text-sm px-8 py-4 rounded-sm tracking-widest uppercase hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:shadow-[#A1825A]/30"
          >
            Falar com Advogado
          </a>
          <a
            href="#servicos"
            className="border border-[#BBB39D]/50 text-[#BBB39D] font-sans font-medium text-sm px-8 py-4 rounded-sm tracking-widest uppercase hover:border-[#A1825A] hover:text-[#A1825A] transition-all duration-300"
          >
            Nossos Serviços
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto animate-fade-up">
          {[
            { value: '2022', label: 'Fundado em' },
            { value: '100%', label: 'Dedicação' },
            { value: 'OAB', label: 'Registrado' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-2xl sm:text-3xl text-[#A1825A]">{stat.value}</p>
              <p className="font-sans text-xs text-white/50 tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-[#A1825A] transition-colors duration-300 animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
