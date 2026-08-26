import { useEffect, useRef, useState } from 'react';
import {
  Hand,
  Baby,
  Sparkles,
  Activity,
  Zap,
  Heart,
  UserCircle,
  Flower2,
  Apple,
  Brain,
} from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      icon: Hand,
      title: 'Osteopatia Adulto',
      description:
        'Tratamento manual que analisa e avalia o corpo como um todo, restaurando o equilíbrio e aliviando dores',
    },
    {
      icon: Baby,
      title: 'Osteopatia Pediátrica',
      description:
        'Cuidado especializado para recém-nascidos e crianças, tratando torcicolo congênito e assimetria craniana',
    },
    {
      icon: Sparkles,
      title: 'Ozonioterapia',
      description:
        'Terapia inovadora que estimula a regeneração celular e fortalece o sistema imunológico',
    },
    {
      icon: Activity,
      title: 'Pilates',
      description:
        'Fortalecimento físico e emocional através de exercícios controlados e personalizados',
    },
    {
      icon: Zap,
      title: 'Fisioterapia Regenerativa',
      description:
        'Técnicas avançadas incluindo agulhamento a seco, terapia neural e ventosaterapia',
    },
    {
      icon: Heart,
      title: 'Medicina Integrativa',
      description:
        'Abordagem médica que integra o melhor da medicina convencional e complementar',
    },
    {
      icon: UserCircle,
      title: 'Estética Integrativa',
      description:
        'Tratamentos estéticos que respeitam o equilíbrio natural do corpo e promovem beleza de dentro para fora',
    },
    {
      icon: Flower2,
      title: 'Terapias Holísticas',
      description:
        'Hipnose clínica, meditação guiada e massagens terapêuticas para equilíbrio corpo-mente-espírito',
    },
    {
      icon: Apple,
      title: 'Nutrição',
      description:
        'Orientação nutricional personalizada para uma vida mais saudável e equilibrada',
    },
    {
      icon: Brain,
      title: 'Psicologia',
      description:
        'Acompanhamento psicológico para fortalecimento emocional e bem-estar mental',
    },
  ];

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#F5EEEB] overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-[28px] md:text-[40px] font-bold text-[#78645C] mb-4 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Nossos Serviços
          </h2>
          <div
            className={`w-[60px] h-[3px] bg-[#FFB5B8] mx-auto mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
          <p
            className={`text-[#78645C]/80 max-w-[700px] mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Tratamentos focados na restauração do equilíbrio natural do
            organismo, estimulando a regeneração e o alívio das dores
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 md:p-8 hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 border border-[#FFB5B8]/10 group ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + index * 50}ms` }}
            >
              <div className="w-[56px] h-[56px] rounded-full bg-gradient-to-br from-flor-green to-[#4a6b5e] flex items-center justify-center mb-4 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <service.icon size={26} className="text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-[#78645C] mb-3">
                {service.title}
              </h3>
              <p className="text-[#78645C]/80 text-sm md:text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-br from-flor-green to-[#4a6b5e] text-white px-8 py-4 rounded-lg font-semibold text-base hover:brightness-110 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Quero Agendar Minha Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
