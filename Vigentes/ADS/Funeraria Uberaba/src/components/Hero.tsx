import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[rgb(20,20,20)]"
    >
      {/* Camada 1 — halos de luz suaves (substituem a fotografia) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(60% 45% at 50% 8%, rgba(249,240,69,0.14) 0%, rgba(249,240,69,0) 70%),' +
            'radial-gradient(45% 40% at 12% 78%, rgba(65,150,229,0.12) 0%, rgba(65,150,229,0) 70%),' +
            'radial-gradient(50% 45% at 88% 70%, rgba(249,240,69,0.07) 0%, rgba(249,240,69,0) 70%)',
        }}
      />

      {/* Camada 2 — malha de pontos discreta, com fade nas bordas */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(247,246,249,0.16) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(70% 60% at 50% 45%, #000 0%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(70% 60% at 50% 45%, #000 0%, transparent 100%)',
        }}
      />

      {/* Camada 3 — arcos concêntricos (leitura de acolhimento / serenidade) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[560px] h-[560px] sm:w-[720px] sm:h-[720px] rounded-full border border-[rgb(249,240,69)]/10 hero-breathe" />
        <div className="absolute w-[820px] h-[820px] sm:w-[1040px] sm:h-[1040px] rounded-full border border-[rgb(247,246,249)]/[0.06]" />
        <div className="absolute w-[1120px] h-[1120px] sm:w-[1380px] sm:h-[1380px] rounded-full border border-[rgb(247,246,249)]/[0.04]" />
      </div>

      {/* Camada 3.5 — logo em marca d'água sutil */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <img
          src="/img/logo-sem-fundo.webp"
          alt=""
          aria-hidden="true"
          draggable={false}
          width={635}
          height={393}
          className="w-[80vw] max-w-[640px] sm:max-w-[780px] h-auto opacity-[0.07]"
          style={{
            /* a logo original e preta: vira silhueta clara para respirar no fundo escuro */
            filter: 'brightness(0) invert(1)',
            maskImage:
              'radial-gradient(72% 72% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(72% 72% at 50% 50%, #000 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Camada 4 — vinheta e transição para a próxima seção */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_100%_at_50%_50%,transparent_35%,rgba(15,15,15,0.75)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-b from-transparent to-[rgb(29,29,29)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-28">
        <div className="inline-flex items-center gap-2 bg-[rgb(249,240,69)]/10 border border-[rgb(249,240,69)]/40 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[rgb(249,240,69)] animate-pulse" />
          <span className="text-[rgb(249,240,69)] text-xs font-semibold tracking-widest uppercase">
            Atendimento 24h — 7 dias por semana
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[rgb(247,246,249)] leading-tight mb-6">
          Cuidado e Dignidade{' '}
          <span className="text-[rgb(249,240,69)]">em Cada Momento</span>
        </h1>

        {/* Ornamento fino no lugar do peso visual que a foto ocupava */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[rgb(249,240,69)]/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[rgb(249,240,69)]/70" />
          <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[rgb(249,240,69)]/50" />
        </div>

        <p className="text-base sm:text-lg text-[rgb(247,246,249)]/75 max-w-2xl mx-auto mb-10 leading-relaxed">
          Há mais de 50 anos, a Funerária Uberaba oferece serviços fúnebres completos com
          atendimento humanizado, respeitoso e acolhedor para sua família — em Uberaba e região.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="http://wa.me/553498615889"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[rgb(249,240,69)] text-[rgb(29,29,29)] font-bold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-[rgb(249,240,69)]/30 hover:scale-105 transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Falar no WhatsApp
          </a>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 border border-[rgb(247,246,249)]/40 text-[rgb(247,246,249)] font-semibold text-base px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-200"
          >
            Conhecer Serviços
          </button>
        </div>

        {/* Métricas em cartões de vidro — dão estrutura ao espaço antes ocupado pela foto */}
        <div className="mt-14 grid grid-cols-3 max-w-xl mx-auto rounded-2xl border border-[rgb(247,246,249)]/10 bg-[rgb(247,246,249)]/[0.04] backdrop-blur-md divide-x divide-[rgb(247,246,249)]/10 overflow-hidden">
          {[
            { value: '+50', label: 'Anos de Tradição' },
            { value: '24h', label: 'Atendimento' },
            { value: '100%', label: 'Humanizado' },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-2 py-5 sm:py-6">
              <div className="text-2xl sm:text-3xl font-bold text-[rgb(249,240,69)]">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-sm text-[rgb(247,246,249)]/70 mt-1 leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-[rgb(247,246,249)]/50 hover:text-[rgb(249,240,69)] transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
