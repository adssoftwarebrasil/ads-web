import { Star } from 'lucide-react'

export const Testimonials = () => {
  const testimonials = [
    { text: 'A Pro Escape é o melhor lugar para cuidar do meu carro. A qualidade dos serviços é impecável!', client: 'Lucas Almeida' },
    { text: 'Recomendo a Pro Escape a todos! Atendimento excelente e muito profissional!', client: 'Maria Santos' },
    { text: 'Serviços rápidos e com preços justos. Sempre volto aqui!', client: 'João Pereira' },
    { text: 'Excelentes profissionais e produtos de qualidade. Fui muito bem atendida!', client: 'Carla Fernandes' },
  ]

  return (
    <section id="depoimentos" className="bg-gray-50 py-24">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-6 py-2 bg-[rgb(254,182,32)]/10 border border-[rgb(254,182,32)] rounded-full text-[rgb(254,182,32)] text-sm font-bold tracking-wider uppercase mb-6">
            Depoimentos
          </span>
          <h2 className="text-5xl lg:text-6xl font-extrabold text-black">
            Nossos Clientes
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-10 rounded-3xl border-l-4 border-[rgb(254,182,32)] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[rgb(254,182,32)] text-[rgb(254,182,32)]" />
                ))}
              </div>
              <p className="text-xl text-gray-700 italic leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <p className="text-lg font-bold text-black">{testimonial.client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
