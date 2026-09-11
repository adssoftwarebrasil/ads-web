import { ArrowRight, ChevronDown } from 'lucide-react';

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/e%20c%20odontologia/img/';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${IMG_BASE}hero-background.webp')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-white/60" />
            <span className="text-white/70 text-xs tracking-[0.25em] uppercase font-medium">
              Belém do Pará
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Equipe seu consultório com{' '}
            <span className="italic font-light text-gray-300">excelência</span>
          </h1>

          <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
            Cadeiras odontológicas, autoclaves, compressores e muito mais.
            Soluções completas para clínicas e consultórios com qualidade,
            tecnologia e atendimento especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="http://wa.me/559181685427?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos%20odontológicos."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 font-semibold text-sm tracking-wider hover:bg-gray-100 transition-all duration-200"
            >
              SOLICITAR ORÇAMENTO
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#produtos"
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white px-8 py-4 font-semibold text-sm tracking-wider hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              VER PRODUTOS
            </a>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '+100', label: 'Clínicas Atendidas' },
              { value: '5+', label: 'Anos de Mercado' },
              { value: '100%', label: 'Compromisso com Qualidade' },
            ].map((stat) => (
              <div key={stat.label} className="border-l border-white/20 pl-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-xs mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#produtos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
