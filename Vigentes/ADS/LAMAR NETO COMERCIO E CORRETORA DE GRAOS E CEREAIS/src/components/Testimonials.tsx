import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'João Silva',
    role: 'Gerente de Compras - Indústria Alimentícia',
    text: 'Qualidade e atendimento excepcionais! Sempre confio na Lamar Neto para minhas necessidades de grãos.',
    avatarColor: '#688631'
  },
  {
    name: 'Maria Oliveira',
    role: 'Proprietária - Fábrica de Ração',
    text: 'Os grãos são sempre de excelente qualidade e a entrega é rápida. Recomendo!',
    avatarColor: '#a2c145'
  },
  {
    name: 'Carlos Ferreira',
    role: 'Diretor de Operações - Confinamento',
    text: 'Transparência e profissionalismo definem a Lamar Neto. Cliente fiel há anos.',
    avatarColor: '#faa431'
  },
  {
    name: 'Ana Souza',
    role: 'Compradora - Cooperativa Agrícola',
    text: 'Ótimos preços e suporte ao cliente. A Lamar Neto é minha primeira escolha.',
    avatarColor: '#324422'
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 h-full flex flex-col">
      <div className="text-[#a2c145] text-5xl md:text-6xl lg:text-7xl opacity-20 font-serif leading-none mb-3 md:mb-4" aria-hidden="true">
        &ldquo;
      </div>

      <div className="flex gap-1 mb-4 md:mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-[#fbbf1f] text-[#fbbf1f]" />
        ))}
      </div>

      <p className="text-[#383838] text-sm md:text-base leading-relaxed mb-6 md:mb-8 flex-grow">
        {testimonial.text}
      </p>

      <div className="border-t border-[#e6e6e6] pt-4 md:pt-6">
        <div className="flex items-center gap-3 md:gap-4">
          <div
            className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: testimonial.avatarColor }}
          >
            <User className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" />
          </div>
          <div>
            <div className="text-[#324422] text-base md:text-lg font-semibold">
              {testimonial.name}
            </div>
            <div className="text-[#999999] text-xs md:text-sm">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useState(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  });

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section id="depoimentos" className="bg-[#324422] py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-block bg-[#fbbf1f] text-[#383838] px-4 md:px-5 py-1.5 rounded-full text-xs md:text-sm font-semibold uppercase mb-3 md:mb-4" style={{ letterSpacing: '1px' }}>
            Depoimentos
          </div>
          <h2 className="text-white text-2xl md:text-3xl lg:text-[42px] font-semibold px-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6 lg:gap-8"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `calc(${100 / itemsPerPage}% - ${(itemsPerPage - 1) * (itemsPerPage === 1 ? 16 : itemsPerPage === 2 ? 24 : 32) / itemsPerPage}px)` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-[#324422] w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center hover:bg-[#fbbf1f] transition-colors shadow-lg hidden md:flex"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white text-[#324422] w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center hover:bg-[#fbbf1f] transition-colors shadow-lg hidden md:flex"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8 lg:mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-[#fbbf1f] w-6 md:w-8'
                  : 'bg-white opacity-40 hover:opacity-60 w-2 md:w-3'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botões de navegação mobile */}
        <div className="flex justify-center gap-4 mt-6 md:hidden">
          <button
            onClick={prevSlide}
            className="bg-white text-[#324422] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#fbbf1f] transition-colors shadow-lg"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="bg-white text-[#324422] w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#fbbf1f] transition-colors shadow-lg"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}