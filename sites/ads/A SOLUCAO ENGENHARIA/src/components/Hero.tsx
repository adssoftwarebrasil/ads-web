import { ArrowRight, ChevronDown, Shield } from 'lucide-react';

const stats = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '1000+', label: 'Clientes Atendidos' },
  { value: '100%', label: 'Conformidade CBMSE' },
];

export default function Hero() {
  const goToContato = () => {
    document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const goToServicos = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/hero-background.webp')" }}
      />
      <div className="absolute inset-0 bg-[#090B4A]/80" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#090B4A]/40 via-transparent to-[#92AA40]/10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#92AA40]/20 border border-[#92AA40]/40 text-[#92AA40] px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
            <Shield size={15} />
            Desde 2010 protegendo vidas em Sergipe
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Segurança Contra{' '}
            <span className="text-[#92AA40]">Incêndio e Pânico</span>{' '}
            que Você Pode Confiar
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed mb-10 max-w-2xl">
            Equipamentos certificados, projetos completos e instalação
            profissional. Protegemos residências, comércios e indústrias em
            Aracaju e em todo Sergipe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={goToContato}
              className="flex items-center justify-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-[#92AA40]/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              Solicitar Orçamento Grátis
              <ArrowRight size={18} />
            </button>
            <button
              onClick={goToServicos}
              className="flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
            >
              Conhecer Serviços
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-14 pt-10 border-t border-white/15">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[#92AA40]">
                  {stat.value}
                </div>
                <div className="text-white/60 text-xs sm:text-sm mt-1 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={goToServicos}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
