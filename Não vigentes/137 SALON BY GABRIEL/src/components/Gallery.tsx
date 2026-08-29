const galleryImages = [
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimg2.jpg', alt: 'Trabalho profissional 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimg3.jpg', alt: 'Trabalho profissional 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimg4.jpg', alt: 'Trabalho profissional 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimg5.jpg', alt: 'Trabalho profissional 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimg6.jpg', alt: 'Trabalho profissional 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fimagem1.jpg', alt: 'Trabalho profissional 6' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#002C2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#F8EFE6] mb-4">Nossa Galeria</h2>
          <p className="text-lg md:text-xl text-[#F8EFE6]/80 max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos e transformações incríveis.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-2xl aspect-square shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002C2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
