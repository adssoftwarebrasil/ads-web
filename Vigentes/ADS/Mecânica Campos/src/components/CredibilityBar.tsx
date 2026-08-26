import { Award, Users, Shield, Clock } from 'lucide-react';

export default function CredibilityBar() {
  const stats = [
    { icon: Award, text: '27+ Anos de Experiência' },
    { icon: Users, text: 'Técnicos Certificados' },
    { icon: Shield, text: 'Garantia Total' },
    { icon: Clock, text: 'Atendimento 24h' }
  ];

  return (
    <section className="bg-[#e1eff5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#152755]" />
              <p className="text-base md:text-lg font-semibold text-[#152755]">
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
