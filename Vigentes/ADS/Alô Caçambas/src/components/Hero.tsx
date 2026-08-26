import { ArrowRight, Truck, Clock, Shield } from 'lucide-react';

const badges = [
  { Icon: Truck, label: 'Entrega no mesmo dia' },
  { Icon: Clock, label: 'Atend. rápido no WhatsApp' },
  { Icon: Shield, label: 'Destinação regularizada' },
];

export default function Hero() {
  const scrollToServices = () =>
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://storage.lucasmendes.dev/site-sp/alo-cacambas/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#343434]/90 via-[#343434]/75 to-[#343434]/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="inline-flex items-center gap-2 bg-[#ffaf24]/20 border border-[#ffaf24]/40 text-[#ffaf24] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          Uberlândia - MG • Desde 2018
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#fefefe] leading-tight mb-6 max-w-4xl mx-auto">
          Caçambas que <span className="text-[#ffaf24]">chegam rápido</span> e resolvem de verdade
        </h1>
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Locação de caçambas estacionárias e caminhão truck em Uberlândia. Atendimento ágil, preço
          justo, sem enrolação — da entrega à retirada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <a
            href="http://wa.me/553491233322"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#ffaf24] hover:bg-[#ec8f2b] text-[#343434] font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95"
          >
            Solicitar orçamento grátis
            <ArrowRight className="lucide lucide-arrow-right" width={18} height={18} />
          </a>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-[#ffaf24] text-[#fefefe] hover:text-[#ffaf24] font-semibold text-base px-8 py-4 rounded-full transition-all duration-200"
          >
            Ver serviços
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {badges.map(({ Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
              <div className="w-8 h-8 rounded-full bg-[#ffaf24]/20 flex items-center justify-center shrink-0">
                <Icon className="text-[#ffaf24]" width={16} height={16} />
              </div>
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#fefefe] to-transparent"></div>
    </section>
  );
}
