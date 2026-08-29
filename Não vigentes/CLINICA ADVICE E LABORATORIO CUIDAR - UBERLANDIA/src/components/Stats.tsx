import { Award, Armchair, Building2, Microscope } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const STATS = [
  { icon: Award, value: '34+', label: 'Anos de Experiência' },
  { icon: Armchair, value: '200+', label: 'Assentos de Estrutura' },
  { icon: Building2, value: '3', label: 'Certificações ISO' },
  { icon: Microscope, value: '1', label: 'Laboratório Próprio' },
];

export default function Stats() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-20 bg-brand-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/3" />
      </div>

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map(({ icon: Icon, value, label }, index) => (
            <div
              key={label}
              className={`text-center transition-all duration-700 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Icon className="w-10 h-10 text-white/80 mx-auto mb-4" />
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {value}
              </div>
              <div className="text-white/80 font-medium text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
