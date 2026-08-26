import { useEffect, useRef, useState } from 'react';

export default function PartnersSection() {
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

  const partners = [
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa10.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa11.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa12.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa13.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa2.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa3.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa4.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa5.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa6.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa7.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa8.jpg',
    'https://storage.lucasmendes.dev/site-sp/balan%C3%A7as%20nova%20era%2Fempresa9.jpg',
  ];

  return (
    <section ref={sectionRef} className="bg-[#F5F9FC] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Revenda e Assistência Técnica
          </h2>
          <p className="text-[#666666] text-lg max-w-2xl mx-auto">
            Trabalhamos com as principais marcas do mercado
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-white border border-[#CCE5F5] rounded-lg p-6 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                filter: 'grayscale(100%)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
              }}
            >
              <img
                src={partner}
                alt={`Parceiro ${index + 1}`}
                className="max-w-full h-auto max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
