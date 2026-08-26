import { Car, Bike, Shield, Clock, Award, DollarSign, MapPin } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Services() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: Car,
      title: 'Aluguel de Carros',
      description:
        'Frota diversificada de veículos para todos os momentos: passeios e trabalho.',
      benefits: [
        { icon: Shield, text: 'IPVA, seguro, manutenção e rastreamento incluso' },
        { icon: Award, text: 'Carros revisados e higienizados' },
        { icon: Clock, text: 'Atendimento ágil' },
        { icon: DollarSign, text: 'Preços competitivos' },
      ],
      buttonText: 'Ver Carros Disponíveis',
    },
    {
      icon: Bike,
      title: 'Aluguel de Motos',
      description:
        'Frota diversificada de veículos para todos os momentos: passeios e trabalho.',
      benefits: [
        { icon: Shield, text: 'IPVA, seguro, manutenção e rastreamento incluso' },
        { icon: Award, text: 'Motos modernas e econômicas' },
        { icon: Clock, text: 'Manutenção garantida' },
        { icon: DollarSign, text: 'Flexibilidade de planos' },
      ],
      buttonText: 'Ver Motos Disponíveis',
    },
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">Nossos Serviços</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções completas de locação para suas necessidades
          </p>
        </div>

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                <service.icon size={40} className="text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-700">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <benefit.icon size={16} className="text-primary" />
                    </div>
                    {benefit.text}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
              >
                {service.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}