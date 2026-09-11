const gold = 'rgb(192, 160, 98)';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      '"A Gerencial Contábil transformou a gestão financeira da minha loja. Profissionais competentes e sempre disponíveis para esclarecer dúvidas."',
    name: 'Maria Silva',
    company: 'Boutique Elegance',
  },
  {
    quote:
      '"Mais de 5 anos de parceria. O suporte contábil e fiscal é impecável, permitindo que eu foque no crescimento do meu negócio."',
    name: 'João Santos',
    company: 'Tech Solutions DF',
  },
  {
    quote:
      '"Excelente atendimento! A equipe é atenciosa e resolve tudo com agilidade. Recomendo para qualquer empreendedor."',
    name: 'Ana Carolina',
    company: 'Clínica Vida Saudável',
  },
];

function Star() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 20 20" style={{ fill: gold }}>
      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path>
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, company }) => (
            <div key={name} className="bg-white rounded-xl shadow-lg p-8">
              <div className="mb-6">
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">{quote}</p>
              <div>
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-sm text-gray-500">{company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
