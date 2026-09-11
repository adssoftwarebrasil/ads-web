import { useState } from 'react';
import { ShoppingBasket, Beef, Croissant, Apple, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Department {
  icon: LucideIcon;
  iconWrapper: string;
  image: string;
  title: string;
  description: string;
}

const departments: Department[] = [
  {
    icon: ShoppingBasket,
    iconWrapper: 'bg-gradient-to-br from-blue-500 to-blue-600',
    image: 'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista%2Fimg%2Fmercearia-completa.webp',
    title: 'Mercearia Completa',
    description:
      'Grande variedade de produtos para o dia a dia da sua família. Desde alimentos básicos até itens especiais, tudo que você precisa em um só lugar.',
  },
  {
    icon: Beef,
    iconWrapper: 'bg-gradient-to-br from-red-500 to-red-600',
    image: 'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/acougue.webp',
    title: 'Açougue Premium',
    description:
      'Carnes de primeira qualidade, cuidadosamente selecionadas por nossos especialistas. Cortes nobres, carnes frescas e atendimento especializado.',
  },
  {
    icon: Croissant,
    iconWrapper: 'bg-gradient-to-br from-amber-500 to-orange-600',
    image:
      'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/doce-de-padaria-brioche-com-creme-interno_720x1280.webp',
    title: 'Padaria Artesanal',
    description:
      'Pães fresquinhos todos os dias, bolos caseiros, salgados e doces irresistíveis. Produtos preparados com carinho para sua mesa.',
  },
  {
    icon: Apple,
    iconWrapper: 'bg-gradient-to-br from-green-500 to-emerald-600',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Hortifruti Fresco',
    description:
      'Frutas, verduras e legumes fresquinhos e de qualidade. Recebemos produtos diariamente para garantir o máximo de frescor para você.',
  },
];

const galleryImages: string[] = [
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/acougue.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-avelas-morangos-fisalise-prato-branco_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-chocolate-confeitaria-supermercado_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-coberto-cerejas-vermelhas-brilhantes_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-cobertura-roxa-frutas-vitrine_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-decorado-morangos-embalagem-supermercado_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-parabens-confeitos-rosa-vitrine_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-rosas-rosa-confeitaria-vitrine_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-branco-verde-vermelho-com-frutas_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-castanha-morango-uva-pessego-prato_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-chocolate-branco-morango-laco-rosa_720x1280.webp',
  'https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/bolo-chocolate-rosas-creme-prateleira-supermercado_720x1280.webp',
];

const TOTAL_PAGES = 4;

function ArrowRight() {
  return (
    <svg
      className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Nossos Departamentos</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Tudo que Você Precisa <span className="text-[rgb(221,40,45)]">em Um Só Lugar</span>
          </h2>
          <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore nossos departamentos especializados, cada um preparado com dedicação para oferecer o melhor para
            sua família
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {departments.map((dept) => {
            const Icon = dept.icon;
            return (
              <div
                key={dept.title}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="absolute inset-0">
                  <img
                    src={dept.image}
                    alt={dept.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                </div>
                <div className="relative p-8 h-[400px] flex flex-col justify-end">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${dept.iconWrapper} shadow-lg mb-4 transform transition-transform group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-3 transform transition-transform group-hover:translate-x-2">
                    {dept.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed transform transition-all group-hover:translate-x-2">
                    {dept.description}
                  </p>
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="inline-flex items-center text-[rgb(255,204,0)] font-semibold">
                      Ver mais
                      <ArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div id="galeria" className="mb-24 scroll-mt-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-red-50 rounded-full mb-4">
              <ImageIcon className="w-6 h-6 text-[rgb(221,40,45)]" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900">Nossa Galeria</h3>
            <p className="text-gray-600 mt-2">Confira de perto a qualidade dos nossos produtos e eventos</p>
          </div>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mb-12">
            {galleryImages.map((src, idx) => (
              <div
                key={idx}
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
              >
                <img
                  src={src}
                  loading="lazy"
                  alt="Galeria Supermercado Conquista"
                  className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-2 flex-wrap gap-y-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className={`p-2 rounded-full border border-gray-300 transition-colors duration-200 ${
                currentPage === 1
                  ? 'opacity-50 cursor-not-allowed text-gray-400'
                  : 'hover:bg-[rgb(221,40,45)] hover:text-white hover:border-[rgb(221,40,45)] text-gray-700'
              }`}
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-bold transition-all duration-200 border ${
                  currentPage === page
                    ? 'bg-[rgb(221,40,45)] text-white border-[rgb(221,40,45)] shadow-md transform scale-110'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              disabled={currentPage === TOTAL_PAGES}
              onClick={() => setCurrentPage((p) => Math.min(TOTAL_PAGES, p + 1))}
              className={`p-2 rounded-full border border-gray-300 transition-colors duration-200 ${
                currentPage === TOTAL_PAGES
                  ? 'opacity-50 cursor-not-allowed text-gray-400'
                  : 'hover:bg-[rgb(221,40,45)] hover:text-white hover:border-[rgb(221,40,45)] text-gray-700'
              }`}
              aria-label="Próxima página"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center mt-4 text-sm text-gray-500">
            Mostrando página {currentPage} de {TOTAL_PAGES}
          </div>
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(221,40,45)] to-[rgb(200,30,35)] rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Produtos Frescos Todos os Dias!</h3>
          <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
            Recebemos mercadorias diariamente para garantir que você sempre leve para casa produtos da mais alta
            qualidade e frescor
          </p>
          <a
            href="http://wa.me/556481322676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(255,204,0)] text-[rgb(221,40,45)] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            Faça Seu Pedido Agora
          </a>
        </div>
      </div>
    </section>
  );
}
