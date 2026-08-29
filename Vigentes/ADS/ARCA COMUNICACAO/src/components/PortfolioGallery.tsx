import { useState } from 'react';
import { X } from 'lucide-react';

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fagrocontar.png',
      title: 'Agrocontar'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fcacaushow.png',
      title: 'Cacau Show'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fhonda.png',
      title: 'Honda'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fkopenhage.png',
      title: 'Kopenhagen'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fmcdonalds.png',
      title: "McDonald's"
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fnatura.png',
      title: 'Natura'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fortobom.png',
      title: 'Ortobom'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fouroverde.png',
      title: 'Ouro Verde'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Ftxc.png',
      title: 'TXC'
    },
    {
      url: 'https://storage.lucasmendes.dev/site-sp/arca%20comunicacao%2Falteracoes%2Fnovas-logos%2Fusarflex.png',
      title: 'Usaflex'
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-gradient-to-b from-[rgb(212,212,212)]/20 to-[rgb(254,254,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(11,9,48)] mb-6">
            Nosso <span className="text-[rgb(255,204,44)]">Legado:</span><br />
            Marcas que Confiam
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(30,30,30)] max-w-3xl mx-auto">
            Trabalhamos com marcas que não aceitam o comum. Nosso portfólio é a prova da nossa capacidade técnica e compromisso com o resultado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-sm group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(11,9,48)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-[rgb(254,254,254)] font-bold text-lg">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[rgb(255,204,44)] transition-colors p-2 bg-[rgb(11,9,48)]/50 rounded-full"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}