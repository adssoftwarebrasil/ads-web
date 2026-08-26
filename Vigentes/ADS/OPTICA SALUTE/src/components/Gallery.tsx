const images = [
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-prada-espelhado-rosto-foco_1080x1919.webp', alt: 'Óculos Prada espelhado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-miu-miu-estojo-veludo-rosa_1440x1920.webp', alt: 'Óculos Miu Miu estojo veludo rosa' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-tom-ford-marrom-foco-seletivo_1440x1920.webp', alt: 'Óculos Tom Ford marrom' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-aviador-dourado-camisa-preta_1440x1920.webp', alt: 'Mulher óculos aviador dourado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-rayban-branco-estojo-couro-marrom_1440x1920.webp', alt: 'Ray-Ban branco estojo couro' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/homem-oculos-espelhados-dourados-expressao-serena_1440x1920.webp', alt: 'Homem óculos espelhados dourados' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-prada-pendurados-em-galho-seco_1440x1920.webp', alt: 'Óculos Prada em galho seco' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-escuros-blazer-preto-e-jeans_1440x1920.webp', alt: 'Mulher óculos escuros blazer preto' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-tiffany-disco-ball-caixa-azul_1080x1919.webp', alt: 'Óculos Tiffany disco ball' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mao-segurando-oculos-tom-ford-marrom_1440x1920.webp', alt: 'Mão segurando óculos Tom Ford' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-bon-verde-oculos-escuros-colares_1440x1920.webp', alt: 'Mulher bon verde óculos escuros' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-sol-vintage-mesa-madeira-flores_1692x3008.webp', alt: 'Óculos sol vintage mesa madeira' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/mulher-oculos-revista-elle-deitada-chao_1440x1920.webp', alt: 'Mulher óculos revista Elle' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/oculos-cinza-oakley-sobre-superficie-texturizada_1080x1918.webp', alt: 'Óculos cinza Oakley' },
  { src: 'https://storage.lucasmendes.dev/site-sp/optica%20salute/galeria/homem-sorrindo-oculos-escuros-camisa-branca_1068x1424.webp', alt: 'Homem sorrindo óculos escuros' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 lg:py-32" style={{ backgroundColor: 'rgb(240, 238, 239)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-reveal text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ backgroundColor: 'rgba(223, 209, 162, 0.5)', color: 'rgb(80, 4, 4)' }}
          >
            Galeria
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ color: 'rgb(53, 59, 59)' }}
          >
            Descubra seu <span style={{ color: 'rgb(80, 4, 4)' }}>próximo favorito</span>
          </h2>
          <p
            className="text-base lg:text-lg max-w-xl mx-auto"
            style={{ color: 'rgb(99, 99, 97)', lineHeight: 1.7 }}
          >
            Uma seleção dos nossos modelos mais exclusivos. Clique para ampliar e se inspire para o
            seu próximo look.
          </p>
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {images.map((image) => (
            <div
              key={image.src}
              className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full gallery-img object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="http://wa.me/556135424555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: 'rgb(80, 4, 4)', color: 'rgb(223, 209, 162)' }}
          >
            Ver Mais no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
