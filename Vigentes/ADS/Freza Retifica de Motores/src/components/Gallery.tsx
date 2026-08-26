import { Instagram } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  span: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Retifica de motor profissional',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Ferramentas especializadas',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/162553/pexels-photo-162553.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Ferramentas de mecânica',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Oficina mecânica completa',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/4315559/pexels-photo-4315559.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
    alt: 'Trabalho de precisão mecânica',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    alt: 'Mecânico trabalhando no motor',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 animate-on-scroll">
          <div>
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Nosso trabalho</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-3 tracking-tight">
              Galeria de <span className="text-brand-red">Serviços</span>
            </h2>
          </div>
          <a
            href="https://www.instagram.com/frezaretifica/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-gray/70 hover:text-white transition-colors text-sm font-medium group flex-shrink-0"
          >
            <Instagram
              className="lucide lucide-instagram group-hover:text-brand-red transition-colors"
              width={18}
              height={18}
            />
            @frezaretifica
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((image, i) => (
            <div
              key={image.src + i}
              className={`animate-on-scroll relative overflow-hidden rounded-xl group ${image.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10 rounded-full bg-brand-red/90 flex items-center justify-center">
                  <Instagram className="lucide lucide-instagram text-white" width={18} height={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10 animate-on-scroll">
          <a
            href="https://www.instagram.com/frezaretifica/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-brand-red text-white hover:text-brand-red px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200"
          >
            <Instagram className="lucide lucide-instagram" width={16} height={16} />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
