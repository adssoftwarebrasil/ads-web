import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    text: '"Optei pela piscina em vinil e amei o resultado. Ficou linda e o acabamento ficou impecável."',
    name: 'Juliana Costa',
  },
  {
    text: '"Recomendo de olhos fechados. Entregaram no prazo e o custo-benefício foi excelente."',
    name: 'Roberto Silva',
  },
  {
    text: '"Minha piscina com prainha é o ponto alto da casa! Superou todas as expectativas."',
    name: 'Viviane Andrade',
  },
];

const featured = {
  text: '"A equipe foi muito atenciosa, e a piscina ficou exatamente como imaginamos. Um verdadeiro sonho realizado!"',
  name: 'Fernanda Lopes',
};

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 px-6 md:px-12 lg:px-24"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-secondary text-sm uppercase font-semibold mb-4">Depoimentos</p>
          <h2 className="text-4xl md:text-5xl text-primary font-bold font-heading mb-6">
            Nossos clientes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary relative"
            >
              <Quote className="w-12 h-12 text-secondary/20 absolute top-6 left-6" />
              <p className="italic text-gray-700 text-base leading-relaxed mb-6 relative z-10 mt-8">
                {t.text}
              </p>
              <div>
                <p className="font-bold text-primary text-lg mb-2">{t.name}</p>
                <Stars />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-secondary relative max-w-2xl">
            <Quote className="w-12 h-12 text-secondary/20 absolute top-6 left-6" />
            <p className="italic text-gray-700 text-base leading-relaxed mb-6 relative z-10 mt-8">
              {featured.text}
            </p>
            <div>
              <p className="font-bold text-primary text-lg mb-2">{featured.name}</p>
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
