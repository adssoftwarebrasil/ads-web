import { Target, Award, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer soluções de telecomunicações e segurança eletrônica com excelência, agregando qualidade e satisfação aos nossos clientes.'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Compromisso com a entrega de serviços de alta performance, utilizando tecnologia de ponta e as melhores práticas do mercado.'
    },
    {
      icon: Users,
      title: 'Relacionamento',
      description: 'Atuação em contato direto com nossos clientes, desde a venda até a entrega e suporte contínuo, garantindo parceria duradoura.'
    },
    {
      icon: TrendingUp,
      title: 'Inovação',
      description: 'Constante atualização e investimento em novas tecnologias para oferecer as melhores soluções do mercado.'
    }
  ];

  return (
    // MUDANÇA 1: Fundo Gradiente Laranja
    <section id="about" className="relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-[#FF5500] via-[#FF6000] to-[#FF7700] overflow-hidden">
      {/* Background decorative elements - Ajustados para Branco/Transparente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div>
            {/* Badge - Fundo Transparente com borda branca */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-md">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
                Sobre a OPEX TELECOM
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6">
              Referência em{' '}
              <span className="relative inline-block">
                {/* MUDANÇA 2: Destaque em Preto (como no Hero) */}
                <span className="text-black">
                  Soluções Tecnológicas
                </span>
                {/* Sublinhado Branco */}
                <div className="absolute -bottom-2 left-0 w-full h-1.5 bg-white/80 rounded-full"></div>
              </span>
            </h2>

            {/* Textos Descritivos - Branco e Tons Claros */}
            <div className="space-y-5 text-orange-50 leading-relaxed text-base sm:text-lg">
              <p className="text-white/90">
                A <strong className="text-white font-bold">OPEX TELECOM</strong> está no mercado com o objetivo de oferecer um serviço que agregue qualidade e satisfação aos nossos clientes. Atuante na área de telecomunicações e segurança eletrônica, buscamos atuar em contato direto com nossos clientes desde a venda de um produto ou serviço até a entrega ou execução do mesmo.
              </p>

              <p>
                Temos um portfólio com um derivado de serviços oferecidos sempre com o pensamento de proporcionar aos nossos clientes uma forma de <strong className="text-white font-semibold">simplificar o acesso ao serviço ou produto</strong> que o cliente necessita.
              </p>

              <p>
                A OPEX TELECOM atua como <strong className="text-white font-semibold">consultoria e terceirização de serviços</strong> para Provedores de Internet, condomínios e empresas de pequeno, médio e grande porte em todo Brasíl.
              </p>
            </div>

            {/* Card "Nosso Compromisso" - Agora Fundo Branco */}
            <div className="mt-8 sm:mt-10 p-5 sm:p-6 lg:p-8 bg-white rounded-2xl shadow-xl shadow-black/10 relative overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]">
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF5500] to-[#FF6600] flex items-center justify-center shadow-md">
                    <Award size={20} className="text-white" />
                  </div>
                  <p className="text-[#FF5500] font-bold text-base sm:text-lg">Nosso Compromisso</p>
                </div>
                {/* Texto interno escuro para contraste com o card branco */}
                <p className="text-slate-600 leading-relaxed font-medium">
                  Proporcionar soluções completas e personalizadas, mantendo sempre o foco na satisfação e sucesso dos nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Grid de Cards de Valores - Mantidos Brancos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white p-5 sm:p-6 lg:p-7 rounded-2xl shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-black/20 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Hover effect sutil laranja claro */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-100/0 group-hover:from-orange-50 group-hover:to-orange-100/50 transition-all duration-500"></div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-[#FF5500] to-[#FF6600] w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-orange-500/20">
                    <value.icon className="text-white" size={26} />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-[#FF5500] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Linha decorativa inferior */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#FF5500] to-[#FF6600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section - Cores invertidas para Branco */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-12 sm:pt-16 border-t border-white/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { value: '24/7', label: 'Suporte Contínuo', delay: '0ms' },
              { value: '100%', label: 'Satisfação', delay: '100ms' },
              { value: '+500', label: 'Clientes Atendidos', delay: '200ms' },
              { value: 'Brasil', label: 'Atendimento em Todo território', delay: '300ms' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="relative inline-block mb-3">
                  {/* Glow atrás do número */}
                  <div className="absolute inset-0 bg-white blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  {/* Valor em Branco */}
                  <div className="relative text-4xl sm:text-5xl lg:text-6xl font-bold text-white transform group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                </div>
                {/* Label em cor clara */}
                <p className="text-orange-100 font-semibold text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;