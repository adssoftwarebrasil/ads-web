import WhatsAppIcon from './WhatsAppIcon';

interface GalleryItem {
  span: string;
  img: string;
  caption: string;
}

const gallery: GalleryItem[] = [
  {
    span: 'col-span-2 row-span-2',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/fachada-hotel-moderno.webp',
    caption: 'Fachada do Calderan Palace Hotel',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/corredor-iluminacao-quadro.webp',
    caption: 'Corredor com iluminação moderna',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/corredor-portas-iluminacao.webp',
    caption: 'Corredor das acomodações',
  },
  {
    span: 'col-span-1 row-span-2',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/lustre-escada-parede.webp',
    caption: 'Hall com lustre decorativo',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/mesa-lanches-doces-salgados.webp',
    caption: 'Mesa de café da manhã completa',
  },
  {
    span: 'col-span-2 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/bolo-coco-leite.webp',
    caption: 'Bolo de coco do café da manhã',
  },
  {
    span: 'col-span-1 row-span-1',
    img: 'https://storage.lucasmendes.dev/site-sp/calderan-palace/bolo-morango-queijo.webp',
    caption: 'Bolo de morango com queijo',
  },
];

export default function Accommodations() {
  return (
    <section id="acomodacoes" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-[1400px]">
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-[#F09100] text-xs uppercase tracking-[2px] font-semibold mb-3">
            NOSSA ESTRUTURA
          </p>
          <h2 className="text-[#1A1A1A] text-3xl lg:text-5xl font-bold mb-4">
            Acomodações com Conforto e Qualidade
          </h2>
          <p className="text-[#4A4A4A] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
            Ambientes planejados para proporcionar a melhor experiência durante sua hospedagem
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[240px]">
          {gallery.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative overflow-hidden rounded-2xl group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500`}
            >
              <img
                src={item.img}
                alt={item.caption}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white text-sm font-medium drop-shadow-lg">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 lg:mt-16">
          <a
            href="https://wa.me/5567996712871?text=Olá!%20Gostaria%20de%20reservar%20minha%20estadia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F09100] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-[#D98200] hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Reserve Sua Estadia pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
