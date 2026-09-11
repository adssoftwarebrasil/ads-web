import { Star, Clock, Heart, type LucideIcon } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Star,
    title: '10 Anos de Tradição',
    description:
      'Uma década servindo Anápolis com excelência e comprometimento com nossos clientes.',
  },
  {
    icon: Clock,
    title: 'Agilidade na Entrega',
    description: 'Rapidez que você precisa. Entregamos seus produtos com velocidade e segurança.',
  },
  {
    icon: Heart,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único. Nossa equipe oferece atenção especial para suas necessidades.',
  },
];

export default function Differentials() {
  const title = useInView<HTMLHeadingElement>();

  return (
    <section
      id="diferenciais"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)) center center / cover fixed, url("https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fpneus-empilhados-etiquetas.webp")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 lg:mb-16 transition-all duration-800 ${
            title.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Por Que Escolher a Rainha das Baterias?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, i) => (
            <DifferentialCard key={item.title} item={item} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentialCard({ item, delay }: { item: Differential; delay: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className={`text-center p-10 rounded-xl transition-all duration-800 hover:border-[rgb(248,203,27)] group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${delay}ms`,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(248, 203, 27, 0.2)',
      }}
    >
      <div className="group-hover:scale-110 transition-transform duration-300">
        <Icon size={64} className="text-[rgb(248,203,27)] mx-auto mb-6" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
      <p className="text-white opacity-90 leading-relaxed">{item.description}</p>
    </div>
  );
}
