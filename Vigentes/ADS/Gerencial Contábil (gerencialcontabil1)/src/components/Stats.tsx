import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { Icon: Award, iconClass: 'lucide-award', title: 'Desde 2000', subtitle: '25 Anos de Experiência' },
  { Icon: Users, iconClass: 'lucide-users', title: 'Foco em', subtitle: 'Pequenos Negócios' },
  { Icon: Clock, iconClass: 'lucide-clock', title: 'Atendimento', subtitle: 'Personalizado' },
  { Icon: Shield, iconClass: 'lucide-shield', title: 'Equipe', subtitle: 'Experiente' },
];

export default function Stats() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ Icon, iconClass, title, subtitle }) => (
            <div key={title + subtitle} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgb(241, 241, 241)' }}>
                <Icon className={`lucide ${iconClass}`} width={32} height={32} style={{ color: 'rgb(192, 160, 98)' }} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              <p className="text-gray-600">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
