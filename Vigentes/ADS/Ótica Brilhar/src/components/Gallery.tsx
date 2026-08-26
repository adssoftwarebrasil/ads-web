import { InstagramIcon } from './Icons';

type GalleryItem = { image: string; alt: string; span: boolean };

const items: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/mulher-terno-bege-oculos-escuros-sorrindo_1440x1911.webp',
    alt: 'Mulher de terno bege sorrindo com óculos',
    span: true,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/mulher-segurando-oculos-rayban-marrom-unhas-vermelhas_1440x1920.webp',
    alt: 'Óculos Ray-Ban marrom',
    span: false,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/mulher-oculos-autocuidado-dia-internacional-mulher_1080x1440.webp',
    alt: 'Mulher com óculos – autocuidado',
    span: false,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/mulher-roupa-preta-sentada-cadeira-madeira_1440x1911.webp',
    alt: 'Mulher de roupa preta sentada',
    span: true,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/modelo-oculos-carnaval-confete-afro-beijo_1080x1440.webp',
    alt: 'Modelo com óculos no carnaval',
    span: false,
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/otica%20brilhar/img/mulher-oculos-escuros-semana-do-consumidor_1080x1440.webp',
    alt: 'Mulher com óculos escuros',
    span: false,
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[rgb(197,46,52)] font-semibold text-sm uppercase tracking-widest">Galeria</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Estilo que <span className="text-[rgb(197,46,52)]">inspira</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Descubra como nossos óculos transformam looks e expressam personalidades únicas.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 auto-rows-[200px] sm:auto-rows-[240px]">
          {items.map((item) => (
            <div
              key={item.image}
              className={`overflow-hidden rounded-xl group cursor-pointer ${item.span ? 'row-span-2' : ''}`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.instagram.com/oticabrilhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:bg-white/10"
          >
            <InstagramIcon className="w-5 h-5" />
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
