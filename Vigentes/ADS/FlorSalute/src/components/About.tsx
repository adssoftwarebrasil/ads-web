import { useEffect, useRef, useState } from 'react';
import { Heart, Leaf, Star } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  const features = [
    {
      icon: Heart,
      title: 'Cuidado Humanizado',
      description:
        'Atendimento personalizado com empatia e atenção dedicada a cada paciente',
    },
    {
      icon: Leaf,
      title: 'Abordagem Integrativa',
      description:
        'Técnicas tradicionais e modernas trabalhando em sinergia pelo seu equilíbrio',
    },
    {
      icon: Star,
      title: 'Resultados Reais',
      description:
        'Alívio das dores já nos primeiros atendimentos com foco no equilíbrio natural',
    },
  ];

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-16 md:py-24 bg-white overflow-hidden"
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
            Nossa História
          </h2>
          <div
            className={`w-[60px] h-[3px] bg-gradient-to-r from-[#FFB5B8] to-flor-green mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          ></div>
        </div>

        {/* Grid com texto e imagem */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 items-center">
          {/* Coluna de texto */}
          <div
            className={`space-y-4 text-[#78645C]/80 leading-relaxed transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <p>
              A Clínica RC Flor De Salute nasceu em 2019 com o propósito de
              oferecer um espaço onde saúde, beleza e equilíbrio fossem tratados
              de forma integrativa e holística. O nome foi cuidadosamente
              escolhido para refletir nossa missão: "Flor" simboliza a beleza e
              o crescimento contínuo, enquanto "Salute" - que significa saúde em
              italiano - expressa nosso compromisso com uma vida mais plena,
              harmoniosa e sem dor.
            </p>
            <p>
              Inspirada em promover um cuidado humanizado e acolhedor, cada
              cliente é recebido com empatia e atenção. Nossos tratamentos
              combinam técnicas tradicionais e modernas que trabalham em
              sinergia para trazer equilíbrio e vitalidade, oferecendo uma
              abordagem personalizada que respeita a individualidade e promove o
              bem-estar em todas as dimensões: corpo, mente e espírito.
            </p>
          </div>

          {/* Coluna de imagem */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/flordesalute%2Fmedica-bebe-consultorio.webp"
                alt="Atendimento humanizado na clínica"
                className="w-full h-[400px] md:h-[500px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#78645C]/20 to-transparent"></div>
            </div>
            
            {/* Imagem decorativa menor */}
           
          </div>
        </div>

        {/* Cards de features */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 w-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-[#F5EEEB] to-[#FFDCDE]/30 rounded-2xl p-8 md:p-10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-[#FFB5B8]/20 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-[60px] h-[60px] rounded-full bg-gradient-to-br from-flor-green to-[#4a6b5e] flex items-center justify-center mb-6 shadow-lg">
                <feature.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#78645C] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#78645C]/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;