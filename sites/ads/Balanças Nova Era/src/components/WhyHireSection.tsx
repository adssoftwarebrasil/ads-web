import { useEffect, useRef, useState } from 'react';

export default function WhyHireSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: 'Experiência no Mercado',
      description: 'Mais de 30 anos no setor nos tornam referência em qualidade',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_49_489610204_18045403925378696_5021705914307240742_n.jpg',
    },
    {
      title: 'Responsabilidade e Garantia',
      description: 'Realizamos todos os serviços com total responsabilidade e garantias',
      image: 'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fimgi_50_495042200_18047272481378696_2048203363139672239_n.jpg',
    },

  ];

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Por Que Escolher a Balanças Nova Era?
          </h2>
          <p className="text-[#666666] text-lg max-w-3xl mx-auto">
            Conheça as razões para nos escolher como sua assistência técnica em balanças
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden group cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                aspectRatio: '1/1',
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
              />

              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
                }}
              ></div>

              <div
                className="absolute inset-0 bg-[#0162B1]/0 group-hover:bg-[#0162B1]/30 transition-all duration-500"
              ></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                <h3 className="text-white font-bold text-2xl mb-3 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                  {reason.title}
                </h3>

                <p className="text-white text-base opacity-0 transform translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
