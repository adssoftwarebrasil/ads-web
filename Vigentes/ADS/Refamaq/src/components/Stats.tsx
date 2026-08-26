import { useScrollAnimation } from '../hooks/useScrollAnimation';

const stats = [
  { value: '30+', label: 'Anos de Experiência', suffix: '' },
  { value: '4', label: 'Estados Atendidos', suffix: '' },
  { value: '30+', label: 'Produtos Fabricados', suffix: '' },
  { value: '5', label: 'Serviços Especializados', suffix: '' },
];

export default function Stats() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="stats" className="bg-[#243b8e] py-12 md:py-16">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-200 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
