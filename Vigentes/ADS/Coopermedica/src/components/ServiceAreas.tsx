import { Ambulance, Building2, Shield, Stethoscope, TrendingUp, Users } from 'lucide-react';

const areas = [
  {
    icon: Ambulance,
    title: 'Atendimento Móvel Pré-Hospitalar',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Building2,
    title: 'Locação de Ambulâncias',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Shield,
    title: 'Emergências e Eventos',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: Stethoscope,
    title: 'Segurança do Trabalho',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Atendimento Ambulatorial',
    gradient: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Users,
    title: 'Suporte para Empresas',
    gradient: 'from-amber-500 to-yellow-500',
  },
];

export default function ServiceAreas() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white py-24 md:py-32 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      {/* Padrão de pontos decorativo */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="text-sm font-bold text-primary uppercase tracking-[0.2em] px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
              Áreas de Atuação
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Soluções Completas
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mt-2">
              Para Todas as Necessidades
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Atuamos em diversas áreas para oferecer o melhor atendimento médico com excelência e comprometimento
          </p>
        </div>

        {/* Grid de Áreas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Efeito de brilho animado no hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Borda gradiente animada */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${area.gradient} p-[1px] rounded-2xl`}>
                  <div className="w-full h-full bg-white rounded-2xl"></div>
                </div>
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Container do ícone com gradiente */}
                  <div className="relative mb-6">
                    {/* Anel externo com gradiente */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 blur-sm scale-110`}></div>
                    
                    {/* Ícone principal */}
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className="text-white" size={36} strokeWidth={2.5} />
                      
                      {/* Pulse effect */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${area.gradient} animate-ping opacity-0 group-hover:opacity-30`}></div>
                    </div>
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {area.title}
                  </h3>
                  
                  {/* Linha decorativa */}
                  <div className={`w-0 h-1 bg-gradient-to-r ${area.gradient} rounded-full mt-4 group-hover:w-16 transition-all duration-500`}></div>
                </div>

                {/* Número decorativo */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-gray-50 select-none">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer com informação adicional */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <p className="text-sm font-semibold text-gray-700">
              Atendimento disponível <span className="text-primary">24 horas por dia</span>, 7 dias por semana
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}