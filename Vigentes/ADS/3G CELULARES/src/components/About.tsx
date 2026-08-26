import { CheckCircle2, Target, Eye, Heart } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    'Mais de 20 anos de experiência',
    'Assistência técnica especializada',
    'Produtos originais e garantidos',
    'Atendimento humanizado',
  ];

  const values = [
    {
      icon: Target,
      title: 'Missão',
      description: 'Oferecer tecnologia acessível com excelência',
      color: '#00adec',
    },
    {
      icon: Eye,
      title: 'Visão',
      description: 'Ser referência regional em tecnologia móvel',
      color: '#81c227',
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Ética, qualidade e comprometimento',
      color: '#f7cb0c',
    },
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            } transition-all duration-700`}
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#172059] mb-6">
              20 Anos Conectando Pessoas à Tecnologia
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Desde abril de 2005, a 3G Celulares e Informática é referência em Chapecó e região na venda de celulares, acessórios e assistência técnica especializada. Nossa trajetória é construída com compromisso, qualidade e atendimento personalizado.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.5s ease-out ${(index + 2) * 100}ms`,
                  }}
                >
                  <CheckCircle2 className="text-[#81c227] flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#f5f5f5] p-6 rounded-lg hover:shadow-lg transition-all duration-300"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.5s ease-out ${(index + 4) * 100}ms`,
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                      style={{ backgroundColor: value.color }}
                    >
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="font-bold text-[#172059] mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className={`${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            } transition-all duration-700 delay-200`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=3G%2F2024-06-12.webp&version_id=null"
                alt="3G Celulares e Informática"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#172059]/30 to-transparent"></div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-[#172059] to-[#00adec] p-8 rounded-xl text-white">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">20+</div>
                <div className="text-xl">Anos de História</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
