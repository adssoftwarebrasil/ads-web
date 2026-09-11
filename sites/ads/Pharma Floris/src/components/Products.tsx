import { Package } from 'lucide-react';

const products = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/embalagem-suplemento-abacateiro-pharma-floris_1024x1024.webp',
    name: 'Abacateiro',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/alcachofra-berinjela-pharma-floris-fitoterapico_1024x1024.webp',
    name: 'Alcachofra + Berinjela',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/remedio-amora-fitoterapico-saude-mulher_899x1599.webp',
    name: 'Amora Miura',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/ansiless-fitoterapico-ansiedade-estresse-insonia-tristeza_1024x1024.webp',
    name: 'Ansiless',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/boswellia-fitoterapico-frasco-folhas-resinas-amarelas_899x1599.webp',
    name: 'Boswellia',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/carvao-vegetal-detox-inchaco-digestao-pharmafloris_1024x1024.webp',
    name: 'Carvão Vegetal',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/cha-verde-capsulas-pharmafloris-embalagem-verde_1024x1024.webp',
    name: 'Chá Verde',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/suplemento-citrus-sinensis-beneficios-laranja_1024x1024.webp',
    name: 'Citrus Sinensis',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/embalagem-clorella-fitoterapico-pharmafloris_899x1599.webp',
    name: 'Clorella',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/colageno-tipo-2-pharmafloris-saude-articulacoes_1024x1024.webp',
    name: 'Colágeno Tipo II',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/suplemento-ginseng-pharmafloris-energia-disposicao_1536x1024.webp',
    name: 'Ginseng',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/suplemento-greenselect-pharmafloris-emagrecimento-antioxidante_1024x1024.webp',
    name: 'Greenselect',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/frasco-hibiscus-pharmafloris-flor-vermelha-beneficios_899x1599.webp',
    name: 'Hibiscus',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/macaperuana.jpeg',
    name: 'Maca Peruana',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/embalagem-psyllium-pharmafloris-beneficios-saude_1024x1024.webp',
    name: 'Psillium',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produtos/Vitamina%20C.webp',
    name: 'Vitamina C',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/vitamina-k2-embalagem-osso-beneficios-para-saude_1024x1024.webp',
    name: 'Vitamina K2',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/pharmafloris/produto2/magnesio-pharma-floris-capsulas-beneficios-saude_1024x1024.webp',
    name: 'Magnésio',
  },
];

export default function Products() {
  return (
    <div className="py-20 bg-gray-50" id="products">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-green-100 rounded-full">
              <Package
                width={24}
                height={24}
                className="lucide lucide-package w-8 h-8 text-green-600"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Descubra Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600">
            Na Pharma Floris, oferecemos produtos de alta qualidade para atender
            suas necessidades específicas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {products.map((p) => (
            <div
              key={p.name}
              className="w-full max-w-[500px] h-[600px] bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100"
            >
              <div className="h-[500px] w-full bg-white p-2 flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-[100px] bg-gray-50 flex items-center justify-center border-t border-gray-100 px-4 text-center z-10 relative">
                <h3 className="text-xl font-bold text-gray-800">{p.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
