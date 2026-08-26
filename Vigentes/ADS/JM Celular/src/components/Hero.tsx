import { ArrowRight, ShieldCheck, Clock, Star } from 'lucide-react';

const WHATSAPP_ORCAMENTO =
  'http://wa.me/557192534118?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+para+reparo+do+meu+celular.';

const stats = [
  { icon: ShieldCheck, title: 'Garantia', sub: 'em todos os reparos' },
  { icon: Clock, title: 'Desde 2012', sub: '+13 anos de experiência' },
  { icon: Star, title: 'Avaliação', sub: '4.8 ★ no Google' },
];

export default function Hero() {
  const scrollToServicos = () => {
    document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://storage.lucasmendes.dev/site-sp/jm-celular/img/hero-background.webp"
          alt="JM Celular - Assistência Técnica"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#001f5c]/90 via-[#004AAC]/75 to-[#004AAC]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#001030]/60 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shrink-0" />
            <span>Seg a Sex: 08h às 17h • Sáb: 08h às 14h</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Seu celular merece o{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              melhor reparo
            </span>{' '}
            de Salvador
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl">
            Tela quebrada, bateria fraca ou placa-mãe com defeito? Na JM Celular, consertamos todas
            as marcas e modelos com mão de obra especializada, preço justo e entrega rápida. Não
            arrisque com quem ainda está aprendendo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={WHATSAPP_ORCAMENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-[#004AAC] font-bold px-8 py-4 rounded-xl text-base shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all duration-200 active:scale-95"
            >
              Solicitar Orçamento Grátis
              <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
            </a>
            <button
              onClick={scrollToServicos}
              className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-white/20 transition-all duration-200 active:scale-95"
            >
              Ver Serviços
            </button>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center shrink-0">
                    <Icon width={20} height={20} className="text-sky-300" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">{stat.title}</p>
                    <p className="text-white/60 text-xs mt-0.5">{stat.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
