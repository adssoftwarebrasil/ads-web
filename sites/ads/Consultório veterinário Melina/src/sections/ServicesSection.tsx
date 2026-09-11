import { useEffect, useRef, useState } from 'react';
import { Syringe, Stethoscope, AlertCircle, Radio, Bird, Bed } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Syringe,
      title: 'Vacinação',
      description: 'Protocolo completo de vacinação para cães, gatos e exóticos',
      image: null,
    },
    {
      icon: Stethoscope,
      title: 'Clínica Veterinária',
      description: 'Consultas, diagnósticos e tratamentos especializados',
      image: null,
    },
    {
      icon: Radio,
      title: 'Raio-X Veterinário',
      description: 'Exames radiológicos com equipamento moderno',
      image: 'https://storage.lucasmendes.dev/site-sp/Consult%C3%B3rio%20veterin%C3%A1rio%20Melina%2FCachorro-Olhando-Para-Seu-RaioX.jpeg',
    },
    {
      icon: Bed,
      title: 'Internação',
      description: 'Ambiente seguro e monitorado para recuperação',
      image: null,
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            Nossos Serviços Especializados
          </h2>
          <p className="text-lg text-secondary-dark/70 max-w-2xl mx-auto">
            Cuidado completo para a saúde e bem-estar do seu pet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white border border-pastel-pink rounded-2xl p-8 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:scale-105 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {service.image ? (
                <div className="mb-6 rounded-xl overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ) : (
                <div className="mb-6 w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
              )}

              <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-secondary-dark/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
