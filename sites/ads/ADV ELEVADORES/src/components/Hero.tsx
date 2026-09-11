import { Shield, Clock, Award, ChevronDown } from 'lucide-react';

const badges = [
  { Icon: Shield, text: 'Empresa Certificada e Regularizada' },
  { Icon: Clock, text: 'Plantão 24h — Fins de Semana e Feriados' },
  { Icon: Award, text: 'Clientes como Cargill e Assaí Atacadista' },
];

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
            'url("https://storage.lucasmendes.dev/site-sp/advence-elevadores/img/hero-background.webp")',
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[rgb(42,30,75)]/90 via-[rgb(42,30,75)]/75 to-black/60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="transition-all duration-1000 opacity-100 translate-y-0">
          <span className="inline-block bg-[rgb(219,38,27)] text-white text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            Desde 2004 — +20 Anos de Excelência
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-6 max-w-5xl mx-auto">
            Elevadores com <span className="text-[rgb(219,38,27)]">Segurança</span>,{' '}
            <span className="text-[rgb(219,38,27)]">Qualidade</span> e Excelência em Goiás e Brasília
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Venda, instalação, manutenção preventiva e corretiva, modernização e reparos em
            elevadores, escadas/esteiras rolantes e plataforma de acessibilidade. Atendimento 24hrs
            por dia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/5562998152991"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[rgb(219,38,27)] hover:bg-red-700 text-white font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200 shadow-2xl hover:shadow-red-900/40 hover:-translate-y-0.5"
            >
              Solicitar Orçamento Grátis
            </a>
            <a
              href="#servicos"
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[rgb(42,30,75)] font-bold px-10 py-4 rounded-xl text-lg transition-all duration-200"
            >
              Nossos Serviços
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {badges.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white text-sm font-medium"
              >
                <Icon
                  width={20}
                  height={20}
                  className="text-[rgb(219,38,27)] flex-shrink-0"
                />
                <span className="text-left">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown width={32} height={32} className="lucide lucide-chevron-down " />
      </a>
    </section>
  );
}
