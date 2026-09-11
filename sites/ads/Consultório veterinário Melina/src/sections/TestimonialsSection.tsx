import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
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

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-secondary-dark/70">
            Referência confiável - Bárbara Oliveira
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-white rounded-3xl p-8 sm:p-12 shadow-2xl relative transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="absolute -top-6 left-8 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-xl transform rotate-12">
              <Quote className="w-8 h-8 text-white" />
            </div>

            <div className="flex items-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 text-primary fill-current"
                />
              ))}
            </div>

            <blockquote className="text-lg sm:text-xl text-secondary-dark/80 leading-relaxed mb-8 italic">
              "Ótima profissional.  Levei meu gato lá pela primeira vez, pois estava insatisfeita com o veterinário que o atendia antes e foi a melhor escolha que fiz. A Dra. Melina foi super atenciosa, perguntou todo o histórico dele, esclareceu todas as dúvidas (principalmente sobre o comportamento dele), analisou sinais vitais, etc, coisas que não costumavam ser realizadas no lugar que frequentávamos anteriormente. Dra.Melina é simpática, muito profissional e passou uma tranquilidade imensa para o meu gato, que é extremamente medroso.
Recomendo sem dúvidas."
            </blockquote>

            <div className="flex items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                ZP
              </div>
              <div>
                <h4 className="font-bold text-secondary text-lg">
                  Bárbara Oliveira
                </h4>
                <p className="text-secondary-dark/70">
                  Avaliação de clientes no Google
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 right-8 w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center shadow-xl transform -rotate-12">
              <Quote className="w-8 h-8 text-white transform rotate-180" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
