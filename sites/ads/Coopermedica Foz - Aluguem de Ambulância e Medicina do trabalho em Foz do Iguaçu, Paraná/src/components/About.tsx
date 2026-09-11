import { Calendar, Award, MapPin, CheckCircle, Heart, Users, Building2 } from 'lucide-react';

const timeline = [
  {
    year: '1973',
    title: 'Fundação',
    description: 'Fundação em 06 de agosto',
  },
  {
    year: '50+',
    title: 'Experiência',
    description: 'Construção de histórico sólido',
  },
  {
    year: 'Hoje',
    title: 'Referência',
    description: 'Referência em atendimento pré-hospitalar',
  },
];

const values = [
  { icon: CheckCircle, text: 'Compromisso com a qualidade' },
  { icon: Heart, text: 'Atendimento humanizado' },
  { icon: Users, text: 'Equipe especializada' },
];

const institutionalInfo = [
  { icon: Building2, label: 'CNPJ', value: '76.889.203/0001-42' },
  { icon: MapPin, label: 'Endereço', value: 'Rua Xavier da Silva, 423 - Foz do Iguaçu/PR' },
  { icon: Calendar, label: 'Fundação', value: '06 de agosto de 1973' },
  { icon: Award, label: 'Experiência', value: 'Mais de 50 anos de tradição' },
];

export default function About() {
  return (
    <section id="sobre" className="relative bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30 py-16 md:py-32 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Padrão de grade decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
        backgroundSize: '48px 48px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-12 md:mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6">
            <div className="h-px w-8 md:w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-xs md:text-sm font-bold text-primary uppercase tracking-[0.2em] px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-primary/5 border border-primary/10">
              Sobre Nós
            </span>
            <div className="h-px w-8 md:w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-3 md:mb-6 leading-tight">
            Coopermédica
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mt-1 md:mt-2">
              José Caires de Souza
            </span>
          </h2>
          
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Mais de 50 anos dedicados ao cuidado com a saúde em Foz do Iguaçu
          </p>
        </div>

        {/* Conteúdo Principal - Layout Horizontal */}
        <div className="max-w-7xl mx-auto space-y-10 md:space-y-16">
          
          {/* Seção de Timeline Horizontal */}
          <div className="animate-fade-in-up">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Nossa História
              </h3>
              <p className="text-gray-600 text-sm md:text-lg px-4">
                Uma trajetória de excelência e dedicação
              </p>
            </div>

            <div className="relative">
              {/* Linha horizontal conectora - apenas desktop */}
              <div className="absolute top-8 md:top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-blue-400 to-primary hidden md:block"></div>
              
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="flex flex-col items-center text-center">
                      {/* Círculo da timeline */}
                      <div className="relative mb-3 md:mb-6">
                        <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg relative z-10">
                          <span className="text-sm md:text-xl font-bold text-white">{item.year}</span>
                          
                          {/* Pulse effect */}
                          <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary to-blue-600 animate-ping opacity-0 group-hover:opacity-30"></div>
                        </div>
                        
                        {/* Anel externo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-600 rounded-xl md:rounded-2xl opacity-20 blur-md scale-110 -z-10"></div>
                      </div>
                      
                      {/* Conteúdo */}
                      <h4 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-base text-gray-600 leading-relaxed px-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Seção de Atuação e Valores */}
          <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
            <div className="text-center mb-6 md:mb-10">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
                Nossa Atuação
              </h3>
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto px-2">
                Com mais de 50 anos de experiência, a Coopermédica se consolidou como referência em atendimento pré-hospitalar em Foz do Iguaçu. Nossa missão é oferecer serviços médicos de qualidade, com profissionalismo e humanização, atendendo desde emergências até medicina do trabalho.
              </p>
            </div>
            
            {/* Valores em Grid Horizontal */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center p-3 md:p-6 bg-primary/5 rounded-xl md:rounded-2xl group hover:bg-primary/10 transition-all duration-300 hover:scale-105">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="text-white md:w-6 md:h-6" size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-xs md:text-base text-gray-700 font-semibold leading-tight">{value.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Informações Institucionais - Layout Horizontal */}
          <div className="relative bg-gradient-to-br from-primary via-blue-600 to-blue-700 p-6 md:p-12 rounded-2xl md:rounded-3xl text-white shadow-2xl overflow-hidden group hover:shadow-primary/30 transition-all duration-500">
            {/* Efeito de brilho animado */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Padrão decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6 md:mb-10">
                <h3 className="text-2xl md:text-4xl font-bold mb-1 md:mb-2">
                  Informações Institucionais
                </h3>
                <p className="text-white/80 text-sm md:text-base">Transparência e credibilidade</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
                {institutionalInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center p-4 md:p-6 bg-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group/item">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center mb-2 md:mb-4 group-hover/item:scale-110 transition-transform">
                        <Icon className="text-white md:w-6 md:h-6" size={18} strokeWidth={2.5} />
                      </div>
                      <p className="text-white/80 text-xs md:text-sm font-medium mb-1 md:mb-2">{info.label}</p>
                      <p className="text-white font-bold text-xs md:text-base leading-tight">{info.value}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}