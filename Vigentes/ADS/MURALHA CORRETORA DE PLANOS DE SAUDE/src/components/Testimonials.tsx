import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Suzy Roberta (Baia)',
      text: 'Corretora com seriedade e excelente serviço, com equipe treinada e capacitada para oferecer o que há de melhor no mercado.',
      rating: 5,
    },
    {
      name: 'Geiza Corretora',
      text: 'Aqui vc e atendido por profissionais que irão lhe proporcionar o melhor pra vc e sua família.',
      rating: 5,
    },
    {
      name: 'Amanda Lúcia',
      text: 'Excelente empresa, confio e recomendo. Ótimos funcionários',
      rating: 5,
    },
    {
      name: 'Claudia Salgado',
      text: 'Todos os funcionários muito educados, atenciosos.tudo de Maravilhoso.',
      rating: 5,
    },
    {
      name: 'Leticia Cibely',
      text: 'Super indico!',
      rating: 5,
    },
    {
      name: 'Maura Santos',
      text: 'Experiência maravilhosa, atendimento excelente, ambiente bastante acolhedor e pessoal sempre pronto para tirar todas as suas dúvidas. Super recomendo!!!',
      rating: 5,
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Depoimentos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl text-neutral-600">
            Nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
            >
              <div className="absolute top-6 right-6 text-primary/10">
                <Quote size={48} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              <p className="text-neutral-700 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-neutral-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-neutral-500">Cliente</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
