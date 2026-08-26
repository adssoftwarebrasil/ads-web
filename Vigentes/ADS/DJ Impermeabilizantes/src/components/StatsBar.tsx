import { useState, useEffect, useRef } from 'react';
import { Award, Users, Briefcase, Package } from 'lucide-react';

// Dados estáticos
const stats = [
  {
    raw: 7, // Valor numérico para a animação
    display: '7+', // Como aparece no final
    label: 'Anos de Experiência',
    icone: Award,
  },
  {
    raw: 1500,
    display: '1.500+',
    label: 'Clientes Satisfeitos',
    icone: Users,
  },
  {
    raw: 800,
    display: '800+',
    label: 'Projetos Realizados',
    icone: Briefcase,
  },
  {
    raw: 500,
    display: '500+',
    label: 'Produtos Disponíveis',
    icone: Package,
  },
];

// Componente para animar um item específico
const StatItem = ({ item }: { item: typeof stats[0] }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Dispara a animação apenas quando o elemento entra na tela
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 } // Dispara quando 30% do item estiver visível
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Lógica da contagem (Duração de 2 segundos)
    let start = 0;
    const end = item.raw;
    const duration = 2000;
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, item.raw]);

  const Icon = item.icone;

  return (
    <div 
      ref={ref} 
      className={`text-center group cursor-default transition-all duration-700 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Ícone com efeito Hover */}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#525152] rounded-full mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg">
        <Icon className="text-white transition-colors duration-300 group-hover:text-[#eeb932]" size={32} />
      </div>

      {/* Número Animado */}
      <div className="text-4xl md:text-5xl font-bold text-[#525152] mb-2 tracking-tight tabular-nums">
        {/* Se a contagem terminou, mostra o formato final (com + ou .), senão mostra o número subindo */}
        {count === item.raw ? item.display : count}
      </div>

      {/* Label */}
      <div className="text-sm md:text-base text-[#525152] font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
        {item.label}
      </div>
    </div>
  );
};

export default function StatsBar() {
  return (
    <section className="bg-[#eeb932] py-12 md:py-16 lg:py-20 -mt-12 md:-mt-16 relative z-20 shadow-2xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} item={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}