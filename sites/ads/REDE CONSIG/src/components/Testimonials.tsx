import { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ana Ribeiro',
    text: 'Consegui antecipar meu FGTS com rapidez e sem burocracia. Recomendo a Rede Consig!'
  },
  {
    name: 'Carlos Mendes',
    text: 'Equipe muito atenciosa. Resolveram tudo rapidamente e com transparência. Ótima experiência!'
  },
  {
    name: 'Fernanda Oliveira',
    text: 'As condições do cartão consignado são excelentes. Atendimento impecável!'
  },
  {
    name: 'João Martins',
    text: 'Minha experiência com o empréstimo consignado foi perfeita. Simples, rápido e seguro.'
  }
];

const TestimonialCard = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-white p-10 rounded-2xl shadow-lg">
    <Quote className="text-[#f88601] mb-6" size={40} />

    <p className="text-[#1a1a1a] text-base leading-relaxed italic mb-6">
      "{text}"
    </p>

    <div className="border-t border-[#af9485] pt-6">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-lg font-semibold text-[#eb6601]">{name}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  return (
    <section id="depoimentos" className="bg-[#f9f4ee] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="text-[#f88601] text-sm font-semibold tracking-widest uppercase mb-4">
            Depoimentos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a]">
            Nossos clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={currentIndex + index}
              className="animate-fade-in-up"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {[0, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-[#f88601] w-8' : 'bg-[#af9485]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
