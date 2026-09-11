import { Instagram } from 'lucide-react';

interface GalleryItem {
  image: string;
  color: string;
  caption: string;
}

const items: GalleryItem[] = [
  {
    image: '/galeria/branca-frisada.webp',
    color: 'Branca Frisada',
    caption: 'Frisos horizontais que deixam o ambiente leve e atual',
  },
  {
    image: '/galeria/fendi.webp',
    color: 'Fendi',
    caption: 'Tom terroso que aquece paredes claras',
  },
  {
    image: '/galeria/capuccino.webp',
    color: 'Capuccino',
    caption: 'Marrom acinzentado para ambientes aconchegantes',
  },
  {
    image: '/galeria/cinza-claro.webp',
    color: 'Cinza Claro',
    caption: 'Neutro e discreto, perfeito para interiores minimalistas',
  },
  {
    image: '/galeria/cinza-escuro.webp',
    color: 'Cinza Escuro',
    caption: 'Grafite marcante, a porta como destaque do ambiente',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-[#f8f5f1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#DE8F52] font-semibold text-sm uppercase tracking-widest">
            Galeria
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#005143] mt-3 mb-4">
            Veja a Beleza em Cada Ambiente
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-lg">
            As cinco cores da linha WPC Premium instaladas, para você comparar os tons antes de
            escolher.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <figure
              key={item.color}
              className="relative overflow-hidden rounded-2xl group aspect-[16/9] bg-white"
            >
              <img
                src={item.image}
                alt={`Porta WPC Premium na cor ${item.color}`}
                width={1400}
                height={788}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#005143]/90 via-[#005143]/60 to-transparent px-5 pt-10 pb-4">
                <p className="text-white font-bold text-sm">{item.color}</p>
                <p className="text-[#ECC4A4] text-xs mt-0.5 leading-snug">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
          <div className="rounded-2xl aspect-[16/9] bg-[#005143] flex flex-col items-center justify-center text-center px-6">
            <p className="text-white font-bold text-lg leading-snug">
              Quer ver as cores de perto?
            </p>
            <p className="text-[#ECC4A4]/80 text-sm mt-2 mb-4 leading-snug">
              Acompanhe as instalações no nosso Instagram.
            </p>
            <a
              href="https://www.instagram.com/turenportas/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DE8F52] hover:bg-[#c47a40] text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Instagram width={16} height={16} />
              Ver mais no Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
