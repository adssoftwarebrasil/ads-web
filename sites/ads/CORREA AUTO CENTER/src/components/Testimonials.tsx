import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  reviews: string;
}

const testimonials: Testimonial[] = [
  { text: '"Excelente lugar para cuidar do seu carro, indico e recomendo."', name: 'Zenilda Correa', reviews: '4 avaliações no Google' },
  { text: '"Ótimo atendimento... ótimos profissionais.... Preço justo"', name: 'Geovani Messias da Silva', reviews: '2 avaliações no Google' },
  { text: '"Confiabilidade transparência qualidade nos serviços carisma"', name: 'Narcizo Correa dos Santos', reviews: '1 avaliações no Google' },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            O Que Dizem Nossos <span className="text-[rgb(207,30,37)]">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja o que eles falam sobre
            nós.
          </p>
          <div className="flex items-center justify-center mt-8 space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-black ml-4">5.0</span>
            <span className="text-gray-600 text-lg">de avaliação média</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative transform hover:-translate-y-2"
            >
              <div className="absolute -top-4 left-8 bg-[rgb(207,30,37)] p-3 rounded-lg shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center mb-4 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">{testimonial.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-black text-lg">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.reviews}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=correa+auto+center+sinop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl border-2 border-gray-200 hover:border-[rgb(207,30,37)]"
          >
            Ver Mais Avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}
