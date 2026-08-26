import { ZoomIn } from 'lucide-react';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainers-empilhados-empilhadeira.webp',
    alt: 'Operação Holanda Transportes 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fconteiner-refrigeracao-transporte.webp',
    alt: 'Operação Holanda Transportes 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontrole-termico-eficiente.webp',
    alt: 'Operação Holanda Transportes 3',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainer-lavanderia-verde.webp',
    alt: 'Operação Holanda Transportes 4',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fguindaste-container-transporte1.webp',
    alt: 'Operação Holanda Transportes 5',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/holandatransportes%2Fcontainer-refrigerado-empilhadeira.webp',
    alt: 'Operação Holanda Transportes 6',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white via-holanda-green/5 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-holanda-gray mb-4">Nossa Operação em Ação</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça nossa estrutura completa de containers, equipamentos e transporte
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <div
              key={image.alt}
              className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-holanda-green/70 via-holanda-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-90">
                  <div className="bg-white rounded-full p-4 shadow-xl">
                    <ZoomIn className="w-8 h-8 text-holanda-green" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-holanda-green to-holanda-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
