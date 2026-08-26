import { Star, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Matheus Monteiro Fontes Fernandes',
      role: 'Cliente',
      text: 'Qualidade, entrega no prazo combinado, atendimento diferenciado! Ficamos muito satisfeitos com toda equipe, todo mundo está de parabéns!',
      rating: 5
    },
    {
      name: 'Madu',
      role: 'Cliente',
      text: 'Foram responsáveis pela id visual da minha empresa! Ficou mais lindo do que imaginei! Qualidade excepcional e entrega dentro do prazo combinado! Estou muito satisfeita e recomendo para todos 🥰',
      rating: 5
    },
    {
      name: 'Millena Luiza',
      role: 'Cliente',
      text: 'Atendimento profissional e de muita qualidade. A logo ficou linda e exatamente como eu queria, com um ótimo acabamento. A entrega foi super rápida! Fiquei muito satisfeita com o resultado!',
      rating: 5
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[rgb(11,9,48)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[rgb(255,204,44)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(210,175,112)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(254,254,254)] mb-6">
            O que nossos clientes <span className="text-[rgb(255,204,44)]">dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(212,212,212)] max-w-3xl mx-auto">
            Depoimentos reais de quem confia na ARCA
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 border-[rgb(255,204,44)]/20 hover:border-[rgb(255,204,44)] transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">
                <Quote className="text-[rgb(255,204,44)] mb-4" size={40} />
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[rgb(255,204,44)] fill-current" size={20} />
                  ))}
                </div>
              </div>

              <p className="text-[rgb(254,254,254)] mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-[rgb(255,204,44)]/20 pt-4">
                <h4 className="text-[rgb(254,254,254)] font-bold">
                  {testimonial.name}
                </h4>
                <p className="text-[rgb(212,212,212)] text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps/place/Arca+Comunica%C3%A7%C3%A3o+Visual/@-18.5943424,-46.5261279,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[rgb(255,204,44)] hover:text-[rgb(210,175,112)] transition-colors font-semibold text-lg"
          >
            Ver mais avaliações no Google
            <Star className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
