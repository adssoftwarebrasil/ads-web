import { ZoomIn } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  span?: boolean;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-sorrindo-cabelo-novo-salao-beleza_2268x4032.webp',
    alt: 'Cliente satisfeita com novo visual',
    span: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabelo-castanho-longo-com-mechas-em-cadeira_2268x4032.webp',
    alt: 'Mechas em cabelo castanho',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabelo-loiro-ondulado-visto-de-costas_2268x4032.webp',
    alt: 'Cabelo loiro ondulado',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-cabelo-loiro-curto-sal-o-beleza_1288x2290.webp',
    alt: 'Cabelo loiro curto',
    span: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-sorrindo-sal-o-de-beleza-roupa-preta_2268x4032.webp',
    alt: 'Cliente sorrindo no salão',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/esteticista-aplicando-botox-em-paciente-deitado_2268x4032.webp',
    alt: 'Aplicação de botox capilar',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-cabelo-castanho-olhos-verdes-sorrindo_2268x4032.webp',
    alt: 'Resultado final - cabelo castanho',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-loira-sorrindo-colete-azul-claro_2268x4032.webp',
    alt: 'Resultado final - cabelo loiro',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/mulher-sorrindo-vestido-verde-oculos-modernos_2268x4032.webp',
    alt: 'Cliente com novo visual',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/emilia%20hair%20e%20care/galeria/cabeleireira-cortando-cabelo-com-tesoura-e-pente_2268x4032.webp',
    alt: 'Técnica de corte profissional',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding bg-stone">
      <div className="container-custom">
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold"></div>
            <span className="text-gold font-sans text-xs font-medium uppercase tracking-widest">Nosso Trabalho</span>
            <div className="h-px w-10 bg-gold"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light mb-4">
            Galeria de <span className="italic text-gold">Transformações</span>
          </h2>
          <p className="font-sans text-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Cada cliente é única. Cada resultado conta uma história de cuidado, técnica e paixão pela beleza.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[240px] md:auto-rows-[280px] gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className={`gallery-item relative overflow-hidden rounded-xl cursor-pointer group ${
                image.span ? 'row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-stone/0 group-hover:bg-stone/40 transition-all duration-500 flex items-center justify-center">
                <ZoomIn
                  className="lucide lucide-zoom-in text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg scale-75 group-hover:scale-100"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/emiliahairecare"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-white font-sans font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm uppercase tracking-wide hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
