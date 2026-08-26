import { ShieldCheck, Zap, Award } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const IMG_EMBALAGENS = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/embalagens-oleo-castrol-transmax-varios-carros_1080x1350.webp';
const IMG_CAPO = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/oleos-castrol-edge-carro-capo-aberto_5712x4284.webp';
const IMG_PRATELEIRA = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/prateleira-produtos-castrol-miniaturas-carros_4284x5712.webp';
const IMG_JEEP = 'https://storage.lucasmendes.dev/site-sp/vaap%20lubrificantes/img/jeep-compass-prata-troca-oleo-transmissao_5712x4284.webp';

const NEW_IMAGES = [
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=vaap%20lubrificantes%2Falteracoes%2F34zr2.jpeg&version_id=null',
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=vaap%20lubrificantes%2Falteracoes%2Fae9137.jpeg&version_id=null',
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=vaap%20lubrificantes%2Falteracoes%2Fkqmtas.jpeg&version_id=null',
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=vaap%20lubrificantes%2Falteracoes%2Fptnul.jpeg&version_id=null',
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=vaap%20lubrificantes%2Falteracoes%2Fs4pgvg.jpeg&version_id=null'
];

const allImages = [
  { url: IMG_CAPO, alt: "Castrol Edge - Carro com capô aberto" },
  { url: IMG_PRATELEIRA, alt: "Prateleira de produtos Castrol" },
  { url: IMG_EMBALAGENS, alt: "Embalagens Castrol Transmax" },
  { url: IMG_JEEP, alt: "Jeep Compass - Troca de óleo de transmissão" },
  ...NEW_IMAGES.map((url, i) => ({ url, alt: `Produto Vaap Lubrificantes ${i + 1}` }))
];

const brands = [
  { name: 'Castrol', highlight: true },
  { name: 'Repsol', highlight: false },
  { name: 'Mopar', highlight: false },
  { name: 'AC Delco', highlight: false },
  { name: 'Motul', highlight: false },
  { name: 'Shell', highlight: false },
];

const filterBrands = ['Mann', 'Tecfil', 'Wega'];

const features = [
  { icon: ShieldCheck, title: 'Produtos Originais', desc: '100% certificados pelo fabricante' },
  { icon: Zap, title: 'Alta Performance', desc: 'Tecnologia de ponta para motores modernos' },
  { icon: Award, title: 'Autorizado Castrol', desc: 'Linha completa do distribuidor oficial' },
];

export default function Products() {
  const { ref, isInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  return (
    <section id="produtos" className="py-20 lg:py-28 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div
          ref={ref}
          className={`text-center mb-14 transition-all duration-600 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="inline-block bg-brand-green/20 text-brand-green-light font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Linha de Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
            Lubrificantes de{' '}
            <span className="text-brand-green">Alta Performance</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Trabalhamos com as melhores marcas do mercado para garantir máxima proteção
            ao seu motor, câmbio e demais componentes do veículo.
          </p>
        </div>

        {/* Layout Principal com Flexbox (Substituindo o Grid antigo) */}
        <div
          ref={gridRef}
          className={`flex flex-col lg:flex-row gap-8 items-start relative transition-all duration-700 ${
            gridInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Lado Esquerdo: Galeria de Imagens */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allImages.map((img, index) => (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden group bg-gray-800 ${
                  index === 0 ? 'sm:col-span-2 h-72 sm:h-[450px]' : 'h-64 sm:h-72'
                }`}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Lado Direito: Informações e Benefícios (Sticky no Desktop) */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-24 flex flex-col gap-6 h-fit">
            
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Marcas de Lubrificantes</h3>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand.name}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                      brand.highlight
                        ? 'bg-brand-green text-white'
                        : 'bg-white/10 text-gray-300 border border-white/10'
                    }`}
                  >
                    {brand.name}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Filtros Automotivos
                </h4>
                <div className="flex flex-wrap gap-2">
                  {filterBrands.map((b) => (
                    <span key={b} className="bg-white/10 text-gray-300 border border-white/10 px-3 py-1.5 rounded-full text-sm font-medium">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-green/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-brand-green-light" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{title}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* O botão aproveita suas classes globais, caso exista .btn-primary, adicionei fallback do tailwind para garantir o visual */}
            <a
              href="https://wa.me/556584438839?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex justify-center items-center py-4 bg-brand-green hover:bg-brand-green-light text-white font-bold rounded-2xl transition-all"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}