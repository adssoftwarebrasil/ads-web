import { Heart, Wrench, Tag, Zap, Star, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Differentials() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const differentials = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Tratamos cada cliente com atenção e respeito, entendendo suas necessidades.',
    },
    {
      icon: Wrench,
      title: 'Manutenção Preventiva',
      description: 'Revisões constantes garantem veículos sempre em perfeito estado.',
    },
    {
      icon: Tag,
      title: 'Preços Competitivos',
      description: 'Melhores tarifas da Grande São Luís sem abrir mão da qualidade.',
    },
    {
      icon: Zap,
      title: 'Atendimento Rápido',
      description: 'Processo ágil para você sair dirigindo ou pilotando rapidamente.',
    },
    {
      icon: Star,
      title: 'Frota Moderna',
      description: 'Veículos recentes, econômicos e confiáveis.',
    },
    {
      icon: MapPin,
      title: 'Cobertura Regional',
      description: 'Atendemos em toda grande São Luís.',
    },
  ];

  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-primary-light/5 to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
            Por Que Escolher a MAP Locações?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Benefícios que fazem a diferença
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {differentials.map((diff, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-white/50 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-5">
                <diff.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{diff.title}</h3>
              <p className="text-gray-700 leading-relaxed">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
