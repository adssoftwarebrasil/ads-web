import { Sparkles, Shield, TrendingUp, Zap } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: Sparkles,
      title: 'Equipamentos Novos e Modernos',
      description: 'Frota constantemente renovada com maquinário de alta performance e tecnologia.'
    },
    {
      icon: Shield,
      title: 'Segurança Garantida',
      description: 'Todos os equipamentos em conformidade com as normas de segurança da construção civil.'
    },
    {
      icon: TrendingUp,
      title: 'Desde 2006 no Mercado',
      description: 'Pioneira no ramo com tradição, experiência e credibilidade na região Sul.'
    },
    {
      icon: Zap,
      title: 'Atendimento Ágil',
      description: 'Compromisso e agilidade para atender suas demandas com eficiência.'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0072BA] via-[#004E9C] to-[#004688]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-blue-200 font-bold text-sm tracking-widest uppercase mb-4">Nossos Diferenciais</span>
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Por Que Escolher a Locadora Sul?
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:-translate-y-3 border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0072BA]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0072BA] to-[#004E9C] text-white rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-xl">
                  <item.icon size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-black text-[#004688] mb-4 leading-tight group-hover:text-[#0072BA] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0072BA]/10 to-transparent rounded-bl-full rounded-tr-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
