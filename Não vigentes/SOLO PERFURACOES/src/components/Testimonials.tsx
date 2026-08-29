import { Quote, Star } from 'lucide-react';

interface Testimonial {
  initials: string;
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    initials: 'JS',
    name: 'João Silva',
    text: '"A SOLO PERFURAÇÕES é a melhor escolha! O atendimento foi excelente e o trabalho, impecável."',
  },
  {
    initials: 'MO',
    name: 'Maria Oliveira',
    text: '"Confiei na SOLO PERFURAÇÕES para meu poço artesiano e não poderia estar mais satisfeita."',
  },
  {
    initials: 'CP',
    name: 'Carlos Pereira',
    text: '"A equipe foi extremamente profissional e o resultado ficou melhor do que esperava."',
  },
  {
    initials: 'AC',
    name: 'Ana Costa',
    text: '"Recomendo a SOLO PERFURAÇÕES para todos que precisam de serviços de perfuração."',
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-4xl font-bold text-primary mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Depoimentos reais de clientes satisfeitos com nossos serviços
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gray-200" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg">{t.name}</h3>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent-yellow text-accent-yellow" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 italic leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
