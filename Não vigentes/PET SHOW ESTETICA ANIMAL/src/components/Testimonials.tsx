import { Star } from 'lucide-react';

interface Testimonial {
  text: string;
  name: string;
  initial: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'Meu dog ficou lindo após o banho e tosa na Pet Show. Recomendo!',
    name: 'Maria Silva',
    initial: 'M',
    role: 'Cliente',
  },
  {
    text: 'A equipe é incrível, sempre atenciosos com meu gato. Só confio neles!',
    name: 'João Pereira',
    initial: 'J',
    role: 'Cliente',
  },
  {
    text: 'Os produtos são de alta qualidade e meu pet adora!',
    name: 'Ana Oliveira',
    initial: 'A',
    role: 'Cliente',
  },
  {
    text: 'Excelente atendimento e um ambiente acolhedor. Vou voltar sempre!',
    name: 'Carlos Fernandes',
    initial: 'C',
    role: 'Cliente',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#09b588] uppercase tracking-wide mb-4">
            Depoimentos
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Nossos Clientes</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Veja o que nossos clientes têm a dizer sobre nossos serviços
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{t.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#09b588] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
