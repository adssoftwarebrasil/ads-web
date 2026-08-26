import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'João Silva',
      text: 'Excelente escola! Instrutores muito atenciosos e didáticos. Consegui minha habilitação de primeira e me sinto seguro para navegar.',
      rating: 5,
    },
    {
      name: 'Maria Santos',
      text: 'A melhor escolha que fiz! A estrutura é ótima e as aulas práticas fazem toda a diferença. Recomendo muito!',
      rating: 5,
    },
    {
      name: 'Pedro Oliveira',
      text: 'Profissionais experientes e comprometidos. O material didático é completo e as aulas são muito bem organizadas.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      text: 'Sempre sonhei em ter minha habilitação náutica e a Escola MM tornou isso realidade. Muito obrigada a toda equipe!',
      rating: 5,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#26367e] mb-4">
            O Que Nossos Alunos Dizem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-16 h-16 text-[#0caff0] opacity-20" />

            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#d4a853] fill-current" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-[#34393a] italic text-center mb-6 leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              <p className="text-[#26367e] font-bold text-center text-xl">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white hover:bg-[#0caff0] text-[#26367e] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white hover:bg-[#0caff0] text-[#26367e] hover:text-white rounded-full p-3 shadow-lg transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#0caff0] w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
