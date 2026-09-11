import { ArrowRight, Zap, DollarSign, Star } from 'lucide-react';

const LOGO =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=guerreiro%2Flogo%20guerreiro%20em%20PNG.png&version_id=null';

const features = [
  { Icon: Zap, iconClass: 'lucide lucide-zap', title: 'Entrega Rápida', desc: 'Agilidade que sua obra precisa' },
  { Icon: DollarSign, iconClass: 'lucide lucide-dollar-sign', title: 'Preço Justo', desc: 'Melhores condições do mercado' },
  { Icon: Star, iconClass: 'lucide lucide-star', title: 'Atendimento Top', desc: 'Equipe especializada' },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF8F3] to-[#FFE8D6] opacity-50"></div>
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] bg-[#F48221] rounded-full blur-[100px] md:blur-[150px] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] lg:w-[500px] h-[250px] md:h-[400px] lg:h-[500px] bg-[#F48221] rounded-full blur-[80px] md:blur-[120px] opacity-10"></div>
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-8 lg:px-[5%] py-24 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
          <div className="text-left space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#FFF0E6] border border-[#F48221]/20 rounded-full px-4 md:px-5 py-2 md:py-2.5">
              <span className="w-2 h-2 bg-[#F48221] rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold text-[#F48221]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                6 ANOS CONSTRUINDO SONHOS
              </span>
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1A1A1A] mb-4 md:mb-6 leading-tight"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Não vendemos aço,<br />
                <span className="text-[#F48221]">vendemos solução</span>
                <br />
                em aço
              </h1>
              <p
                className="text-base md:text-lg lg:text-xl text-[#666666] leading-relaxed max-w-xl"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Qualidade, agilidade e atendimento diferenciado para Camaçari e Região Metropolitana. Tudo o que sua obra
                precisa em um só lugar.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="https://wa.me/5571996694235?text=Olá!%20Gostaria%20de%20fazer%20um%20orçamento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#F48221] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[#E67318] hover:scale-105 hover:shadow-[0_10px_40px_rgba(244,130,33,0.3)] transition-all duration-300 group"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                FAÇA SEU ORÇAMENTO
                <ArrowRight className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" size={24} />
              </a>
              <a
                href="#produtos"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-white border-2 border-[#1A1A1A] text-[#1A1A1A] px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                NOSSOS PRODUTOS
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-6 md:pt-8">
              {features.map(({ Icon, iconClass, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/80 backdrop-blur-sm border border-[#F5F5F5] rounded-xl p-4 hover:shadow-lg hover:border-[#F48221]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#FFF0E6] rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon className={`${iconClass} w-5 h-5 text-[#F48221]`} size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1A1A1A] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {title}
                      </p>
                      <p className="text-xs text-[#666666]" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F48221]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="relative w-full max-w-[500px] mx-auto">
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 bg-[#F48221]/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-28 h-28 md:w-40 md:h-40 bg-[#F48221]/10 rounded-full blur-2xl"></div>
              <div className="relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[#F5F5F5]">
                <img src={LOGO} alt="Guerreiro Ferro e Aço" className="w-full h-auto max-w-[500px] drop-shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-[#F48221]/30 rounded-full flex items-start justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:h-3 bg-[#F48221] rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
