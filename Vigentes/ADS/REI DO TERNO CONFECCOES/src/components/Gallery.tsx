import { useState } from 'react';
import { MapPin, ZoomIn, Images, X } from 'lucide-react';

interface GalleryItem {
  image: string;
  alt: string;
  category: string;
  title: string;
}

const GALLERY: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.33%20(1)_ultra.webp',
    alt: 'Coleção Premium - Rei do Terno',
    category: 'Ternos',
    title: 'Coleção Premium',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.33_ultra.webp',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.34%20(1)_ultra.webp',
    alt: 'Esporte Fino - Rei do Terno',
    category: 'Casual',
    title: 'Esporte Fino',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.34_ultra.webp',
    alt: 'Elegância - Rei do Terno',
    category: 'Social',
    title: 'Elegância',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/rei-do-terno%2FWhatsApp%20Image%202025-10-27%20at%2015.22.35_ultra.webp',
    alt: 'Ambiente - Rei do Terno',
    category: 'Loja',
    title: 'Ambiente',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes%2Fimage%20(1774).png&version_id=null',
    alt: 'Detalhes - Rei do Terno',
    category: 'Produtos',
    title: 'Detalhes',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes%2Fimage%20(1775).png&version_id=null',
    alt: 'Detalhes - Rei do Terno',
    category: 'Produtos',
    title: 'Detalhes',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.49%20(2).jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.51%20(1).jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.51.jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.52%20(1).jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.55.jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2016.38.56%20(1).jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2017.30.46.jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
  {
    image:
      'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=rei-do-terno%2Falteracoes2%2FWhatsApp%20Image%202026-03-24%20at%2017.30.48.jpeg&version_id=null',
    alt: 'Variedade - Rei do Terno',
    category: 'Produtos',
    title: 'Variedade',
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section
      id="galeria"
      className="relative py-16 md:py-20 bg-gradient-to-b from-white via-[#FEFEFC] to-white overflow-hidden"
    >
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#417EAD] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div
        className="absolute bottom-20 left-0 w-96 h-96 bg-[#B89E5E] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"
        style={{ animationDelay: '2s' }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#417EAD]/10 rounded-full px-4 py-2 mb-2">
            <MapPin size={16} className="text-[#B89E5E]" />
            <span className="text-sm font-semibold text-[#2D587A]">Centro de Rio Preto</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2D587A]">
            Nossa <span className="text-[#417EAD]">Loja</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B89E5E]"></div>
            <p className="text-base md:text-lg text-gray-600">Conheça nosso espaço de elegância</p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B89E5E]"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {GALLERY.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer h-64 md:h-[450px] w-full"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-2">
                    <div className="inline-block bg-[#B89E5E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.category}
                    </div>
                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-4 scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn size={32} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#417EAD]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 shadow-lg">
            <Images size={20} className="text-[#B89E5E]" />
            <p className="text-gray-700 text-sm">
              <span className="font-bold text-[#2D587A]">15 fotos</span> do nosso ambiente
            </p>
          </div>
        </div>
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>
          <div className="max-w-4xl w-full animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <img
              src={selected.image}
              alt={selected.alt}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <div className="inline-block bg-[#B89E5E] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                {selected.category}
              </div>
              <h3 className="text-white font-bold text-xl mt-2">{selected.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
