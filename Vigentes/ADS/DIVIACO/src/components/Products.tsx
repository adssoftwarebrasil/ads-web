import { 
  Layers, 
  Grid3x3 as Grid3X3, 
  TreePine, 
  LayoutTemplate, 
  Columns2 as Columns, 
  Wrench, 
  Package, 
  ArrowUpDown, 
  Star, 
  Hammer, 
  Building2, 
  Layers3, 
  Grid2x2 as Grid2X2, 
  Thermometer, 
  ShieldCheck, 
  Recycle, 
  Volume2, 
  LayoutGrid as Layout, 
  BoxSelect,
  SplitSquareHorizontal,
  ChevronsUp,
  Rows
} from 'lucide-react';

const PRODUCTS = [
  {
    icon: Building2,
    name: 'Telha Sanduíche Termo Acústica',
    description: 'Alta performance térmica e acústica para coberturas industriais e comerciais.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/telhas-metalicas-sanduiche-isolamento-termico_600x600.webp'
  },
  {
    icon: Layers,
    name: 'Placas Drywall',
    description: 'Construção a seco rápida, leve e com excelente acabamento para ambientes internos.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/pilha-de-placas-de-gesso-coloridas_640x400.webp'
  },
  {
    icon: Grid3X3,
    name: 'Forros de PVC',
    description: 'Resistentes à umidade, ideais para banheiros, vestiários e áreas molhadas.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/placas-pvc-brancas-empilhadas-com-ranhuras_800x800.webp'
  },
  {
    icon: Grid2X2,
    name: 'Placa Acústica Furo Quadrado',
    description: 'Alta absorção acústica e resistência ao fogo para ambientes corporativos.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/placa-forro-acustico-cinza-com-furos-quadrados_1000x1000.webp'
  },
  {
    icon: Volume2,
    name: 'Placa Acústica',
    description: 'Tratamento sonoro profissional com design moderno e perfurações precisas.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/placa-cinza-com-furos-alinhados_1000x1000.webp'
  },
  {
    icon: Thermometer,
    name: 'Lã de Vidro',
    description: 'Isolamento térmico e acústico leve e eficiente para forros e drywall.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/isolamento-termico-isover-rolo-amarelo-marrom_369x375.webp'
  },
  {
    icon: ShieldCheck,
    name: 'Lã de Rocha',
    description: 'Proteção passiva contra fogo e isolamento acústico de alta densidade.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/pilha-placas-la-de-rocha-marrom_1200x1200.webp'
  },
  {
    icon: Recycle,
    name: 'Lã de PET',
    description: 'Isolante sustentável, 100% reciclável e hipoalergênico para obras modernas.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/rolos-de-l-de-vidro-isolante-branco_810x530.webp'
  },
  {
    icon: Package,
    name: 'Painel Wall',
    description: 'Alta resistência à umidade e impacto para fachadas e áreas externas.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/pilha-de-placas-cimento-cinza-empilhadas_1024x600.webp'
  },
  {
    icon: Wrench,
    name: 'Placa Cimentícia',
    description: 'Estruturas metálicas galvanizadas para suporte de sistemas construtivos a seco.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/chapas-metalicas-cinzas-empilhadas-sobre-fundo-branco_1000x1000.webp'
  },
  {
    icon: ArrowUpDown,
    name: 'Forro Removível',
    description: 'Solução prática para espaços que demandam acesso frequente à infraestrutura.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/teto-falso-branco-liso-com-suspensao_798x426.webp'
  },
  {
    icon: Columns,
    name: 'Painel Wall',
    description: 'Revestimento versátil para paredes internas com design moderno.',
    image: 'https://storage.lucasmendes.dev/site-sp/DIVIACO/img/placa-concreto-cinza-fundo-branco_800x800.webp'
  },
  {
    icon: Layout,
    name: 'Divisória Eucatex',
    description: 'Solução versátil e rápida para a organização de escritórios e divisão de ambientes internos.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Falteracoes%2FDivis%C3%B3ria%20Eucatex.png'
  },
  {
    icon: BoxSelect,
    name: 'Perfis em Aço',
    description: 'Estruturas galvanizadas de alta resistência para sustentação de sistemas de drywall e forros.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Falteracoes%2FPerfis%20em%20A%C3%A7o.jpg'
  },
  {
    icon: SplitSquareHorizontal,
    name: 'Divisórias Drywall',
    description: 'Sistemas leves e práticos para divisão de ambientes, garantindo excelente acabamento e agilidade na obra.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Fdiviaco-alteracoes%2FDivis%C3%B3rias%20Drywall.png&version_id=null'
  },
  {
    icon: ChevronsUp,
    name: 'Escadas',
    description: 'Equipamentos seguros e resistentes, essenciais para o trabalho em altura na construção a seco.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Fdiviaco-alteracoes%2FEscadas.png&version_id=null'
  },
  {
    icon: Hammer,
    name: 'Ferramentas',
    description: 'Ferramentas e acessórios específicos para instalação profissional e manutenção de sistemas de drywall e forros.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Fdiviaco-alteracoes%2FFerramentas.png&version_id=null'
  },
  {
    icon: Rows,
    name: 'Forro Drywall',
    description: 'Solução versátil e elegante para tetos, perfeita para embutir iluminação e esconder instalações estruturais.',
    image: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=DIVIACO%2Fdiviaco-alteracoes%2Fforro%20Drywall.png&version_id=null'
  }
];

export default function Products() {
  return (
    <section id="produtos" className="bg-neutral-950 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[#E76012] text-xs font-semibold tracking-widest uppercase mb-4">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            Tudo que sua obra precisa,{' '}
            <span className="text-[#E76012]">em um só lugar</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#E76012]/40 hover:shadow-xl hover:shadow-orange-900/10"
              >
                {/* Container da Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-md rounded-lg flex items-center justify-center border border-white/10">
                    <Icon size={20} className="text-[#E76012]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="text-white font-bold text-base mb-2">
                    {product.name}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/558432239388"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E76012] hover:bg-[#c9520f] text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105"
          >
            Solicitar Orçamento Agora
          </a>
        </div>
      </div>
    </section>
  );
}