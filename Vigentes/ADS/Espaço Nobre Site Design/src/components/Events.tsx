import { useState } from 'react';

const filters = [
  'Todos',
  'Casamentos',
  '15 Anos',
  'Aniversários',
  'Infantil',
  'Formatura',
  'Gastronomia',
];

interface EventItem {
  image: string;
  title: string;
  category: string;
}

const events: EventItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fcasamento1.jpeg',
    title: 'Casamento Elegante',
    category: 'Casamentos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Ffesta15anos.jpeg',
    title: 'Festa de 15 Anos',
    category: '15 Anos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Ffesta15anos2.jpeg',
    title: 'Debutante',
    category: '15 Anos',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Ffesta15anos3.jpeg',
    title: 'Aniversário de 15 Anos',
    category: '15 Anos',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=espaconobre%2Fnobrainfantil.jpg',
    title: 'Festa Infantil',
    category: 'Infantil',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fformatura.jpeg',
    title: 'Formatura',
    category: 'Formatura',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fformatura2.jpeg',
    title: 'Festa de Formatura',
    category: 'Formatura',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fformatura3.jpeg',
    title: 'Colação de Grau',
    category: 'Formatura',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/espaconobre%2FBufe2.jpeg',
    title: 'Buffet Sofisticado',
    category: 'Gastronomia',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/espaconobre%2FBufe3.jpeg',
    title: 'Gastronomia Premium',
    category: 'Gastronomia',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/espaconobre%2FBufe4.jpeg',
    title: 'Mesa de Delicias',
    category: 'Gastronomia',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fdecoracao2.jpeg',
    title: 'Decoração Temática',
    category: 'Aniversários',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/espaconobre%2Fdecoracao3.jpeg',
    title: 'Aniversário Especial',
    category: 'Aniversários',
  },
];

export default function Events() {
  const [active, setActive] = useState('Todos');

  const visible =
    active === 'Todos'
      ? events
      : events.filter((e) => e.category === active);

  return (
    <section
      id="eventos"
      className="py-24 bg-gradient-to-b from-amber-50/30 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Celebre Cada{' '}
            <span className="bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent">
              Ocasião Especial
            </span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                active === f
                  ? 'px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                  : 'px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-white text-gray-700 hover:bg-amber-50 border-2 border-amber-200 hover:border-amber-400'
              }
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {visible.map((e) => (
            <div
              key={e.title}
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-amber-100"
            >
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg">
                    {e.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
