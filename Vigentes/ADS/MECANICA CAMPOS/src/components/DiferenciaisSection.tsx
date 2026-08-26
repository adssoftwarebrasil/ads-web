import { Building2, Users, Clock } from 'lucide-react';

export default function DiferenciaisSection() {
  const diferenciais = [
    {
      icon: Building2,
      title: 'Estrutura Completa',
      description: 'Oficina equipada para atender veículos de pequeno a grande porte'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Técnicos treinados e mão de obra qualificada'
    },
    {
      icon: Clock,
      title: 'Atendimento Diferenciado',
      description: 'Horário comercial de segunda a sábado e emergencial 24h'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#152755]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {diferenciais.map((item, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <item.icon className="w-16 h-16 mx-auto mb-6 text-white" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-lg text-white/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
