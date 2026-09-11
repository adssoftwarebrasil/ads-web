import { useState } from 'react';
import { X } from 'lucide-react';

export default function Galeria() {
  const images = [
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F9.jpeg&version_id=null',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F2.jpeg&version_id=null',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F3.jpeg&version_id=null',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F5.jpeg&version_id=null',
    'https://storage.lucasmendes.dev/site-sp/clinicawerneck%2Fatendimento-odontologico-dentista-paciente.jpg',
    'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=clinicawerneck%2FUltima-atualizacao%2F4.jpeg&version_id=null',
  ];

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* Cabeçalho */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-[#003870]/10 text-[#003870] px-4 py-2 rounded-full text-sm font-semibold">
                Conheça nossa clínica
              </span>
            </div>
            <h2 className="text-[#003870] text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Nosso Trabalho
            </h2>
            <p className="text-[#858789] text-lg md:text-xl max-w-2xl mx-auto">
              Tecnologia de ponta e ambiente acolhedor para seu melhor atendimento
            </p>
          </div>

          {/* Grid de imagens SEM cortes */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer bg-[#f7f7f7]"
                onClick={() => setLightboxImage(image)}
              >
                {/* Container com altura fixa mas mostrando imagem completa */}
                <div className="relative w-full h-[280px] md:h-[320px] p-4">
                  <img
                    src={image}
                    alt={`Clínica Werneck - Atendimento ${index + 1}`}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {/* Overlay com hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#003870]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* Ícone de zoom */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-xl">
                      <svg className="w-6 h-6 text-[#003870]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#003870]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl">
                  <p className="text-white text-sm font-semibold">Clique para ampliar</p>
                </div>
              </div>
            ))}
          </div>

          {/* Informação adicional */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-8 bg-[#f1f5f8] px-6 md:px-8 py-6 rounded-2xl">
              <div className="text-center">
                <div className="text-[#003870] text-xl md:text-2xl font-bold mb-1">Tecnologia</div>
                <div className="text-[#858789] text-sm">de Ponta</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#858789]/30"></div>
              <div className="text-center">
                <div className="text-[#003870] text-xl md:text-2xl font-bold mb-1">Ambiente</div>
                <div className="text-[#858789] text-sm">Acolhedor</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-[#858789]/30"></div>
              <div className="text-center">
                <div className="text-[#003870] text-xl md:text-2xl font-bold mb-1">Conforto</div>
                <div className="text-[#858789] text-sm">Total</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox melhorado */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          {/* Botão fechar */}
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            onClick={() => setLightboxImage(null)}
            aria-label="Fechar"
          >
            <X size={28} />
          </button>

          {/* Imagem */}
          <div className="relative max-w-6xl max-h-[90vh] w-full">
            <img
              src={lightboxImage}
              alt="Visualização ampliada da clínica"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Indicação de fechar */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Clique fora da imagem para fechar
          </div>
        </div>
      )}
    </>
  );
}