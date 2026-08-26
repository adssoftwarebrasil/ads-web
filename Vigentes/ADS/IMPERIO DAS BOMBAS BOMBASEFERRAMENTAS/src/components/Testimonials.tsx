import { Star } from 'lucide-react';

const testimonials = [
  {
    text: 'Excelente atendimento e produtos de qualidade! Sempre volto quando preciso de ferramentas ou bombas.',
    name: 'João Silva',
    initials: 'JS',
    color: 'bg-imperio-light-blue',
    type: 'Cliente Residencial',
  },
  {
    text: 'Fui muito bem orientada em minha compra. A equipe é atenciosa e entende do assunto. Recomendo!',
    name: 'Maria Oliveira',
    initials: 'MO',
    color: 'bg-imperio-blue',
    type: 'Arquiteta',
  },
  {
    text: 'Entrega rápida e preços que realmente cabem no bolso. Melhor custo-benefício da região!',
    name: 'Ricardo Almeida',
    initials: 'RA',
    color: 'bg-imperio-mid-blue',
    type: 'Construtor',
  },
  {
    text: 'Fiquei muito satisfeita com a variedade de produtos disponíveis. Encontrei tudo que precisava!',
    name: 'Ana Clara',
    initials: 'AC',
    color: 'bg-imperio-light-blue',
    type: 'Engenheira',
  },
];

const Testimonials = () => {
  return (
    <section
      id="depoimentos"
      className="bg-gradient-to-b from-white to-gray-50 py-20 px-4 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="text-imperio-light-blue text-sm font-semibold uppercase tracking-wider mb-2">
            Depoimentos
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-imperio-dark mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <div className="w-24 h-1 bg-imperio-light-blue rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-imperio-dark">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.type}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
