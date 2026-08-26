import { useState } from 'react';
import { Image as ImageIcon, Sparkles, Plus, Minus } from 'lucide-react';

type GalleryItem = {
  src: string;
  category: string;
  title: string;
  portrait?: boolean;
};

const items: GalleryItem[] = [
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo1.jpeg', category: 'Casamento', title: 'Convite Elegante' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo2.jpeg', category: 'Casamento', title: 'Acabamento Premium' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo3.jpeg', category: 'Evento Social', title: 'Design Sofisticado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo4.png', category: 'Casamento', title: 'Hot-Stamping Dourado' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo5.png', category: 'Evento Social', title: 'Detalhes Exclusivos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fbrelevo6.jpg', category: 'Casamento', title: 'Personalização Completa' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fgaleria%2Fchinelo-madrinha-casamento.webp', category: 'Acessórios', title: 'Chinelo Madrinha' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fgaleria%2Fconvite-aniversario-40.webp', category: 'Social', title: 'Aniversário 40 Anos' },
  { src: 'https://storage.lucasmendes.dev/site-sp/Brelevo%2Fgaleria%2Fconvite-branco-dourado.webp', category: 'Casamento', title: 'Branco e Dourado' },
];

const extraItems: GalleryItem[] = [
  { src: '/galeria/20150526-084525.webp', category: 'Casamento', title: 'Relevo Clássico Branco' },
  { src: '/galeria/20150526-084538.webp', category: 'Casamento', title: 'Fita e Monograma' },
  { src: '/galeria/20150526-084552.webp', category: 'Casamento', title: 'Relevo Delicado' },
  { src: '/galeria/20150526-084609.webp', category: 'Casamento', title: 'Acabamento em Cetim' },
  { src: '/galeria/20150526-084621.webp', category: 'Casamento', title: 'Monograma em Relevo' },
  { src: '/galeria/20150526-084628.webp', category: 'Casamento', title: 'Envelope Personalizado' },
  { src: '/galeria/20150526-084640.webp', category: 'Casamento', title: 'Detalhe em Strass' },
  { src: '/galeria/20150526-084653.webp', category: 'Casamento', title: 'Convite Tradicional' },
  { src: '/galeria/20150526-084724.webp', category: 'Casamento', title: 'Fita Pink e Relevo', portrait: true },
  { src: '/galeria/sem-titulo-1.webp', category: 'Casamento', title: 'Cerejeira Floral', portrait: true },
  { src: '/galeria/modelo-windows.webp', category: 'Casamento', title: 'Modelo Windows' },
  { src: '/galeria/modelo-windows-3.webp', category: 'Casamento', title: 'Modelo Windows III' },
  { src: '/galeria/modelo-windows-4.webp', category: 'Casamento', title: 'Modelo Windows IV' },
  { src: '/galeria/windows.webp', category: 'Casamento', title: 'Linha Windows' },
  { src: '/galeria/windows-2.webp', category: 'Casamento', title: 'Windows II' },
  { src: '/galeria/windows-5.webp', category: 'Casamento', title: 'Windows V' },
  { src: '/galeria/windows-listras.webp', category: 'Casamento', title: 'Windows Listras' },
  { src: '/galeria/fotos-site-windows-floral-vegetal.webp', category: 'Casamento', title: 'Windows Floral Vegetal' },
  { src: '/galeria/modelo-130.webp', category: 'Casamento', title: 'Modelo 130' },
  { src: '/galeria/modelo-190.webp', category: 'Casamento', title: 'Modelo 190' },
  { src: '/galeria/193-bico.webp', category: 'Casamento', title: 'Modelo 193 Bico' },
  { src: '/galeria/modelo-suellen.webp', category: 'Casamento', title: 'Modelo Suellen' },
  { src: '/galeria/francine.webp', category: 'Casamento', title: 'Modelo Francine' },
  { src: '/galeria/francine-1.webp', category: 'Casamento', title: 'Francine I' },
  { src: '/galeria/francini-2.webp', category: 'Casamento', title: 'Francini II' },
  { src: '/galeria/francini-3.webp', category: 'Casamento', title: 'Francini III' },
  { src: '/galeria/karla.webp', category: 'Casamento', title: 'Modelo Karla' },
  { src: '/galeria/diana-20x20.webp', category: 'Casamento', title: 'Diana 20x20' },
  { src: '/galeria/carteira-baunilha.webp', category: 'Casamento', title: 'Carteira Baunilha' },
  { src: '/galeria/baguete.webp', category: 'Casamento', title: 'Modelo Baguete' },
  { src: '/galeria/passaporte.webp', category: 'Especiais', title: 'Convite Passaporte' },
  { src: '/galeria/15-anos.webp', category: 'Debutante', title: 'Convite 15 Anos' },
  { src: '/galeria/20x20-debutante.webp', category: 'Debutante', title: 'Debutante 20x20' },
  { src: '/galeria/plaquinhas.webp', category: 'Acessórios', title: 'Plaquinhas Personalizadas' },
  { src: '/galeria/sandalia.webp', category: 'Acessórios', title: 'Sandália Personalizada', portrait: true },
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? [...items, ...extraItems] : items;

  return (
    <section id="galeria" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gallery-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="rgb(17,50,255)"></circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-pattern)"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg mb-6">
            <ImageIcon size={16} />
            <span className="font-semibold text-sm tracking-wider uppercase">Nosso Portfólio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Galeria de <span className="text-[rgb(17,50,255)] italic font-serif">Trabalhos</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Confira nossa coleção completa de <span className="font-semibold text-slate-900">convites e papelaria personalizada</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.src}
              className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className={`aspect-[4/3] overflow-hidden ${item.portrait ? 'bg-slate-100' : ''}`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-700 ${
                    item.portrait ? 'object-contain' : 'object-cover'
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 bg-[rgb(17,50,255)] text-xs font-bold uppercase tracking-wider mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Sparkles size={16} />
                    <span>Ver detalhes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[rgb(17,50,255)] text-[rgb(17,50,255)] font-bold hover:bg-[rgb(17,50,255)] hover:text-white transition-all duration-300 shadow-md group"
          >
            {showAll ? (
              <Minus size={20} className="group-hover:rotate-180 transition-transform duration-300" />
            ) : (
              <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
            )}
            {showAll ? 'Mostrar Menos' : 'Mostrar Mais Inspirações'}
          </button>
        </div>
        <div className="mt-20 text-center border-t border-slate-200 pt-12">
          <p className="text-slate-600 mb-6 text-lg">
            Gostou do nosso trabalho? <span className="font-bold text-slate-900">Solicite um orçamento personalizado!</span>
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 font-bold hover:bg-[rgb(17,50,255)] transition-colors duration-300 shadow-lg"
          >
            <span>Falar com um Consultor</span>
          </a>
        </div>
      </div>
    </section>
  );
}
