import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  name: string;
  initials: string;
  text: string;
  service: string;
  rating: number;
}

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Ana Paula Costa',
      initials: 'A.P.C',
      text: 'Excelente atendimento! Resolveram toda a transferência do meu carro em poucos dias. Recomendo!',
      service: 'Transferência de Propriedade',
      rating: 5
    },
    {
      name: 'Carlos Eduardo Silva',
      initials: 'C.E.S',
      text: 'Precisava fazer o primeiro emplacamento do meu veículo e eles foram super rápidos e eficientes. Parabéns!',
      service: 'Primeiro Emplacamento',
      rating: 5
    },
    {
      name: 'Mariana Oliveira',
      initials: 'M.O',
      text: 'Consegui a isenção do IPVA para PCD graças ao atendimento especializado deles. Muito obrigada!',
      service: 'Isenção IPVA PCD',
      rating: 5
    },
    {
      name: 'Roberto Mendes',
      initials: 'R.M',
      text: 'Profissionais sérios e comprometidos. Fizeram meu cadastro ANTT sem complicação. Nota 10!',
      service: 'Cadastro ANTT',
      rating: 5
    },
    {
      name: 'Juliana Santos',
      initials: 'J.S',
      text: 'Atendimento personalizado e sempre disponíveis no WhatsApp. Facilitaram muito minha vida!',
      service: 'Licenciamento Anual',
      rating: 5
    }
  ];

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const next = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section id="depoimentos" className="bg-blue-off-white py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider">
              Depoimentos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-secondary mb-4">
            Nossos Clientes
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage + 2.67)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full lg:w-[calc(33.333%-1.5rem)]"
                >
                  <div className="bg-white border-2 border-blue-pastel rounded-3xl p-9 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all min-h-[320px] relative">
                    <div className="absolute top-6 left-6 text-9xl text-blue-very-light opacity-40 font-serif leading-none">
                      "
                    </div>

                    <div className="relative z-10">
                      <span className="inline-block bg-blue-very-light text-primary px-3.5 py-1.5 rounded-xl text-xs font-semibold mb-3">
                        {testimonial.service}
                      </span>

                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} className="text-accent fill-accent" />
                        ))}
                      </div>

                      <p className="text-gray-700 leading-relaxed italic mb-6 text-base">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-light flex items-center justify-center text-white text-lg font-bold border-3 border-blue-pastel">
                          {testimonial.initials}
                        </div>
                        <div>
                          <div className="font-bold text-secondary text-lg">
                            {testimonial.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xl z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={next}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-accent transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-xl z-10"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2.5 mt-12">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-primary w-8' : 'bg-blue-soft'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
