import { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

interface Product {
  name: string;
  image: string;
  category: string;
}

const BASE = 'https://storage.lucasmendes.dev/site-sp/recife%20componentes/produtos/';

const products: Product[] = [
  { name: 'Dobradiças Pretas Metálicas', image: 'conjunto-dobradicas-pretas-metalicas-com-parafusos_1250x1250.webp', category: 'Dobradiças' },
  { name: 'Braço para Janela - Fachada e Gold', image: 'dobradica-basculante-esquadria-aluminio-preta-detalhe_1250x1250.webp', category: 'Braços' },
  { name: 'Braço para Janela - MP', image: 'dobradicas-cinzas-com-parafusos-em-fundo-branco_598x652.webp', category: 'Braços' },
  { name: 'Rolamentos para Porta de Correr', image: 'dois-rolamentos-para-porta-de-correr-vermelhos_1080x1080.webp', category: 'Roldanas' },
  { name: 'Dobradiças de Janela Alumínio', image: 'duas-dobradicas-de-janela-aluminio-prata_1250x1250.webp', category: 'Dobradiças' },
  { name: 'Braço Articulado', image: 'esquema-tecnico-braco-articulado-branco-com-dimensoes_670x735.webp', category: 'Acessórios' },
  { name: 'Fechadura Cromada para Vidro', image: 'fechadura-cromada-com-chave-porta-de-vidro_200x200.webp', category: 'Fechaduras' },
  { name: 'Fechadura de Vidro com Espelho', image: 'fechadura-de-vidro-cromada-com-chave-e-espelho_600x398.webp', category: 'Fechaduras' },
  { name: 'Fechadura Inox para Vidro', image: 'fechadura-inox-porta-de-vidro-e-espelho_1069x989.webp', category: 'Fechaduras' },
  { name: 'Fechadura para Janela', image: 'fechadura-janela-branca-preta-parafusos-diagrama_594x336.webp', category: 'Fechaduras' },
  { name: 'Fechadura Porta Branca', image: 'fechadura-porta-branca-com-chave-detalhes_1250x1250.webp', category: 'Fechaduras' },
  { name: 'Fechadura Stam Cilindro Europeu', image: 'fechadura-porta-stam-cilindro-europeu-prata_480x480.webp', category: 'Fechaduras' },
  { name: 'Fechadura Soprano para Vidro', image: 'fechadura-porta-vidro-cromada-com-chaves-soprano_1250x1250.webp', category: 'Fechaduras' },
  { name: 'Fechadura Stam Inox', image: 'fechadura-stam-inox-para-porta-detalhada_1280x1280.webp', category: 'Fechaduras' },
  { name: 'Ferrolhos em alumínio', image: 'fechaduras-brancas-para-portas-ou-janelas_1280x1266.webp', category: 'Ferrolho' },
  { name: 'Fechaduras para Janela', image: 'fechaduras-chave-janela-vidro-branca-prata_801x500.webp', category: 'Fechaduras' },
  { name: 'Fechaduras Janela Deslizante', image: 'fechaduras-janela-deslizante-brancas-chave-parafusos_931x383.webp', category: 'Fechaduras' },
  { name: 'Ferragem Porta Deslizante', image: 'ferragem-para-porta-deslizante-metalica-com-rodizios_800x800.webp', category: 'Ferragens' },
  { name: 'Ferragens para Vidro', image: 'ferragens-cromadas-fixacao-vidro-e-puxadores_500x332.webp', category: 'Ferragens' },
  { name: 'Ferrolhos Metálicos', image: 'ferrolhos-pequenos-metalicos-prateados-para-portas_1280x1260.webp', category: 'Ferrolhos' },
  { name: 'Fixadores de Vidro', image: 'fixadores-de-vidro-cilindricos-metalicos-prateados_500x440.webp', category: 'Ferragens' },
  { name: 'Kit Automatizador de Portão', image: 'kit-automatizador-portao-deslizante-cremalheira-acessorios_1199x1135.webp', category: 'Acessórios' },
  { name: 'Kit Instalação Box', image: 'kit-instalacao-box-banheiro-pecas-brancas-e-pretas_1000x1000.webp', category: 'Acessórios' },
  { name: 'Mola Aérea para Porta', image: 'mola-aerea-prateada-para-porta-com-braco_1250x1250.webp', category: 'Acessórios' },
  { name: 'Parafusos e Buchas', image: 'parafusos-e-bucha-metalicos-prata-variados_285x116.webp', category: 'Parafusos' },
  { name: 'Peças de Alumínio', image: 'pecas-aluminio-parafusos-fundo-branco_228x228.webp', category: 'Acessórios' },
  { name: 'Suportes Cromados', image: 'pecas-metalicas-cromadas-suportes-e-parafusos_690x455.webp', category: 'Ferragens' },
  { name: 'Conectores Metálicos', image: 'pilha-de-conectores-metalicos-cromados-diversos_1250x1250.webp', category: 'Acessórios' },
  { name: 'Puxador Duplo Inox', image: 'puxador-porta-duplo-aco-inox-vertical_1250x1250.webp', category: 'Puxadores' },
  { name: 'Puxador para Vidro', image: 'puxador-porta-vidro-transparente-anel-preto_450x450.webp', category: 'Puxadores' },
  { name: 'Puxador Retangular Cromado', image: 'puxador-retangular-cromado-para-porta-de-vidro_1250x1250.webp', category: 'Puxadores' },
  { name: 'Roldanas para Portão', image: 'quatro-roldanas-metalicas-para-portao-deslizante_447x500.webp', category: 'Roldanas' },
  { name: 'Rodízios para Porta de Correr', image: 'rodizios-para-porta-de-correr-vermelhos_1080x1080.webp', category: 'Roldanas' },
  { name: 'Roldana Metálica', image: 'roldana-metalica-prateada-fixada-em-base_237x213.webp', category: 'Roldanas' },
  { name: 'Roldana Porta de Correr', image: 'roldana-para-porta-de-correr-ouro-branco_600x600.webp', category: 'Roldanas' },
  { name: 'Roldanas Duplas', image: 'roldanas-metalicas-para-portao-deslizante-duplas_500x448.webp', category: 'Roldanas' },
  { name: 'Roldanas Variadas', image: 'roldanas-portas-correr-metais-douradas-brancas_1250x1250.webp', category: 'Roldanas' },
  { name: 'Roletes para Janelas', image: 'roletes-pretos-para-janelas-de-correr_210x187.webp', category: 'Roldanas' },
  { name: 'Rolo para Box', image: 'rolo-branco-e-dourado-porta-de-box_300x300.webp', category: 'Roldanas' },
  { name: 'Fita Dupla Face', image: 'rolos-fita-dupla-face-espuma-verde-branca_1000x595.webp', category: 'Acessórios' },
  { name: 'Dobradiças Brancas', image: 'tres-dobradicas-brancas-para-porta-em-branco_600x635.webp', category: 'Dobradiças' },
];

const categories = ['Todos', 'Dobradiças', 'Braços', 'Roldanas', 'Acessórios', 'Fechaduras', 'Ferrolho', 'Ferragens', 'Ferrolhos', 'Parafusos', 'Puxadores'];

export default function Products() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'Todos' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-[rgb(231,195,37)] uppercase tracking-wide mb-2">Nossos Produtos</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[rgb(12,27,76)] mb-4">Catálogo Completo</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">Tudo que você precisa para esquadrias de alumínio e vidro em um só lugar</p>
        </div>
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="lucide lucide-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar produto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[rgb(231,195,37)] focus:outline-none transition-colors"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[rgb(231,195,37)] text-[rgb(12,27,76)] shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((product) => (
            <div
              key={product.name}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <img
                  src={BASE + product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] text-xs font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-[rgb(12,27,76)] mb-3 line-clamp-2 min-h-[3rem]">{product.name}</h4>
                <a
                  href={`http://wa.me/558199266617?text=Olá! Gostaria de mais informações sobre: ${product.name}`}
                  className="w-full flex items-center justify-center gap-2 bg-[rgb(12,27,76)] text-white px-4 py-2 rounded-lg font-medium hover:bg-[rgb(231,195,37)] hover:text-[rgb(12,27,76)] transition-all duration-300"
                >
                  <ShoppingCart className="lucide lucide-shopping-cart w-4 h-4" />
                  Consultar
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="http://wa.me/558199266617"
            className="inline-flex items-center gap-2 bg-[rgb(231,195,37)] text-[rgb(12,27,76)] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[rgb(187,133,19)] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Não encontrou o que procura? Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
