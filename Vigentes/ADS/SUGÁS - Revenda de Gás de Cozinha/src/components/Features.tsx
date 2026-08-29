import { Truck, Award, Clock, Users, MapPin, ThumbsUp } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const features = [
  {
    icon: <Truck size={28} />,
    title: 'Entrega Mais Rápida da Cidade',
    description:
      'Nossa frota dedicada garante que o seu gás chegue o mais rápido possível. Sem enrolação, sem demora.',
  },
  {
    icon: <Award size={28} />,
    title: 'Mais de 10 Anos de Experiência',
    description:
      'Desde 2013 no mercado, com uma trajetória construída sobre confiança, qualidade e compromisso real com o cliente.',
  },
  {
    icon: <Clock size={28} />,
    title: 'Horário Ampliado',
    description:
      'Atendemos de segunda a sábado das 6:45 às 19:30 e domingos das 6:45 às 12:30. Estamos aqui quando você precisa.',
  },
  {
    icon: <Users size={28} />,
    title: 'Atendimento Humanizado',
    description:
      'Tratamos cada cliente com atenção e cuidado. Do primeiro pedido ao mais recente, você sempre será bem atendido.',
  },
  {
    icon: <MapPin size={28} />,
    title: 'Toda Rondonópolis',
    description:
      'Atendemos residências, comércios e empresas em qualquer região de Rondonópolis com eficiência e pontualidade.',
  },
  {
    icon: <ThumbsUp size={28} />,
    title: 'Peso Certo, Qualidade Garantida',
    description:
      'Trabalhamos somente com produtos certificados e de procedência confiável. Você paga e recebe exatamente o que merece.',
  },
];

export default function Features() {
  const { ref, inView } = useInView();

  return (
    <section className="py-20 bg-brand-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
            Por que escolher a SUGÁS?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-blue leading-tight">
            Diferenciais que fazem a{' '}
            <span className="text-brand-red">diferença</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base">
            Não somos apenas uma revenda de gás. Somos um serviço essencial em que você pode confiar todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group bg-white border border-brand-gray hover:border-brand-blue/30 rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-brand-blue/10 group-hover:bg-brand-blue flex items-center justify-center mb-5 transition-all duration-300 text-brand-blue group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
