import { Users, Calendar, Award, UserCheck } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: '+116.530',
      label: 'Contratos Ativos',
    },
    {
      icon: Calendar,
      value: '+25 ANOS',
      label: 'NO MERCADO',
    },
    {
      icon: Award,
      value: 'Empresa',
      label: 'Certificada',
    },
    {
      icon: UserCheck,
      value: '+100 CORRETORES',
      label: 'PARA ATENDÊ-LO',
    },
  ];

  return (
    <section className="py-16 bg-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center group transition-all duration-300 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-neutral-300 uppercase text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
