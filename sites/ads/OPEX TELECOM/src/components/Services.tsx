import { Wifi, Network, Shield, Users, Building2, Server, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wifi,
      title: 'Internet Corporativa',
      description: 'Conexões de alta velocidade e estabilidade para empresas que não podem parar. Infraestrutura robusta com suporte técnico especializado.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2FInternet-corporativa-para-empresas-mulher-laptop-reuniao.webp&version_id=null',
      gradient: 'from-[#FF5500] to-[#FF6600]',
      features: ['99.9% de Uptime', 'Suporte 24/7', 'Fibra Óptica']
    },
    {
      icon: Network,
      title: 'Instalação e Manutenção de Redes',
      description: 'Projetos completos de infraestrutura de rede, cabeamento estruturado e manutenção preventiva e corretiva para garantir máxima performance.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2FInstala%C3%A7%C3%A3o-e-Manuten%C3%A7%C3%A3o-de-Redes-eletricista-trabalhando-cabos.webp&version_id=null',
      gradient: 'from-[#FF6600] to-[#FF7700]',
      features: ['Cabeamento Estruturado', 'Certificação', 'Manutenção']
    },
    {
      icon: Shield,
      title: 'Segurança Eletrônica',
      description: 'Sistemas de CFTV, controle de acesso, alarmes e monitoramento 24h. Proteja seu patrimônio com tecnologia de ponta e inteligência artificial.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2FInstala%C3%A7%C3%A3o-e-Manuten%C3%A7%C3%A3o-em-seguran%C3%A7a-eletronica-eletricista-operando-tablet.webp&version_id=null',
      gradient: 'from-[#FF5500] to-[#FF6600]',
      features: ['CFTV 4K', 'IA Integrada', 'Monitoramento']
    },
    {
      icon: Users,
      title: 'Consultoria para Provedores',
      description: 'Assessoria completa para provedores de internet: planejamento de rede, otimização de recursos, gestão técnica e expansão estratégica.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2Fconsultoria-para-provedores-de-internet-computador-aperto-maos.webp&version_id=null',
      gradient: 'from-[#FF6600] to-[#FF7700]',
      features: ['Análise Técnica', 'Otimização', 'Expansão']
    },
    {
      icon: Building2,
      title: 'Internet para Condomínios',
      description: 'Soluções personalizadas para condomínios residenciais e comerciais. Internet de qualidade com gestão simplificada e suporte dedicado.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2Finternet-para-condominios-predios-wifi.webp&version_id=null',
      gradient: 'from-[#FF5500] to-[#FF6600]',
      features: ['Gestão Simplificada', 'Planos Flexíveis', 'Suporte Dedicado']
    },
    {
      icon: Server,
      title: 'Instalação e Configuração de Servidores',
      description: 'Implementação, configuração e otimização de servidores físicos e virtuais. Backup, segurança e monitoramento para garantir disponibilidade total.',
      image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=OPEX%20TELECOM%2FInstala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o-de-Servidores-maos-tablet-controle.webp&version_id=null',
      gradient: 'from-[#FF5500] to-[#FF6600]',
      features: ['Cloud & On-Premise', 'Backup Automático', 'Alta Disponibilidade']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/30 to-white"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-[#FF5500]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-[#FF6600]/10 to-transparent rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#FF550005_1px,transparent_1px),linear-gradient(to_bottom,#FF550005_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-[#FF5500]/20 px-4 py-2 rounded-full shadow-sm mb-6">
            <Sparkles className="text-[#FF5500]" size={16} />
            <span className="text-sm font-semibold bg-gradient-to-r from-[#FF5500] to-[#FF6600] bg-clip-text text-transparent">
              Nossos Serviços
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Soluções Completas em{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#FF5500] via-[#FF6600] to-[#FF7700] bg-clip-text text-transparent">
                Telecomunicações
              </span>
              <svg className="absolute -bottom-2 left-0 w-full hidden sm:block" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 7C66.6667 3.66667 133.333 3.66667 200 7" stroke="url(#gradient2)" strokeWidth="2"/>
                <defs>
                  <linearGradient id="gradient2" x1="0" y1="0" x2="200" y2="0">
                    <stop offset="0%" stopColor="#FF5500"/>
                    <stop offset="100%" stopColor="#FF6600"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos um portfólio completo de serviços com qualidade excepcional, desde a consultoria até a execução e suporte contínuo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 left-4 sm:top-5 sm:left-5 bg-gradient-to-br ${service.gradient} p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={22} />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 sm:mb-3 group-hover:text-[#FF5500] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-5 sm:mb-6 text-sm lg:text-base">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF5500] to-[#FF6600] hover:from-[#FF6600] hover:to-[#FF7700] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-[#FF5500]/20 hover:shadow-xl hover:shadow-[#FF5500]/30"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                </button>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none rounded-3xl`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-700 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Gradient Orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-br from-[#FF5500]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-tr from-[#FF6600]/20 to-transparent rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Pronto para Transformar sua{' '}
                <span className="bg-gradient-to-r from-[#FF5500] to-[#FF6600] bg-clip-text text-transparent">
                  Infraestrutura?
                </span>
              </h3>

              <p className="text-slate-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
                Fale com nossos especialistas e descubra como podemos impulsionar seus resultados com soluções personalizadas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
                <button
                  onClick={scrollToContact}
                  className="group relative overflow-hidden bg-gradient-to-r from-[#FF5500] to-[#FF6600] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-xl shadow-[#FF5500]/25 hover:shadow-2xl hover:shadow-[#FF5500]/40 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Fale com Especialistas
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600] to-[#FF7700] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <a
                  href="https://wa.me/5562993741022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10">
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <CheckCircle className="text-[#FF5500] flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Resposta em 24h</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <CheckCircle className="text-[#FF5500] flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Orçamento Gratuito</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-white/80">
                  <CheckCircle className="text-[#FF5500] flex-shrink-0" size={16} />
                  <span className="text-xs sm:text-sm">Suporte Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;