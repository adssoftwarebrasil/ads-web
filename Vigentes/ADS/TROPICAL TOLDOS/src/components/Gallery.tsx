import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface GalleryItem {
  src: string;
  label: string;
  span: string;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/tres-modelos-de-coberturas-para-area-externa_2880x2880.webp',
    label: 'Coberturas para Área Externa',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/toldos-diversos-azul-bege-marrom-e-branco_1599x1599.webp',
    label: 'Toldos Coloridos',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/fachada-casa-janela-toldos-policarbonato-pretos_1000x700.webp',
    label: 'Toldos em Policarbonato',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/fachada-predio-azul-com-porta-de-vidro_960x1280.webp',
    label: 'Fachada Comercial',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/tropical%20toldos/galeria/telha-zinco-prateada-textura-ondulada-metal_554x554.webp',
    label: 'Telha Zinco',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tropical%20toldos%2Falteracoes%2F1.jpeg',
    label: 'Garagens em Sombrite',
    span: 'col-span-2 row-span-2',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tropical%20toldos%2Falteracoes%2F2.jpeg',
    label: 'Toldos Retráteis',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tropical%20toldos%2Falteracoes%2F3.jpeg',
    label: 'Policarbonato Alveolar',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tropical%20toldos%2Falteracoes%2F4.jpeg',
    label: 'Projetos Comerciais',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=tropical%20toldos%2Falteracoes%2F5.jpeg',
    label: 'Estruturas Metálicas',
    span: 'col-span-1 md:col-span-2 row-span-1',
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-tropical-blue font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Galeria de Trabalhos
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            Cada projeto é único. Veja alguns dos nossos trabalhos realizados em Primavera do Leste e região.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[250px] gap-3 md:gap-4 grid-flow-dense w-full">
          {items.map((item) => (
            <div
              key={item.label}
              onClick={() => setLightbox(item)}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm hover:shadow-xl transition-shadow ${item.span}`}
            >
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2 text-white text-center px-3">
                  <ZoomIn className="lucide lucide-zoom-in drop-shadow-lg" width={28} height={28} />
                  <span className="text-sm font-semibold drop-shadow-lg">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center w-full flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="inline-flex items-center gap-2 bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-50 font-bold px-10 py-4 rounded-full text-base shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
            Carregar Mais Imagens
          </button>
          <a
            href="http://wa.me/556684533788?text=Olá!%20Vi%20os%20trabalhos%20na%20galeria%20e%20gostaria%20de%20fazer%20um%20orçamento!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-base shadow-md hover:shadow-lg transition-all duration-300"
          >
            Quero um Projeto Assim
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X width={32} height={32} />
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.label}
            className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
