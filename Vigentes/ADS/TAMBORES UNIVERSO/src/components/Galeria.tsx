export default function Galeria() {
  const galeriaImages = [
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FNOSSOS%20PRODUTOS.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FNOSSA%20HISTO%CC%81RIA.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FQUALIDADE%20SUPERIOR.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FVARIEDADE%20DE%20TAMANHO%20E%20MODELO.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FPREC%CC%A7OS%20COMPETITIVOS.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FSUSTENTABILIDADE.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FCHAPA%20PEAD%20PARA%20CAC%CC%A7AMBAS%20BASCULANTES.webp',
    'https://storage.lucasmendes.dev/site-sp/tamboresuniverso%2FCHAPA%20PEAD.webp',
  ];

  return (
    <section id="galeria" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#034D9B] mb-6">
            Nossa Galeria de Produtos
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça visualmente nossa variedade de produtos e soluções
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galeriaImages.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer aspect-square"
            >
              <img
                src={image}
                alt={`Produto ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
