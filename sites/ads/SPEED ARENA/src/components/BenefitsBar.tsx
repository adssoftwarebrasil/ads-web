import { Trophy, Target, Waves, Clock } from 'lucide-react';

export default function BenefitsBar() {
  const benefits = [
    {
      icon: Trophy,
      title: '3+ Anos',
      subtitle: 'de Experiência',
    },
    {
      icon: Target,
      title: 'Professores',
      subtitle: 'Qualificados',
    },
    {
      icon: Waves,
      title: 'Quadras Premium',
      subtitle: 'de Areia',
    },
    {
      icon: Clock,
      title: 'Horários',
      subtitle: 'Flexíveis',
    },
  ];

  return (
    <section className="bg-accent-pink py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <benefit.icon className="w-12 h-12 text-primary mb-3" />
              <h3 className="text-2xl font-bold text-primary">{benefit.title}</h3>
              <p className="text-neutral-dark">{benefit.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
