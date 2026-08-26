import { Star, Quote } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  time: string;
}

const testimonials: Testimonial[] = [
  {
    text: '"Um dos melhores atendimentos que já tive, tirou todas as minhas dúvidas em relação à minha situação e o trabalho foi impecável. Recomendo muito."',
    name: 'Daniela Freitas',
    role: 'Cliente',
    time: 'Há um mês',
  },
  {
    text: '"O atendimento foi excepcional, sempre com cordialidade e clareza, onde deixa o cliente seguro durante todo o processo. Super indico!!!"',
    name: 'Rosana Paula Moutinho',
    role: 'Cliente',
    time: 'Há um mês',
  },
  {
    text: '"Profissionais qualificados, demanda resolvida com máximo louvor. Recomendo fortemente! Dr. Marcos e Dra. Ângela são excepcionais!"',
    name: 'Matheus Gomes',
    role: 'Cliente',
    time: 'Há 4 semanas',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(146,118,47)] font-semibold text-sm tracking-wide uppercase">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(3,74,41)] mt-2 leading-tight">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="lucide lucide-star w-6 h-6 fill-[rgb(153,138,71)] text-[rgb(153,138,71)]"
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-[rgb(3,74,41)]">5.0</span>
            <span className="text-[rgb(8,16,20)]/60">no Google</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-[rgb(249,253,249)] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative group hover:scale-105"
            >
              <Quote className="lucide lucide-quote absolute top-6 right-6 w-12 h-12 text-[rgb(153,138,71)]/20 group-hover:text-[rgb(153,138,71)]/30 transition-colors" />
              <div className="relative z-10">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="lucide lucide-star w-5 h-5 fill-[rgb(153,138,71)] text-[rgb(153,138,71)]"
                    />
                  ))}
                </div>
                <p className="text-[rgb(8,16,20)]/80 leading-relaxed mb-6 text-lg italic">
                  {testimonial.text}
                </p>
                <div className="border-t border-[rgb(3,74,41)]/20 pt-4">
                  <p className="font-bold text-[rgb(3,74,41)] text-lg">{testimonial.name}</p>
                  <p className="text-[rgb(8,16,20)]/60 text-sm">{testimonial.role}</p>
                  <p className="text-[rgb(146,118,47)] text-xs mt-1">{testimonial.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/maps/place/MP+Advocacia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-[rgb(3,74,41)] hover:text-[rgb(46,81,35)] transition-colors font-semibold group"
          >
            <span>Ver Todas as Avaliações no Google</span>
            <Star className="lucide lucide-star w-5 h-5 fill-[rgb(153,138,71)] text-[rgb(153,138,71)] group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
