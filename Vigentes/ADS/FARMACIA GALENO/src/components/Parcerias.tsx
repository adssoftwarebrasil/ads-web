import { Handshake } from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/farmacia%20galeno/marcas%20parceiras/';

const brands = [
  { img: 'ada-tina-logo.webp', alt: 'Ada Tina' },
  { img: 'logo-botica.webp', alt: 'Botica' },
  { img: 'medclub-logo.webp', alt: 'MedClub' },
  { img: 'natures-prime-logo.webp', alt: 'Natures Prime' },
  { img: 'pax-uniao-logo.webp', alt: 'Pax União' },
  { img: 'therapi-logo.webp', alt: 'Therapi' },
];

export default function Parcerias() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[rgb(230,217,182)]/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(95,141,77)] px-4 py-2 rounded-full mb-6">
            <Handshake size={20} className="text-white" />
            <span className="text-white font-semibold">Parcerias</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(40,84,48)] mb-6">Marcas que Confiam em Nós</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Trabalhamos com os melhores fornecedores e laboratórios do mercado para garantir a excelência dos nossos produtos.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {brands.map((brand) => (
            <div
              key={brand.alt}
              className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
            >
              <img
                src={BASE + brand.img}
                alt={brand.alt}
                className="w-full h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(95,141,77)] to-[rgb(40,84,48)] rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Qualidade Garantida</h3>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Selecionamos criteriosamente cada parceiro para oferecer a você produtos da mais alta qualidade, com procedência garantida e eficácia comprovada.
          </p>
        </div>
      </div>
    </section>
  );
}
