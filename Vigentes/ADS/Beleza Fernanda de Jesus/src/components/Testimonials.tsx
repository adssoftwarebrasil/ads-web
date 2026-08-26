import { Star } from 'lucide-react';
import { WHATSAPP_URL, testimonials } from '../data';

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <span
            className="text-sm font-semibold tracking-wider uppercase"
            style={{ color: 'rgb(210, 212, 211)' }}
          >
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-3">
            Nossos Clientes
          </h2>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-hidden px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">{testimonial.text}</p>
            <div className="font-semibold text-black">{testimonial.name}</div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12 px-4">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Agendar um horário
        </a>
      </div>
    </section>
  );
}
