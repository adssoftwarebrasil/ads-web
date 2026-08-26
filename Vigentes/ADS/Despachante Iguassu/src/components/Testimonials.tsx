import { Quote, Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Serviço eficiente e muito rápido com atendimento cordial. Recomendo!"',
    name: 'Rodrigo Pedron',
    time: '2 meses atrás',
  },
  {
    text: '"RECOMENDO! Atendimento e trabalho com excelência!"',
    name: 'Tailon Sander',
    time: '2 semanas atrás',
  },
  {
    text: '"Ótimo serviço! Fui atendido rapidamente e todas as dúvidas foram esclarecidas. Excelente profissional."',
    name: 'Anderson Lopes',
    time: '2 meses atrás',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#021D46] mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#FA1213] rounded-2xl flex items-center justify-center shadow-lg">
                <Quote className="text-white" size={24} />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">{testimonial.text}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-[#021D46] text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">Avaliações verificadas do Google</p>
          <a
            href="https://www.google.com/maps/place/Despachante+Iguassu/@-25.493537,-54.545279,15z/data=!4m6!3m5!1s0x94f691ea9c8b2b33:0x9443a77e3e33fae7!8m2!3d-25.493537!4d-54.545279!16s%2Fg%2F11jg0x8y7z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[#021D46] text-white font-semibold rounded-full hover:bg-[#021D46]/90 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Ver Mais Avaliações
          </a>
        </div>
      </div>
    </section>
  );
}
