import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

type Category = 'todos' | 'imobiliaria' | 'automotiva' | 'industrial' | 'impermeabilizantes' | 'solventes';

interface Product {
  name: string;
  description: string;
  category: Exclude<Category, 'todos'>;
  image: string;
  badge?: string;
  badgeColor?: string;
}

const products: Product[] = [
  {
    name: 'Metalatex Requinte',
    description: 'Tinta premium Sherwin Williams para interiores e exteriores com excelente cobertura e durabilidade.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-metalatex-requinte-sherwin-williams_576x1280.webp',
    badge: 'Premium',
    badgeColor: 'rgb(17,157,219)',
  },
  {
    name: 'Metalatex Elastic',
    description: 'Tecnologia elástica Sherwin Williams que acompanha as dilatações da alvenaria, evitando fissuras.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-metalatex-elastic-sherwin-williams_576x1280.webp',
    badge: 'Destaque',
    badgeColor: 'rgb(108,189,81)',
  },
  {
    name: 'Metalatex Super Lavável Fosco',
    description: 'Alta resistência à lavagem com acabamento fosco elegante para ambientes internos.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-metalatex-super-lavavel-fosco_576x1280.webp',
  },
  {
    name: 'MaxVinil Premium Seda 18L',
    description: 'Acabamento sedoso e resistente para paredes internas e externas, alta cobertura em uma demão.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-maxvinil-premium-seda-18l_576x1280.webp',
    badge: 'Mais Vendido',
    badgeColor: 'rgb(240,214,44)',
  },
  {
    name: 'MaxVinil Elástica 18L',
    description: 'Tinta elástica de alto desempenho, ideal para fachadas com movimentação estrutural.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-maxvinil-elastica-18l-fosco_576x1280.webp',
  },
  {
    name: 'MaxVinil Cobertex',
    description: 'Textura de alta qualidade para fachadas, com excelente resistência às intempéries.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-maxvinil-cobertex-azul-branco_576x1280.webp',
  },
  {
    name: 'Dacar Acrílica Clássica',
    description: 'Tinta acrílica de excelente rendimento, cobertura uniforme e fácil aplicação.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-de-tinta-dacar-acrilica-classica_576x1280.webp',
  },
  {
    name: 'Dacar Super Lavável',
    description: 'Resistência extrema à lavagem, mantendo a cor e brilho por muito mais tempo.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-dacar-super-lavavel-acrilico_576x1280.webp',
  },
  {
    name: 'Novacor Piso Premium',
    description: 'Alta resistência ao tráfego intenso, ideal para pisos internos e externos.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-novacor-piso-premium-azul-amarelo_576x1280.webp',
    badge: 'Pisos',
    badgeColor: 'rgb(17,157,219)',
  },
  {
    name: 'Dacar Pisos Premium 18L',
    description: 'Tinta para piso de alta performance com resistência química e mecânica.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-dacar-pisos-premium-18l_576x1280.webp',
    badge: 'Pisos',
    badgeColor: 'rgb(17,157,219)',
  },
  {
    name: 'Sherwin Williams Novacor',
    description: 'Linha completa Novacor para todos os tipos de superfícies, com cores vibrantes.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-sherwin-williams-novacor-amarela_576x1280.webp',
  },
  {
    name: 'Telha Térmica Sherwin Williams',
    description: 'Tinta refletiva para telhas que reduz o calor interno e protege a estrutura.',
    category: 'imobiliaria',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-sherwin-williams-telha-termica_576x1280.webp',
    badge: 'Especial',
    badgeColor: 'rgb(235,49,60)',
  },
  {
    name: 'Tinta Automotiva Profissional',
    description: 'Linha automotiva de alta qualidade para repintura veicular com acabamento brilhante.',
    category: 'automotiva',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-automotiva-profissional-vermelha-preta_576x1280.webp',
    badge: 'Automotivo',
    badgeColor: 'rgb(235,49,60)',
  },
  {
    name: 'Skylack Base Poliéster',
    description: 'Base de alta performance para repintura automotiva, excelente nivelamento e aderência.',
    category: 'automotiva',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-azul-skylack-base-poliester_576x1280.webp',
    badge: 'Automotivo',
    badgeColor: 'rgb(235,49,60)',
  },
  {
    name: 'Skylack Automotiva Preta',
    description: 'Tinta automotiva preta de alto brilho, resistente a riscos e intempéries.',
    category: 'automotiva',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/latas-tinta-preta-skylack-automotiva_576x1280.webp',
  },
  {
    name: 'Skylack + Endurecedor',
    description: 'Kit completo base poliéster com endurecedor para acabamento profissional em veículos.',
    category: 'automotiva',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/latas-tinta-skylack-base-poliester-endurecedor_576x1280.webp',
    badge: 'Kit',
    badgeColor: 'rgb(108,189,81)',
  },
  {
    name: 'Linha Automotiva Profissional',
    description: 'Completa linha de tintas automotivas para repintura e personalização veicular.',
    category: 'automotiva',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-profissional-linha-automotiva_576x1280.webp',
  },
  {
    name: 'Esmalte Industrial MaxVinil',
    description: 'Esmalte de alta resistência para equipamentos e estruturas industriais.',
    category: 'industrial',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-maxvinil-esmalte-industrial_576x1280.webp',
    badge: 'Industrial',
    badgeColor: 'rgb(240,214,44)',
  },
  {
    name: 'Esmalte Industrial Fundo Escuro',
    description: 'Esmalte com fundo anticorrosivo para superfícies metálicas em ambientes agressivos.',
    category: 'industrial',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-maxvinil-esmalte-industrial-fundo-escuro_576x1280.webp',
    badge: 'Industrial',
    badgeColor: 'rgb(240,214,44)',
  },
  {
    name: 'Linha Indústria Amarela/Preta',
    description: 'Tintas de demarcação e sinalização industrial para pisos e estruturas.',
    category: 'industrial',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-profissional-linha-industria-amarela-e-preta_576x1280.webp',
  },
  {
    name: 'Linha Indústria Cinza',
    description: 'Tinta industrial cinza para maquinários e estruturas metálicas de alta resistência.',
    category: 'industrial',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-tinta-profissional-linha-industria-cinza_576x1280.webp',
  },
  {
    name: 'Borracha Líquida Impermeabilizante Dacar',
    description: 'Impermeabilizante de alta elasticidade para calhas, lajes, piscinas e reservatórios.',
    category: 'impermeabilizantes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/balde-dacar-borracha-liquida-linha-impermeabilizante_576x1280.webp',
    badge: 'Impermeabilizante',
    badgeColor: 'rgb(17,157,219)',
  },
  {
    name: 'Borracha Líquida Telhado/Lajes',
    description: 'Impermeabilizante flexível para telhados e lajes, formando membrana resistente a raios UV.',
    category: 'impermeabilizantes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/balde-tinta-borracha-liquida-telhado-lajes_576x1280.webp',
    badge: 'Telhados',
    badgeColor: 'rgb(108,189,81)',
  },
  {
    name: 'Dacar Selador Acrílico Premium',
    description: 'Selador premium para preparação de superfícies antes da pintura, garantindo melhor aderência.',
    category: 'impermeabilizantes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/balde-vermelho-dacar-selador-acrilico-premium_576x1280.webp',
  },
  {
    name: 'Profisolv Diluente Thinner',
    description: 'Diluente profissional de alta qualidade para tintas automotivas e industriais.',
    category: 'solventes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-azul-linha-profisolv-diluente-thinner_576x1280.webp',
    badge: 'Profissional',
    badgeColor: 'rgb(17,157,219)',
  },
  {
    name: 'Profisolv 1300ml',
    description: 'Thinner profissional em formato prático para pequenos serviços e retoques.',
    category: 'solventes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-diluente-profisolv-1300ml-em-cima-balcao_576x1280.webp',
  },
  {
    name: 'Profisolv Diluente Profissional',
    description: 'Solvente de alta pureza para diluição de tintas, vernizes e esmaltes profissionais.',
    category: 'solventes',
    image: 'https://storage.lucasmendes.dev/site-sp/casa%20das%20tintas/produtos/lata-diluente-profissional-profisolv-1300-s_576x1280.webp',
  },
];

const categories: { key: Category; label: string; color: string }[] = [
  { key: 'todos', label: 'Todos', color: 'rgb(1,1,1)' },
  { key: 'imobiliaria', label: 'Imobiliária', color: 'rgb(17,157,219)' },
  { key: 'automotiva', label: 'Automotiva', color: 'rgb(235,49,60)' },
  { key: 'industrial', label: 'Industrial', color: 'rgb(240,214,44)' },
  { key: 'impermeabilizantes', label: 'Impermeabilizantes', color: 'rgb(111,196,233)' },
  { key: 'solventes', label: 'Solventes', color: 'rgb(108,189,81)' },
];

export default function Products() {
  const [active, setActive] = useState<Category>('todos');
  const [visible, setVisible] = useState(8);

  const filtered = active === 'todos' ? products : products.filter(p => p.category === active);
  const shown = filtered.slice(0, visible);

  const handleCategory = (cat: Category) => {
    setActive(cat);
    setVisible(8);
  };

  return (
    <section id="produtos" className="py-20 lg:py-28" style={{ backgroundColor: 'rgb(248,249,250)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span
            className="inline-block text-sm font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ backgroundColor: 'rgba(17,157,219,0.12)', color: 'rgb(17,157,219)' }}
          >
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight">
            Linha completa para{' '}
            <span style={{ color: 'rgb(17,157,219)' }}>cada necessidade</span>
          </h2>
          <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
            Das melhores marcas do mercado, com estoque sempre disponível e atendimento especializado.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategory(cat.key)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
              style={
                active === cat.key
                  ? { backgroundColor: cat.color, color: cat.color === 'rgb(240,214,44)' ? 'rgb(1,1,1)' : 'white', boxShadow: `0 4px 15px ${cat.color}50` }
                  : { backgroundColor: 'white', color: 'rgb(80,80,80)', border: '1.5px solid rgb(220,220,220)' }
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {shown.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative overflow-hidden bg-gray-50 h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {product.badge && (
                  <span
                    className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: product.badgeColor,
                      color: product.badgeColor === 'rgb(240,214,44)' ? 'rgb(1,1,1)' : 'white',
                    }}
                  >
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-black text-sm mb-1">{product.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{product.description}</p>
                <a
                  href={`http://wa.me/556697173455?text=${encodeURIComponent(`Olá! Tenho interesse no produto: ${product.name}. Poderia me passar mais informações e valores?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-105"
                  style={{ backgroundColor: 'rgb(17,157,219)' }}
                >
                  <ExternalLink size={12} />
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        {visible < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible((v) => v + 8)}
              className="px-8 py-3 rounded-full font-bold text-white text-sm transition-all duration-200 hover:scale-105 shadow-lg"
              style={{ backgroundColor: 'rgb(17,157,219)' }}
            >
              Ver mais produtos
            </button>
          </div>
        )}

        <div className="mt-16 rounded-3xl p-8 sm:p-10 text-white text-center" style={{ background: 'linear-gradient(135deg, rgb(1,1,1) 0%, rgb(30,30,30) 100%)' }}>
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            Não encontrou o que precisava?
          </h3>
          <p className="text-white/70 mb-6 max-w-lg mx-auto">
            Temos muito mais em estoque! Fale com nossos especialistas e encontre a solução perfeita para o seu projeto.
          </p>
          <a
            href="http://wa.me/556697173455?text=Olá! Preciso de ajuda para encontrar um produto específico."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-bold px-8 py-4 rounded-full text-white transition-all duration-200 hover:scale-105 shadow-xl"
            style={{ backgroundColor: 'rgb(108,189,81)' }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
