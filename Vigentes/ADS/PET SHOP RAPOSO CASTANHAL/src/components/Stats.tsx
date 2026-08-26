import { Clock, Users, Heart, Award } from 'lucide-react';

const stats = [
  { Icon: Clock, value: '9+', label: 'Anos de Experiência' },
  { Icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
  { Icon: Heart, value: '10000+', label: 'Pets Atendidos' },
  { Icon: Award, value: '100%', label: 'Dedicação e Carinho' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[rgb(253,118,22)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4">
                <Icon size={32} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {value}
              </div>
              <div className="text-white/90 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
