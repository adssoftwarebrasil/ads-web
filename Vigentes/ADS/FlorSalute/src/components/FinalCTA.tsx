import { useEffect, useRef, useState } from 'react';

const FinalCTA = () => {
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

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative py-20 md:py-24 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #A88D83 0%, #FFB5B8 100%)',
      }}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full border-2 border-white animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full border-2 border-white animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 lg:px-15 text-center w-full">
        <h2
          className={`text-[32px] md:text-[44px] font-bold text-white mb-6 leading-tight transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Pronto Para Transformar Sua Saúde?
        </h2>
        <p
          className={`text-white/95 text-base md:text-lg mb-10 max-w-[700px] mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Agende sua consulta e descubra como nossos tratamentos integrativos
          podem trazer equilíbrio, vitalidade e bem-estar para sua vida
        </p>
        <a
          href="https://wa.me/5594991379414?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20RC%20Flor%20De%20Salute."
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block bg-flor-green text-white px-12 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-2xl hover:brightness-110 relative overflow-hidden group ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}
        >
          <span className="relative z-10">Agendar Minha Consulta</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
