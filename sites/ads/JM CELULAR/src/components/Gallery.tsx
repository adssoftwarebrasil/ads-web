interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  large?: boolean;
}

const items: GalleryItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/miniatura-conserto-iphone-bateria-ferramentas_1440x1440.webp',
    alt: 'Reparo de bateria iPhone com ferramentas especializadas',
    caption: 'Troca de bateria iPhone',
    large: true,
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/miniaturas-consertando-celulares-tela-quebrada-mesa_1440x1440.webp',
    alt: 'Conserto de tela quebrada de celular',
    caption: 'Reparo de tela quebrada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/miniaturas-reparando-celulares-abertos-mesa-branca_1440x1440.webp',
    alt: 'Celulares abertos sendo reparados em mesa branca',
    caption: 'Bancada técnica especializada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/miniaturas-trabalhando-consertando-celular-aberto_1440x1440.webp',
    alt: 'Técnico trabalhando em celular aberto',
    caption: 'Mão de obra especializada',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/miniaturas-trabalhando-consertando-placa-mae-celular_1440x1440.webp',
    alt: 'Conserto de placa-mãe de celular',
    caption: 'Reparo de placa-mãe',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/jm-celular/img/fabrica-miniaturizada-funcionarios-testando-celulares_1440x1440.webp',
    alt: 'Funcionários testando celulares reparados',
    caption: 'Controle de qualidade',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#004AAC] font-semibold text-sm tracking-widest uppercase mb-3">
            Nosso trabalho
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Qualidade que Você Pode Ver
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Cada detalhe importa. Nossa bancada técnica é equipada com as melhores ferramentas do
            mercado.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item) => (
            <div
              key={item.caption}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                item.large ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-square ${
                  item.large ? 'md:aspect-auto md:h-full' : ''
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f5c]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-semibold">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
