const brands = [
  { alt: 'Logo Chevrolet', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Fsimbolo-dourado-chevrolet.webp' },
  { alt: 'Logo Fiat', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogotipo-fiat.webp' },
  { alt: 'Logo Ford', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogotipo-ford-azul.webp' },
  { alt: 'Logo Honda', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogotipo-honda.webp' },
  { alt: 'Logo Hyundai', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogotipo-hyundai-azul.webp' },
  { alt: 'Logo Kia', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Fkia-motors-logo.webp' },
  { alt: 'Logo Mitsubishi', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogo-mitsubishi-vermelho.webp' },
  { alt: 'Logo Nissan', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogotipo-prata-nissan.webp' },
  { alt: 'Logo Renault', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogo-renault-fundo-branco.webp' },
  { alt: 'Logo Toyota', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogo-toyota-vermelho.webp' },
  { alt: 'Logo Volkswagen', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Flogo-volkswagen-azul.webp' },
  { alt: 'Logo Audi', src: 'https://storage.lucasmendes.dev/site-sp/uniao-engates%2Fmarcas%2Ftexto-audi-vermelho.webp' },
];

export default function Brands() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-14">
        <h2 className="text-[rgb(175,11,18)] text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 lg:mb-20">
          Engates para as Marcas:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10">
          {brands.map((b) => (
            <div
              key={b.alt}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-8 md:p-10 flex items-center justify-center border border-gray-100 hover:border-[rgb(175,11,18)]/20 min-h-[140px] md:min-h-[160px]"
            >
              <img
                src={b.src}
                alt={b.alt}
                className="w-full max-w-[110px] md:max-w-[140px] lg:max-w-[150px] h-auto object-contain transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
