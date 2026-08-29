import { useInView } from '../hooks/useInView';

interface GalleryItem {
  image: string;
  alt: string;
  colSpan: boolean;
  height: number;
}

const gallery: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Frodas-volkswagen-parede.webp',
    alt: 'Rodas Volkswagen',
    colSpan: true,
    height: 400,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fpneus-empilhados-estoque.webp',
    alt: 'Estoque de Pneus',
    colSpan: false,
    height: 300,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fbaterias-carros-loja.webp',
    alt: 'Baterias para Carros',
    colSpan: false,
    height: 300,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rainha%20das%20baterias%2Fimg%2Fpneus-empilhados-loja.webp',
    alt: 'Pneus Empilhados',
    colSpan: true,
    height: 400,
  },
];

export default function Structure() {
  const title = useInView<HTMLHeadingElement>();

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={title.ref}
          className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-black mb-12 lg:mb-16 transition-all duration-800 ${
            title.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Nossa Estrutura
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((item) => (
            <GalleryCard key={item.alt} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item }: { item: GalleryItem }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${
        item.colSpan ? 'md:col-span-2' : ''
      } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transition: '0.8s cubic-bezier(0.4, 0, 0.2, 1)', height: `${item.height}px` }}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[rgb(248,203,27)] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
    </div>
  );
}
