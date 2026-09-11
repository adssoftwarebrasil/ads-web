import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Renildo Lopes',
      role: 'Cliente',
      text: 'Qualidade e Rapidez no Serviço... Recomendo!',
      rating: 5,
      avatar: 'RL'
    },
    {
      name: 'Cleber',
      role: 'Cliente',
      text: 'Galera boa e atendimento de qualidade e um ótimo serviço!',
      rating: 5,
      avatar: 'CL'
    },
    {
      name: 'Victor Pessoa Peixoto',
      role: 'Cliente',
      text: 'Ótimo atendimento e preço justo.',
      rating: 5,
      avatar: 'VP'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#01904B] to-[#0379CB] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 relative transform hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-xl p-3 shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-[#01904B] to-[#0379CB] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#01904B]/10 to-[#0379CB]/10 px-8 py-4 rounded-full">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-gray-600">Avaliação Média no Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
