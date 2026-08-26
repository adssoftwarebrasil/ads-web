import { Instagram, ZoomIn, MapPin } from 'lucide-react';

const items = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Agropet%20Imperatriz%2FCasinhas%20de%20madeira.jpg',
    alt: 'Casinhas de madeira resistentes',
    category: 'Conforto',
    caption: 'Casinhas de madeira resistentes',
  },
  {
    src: '/images/gallery/racoes-caes-e-gatos.jpg',
    alt: 'Prateleiras com rações para cães e gatos na Agropet Imperatriz',
    category: 'Rações',
    caption: 'Rações para cães e gatos das melhores marcas',
  },
  {
    src: '/images/gallery/farmacia-veterinaria.jpg',
    alt: 'Farmácia veterinária completa da Agropet Imperatriz',
    category: 'Farmácia',
    caption: 'Farmácia veterinária completa',
  },
  {
    src: '/images/gallery/medicamentos-e-suplementos.jpg',
    alt: 'Medicamentos, suplementos e produtos de higiene para pets',
    category: 'Saúde animal',
    caption: 'Medicamentos, suplementos e higiene',
  },
  {
    src: '/images/gallery/brinquedos-para-pets.jpg',
    alt: 'Painel de brinquedos para cães e gatos',
    category: 'Brinquedos',
    caption: 'Brinquedos para cães e gatos',
  },
  {
    src: '/images/gallery/coleiras-guias-e-peitorais.jpg',
    alt: 'Coleiras, guias e peitorais de diversas cores e tamanhos',
    category: 'Acessórios',
    caption: 'Coleiras, guias e peitorais',
  },
  {
    src: '/images/gallery/vasos-e-jardinagem.jpg',
    alt: 'Vasos, substratos e produtos de jardinagem',
    category: 'Jardinagem',
    caption: 'Vasos, substratos e jardinagem',
  },
  {
    src: '/images/gallery/roupas-para-pets.jpg',
    alt: 'Arara com roupinhas e coletes para cães e gatos',
    category: 'Vestuário',
    caption: 'Roupinhas e coletes para o seu pet',
  },
  {
    src: '/images/gallery/casacos-e-moletons-pet.jpg',
    alt: 'Casacos e moletons para pets em diversos modelos',
    category: 'Vestuário',
    caption: 'Casacos e moletons para os dias frios',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#FD7500] font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <Instagram width={16} height={16} /> Nosso dia a dia
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#005098] mt-2 mb-4">
            Por Dentro da Agropet
          </h2>
          <div className="w-20 h-1.5 bg-[#FD7500] mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma estrutura completa esperando por você. Confira nossos produtos, farmácia e ambientes
            preparados com carinho.
          </p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative break-inside-avoid rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-500 bg-white"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#005098]/90 via-[#005098]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#FD7500] text-xs font-bold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.category}
                </span>
                <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {item.caption}
                </p>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn width={20} height={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/5551989963719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#005098] text-white font-bold rounded-full hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-blue-900/30 hover:-translate-y-1 gap-2"
          >
            <MapPin width={20} height={20} />
            Venha nos visitar pessoalmente
          </a>
        </div>
      </div>
    </section>
  );
}
