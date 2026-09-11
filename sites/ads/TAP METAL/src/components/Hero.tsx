import { ArrowRight, Award, Users, Truck } from 'lucide-react';

const WHATSAPP = 'http://wa.me/5562985811343';

const stats = [
  { icon: Award, value: '17+', label: 'Anos no Mercado' },
  { icon: Users, value: '100%', label: 'Satisfação' },
  { icon: Truck, value: 'Todo', label: 'Brasil' },
];

function Hero() {
  const scrollToServices = () => {
    const el = document.getElementById('servicos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 z-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Ffachada-tap-hero-paralax-background.webp")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(9,9,35,0.7)] via-[rgba(9,9,35,0.8)] to-[rgba(9,9,35,0.95)]"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-32 lg:py-40">
        <div className="max-w-4xl">
          <div className="inline-block mb-6 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full backdrop-blur-sm">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              17 Anos de Excelência
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Soluções em <span className="text-[rgba(12,132,227)]">Reservatórios Metálicos</span> de Alta
            Qualidade
          </h1>
          <p className="text-lg sm:text-xl text-[rgba(198,198,207)] mb-8 leading-relaxed max-w-2xl">
            Fabricamos caixas d'água metálicas personalizadas com a mais alta tecnologia, atendendo todos os
            padrões de qualidade exigidos pelos principais órgãos fiscalizadores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[rgba(12,132,227)] hover:bg-[rgba(12,132,227,0.9)] text-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Solicitar Orçamento
              <ArrowRight size={20} />
            </a>
            <button
              onClick={scrollToServices}
              className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[rgba(198,198,207,0.1)] text-white border-2 border-white px-8 py-4 rounded-full transition-all duration-300 font-semibold text-lg"
            >
              Nossos Serviços
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(198,198,207,0.1)] p-6 rounded-2xl hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-[rgba(12,132,227,0.2)] rounded-full flex items-center justify-center">
                    <Icon size={24} className="text-[rgba(12,132,227)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-[rgba(198,198,207)]">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(9,9,35)] to-transparent z-20"></div>
    </section>
  );
}

export default Hero;
