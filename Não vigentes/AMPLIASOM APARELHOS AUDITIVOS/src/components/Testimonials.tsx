import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Silva',
      role: 'Cliente ampliasom',
      content: 'Estou muito feliz com a equipe e com meu aparelho auditivo novo. Facilidade no atendimento e explicação clara para minha família inteira.',
      initial: 'C',
      rating: 5
    },
    {
      name: 'Ana Oliveira',
      role: 'Cliente ampliasom',
      content: 'Fui muito bem orientada em cada etapa, inclusive pelo WhatsApp. Recomendo para idosos e familiares que procuram um cuidado real.',
      initial: 'A',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      role: 'Cliente ampliasom',
      content: 'Os ajustes foram rápidos e garantiu o funcionamento perfeito do meu aparelho. Muito grato a toda equipe!',
      initial: 'R',
      rating: 5
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quem já confia na <span className="text-[#007E7A]">Amplia</span><span className="text-[#ED0180]">Som</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja o que clientes dizem sobre nossos produtos e atendimento humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#007E7A] relative"
            >
              <div className="absolute top-6 right-6 text-[#007E7A] opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16" />
              </div>

              <div className="relative">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ED0180] text-[#ED0180]" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#007E7A] to-[#ED0180] flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5561994174249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#007E7A] to-[#ED0180] text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Falar com especialista
          </a>
        </div>
      </div>
    </section>
  );
}
