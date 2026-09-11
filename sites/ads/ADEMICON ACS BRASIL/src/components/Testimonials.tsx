import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Willian L. Souza',
      role: 'MUTUA-BA - Irecê/BA',
      subtitle: 'Consorciado contemplado pelo lance fixo',
      text: 'Conheci a empresa ACS Brasil pela MUTUA-BA. Para começar o atendimento da empresa é diferenciado, explicando o produto e os detalhes do sistema de consórcio de imóveis de forma esclarecedora e profissional. Além de muito satisfeito, indico para meus amigos e conhecidos. Parabéns.',
      rating: 5
    },
    {
      name: 'Silvia França',
      role: 'Salvador/BA',
      subtitle: '',
      text: 'Para quem procura uma empresa seria e um ótimo profissional recomendo a ACS Brasil, como cliente estou muito satisfeita com o atendimento prestado, Anderson sempre disponível e muito prestativo a nos ajudar. Indico e confio no trabalho da ACS Brasil nota 10!',
      rating: 5
    },
    {
      name: 'Jeneci Vasconcelos Filho',
      role: 'MUTUA-BA - Feira de Santana/BA',
      subtitle: '',
      text: 'Sinto-me totalmente satisfeito em relação ao atendimento da ACS Brasil, principalmente com o Anderson César, que me forneceu todas as informações necessárias e sempre me atendeu com muita atenção e gentileza, desde a negociação até os dias atuais. Recomendo sempre a todos os amigos.',
      rating: 5
    },
    {
      name: 'Tercia Costa Magalhães',
      role: 'Boa Viagem/CE',
      subtitle: '',
      text: 'Excelente atendimento, duvidas esclarecidas! Fiz minha adesão, acreditei e consegui contemplar meu consórcio de imóvel na primeira assembleia pelo sorteio da Loteria Federal.',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Depoimentos
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-12"></div>

        <div className="max-w-7xl mx-auto">
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:scale-105 relative animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(87,168,45)] rounded-full flex items-center justify-center">
                  <Quote className="text-white" size={24} />
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[rgb(253,192,20)] fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow text-sm">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-200 pt-4 mt-auto">
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  {testimonial.subtitle && (
                    <p className="text-xs text-[rgb(87,168,45)] font-semibold mb-1">{testimonial.subtitle}</p>
                  )}
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="md:hidden relative">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-xl relative min-h-[350px]">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[rgb(87,168,45)] rounded-full flex items-center justify-center z-10">
                <Quote className="text-white" size={24} />
              </div>

              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8'
                  }`}
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-[rgb(253,192,20)] fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic leading-relaxed text-sm">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    {testimonial.subtitle && (
                      <p className="text-xs text-[rgb(87,168,45)] font-semibold mb-1">{testimonial.subtitle}</p>
                    )}
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`rounded-full transition-all min-w-[44px] min-h-[44px] flex items-center justify-center ${
                    index === currentIndex
                      ? 'bg-[rgb(87,168,45)]'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Ver depoimento ${index + 1}`}
                  aria-current={index === currentIndex}
                >
                  <span className={`w-3 h-3 rounded-full ${
                    index === currentIndex
                      ? 'bg-white w-8'
                      : 'bg-gray-600'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
