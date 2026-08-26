import { MessageCircle, TrendingDown, Globe, Shield } from 'lucide-react';

const advantages = [
  {
    number: '01',
    icon: TrendingDown,
    title: 'Taxas Competitivas',
    description: 'As melhores condições de mercado para você realizar seus objetivos financeiros sem comprometer seu orçamento.'
  },
  {
    number: '02',
    icon: Globe,
    title: 'Atendimento Digital e Presencial',
    description: 'Comodidade para clientes de todo o Brasil. Atenda-se de onde estiver através dos nossos canais digitais.'
  },
  {
    number: '03',
    icon: Shield,
    title: 'Parcerias Confiáveis',
    description: 'Trabalhamos com os maiores bancos e seguradoras do país, garantindo segurança e credibilidade.'
  }
];

const Advantages = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  return (
    <section
      id="vantagens"
      className="relative py-16 md:py-28 overflow-hidden"
    >
      {/* Background pattern - MAIOR e MAIS VISÍVEL */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'url(https://storage.lucasmendes.dev/site-sp/redeconsig%2Fnotas-de-dinheiro.jpg)',
          backgroundSize: '140%',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Overlay MUITO MAIS LEVE para deixar imagem visível */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/65 via-[#faf6f2]/50 to-white/60 md:from-white/60 md:via-[#faf6f2]/45 md:to-white/55" />
      
      {/* Vinheta muito sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(249,244,238,0.2)_100%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-20 animate-fade-in-up">
          <div className="inline-block">
            <span className="text-[#f88601] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-2 md:mb-4 block drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
              Vantagens
            </span>
            <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#f88601] to-[#eb6601] mx-auto mb-4 md:mb-6 rounded-full shadow-lg" />
          </div>
          
          <h2 className="text-2xl md:text-5xl lg:text-[3.5rem] font-bold text-[#1a1a1a] mb-3 md:mb-6 leading-tight tracking-tight drop-shadow-[0_2px_8px_rgba(255,255,255,0.9)] px-4">
            Por Que Escolher a <span className="text-[#eb6601]">Rede Consig</span>?
          </h2>
          
          <p className="text-sm md:text-lg text-[#2a2a2a] max-w-2xl mx-auto leading-relaxed font-semibold drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] px-4">
            Combinamos expertise e inovação para oferecer crédito fácil e seguro.
          </p>
        </div>

        {/* Cards Grid - 1 coluna mobile, 3 colunas desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-10 md:mb-16">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="group bg-white/95 backdrop-blur-sm p-5 md:p-10 rounded-xl md:rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(235,102,1,0.3)] hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-500 relative overflow-hidden animate-fade-in-up border border-white/70"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Background number - menor no mobile */}
                <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 text-[60px] md:text-[140px] font-bold text-[#f88601] opacity-[0.08] leading-none select-none">
                  {advantage.number}
                </div>
                
                {/* Icon with gradient background */}
                <div className="relative z-10 mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#f88601] to-[#eb6601] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Icon className="text-white" size={24} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-lg md:text-2xl font-bold text-[#1a1a1a] mb-2 md:mb-4 group-hover:text-[#eb6601] transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                    {advantage.description}
                  </p>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f88601] to-[#eb6601] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center animate-fade-in-up">
          <button
            onClick={handleWhatsApp}
            className="group gradient-orange text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold inline-flex items-center gap-3 hover:scale-105 hover:shadow-[0_10px_40px_rgba(235,102,1,0.4)] transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
            <span>Enviar WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Advantages;