interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

const images: GalleryImage[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-1.jpg',
    alt: 'Instalações Louise Pós-Operatório',
    caption: 'Instalações Louise Pós-Operatório',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-9.jpg',
    alt: 'Ambiente de recuperação',
    caption: 'Ambiente de recuperação',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-10.jpg',
    alt: 'Quarto confortável',
    caption: 'Quarto confortável',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-13.jpg',
    alt: 'Área de atendimento',
    caption: 'Área de atendimento',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-18.jpg',
    alt: 'Espaço de cuidados',
    caption: 'Espaço de cuidados',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-19.jpg',
    alt: 'Infraestrutura moderna',
    caption: 'Infraestrutura moderna',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-25.jpg',
    alt: 'Ambiente acolhedor',
    caption: 'Ambiente acolhedor',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Flouise-imagem-local%2FLouise-26.jpg',
    alt: 'Área comum',
    caption: 'Área comum',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Fmais-imagens-internas%2FLouise-6.jpg',
    alt: 'Espaço de recuperação',
    caption: 'Espaço de recuperação',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Fimg-2%2FIMG_6092.JPG',
    alt: 'Área comum',
    caption: 'Área comum',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Fimg-2%2FIMG_6096.JPG',
    alt: 'Área comum',
    caption: 'Área comum',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/LOUISE%20POS%20OPERATORIO%2Fimg-2%2FIMG_6101.JPG',
    alt: 'Área comum',
    caption: 'Área comum',
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-20 md:py-28 bg-gradient-to-br from-[#282E6A] to-[#624A7F]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nossas Instalações
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Conheça nosso espaço confortável e equipado, preparado para sua
            recuperação
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#282E6A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-lg">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
