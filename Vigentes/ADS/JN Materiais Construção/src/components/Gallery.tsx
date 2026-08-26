import { useState } from 'react';
import { X } from 'lucide-react';

const images = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ceramica-promocao-loja.webp',
    title: 'Cerâmicas em Promoção',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/expositor-cubas-banheiro.webp',
    title: 'Cubas para Banheiro',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-penduradas-prateleira.webp',
    title: 'Ferramentas Profissionais',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/prateleira-lampadas-loja.webp',
    title: 'Lâmpadas e Iluminação',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/vaso-sanitario-branco.webp',
    title: 'Vasos Sanitários',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/tabela-cores-tintas-cores-e-paredes.webp',
    title: 'Tabela de Cores Tintas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/caixas-chuveiros-loja.webp',
    title: 'Chuveiros',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/discos-abrasivos-ferramentas.webp',
    title: 'Discos Abrasivos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/j%20n%20materiais%20de%20construcao/img/ferramentas-pintura-loja.webp',
    title: 'Ferramentas de Pintura',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      id="galeria"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[rgb(216,27,27)] text-white px-4 py-2 rounded-full text-sm font-semibold">
              Nossa Galeria
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(34,39,69)] mb-6">
            Conheça Nossa Loja e Produtos
          </h2>
          <p className="text-lg text-gray-600">
            Explore nossa variedade de produtos e veja de perto a qualidade que
            oferecemos.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={img.title}
              onClick={() => setSelected(i)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(34,39,69)] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold">{img.title}</h3>
                  <p className="text-sm text-gray-200 mt-1">Clique para ampliar</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected !== null && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white hover:text-[rgb(216,27,27)] transition-colors"
            aria-label="Fechar"
          >
            <X width={40} height={40} />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full"
          >
            <img
              src={images[selected].src}
              alt={images[selected].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
            />
            <p className="text-center text-white text-lg font-bold mt-4">
              {images[selected].title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
