import { useState } from 'react';

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/marmoraria%20anhanguera/img/';

const filters = ['Todos', 'Cozinha', 'Banheiro', 'Escada', 'Sala'];

const projects = [
  { title: 'Cozinha Moderna', category: 'Cozinha', img: 'cozinha-moderna-elegante.webp' },
  { title: 'Banheiro Premium', category: 'Banheiro', img: 'banheiro-moderno-iluminado.webp' },
  { title: 'Ilha Gourmet', category: 'Cozinha', img: 'ilha-cozinha-marmore.webp' },
  { title: 'Escada Elegante', category: 'Escada', img: 'escada-marmore-moderna.webp' },
  { title: 'Lavabo Contemporâneo', category: 'Banheiro', img: 'banheiro-contemporaneo-elegante.webp' },
  { title: 'Bancada Premium', category: 'Cozinha', img: 'bancada-marmore-cozinha.webp' },
  { title: 'Mesa de Jantar', category: 'Sala', img: 'mesa-marmore-preto.webp' },
  { title: 'Espelho com Iluminação', category: 'Banheiro', img: 'espelho-banheiro-iluminado.webp' },
  { title: 'Cozinha Black Premium', category: 'Cozinha', img: 'cozinha-bancada-preta.webp' },
  { title: 'Pia Mármore Branco', category: 'Banheiro', img: 'pia-marmore-branca.webp' },
  { title: 'Pia Pedra Bege', category: 'Banheiro', img: 'pia-pedra-bege.webp' },
  { title: 'Cozinha Minimalista', category: 'Cozinha', img: 'cozinha-moderna-minimalista.webp' },
];

export default function Gallery() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos' ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block mb-4">
            <span className="text-amber-700 font-semibold text-sm uppercase tracking-wider bg-amber-100 px-4 py-2 rounded-full">
              Nossos Projetos
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeria de <span className="text-amber-700">Projetos Realizados</span>
          </h2>
          <p className="text-lg text-gray-600">
            Conheça alguns dos projetos que transformamos em realidade. Cada obra reflete nosso compromisso com a excelência e atenção aos detalhes.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                active === f
                  ? 'px-6 py-2 rounded-full font-semibold transition-all bg-amber-600 text-white shadow-lg'
                  : 'px-6 py-2 rounded-full font-semibold transition-all bg-white text-gray-700 hover:bg-amber-100 border border-gray-200'
              }
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {visible.map((p) => (
            <div
              key={p.title}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src={IMG_BASE + p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-bold text-lg">{p.title}</p>
                  <p className="text-sm text-gray-300">{p.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
