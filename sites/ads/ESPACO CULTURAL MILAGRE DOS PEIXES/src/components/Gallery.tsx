const images = [
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-4.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-5.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-7.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-10.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-11.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-12.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-13.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-14.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-15.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Fwp-galera-18.webp',
  'https://storage.lucasmendes.dev/site-sp/espacomilagredospeixes%2Ffotos-13-GP-2.png',
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Galeria de <span className="text-[#ED1B24]">Fotos</span>
          </h2>
          <p className="text-lg text-gray-600">
            Momentos especiais capturados no nosso espaço cultural
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={src}
                alt={`Galeria ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">Ver imagem</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
