import { CheckCircle, MessageCircle, Award, Users, Shield, Sparkles } from 'lucide-react';

const About = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5563984274000', '_blank');
  };

  const benefits = [
    {
      icon: Award,
      text: 'Especialistas em crédito consignado'
    },
    {
      icon: Users,
      text: 'Presença digital e física para atender todo o Brasil'
    },
    {
      icon: Shield,
      text: 'Parceria com bancos e seguradoras líderes no mercado'
    },
    {
      icon: Sparkles,
      text: 'Atendimento personalizado e soluções flexíveis'
    }
  ];

  const stats = [
    { number: '15+', label: 'Anos de Experiência' },
    { number: '10k +', label: 'Clientes Atendidos' },
    { number: '98%', label: 'Satisfação' }
  ];

  return (
    <section id="sobre" className="relative bg-gradient-to-br from-[#f9f4ee] via-[#faf6f2] to-[#f8f4f1] py-16 md:py-28 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-80 h-80 bg-[#f88601] rounded-full filter blur-[120px] opacity-[0.08]" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#eb6601] rounded-full filter blur-[140px] opacity-[0.06]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="animate-fade-in-up">
            {/* Tag */}
            <div className="inline-block mb-6">
              <span className="text-[#f88601] text-xs md:text-sm font-bold tracking-[0.2em] uppercase block mb-3">
                Quem somos
              </span>
              <div className="w-16 h-1 bg-gradient-to-r from-[#f88601] to-[#eb6601] rounded-full" />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#eb6601] to-[#f88601] bg-clip-text text-transparent">
                REDE CONSIG
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-[#666666] font-medium mb-8">
              Sua parceira de confiança em crédito consignado
            </p>

            {/* Description */}
            <div className="space-y-5 text-[#1a1a1a] text-base leading-[1.8] mb-10">
              <p className="text-[#4a4a4a]">
                A Rede Consig é uma empresa de correspondente bancário especializada em crédito consignado, atuando há mais de 15 anos no mercado financeiro. Nosso objetivo é simplificar o acesso ao crédito com <span className="font-semibold text-[#eb6601]">transparência e eficiência</span>, oferecendo condições especiais para servidores públicos, aposentados e pensionistas.
              </p>
              <p className="text-[#4a4a4a]">
                Com uma atuação que combina presença digital e física, a Rede Consig atende clientes de todo o Brasil. Trabalhamos em parceria com os <span className="font-semibold text-[#eb6601]">maiores bancos e seguradoras</span> do país, garantindo segurança e confiança em todas as operações.
              </p>
              <p className="text-[#4a4a4a]">
                Nosso compromisso é proporcionar soluções personalizadas, com rapidez e atendimento humanizado, ajudando nossos clientes a alcançarem seus objetivos financeiros com tranquilidade.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="group flex items-start gap-3 p-4 rounded-xl bg-white/60 backdrop-blur-sm border border-[#f0f0f0] hover:border-[#f88601] hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f88601] to-[#eb6601] flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Icon className="text-white" size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-[#1a1a1a] text-sm font-medium leading-relaxed pt-1.5">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-[#f0f0f0] mb-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#eb6601] to-[#f88601] bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-[#666666] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="group gradient-orange text-white px-10 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-3 hover:scale-105 hover:shadow-[0_10px_40px_rgba(235,102,1,0.3)] transition-all duration-300 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <MessageCircle size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>Falar com Especialista</span>
            </button>
          </div>

          {/* Image Side */}
          <div className="animate-fade-in-up-delay relative">
            {/* Main Image */}
            <div className="relative group">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#f88601] to-[#eb6601] rounded-[2rem] opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              
              <img
                src="https://storage.lucasmendes.dev/site-sp/redeconsig%2Fatendente-apertando-mao-de-cliente.jpg"
                alt="Atendimento profissional Rede Consig - Especialistas em crédito consignado"
                className="relative rounded-3xl shadow-2xl w-full aspect-[3/4] object-cover border-4 border-white group-hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-[#f0f0f0] animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f88601] to-[#eb6601] flex items-center justify-center">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#eb6601]">15+</div>
                    <div className="text-xs text-[#666666] font-medium">Anos no Mercado</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary decorative element */}
            <div className="hidden lg:block absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br from-[#f88601] to-[#eb6601] opacity-20 blur-2xl animate-pulse-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;