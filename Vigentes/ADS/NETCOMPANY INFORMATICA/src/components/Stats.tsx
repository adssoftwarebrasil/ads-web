import { Users, Award, Shield, Star } from 'lucide-react';

const stats = [
  { icon: <Award size={28} />, value: '15+', label: 'Anos de Experiência' },
  { icon: <Users size={28} />, value: '5.000+', label: 'Clientes Atendidos' },
  { icon: <Shield size={28} />, value: '3 meses ', label: 'de Garantia nos Serviços' },
  { icon: <Star size={28} />, value: '4.8', label: 'Avaliação no Google' },
];

export default function Stats() {
  return (
    <section id="stats" className="bg-[#3069A3] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center group"
            >
              <div className="text-[#F58842] mb-3 transition-transform duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                {stat.value}
              </div>
              <div className="text-blue-100 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
