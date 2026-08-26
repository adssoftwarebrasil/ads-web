import { Maximize2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface GalleryItem {
  image: string;
  alt: string;
  title: string;
  span: string;
  delay: string;
}

const items: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/muro-com-concertina_900x1600.webp',
    alt: 'Concertina de proteção instalada em casa',
    title: 'Proteção Residencial',
    span: 'sm:col-span-2 sm:row-span-2',
    delay: '0ms',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/atualizacao/cerca-concertina-predio-urbano_1200x1600.webp',
    alt: 'Cerca de concertina instalada no muro de casa',
    title: 'Concertina em Muro Residencial',
    span: '',
    delay: '150ms',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/galeria/roelos-de-arame-empilhados-em-armazem_4284x5712.webp',
    alt: 'Concertinas empilhadas no armazém',
    title: 'Estoque Disponível',
    span: '',
    delay: '300ms',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/fabrica-de-concertinas-piracicaba/galeria/rolo-arame-farpado-prateado-vista-interna_4284x5712.webp',
    alt: 'Concertina prateada - vista interna',
    title: 'Concertinas Premium',
    span: 'sm:col-span-2',
    delay: '450ms',
  },
];

export default function Gallery() {
  const [headRef, headIn] = useInView<HTMLDivElement>();
  const [gridRef, gridIn] = useInView<HTMLDivElement>(0.1);

  return (
    <section id="galeria" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${
            headIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl lg:text-5xl font-extrabold text-[rgb(37,34,35)] mb-6 tracking-tight">
            Excelência em <span className="text-[rgb(240,27,38)]">Cada Detalhe</span>
          </h2>
          <div className="w-20 h-1.5 bg-[rgb(240,27,38)] mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Confira nossa linha de produtos instalados e a qualidade superior do
            material que entregamos em cada projeto.
          </p>
        </div>
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] gap-4"
        >
          {items.map((item) => (
            <div
              key={item.title}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-gray-100 transition-all duration-500 shadow-sm hover:shadow-2xl ${item.span} ${
                gridIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: item.delay }}
            >
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
                <Maximize2
                  width={32}
                  height={32}
                  strokeWidth={2}
                  className="lucide lucide-maximize2 text-white mb-3 transform scale-50 group-hover:scale-100 transition-transform duration-300"
                />
                <p className="text-white font-bold text-lg">{item.title}</p>
                <span className="text-white/80 text-xs mt-2 uppercase tracking-widest">
                  Ver Detalhes
                </span>
              </div>
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
