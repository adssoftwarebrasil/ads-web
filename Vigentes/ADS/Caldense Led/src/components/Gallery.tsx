import { Camera } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  delay: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-iluminacao-interna-luminarias-diversas-mostruario_1280x575.webp',
    alt: 'Mostruário interno com diversas luminárias',
    caption: 'Showroom completo com produtos em funcionamento',
    delay: '0s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-com-varias-lampadas_1280x575.webp',
    alt: 'Loja com várias lâmpadas LED',
    caption: 'Grande variedade de lâmpadas e modelos',
    delay: '0.05s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-com-variedade-de-produtos_1280x575.webp',
    alt: 'Variedade de produtos de iluminação',
    caption: 'Produtos para todos os segmentos',
    delay: '0.1s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-com-varios-produtos_1280x575.webp',
    alt: 'Loja com vários produtos LED',
    caption: 'Estoque diversificado e a pronta entrega',
    delay: '0.15s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-diversos-modelos-e-lampadas_1280x575.webp',
    alt: 'Diversos modelos e lâmpadas LED',
    caption: 'Diversos modelos para cada necessidade',
    delay: '0.2s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-de-iluminacao-lampadas-pendentes-e-plafon_1280x575.webp',
    alt: 'Lâmpadas pendentes e plafons',
    caption: 'Pendentes e plafons decorativos',
    delay: '0.25s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-caldense-led-promocao-queima-estoque_1280x575.webp',
    alt: 'Promoção e queima de estoque',
    caption: 'Ofertas e promoções imperdíveis',
    delay: '0.3s',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/caldense%20led/img/loja-iluminacao-placa-queima-de-estoque_1280x575.webp',
    alt: 'Placa de queima de estoque',
    caption: 'Queima de estoque com preços especiais',
    delay: '0.35s',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 lg:py-28 bg-[#010101] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#239110]/20 text-[#239110] px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-[#239110]/30">
            <Camera className="lucide lucide-camera" width={14} height={14} />
            Nossa Galeria
          </div>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Conheça nosso <span className="text-[#F9AA0C]">showroom</span>
          </h2>
          <p className="animate-on-scroll text-gray-400 text-lg max-w-2xl mx-auto">
            Venha nos visitar ou acompanhe nossas redes sociais para ver os produtos em detalhes.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((image) => (
            <div
              key={image.src + image.caption}
              className="animate-on-scroll group relative overflow-hidden rounded-xl cursor-pointer"
              style={{ transitionDelay: image.delay }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-40 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium leading-tight">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
