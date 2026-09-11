import { Quote, Star } from 'lucide-react';

const testimonials: { text: string; name: string; time: string }[] = [
  {
    text: '"Ótimos preços, variedades em mercadorias tudo muito bem organizado."',
    name: 'Dulce Maria',
    time: 'Há 3 meses',
  },
  {
    text: '"Muito bom esse mercado entrega tudo oq a gente pede"',
    name: 'Berrenice Nic',
    time: 'Há 1 mês',
  },
  {
    text: '"Uma localização, ambiente agradável, um bom atendimento, mercadoria de ótima qualidade."',
    name: 'Vilma Batista',
    time: 'Há 5 meses',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-50 text-[rgb(238,27,34)] px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos <span className="text-[rgb(238,27,34)]">clientes</span> dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A satisfação dos nossos clientes é a nossa maior conquista
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 relative border border-gray-100"
            >
              <div className="absolute -top-4 -left-4 bg-[rgb(238,27,34)] p-3 rounded-xl shadow-lg">
                <Quote size={24} className="text-white" />
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">{t.text}</p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 bg-[rgb(238,27,34)] text-white px-8 py-4 rounded-full hover:bg-[rgb(200,20,28)] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
            <Star size={20} />
            Avalie-nos no Google
          </button>
        </div>
      </div>
    </section>
  );
}
