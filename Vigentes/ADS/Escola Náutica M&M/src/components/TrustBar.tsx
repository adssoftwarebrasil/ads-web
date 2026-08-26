import { Award, Users, Waves, Calendar } from 'lucide-react';

export default function TrustBar() {
  const benefits = [
    {
      icon: Award,
      text: 'Certificação Oficial Marinha',
    },
    {
      icon: Users,
      text: 'Instrutores Credenciados',
    },
    {
      icon: Waves,
      text: 'Aulas Práticas no Rio/Lago',
    },
    {
      icon: Calendar,
      text: '+10 Anos de Experiência',
    },
  ];

  return (
    <section id="beneficios" className="py-8 bg-gradient-to-r from-[#26367e] to-[#0caff0]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <benefit.icon className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2} />
              <p className="text-white font-semibold text-sm md:text-base">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
