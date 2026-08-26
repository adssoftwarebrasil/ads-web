import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  const testimonials = [
    {
      name: 'Maria Silva',
      initials: 'M.S.',
      text: 'A Balanças Nova Era sempre me atende com qualidade. Sinto confiança em todos os serviços prestados.',
      rating: 5,
    },
    {
      name: 'Lucas Andrade',
      initials: 'L.A.',
      text: 'Os técnicos são super capacitados e sempre me ajudam com mais do que eu espero. Ótimo serviço!',
      rating: 5,
    },
    {
      name: 'Fernanda Oliveira',
      initials: 'F.O.',
      text: 'Estou muito satisfeita com minha balança nova. O atendimento e a qualidade foram nota 10!',
      rating: 5,
    },
    {
      name: 'João Carlos',
      initials: 'J.C.',
      text: 'Tive um atendimento incrível! A equipe solucionou meu problema de forma rápida e profissional. Recomendo!',
      rating: 5,
    },
  ];

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  return (
    <section ref={sectionRef} id="depoimentos" className="bg-[#F5F9FC] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#EA1E26] font-bold text-sm uppercase tracking-wider mb-2 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] mb-4">
            Nossos Clientes
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-600 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div
                    className={`bg-white border-2 border-[#E8F2F9] rounded-3xl p-9 relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      isVisible ? 'animate-fade-in-up' : 'opacity-0'
                    }`}
                    style={{
                      boxShadow: '0 6px 24px rgba(1,98,177,0.08)',
                      animationDelay: `${index * 0.1}s`,
                      minHeight: '300px',
                    }}
                  >
                    <div
                      className="absolute top-4 left-6 text-[#E8F2F9] leading-none select-none"
                      style={{ fontSize: '100px', fontFamily: 'Georgia, serif' }}
                    >
                      &ldquo;
                    </div>

                    <div className="flex gap-1 mb-5 relative z-10">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={22}
                          fill="#FFD700"
                          stroke="#FFD700"
                          className="animate-fade-in"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>

                    <p className="text-[#333333] text-base leading-relaxed italic mb-8 relative z-10">
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4 relative z-10">
                      <div
                        className="w-17 h-17 rounded-full flex items-center justify-center text-white font-bold text-lg border-3 border-[#E8F2F9]"
                        style={{
                          background: 'linear-gradient(135deg, #0162B1, #0178D6)',
                          minWidth: '68px',
                          minHeight: '68px',
                        }}
                      >
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="text-[#000000] font-bold text-lg">
                          {testimonial.name}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#0162B1] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#EA1E26] transition-all shadow-lg z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#0162B1] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#EA1E26] transition-all shadow-lg z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-[#0162B1] w-8' : 'bg-[#CCE5F5]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
