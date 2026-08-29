import { useEffect, useRef, useState } from 'react';
import { HeartHandshake, Shield, Building2, ArrowRight } from 'lucide-react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: HeartHandshake,
      color: 'primary',
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fsala-espera-moderna.webp',
      title: 'Serviços Funerários Completos',
      description: 'Estrutura moderna, profissionais capacitados e todo suporte necessário para uma despedida digna e respeitosa.',
      link: '#contato',
    },
    {
      icon: Shield,
      color: 'accent',
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Fmaos-dadas-carinho.webp',
      title: 'Planos de Assistência Familiar',
      description: 'Proteja sua família com nossos planos completos. Benefícios desde auxílio funeral até translado para outras cidades.',
      link: '#contato',
    },
    {
      icon: Building2,
      color: 'primary',
      image: 'https://storage.lucasmendes.dev/site-sp/funerariasaopaulo%2Ffuneraria-carros-brancos.webp',
      title: 'Tradição do Grupo Senap',
      description: 'Empresa familiar com gestão direta, ágil e transparente. Comprometimento em proporcionar satisfação e qualidade.',
      link: '#contato',
    },
  ];

  return (
    <section id="servicos" ref={sectionRef} className="bg-neutral-light py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-12 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-neutral-dark font-bold mb-4">
            Serviços Funerários Completos
          </h2>
          <p className="text-lg md:text-xl text-neutral max-w-2xl mx-auto">
            Despeça-se com tranquilidade. Cuidamos de tudo para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute top-4 left-4 w-14 h-14 bg-${service.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-neutral-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral mb-4 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.link}
                  className={`inline-flex items-center gap-2 text-${service.color} hover:text-${service.color}-dark font-semibold transition-colors group/link`}
                >
                  Saiba mais
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
