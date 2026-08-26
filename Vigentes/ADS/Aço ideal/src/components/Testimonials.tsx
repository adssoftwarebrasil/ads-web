import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'João Silva',
    text: 'Ótimo atendimento e rapidez na entrega! Sempre recomendo a Aços Ideal.',
    rating: 5
  },
  {
    name: 'Maria Oliveira',
    text: 'Produtos de excelente qualidade. Nunca tive problemas com as compras.',
    rating: 5
  },
  {
    name: 'Carlos Mendes',
    text: 'Fui muito bem atendido. Recomendo a quem precisa de produtos de aço.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    text: 'Ótima variedade de produtos e preços justos. Voltarei a comprar.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(70,70,70)] mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600">
            Satisfação garantida em cada projeto
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow relative"
            >
              <Quote size={40} className="text-[rgb(238,51,52)] opacity-20 absolute top-4 right-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[rgb(245,158,11)] text-[rgb(245,158,11)]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[rgb(63,63,152)] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-[rgb(70,70,70)]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
