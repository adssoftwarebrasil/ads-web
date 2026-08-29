import { Calendar, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      value: '30+',
      label: 'Anos de Experiência',
    },
    {
      icon: Award,
      value: 'Qualidade',
      label: 'Internacional',
    },
    {
      icon: Users,
      value: 'Atendimento',
      label: 'Personalizado',
    },
  ];

  const timeline = [
    {
      period: 'Anos 90',
      year: '1990',
      description: 'Fundada no início dos anos 90 como uma empresa de facção ou terceirização, fabricava roupas de altíssima qualidade para grandes e famosas marcas e grifes do mundo, a partir de moldes e modelos já desenvolvidos por seus estilistas.',
    },
    {
      period: 'Anos 2000',
      year: '2000',
      description: 'Em meados dos anos 2000, uma grande mudança foi feita para que pudéssemos dividir toda essa experiência com nossos próprios produtos e, assim, contemplar a satisfação de ver o fruto cultivado desde a semente.',
    },
  ];

  return (
    <section id="quem-somos" className="relative bg-gradient-to-br from-white via-[#f8f8f8] to-[#DCDCDC] py-16 lg:py-24 overflow-hidden">
      {/* Decoração de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#D7B46A] opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#012E60] opacity-5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#D7B46A] to-[#c19e56] rounded-2xl mb-6 shadow-lg">
            <Sparkles size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012E60] mb-4">
            Nossa História
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais de três décadas dedicadas à excelência em uniformes profissionais
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Linha central - escondida em mobile */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D7B46A] via-[#c19e56] to-[#D7B46A] -translate-x-1/2" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 lg:mb-20 ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2'
                }`}
              >
                {/* Mobile: linha vertical à esquerda */}
                <div className="lg:hidden absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D7B46A] to-[#c19e56]" />
                
                {/* Mobile: bolinha */}
                <div className="lg:hidden absolute left-2.5 top-8 w-4 h-4 bg-[#D7B46A] rounded-full shadow-lg" />

                {/* Desktop: bolinha central */}
                <div className="hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br from-[#D7B46A] to-[#c19e56] rounded-full -translate-x-1/2 shadow-xl border-4 border-white z-10" />

                <div className={`pl-12 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                    {/* Badge do período */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D7B46A] to-[#c19e56] text-white px-4 py-2 rounded-full text-sm font-bold mb-4 shadow-md">
                      <Calendar size={16} />
                      {item.period}
                    </div>

                    {/* Ano grande decorativo */}
                    <div className="text-6xl sm:text-7xl font-bold text-[#D7B46A] opacity-10 absolute top-4 right-4">
                      {item.year}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg relative z-10">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-[#012E60] to-[#024080] rounded-2xl p-8 overflow-hidden"
              >
                {/* Círculo decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D7B46A] opacity-10 rounded-full blur-2xl" />

                <div className="relative z-10">
                  {/* Ícone */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D7B46A] rounded-xl mb-6 shadow-lg">
                    <Icon size={32} className="text-white" />
                  </div>

                  {/* Valor */}
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-gray-300 text-base sm:text-lg font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="text-center sm:text-left">
              <p className="text-[#012E60] font-bold text-lg mb-1">
                Faça parte dessa história
              </p>
              <p className="text-gray-600 text-sm">
                Junte-se às empresas que confiam na Cia Fibra
              </p>
            </div>
            <button
              onClick={() => window.open('https://wa.me/5519991007977?text=Olá!%20Gostaria%20de%20conhecer%20mais%20sobre%20a%20Cia%20Fibra.', '_blank')}
              className="bg-gradient-to-r from-[#D7B46A] to-[#c19e56] text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-shadow duration-300 whitespace-nowrap"
            >
              Mínimo 30 Unidades
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
