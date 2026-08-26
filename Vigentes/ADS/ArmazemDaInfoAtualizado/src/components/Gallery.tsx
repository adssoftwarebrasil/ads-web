import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Ffrente-da-loja.webp',
      title: 'Fachada da Loja',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Floja-informatica-interior-02.webp',
      title: 'Interior da Loja',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Floja-acessorios-tecnologia-estoque-exposicao-01.webp',
      title: 'Acessórios em Exposição',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Fcomputadores-monitores-teclados-estoque-exposicao.webp',
      title: 'Computadores e Monitores',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Floja-acessorios-tecnologia-estoque-exposicao-02.webp',
      title: 'Variedade de Produtos',
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/armazen%20informatica%2Fimg%2Fprodutos-tecnologia-prateleiras-estoque-exposicao.webp',
      title: 'Produtos Organizados',
    },
  ];

  return (
    <>
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-[rgb(0,168,89)]/10 text-[rgb(0,168,89)] px-4 py-2 rounded-full mb-4">
              <span className="font-semibold">Nossa Loja</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conheça Nosso{' '}
              <span className="text-[rgb(0,168,89)]">Espaço</span>
            </h2>
            <p className="text-lg text-gray-600">
              Uma loja completa com ampla variedade de produtos e estrutura preparada para atender você
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-white font-bold text-xl">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[rgb(0,168,89)] transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
