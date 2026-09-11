import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"Fiquei encantada com a atenção e o conforto das suítes. Uma experiência maravilhosa!"',
    name: 'Ana Oliveira',
  },
  {
    quote: '"Super recomendo! A localização é excelente e os serviços são impecáveis."',
    name: 'Marcelo Santos',
  },
  {
    quote:
      '"Atendimento de primeira e suítes com tudo que precisamos. Com certeza voltarei!"',
    name: 'Julia Pereira',
  },
  {
    quote: '"Um dos melhores locais para estadia em Goiânia. Estou muito satisfeito!"',
    name: 'Ricardo Almeida',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(51,58,114)] mb-4">
            DEPOIMENTOS
          </h2>
          <p className="text-xl text-gray-600 mt-4">Nossos clientes</p>
          <div className="w-24 h-1 bg-[rgb(251,246,199)] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(({ quote, name }) => (
            <div
              key={name}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    width={20}
                    height={20}
                    className="fill-[rgb(251,246,199)] text-[rgb(251,246,199)]"
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">{quote}</p>
              <p className="text-[rgb(51,58,114)] font-bold">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
