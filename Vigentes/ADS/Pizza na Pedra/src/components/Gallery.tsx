import { useState } from 'react';

interface GalleryItem {
  image: string;
  label: string;
}

const pizzas: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-quatro-sabores-pepperoni-carne-queijo_3024x4032.webp',
    label: 'Quatro Sabores Premium',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-portuguesa-calabresa-ovos-e-cebola_2993x3419.webp',
    label: 'Portuguesa Especial',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-pepperoni-queijo-caixa-papelao-mesa_3024x4032.webp',
    label: 'Pepperoni',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-bacon-tomate-caixa-mesa-xadrez_2672x1763.webp',
    label: 'Bacon com Tomate',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-meio-a-meio-tomate-e-cogumelo_3024x4032.webp',
    label: 'Meio a Meio',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-quatro-sabores-mesa-xadrez-vermelha_4032x3024.webp',
    label: 'Quatro Sabores',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-variada-com-bacon-no-pano-xadrez_2160x3840.webp',
    label: 'Variada com Bacon',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-tres-sabores-mesa-toalha-xadrez_3024x4032.webp',
    label: 'Três Sabores',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/pizza%20na%20pedra/img2/pizza-metade-molho-tomate-metade-presunto-pessego_3024x4032.webp',
    label: 'Meia a Meia Especial',
  },
];

export default function Gallery() {
  const [tab, setTab] = useState<'pizzas' | 'ambiente'>('pizzas');

  return (
    <section id="cardapio" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-red text-sm font-semibold tracking-[0.25em] uppercase">
            Galeria
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-brand-black mt-3">
            Deixe Seu Paladar Decidir
          </h2>
          <div className="w-16 h-1 bg-brand-red mx-auto mt-4 rounded-full"></div>
          <div className="flex justify-center gap-2 mt-8">
            <button
              onClick={() => setTab('pizzas')}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                tab === 'pizzas'
                  ? 'bg-brand-red text-white shadow-lg shadow-red-900/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Nossas Pizzas
            </button>
            <button
              onClick={() => setTab('ambiente')}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                tab === 'ambiente'
                  ? 'bg-brand-red text-white shadow-lg shadow-red-900/30'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Nosso Ambiente
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {pizzas.map((item, i) => (
            <div
              key={item.label}
              className="group relative rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 opacity-100 scale-100"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <p className="text-gray-500 mb-4">Quer ver mais? Confira nosso cardápio completo!</p>
          <a
            href="http://wa.me/556292358068?text=Olá!%20Gostaria%20de%20ver%20o%20cardápio%20completo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-light text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5"
          >
            Ver Cardápio Completo no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
