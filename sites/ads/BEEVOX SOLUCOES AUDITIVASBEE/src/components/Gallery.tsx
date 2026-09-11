import { useState } from 'react';

export default function Gallery() {
  // Estado para controlar qual imagem está aberta no modal
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Fgaleria%2FFOTO%201%20GALERIA.jpg&version_id=null',
      alt: 'Equipe BEEVOX em lançamento de produto',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Fgaleria%2FFOTO%202%20GALERIA.jpg&version_id=null',
      alt: 'Campanha de conscientização',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Fgaleria%2FFOTO%206%20GALERIA.jpg&version_id=null',
      alt: 'Equipe BEEVOX e produtos MED-EL',
    },
    {
      url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=beevox%2Falteracoes2%2Fgaleria%2FFOTO%204%20GALERIA.jpg&version_id=null',
      alt: 'Grupo de pessoas reunidas e felizes',
    },
  ];

  return (
    <section id="galeria" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossa <span className="text-[rgb(246,182,31)]">Galeria</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça mais sobre nossa clínica, equipe e os momentos especiais com nossos pacientes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              // Adicionei cursor-pointer para indicar que é clicável
              className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              // Ao clicar, salva a imagem no estado
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco de "Visite Nossa Clínica" mantido igual */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 border border-gray-100 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Visite Nossa Clínica
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Venha conhecer pessoalmente nosso espaço acolhedor e nossa equipe de profissionais
            dedicados. Estamos prontos para recebê-lo!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://wa.me/5565999818250"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[rgb(246,182,31)] text-black px-8 py-4 rounded-full font-semibold hover:bg-[rgb(226,162,11)] transition-all shadow-lg hover:shadow-xl"
            >
              Agendar Visita
            </a>
            <a
              href="https://www.instagram.com/beevox.cuiaba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all"
            >
              Seguir no Instagram
            </a>
          </div>
        </div>
      </div>

      {/* MODAL DE IMAGEM */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-sm transition-opacity"
          // Fecha o modal se o usuário clicar no fundo escuro
          onClick={() => setSelectedImage(null)}
        >
          {/* Botão de Fechar */}
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-[rgb(246,182,31)] transition-colors focus:outline-none"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar galeria"
          >
            <svg className="w-10 h-10 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Imagem em Destaque */}
          <img
            src={selectedImage.url}
            alt={selectedImage.alt}
            // `object-contain` garante que a imagem não seja cortada e se adapte à tela
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-[fadeIn_0.3s_ease-in-out]"
            // O stopPropagation impede que clicar na foto feche o modal
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
}