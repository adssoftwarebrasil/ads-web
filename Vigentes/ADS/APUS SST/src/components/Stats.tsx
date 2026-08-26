import { Building2, Shield, Clock } from 'lucide-react';

const stats = [
  { icon: Building2, iconClass: 'lucide lucide-building2', value: '500+', label: 'Empresas Atendidas' },
  { icon: Shield, iconClass: 'lucide lucide-shield', value: '100%', label: 'de Conformidade' },
  { icon: Clock, iconClass: 'lucide lucide-clock', value: 'Rápido', label: 'Atendimento' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[rgb(78,20,104)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col justify-center"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="p-3 bg-[rgb(253,144,41)]/10 rounded-full">
                    <Icon size={32} className={`${stat.iconClass} text-[rgb(253,144,41)]`} />
                  </div>
                  <div className="text-4xl font-bold text-[rgb(78,20,104)]">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
