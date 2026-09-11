import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const BASE =
  'https://storage.lucasmendes.dev/site-sp/center%20vidros%20e%20aluminios/galeria/';

interface Item {
  file: string;
  alt: string;
  category: string;
}

const ITEMS: Item[] = [
  { file: 'portao-aluminio-marrom-listras-horizontais-grade_1600x1200.webp', alt: 'Portão de alumínio marrom', category: 'Portões' },
  { file: 'portao-basculante-marrom-casa-listras-horizontais_1600x721.webp', alt: 'Portão basculante', category: 'Portões' },
  { file: 'portao-branco-aluminio-listras-horizontais-marrom_540x665.webp', alt: 'Portão branco alumínio', category: 'Portões' },
  { file: 'portao-metalico-cinza-listrado-grade-geometrica_1280x720.webp', alt: 'Portão metálico cinza', category: 'Portões' },
  { file: 'porta-aluminio-branca-faixas-douradas-casa_473x1024.webp', alt: 'Porta alumínio branca', category: 'Portas' },
  { file: 'porta-aluminio-marrom-com-puxador-horizontal_721x1600.webp', alt: 'Porta alumínio marrom', category: 'Portas' },
  { file: 'porta-branca-aluminio-com-frisos-metalicos_721x1600.webp', alt: 'Porta branca com frisos', category: 'Portas' },
  { file: 'porta-correr-preta-horizontal-detalhes-prata_900x1600.webp', alt: 'Porta de correr preta', category: 'Portas' },
  { file: 'box-vidro-banheiro-claro-toalha-cinza-pendurada_183x275.webp', alt: 'Box de vidro banheiro', category: 'Box e Vidros' },
  { file: 'box-de-vidro-cinza-com-nichos-no-banheiro_225x225.webp', alt: 'Box de vidro cinza', category: 'Box e Vidros' },
  { file: 'janela-deslizante-cortina-bege-vidro-esverdeado_404x404.webp', alt: 'Janela deslizante', category: 'Janelas' },
  { file: 'basculante-aberto-vidro-predios-ao-fundo_364x269.webp', alt: 'Janela basculante', category: 'Janelas' },
  { file: 'portao-correr-madeira-linhas-metalicas-fachada_1200x1600.webp', alt: 'Portão de correr madeira', category: 'Portões' },
  { file: 'fachada-casa-porta-grade-desenho-branco_590x1280.webp', alt: 'Fachada casa porta', category: 'Portas' },
  { file: 'portao-branco-gradeado-casa-residencial-fachada_421x381.webp', alt: 'Portão branco gradeado', category: 'Portões' },
  { file: 'homem-instalando-portao-metalico-com-grade_1600x900.webp', alt: 'Instalação portão metálico', category: 'Serviços' },
];

const FILTERS = ['Todos', 'Portões', 'Portas', 'Box e Vidros', 'Janelas', 'Serviços'];

export default function Gallery() {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [active, setActive] = useState('Todos');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = active === 'Todos' ? ITEMS : ITEMS.filter((i) => i.category === active);

  return (
    <section id="galeria" className="py-20 md:py-28 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-brand-blue text-sm font-bold tracking-widest uppercase mb-3">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-5">Nossos Trabalhos</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos. Cada obra é única e entregue com o máximo de
            qualidade.
          </p>
        </div>
        <div
          className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === filter
                  ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {visible.map((item, i) => (
            <div
              key={item.file}
              onClick={() => setLightbox(BASE + item.file)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer aspect-square transition-all duration-500 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <img
                src={BASE + item.file}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
                  <ZoomIn width={18} height={18} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs font-semibold text-white bg-brand-blue px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightbox && (
        <div
          className="fixed inset-0 z-[60] bg-brand-dark/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            aria-label="Fechar"
            onClick={() => setLightbox(null)}
          >
            <X width={22} height={22} />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[85vh] rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
