import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface GalleryItem {
  image: string;
  category: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-madeira-piscina.webp',
    category: 'Decks',
    title: 'Deck Comercial Piscina',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-madeira-escadas.webp',
    category: 'Decks',
    title: 'Deck com Escadas',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-madeira-jardim.webp',
    category: 'Decks',
    title: 'Deck para Jardim',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-piso-madeira-homem-jardinagem.webp',
    category: 'Decks',
    title: 'Piso Deck Comercial',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fdecks-comercial-banheira-madeira-escada.webp',
    category: 'Decks',
    title: 'Deck com Banheira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fbanco-madeira-deck.webp',
    category: 'Decks',
    title: 'Banco em Deck',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-madeira-cedrinho.webp',
    category: 'Forros',
    title: 'Forro Cedrinho',
  },
  {
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=EMPORIO%20DO%20DECK%2Fforro-tauari-madeira.webp&version_id=null',
    category: 'Forros',
    title: 'Forro Tauari',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-teto-ripado-madeira.webp',
    category: 'Forros',
    title: 'Forro Teto Ripado',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fforro-parede-madeira-iluminacao.webp',
    category: 'Forros',
    title: 'Forro Parede com Iluminação',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-de-madeira.webp',
    category: 'Portas e Janelas',
    title: 'Porta de Madeira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-madeira-clara.webp',
    category: 'Portas e Janelas',
    title: 'Porta Madeira Clara',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-madeira-natural.webp',
    category: 'Portas e Janelas',
    title: 'Porta Madeira Natural',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-madeira-venezia.webp',
    category: 'Portas e Janelas',
    title: 'Porta Madeira Venezia',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-madeira-quadro.webp',
    category: 'Portas e Janelas',
    title: 'Porta Madeira com Quadro',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fporta-correr-madeira.webp',
    category: 'Portas e Janelas',
    title: 'Porta de Correr',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-2.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal 2',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-3.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal 3',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-4.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal 4',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-5.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal 5',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2FPORTA-COM-ALISAR-E-PORTAL-6.webp',
    category: 'Portas e Janelas',
    title: 'Porta com Alisar e Portal 6',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpergolado-madeira-construcao.webp',
    category: 'Acabamentos',
    title: 'Pergolado em Construção',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpergola-madeira-construcao.webp',
    category: 'Acabamentos',
    title: 'Pérgola em Construção',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpergolado-madeira-varanda.webp',
    category: 'Acabamentos',
    title: 'Pergolado na Varanda',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpergolado-madeira-rede.webp',
    category: 'Acabamentos',
    title: 'Pergolado com Rede',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpergolado-banheira-madeira-deck.webp',
    category: 'Acabamentos',
    title: 'Pergolado com Banheira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fparede-madeira-luzes.webp',
    category: 'Acabamentos',
    title: 'Parede Madeira com Luzes',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fpaineis-madeira-encostados.webp',
    category: 'Acabamentos',
    title: 'Painéis de Madeira',
  },
  {
    image: 'https://storage.lucasmendes.dev/site-sp/EMPORIO%20DO%20DECK%2Fimg%2Fespreguicadeira-madeira.webp',
    category: 'Acabamentos',
    title: 'Espreguiçadeira de Madeira',
  },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['Todos', 'Decks', 'Forros', 'Portas e Janelas', 'Acabamentos'];

  const filteredItems = activeFilter === 'Todos'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  // Fecha o modal com a tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="galeria" className="py-20 bg-offWhite">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos Trabalhos em Madeira</h2>
          <p className="section-subtitle">Veja a qualidade dos nossos produtos aplicados</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`filter-button ${activeFilter === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="gallery-card group cursor-pointer"
              onClick={() => setSelectedImage(item)}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-115"
                />
                <div className="gallery-overlay">
                  <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Otimizado */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botão Fechar - Fixo na tela para fácil acesso */}
            <button
              className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-black/20 hover:bg-white/20 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Fechar"
            >
              <X size={28} />
            </button>

            {/* Container do Conteúdo */}
            <div 
              className="relative max-w-6xl w-full max-h-[95vh] flex flex-col items-center justify-center animate-scale-in" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Container da Imagem */}
              <div className="relative w-auto h-auto flex items-center justify-center overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-[80vh] object-contain" // Garante que a imagem nunca estoure a altura da tela
                />
              </div>

              {/* Informações da Imagem */}
              <div className="text-center mt-4 text-white w-full">
                <h3 className="text-xl md:text-2xl font-bold mb-1">{selectedImage.title}</h3>
                <p className="text-sm md:text-base text-gray-300 font-medium tracking-wide">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}