import { Calendar, Car, Users, Clock } from 'lucide-react';

const stats = [
  { Icon: Calendar, color: 'rgb(215, 40, 42)', value: '44+', label: 'Anos' },
  { Icon: Car, color: 'rgb(43, 162, 204)', value: '1.000+', label: 'Veículos Atendidos' },
  { Icon: Users, color: 'rgb(215, 40, 42)', value: '500+', label: 'Clientes Satisfeitos' },
  { Icon: Clock, color: 'rgb(43, 162, 204)', value: '24h', label: 'Disponibilidade' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-br from-[#00335F] to-[#00335F]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors duration-300">
                  <s.Icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: s.color }} />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-2">{s.value}</p>
              <p className="text-sm md:text-base text-gray-300 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
