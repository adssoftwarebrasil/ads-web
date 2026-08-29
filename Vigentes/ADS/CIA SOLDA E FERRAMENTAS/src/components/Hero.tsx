import { WhatsAppIcon } from './icons';

const stats = [
  { value: '100+', label: 'Produtos em Estoque' },
  { value: 'MIG / TIG / Plasma', label: 'Máquinas Disponíveis' },
  { value: 'Locação', label: 'Todas as Amperagens' },
  { value: '5.0★', label: 'Avaliação no Google' },
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
          backgroundImage: 'url("/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/95 via-brand-dark/80 to-brand-dark/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <div className="inline-flex items-center gap-2 bg-brand-orange/15 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse-slow"></span>
          <span className="text-brand-orange text-sm font-medium">
            Brasília &amp; Todo o Estado de Goiás
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
          Tudo para Solda
          <br />
          <span className="text-brand-orange">em Um Só Lugar</span>
        </h1>
        <p
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          Máquinas MIG, TIG, Plasma e Eletrodo para venda e locação. Consumíveis, EPIs e ferramentas
          com atendimento de consultores especializados.
        </p>
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <a
            href="http://wa.me/556198770047"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="w-5 h-5 fill-current" />
            Solicitar Orçamento
          </a>
          <a
            href="https://storage.lucasmendes.dev/site-sp/cia%20solda%20e%20ferramentas/pdf/PORTFOLIO%20CIA%20DA%20SOLDA%202025.pdf"
            download="Portfolio_Cia_da_Solda_2025.pdf"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:bg-white/5"
          >
            Ver Catálogo
          </a>
        </div>
        <div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
            >
              <div className="text-brand-orange font-black text-xl sm:text-2xl">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
