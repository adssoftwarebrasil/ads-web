export default function FacilityGallery() {
  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Ffachada-imagem-melhorada.jpg',
      alt: 'Fachada da oficina Retocars',
      span: 'md:col-span-2'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fretocars-fachada-oficina-fachada-melhorada.jpg',
      alt: 'Vista externa da oficina',
      span: 'md:col-span-1'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fgalpao-carros-estacionados-dentro-da-oficina.webp',
      alt: 'Interior da oficina',
      span: 'md:col-span-1'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Foficina-carros-estacionados.webp',
      alt: 'Área de trabalho interna',
      span: 'md:col-span-2'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fsistema-tintometrico-tintas-oficina.webp',
      alt: 'Sistema tintométrico de tintas',
      span: 'md:col-span-1'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fproduto-verniz-carro-banner.webp',
      alt: 'Produtos de verniz automotivo',
      span: 'md:col-span-1'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/retocars%2Fcarro-branco-mascarado-para-pintura.webp',
      alt: 'Processo de pintura automotiva',
      span: 'md:col-span-1',
      centerMobile: true // Flag para centralizar no mobile
    }
  ];

  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16 space-y-2 md:space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Venha Conhecer a Retocars
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-gray-400">
            Equipamentos modernos e ambiente profissional para o melhor resultado
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg md:rounded-xl ${image.span} ${
                image.centerMobile ? 'col-span-2 md:col-span-1' : ''
              } aspect-video md:aspect-auto md:h-48 lg:h-64`}
            >
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 md:p-4">
                <p className="text-white font-semibold text-xs md:text-sm lg:text-base">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}