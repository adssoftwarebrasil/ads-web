import { useState } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const depoimentos = [
  {
    text: 'Ambiente limpo e confortável, com preços justos. O atendimento do Dr. Victor (cardiologista) foi excepcional, muito atencioso e profissional.',
    author: 'Maria Santos',
    rating: 5,
  },
  {
    text: 'A Dra. Giovana (pediatra) é maravilhosa com as crianças. Meu filho se sente seguro e bem cuidado em todas as consultas. Recomendo!',
    author: 'João Silva',
    rating: 5,
  },
  {
    text: 'Melhor custo-benefício da cidade! Não preciso mais enfrentar filas do SUS. Equipamentos modernos e equipe preparada.',
    author: 'Ana Paula',
    rating: 5,
  },
];

export default function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4a3e] mb-4">
            O Que Nossos Pacientes Dizem
          </h2>
          <p className="text-lg md:text-xl text-[#a6a9a5] max-w-3xl mx-auto">
            Histórias reais de quem confia na gente
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#f37f1a]"
            >
              <Quote size={40} className="text-[#f37f1a] mb-4" />
              <p className="text-[#2d4a3e] text-lg mb-6 leading-relaxed">
                "{depoimento.text}"
              </p>
              <div className="flex items-center gap-1 mb-4">
                {[...Array(depoimento.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#f37f1a] text-[#f37f1a]" />
                ))}
              </div>
              <p className="text-[#2d4a3e] font-semibold">
                {depoimento.author}
              </p>
            </div>
          ))}
        </div>

        <div className="lg:hidden relative">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#f37f1a] mb-6">
            <Quote size={40} className="text-[#f37f1a] mb-4" />
            <p className="text-[#2d4a3e] text-lg mb-6 leading-relaxed">
              "{depoimentos[currentIndex].text}"
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(depoimentos[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-[#f37f1a] text-[#f37f1a]" />
              ))}
            </div>
            <p className="text-[#2d4a3e] font-semibold">
              {depoimentos[currentIndex].author}
            </p>
          </div>

          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevTestimonial}
              className="bg-[#f37f1a] text-white p-3 rounded-full hover:bg-[#d97015] transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#f37f1a] w-8'
                      : 'bg-[#a6a9a5] hover:bg-[#f37f1a]'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="bg-[#f37f1a] text-white p-3 rounded-full hover:bg-[#d97015] transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
