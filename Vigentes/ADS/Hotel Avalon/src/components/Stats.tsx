import { useInView } from '../hooks/useInView';

const stats = [
  { value: '10+', label: 'Anos de Experiência' },
  { value: '17', label: 'Suítes Confortáveis' },
  { value: '24h', label: 'Atendimento Disponível' },
  { value: '100%', label: 'Hóspedes Satisfeitos' },
];

export default function Stats() {
  const { ref, inView } = useInView();

  return (
    <section className="bg-navy py-12 border-y border-white/10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-gold font-serif text-4xl sm:text-5xl font-bold mb-1">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
