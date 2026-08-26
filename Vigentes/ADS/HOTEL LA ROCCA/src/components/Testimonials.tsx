import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  date: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: '"Lugar muito bom bem localizado"',
    name: 'Keila Cantares',
    date: '19/01/2024',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            O Que Nossos <span className="text-[rgb(190,0,3)]">Hóspedes</span>{' '}
            Dizem
          </h2>
          <div className="h-1 w-32 bg-[rgb(190,0,3)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Avaliações reais de quem já se hospedou conosco
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex gap-2 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={28}
                    className="lucide lucide-star fill-[rgb(190,0,3)] text-[rgb(190,0,3)]"
                  />
                ))}
              </div>
              <p className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                {t.text}
              </p>
              <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                <div>
                  <p className="font-bold text-gray-900 text-lg">{t.name}</p>
                  <p className="text-sm text-gray-500 mt-1">{t.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
