import { Award, Truck, Clock, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const stats: { icon: LucideIcon; value: string; label: string }[] = [
  { icon: Award, value: '20+', label: 'Anos de Experiência' },
  { icon: Truck, value: '50+', label: 'Equipamentos na Frota' },
  { icon: Clock, value: '7 Dias', label: 'Operação por Semana' },
  { icon: Shield, value: '100%', label: 'Comprometimento com Segurança' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-force-dark-blue text-center mb-16">
          Confiança e Resultados Comprovados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="w-16 h-16 bg-force-yellow/20 rounded-full flex items-center justify-center mx-auto mb-5">
                <Icon className="w-8 h-8 text-force-blue" />
              </div>
              <div className="text-5xl font-bold text-force-dark-blue mb-1">{value}</div>
              <div className="text-base text-slate-600 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
