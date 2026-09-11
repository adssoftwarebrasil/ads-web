import { useState } from 'react';

const filters = ['Todos', 'Mapeamento', 'Fotografia', 'Operação', 'Eventos', 'Natureza'];

interface GalleryItem {
  title: string;
  category: string;
  image: string;
}

const items: GalleryItem[] = [
  {
    title: 'Vista Aérea Urbana',
    category: 'Mapeamento',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria/vista-aerea-rua-arvores-transito-durante-dia_1440x960.webp',
  },
  {
    title: 'Captação Noturna',
    category: 'Fotografia',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria/cidade-pequena-vista-aerea-noturna-iluminada_1440x810.webp',
  },
  {
    title: 'Operação em Campo',
    category: 'Operação',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria/drone-comando-controle-paisagem-arvore-plano_1440x1800.webp',
  },
  {
    title: 'Demonstração em Campo',
    category: 'Operação',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria-atualizada/drone-agricola-demonstracao-campo-cana-acucar_1280x853.webp',
  },
  {
    title: 'Pulverização Aérea',
    category: 'Mapeamento',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria-atualizada/drone-pulverizando-campo-plantacao-vista-aerea_1280x853.webp',
  },
  {
    title: 'Sobrevoo ao Entardecer',
    category: 'Natureza',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria-atualizada/drone-sobrevoando-plantacao-verde-vermelha-ao-entardecer_1280x853.webp',
  },
  {
    title: 'Operador em Ação',
    category: 'Operação',
    image:
      'https://storage.lucasmendes.dev/site-sp/ja%20agro%20drones/galeria-atualizada/homem-operando-drone-campo-cana-de-acucar_1280x853.webp',
  },
];

export default function Gallery() {
  const [active, setActive] = useState('Todos');

  const visible = active === 'Todos' ? items : items.filter((i) => i.category === active);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-[#6ab534] text-sm font-bold tracking-widest uppercase mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Cada Imagem,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a8427] to-[#8fd44e]">
              uma história
            </span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Conheça alguns dos trabalhos realizados pela nossa equipe — do campo à natureza, sempre com excelência
            técnica e olhar artístico.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === f
                  ? 'bg-[#4a8427] text-white shadow-lg shadow-[#4a8427]/30'
                  : 'bg-white/[0.07] text-white/60 hover:bg-white/[0.12] hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {visible.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-xl cursor-pointer aspect-[4/3] bg-zinc-900 flex items-center justify-center"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <div className="text-white font-semibold text-base mb-1">{item.title}</div>
                  <div className="text-[#8fd44e] text-xs font-medium uppercase tracking-wider">{item.category}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
