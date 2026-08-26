import { ArrowRight } from 'lucide-react';

const IMG_BASE = 'https://storage.lucasmendes.dev/site-sp/e%20c%20odontologia/img/';

const products = [
  {
    id: 1,
    name: 'Cadeira Odontológica Brudine',
    category: 'Cadeiras',
    description:
      'Conforto e elegância em um único equipamento. Design ergonômico que proporciona maior comodidade ao paciente e facilidade ao profissional durante os procedimentos.',
    image: `${IMG_BASE}cadeira-odontologica-brudine-conforto-e-elegancia_1080x1080.webp`,
    tag: 'Mais Vendido',
  },
  {
    id: 2,
    name: 'Cadeira Odontológica Olsen',
    category: 'Cadeiras',
    description:
      'Qualidade premium em foco. Estrutura robusta, ajustes precisos e acabamento sofisticado para elevar o padrão do seu consultório.',
    image: `${IMG_BASE}cadeira-odontologica-olsen-qualidade-em-foco_1080x1080.webp`,
    tag: 'Destaque',
  },
  {
    id: 3,
    name: 'Autoclave Cristofoli',
    category: 'Esterilização',
    description:
      'Linha premium de autoclaves para garantir a máxima segurança na esterilização de instrumentais. Tecnologia de ponta com design impecável.',
    image: `${IMG_BASE}autoclaves-cristofoli-brancas-linha-odontologia-fundo-preto_1080x1080.webp`,
    tag: 'Alta Performance',
  },
  {
    id: 4,
    name: 'Compressor Chiaperini',
    category: 'Compressores',
    description:
      'Silencioso, eficiente e confiável. Compressor odontológico ideal para clínicas que exigem performance sem interferências sonoras durante os atendimentos.',
    image: `${IMG_BASE}compressor-odontologico-chiaperini-branco-silencioso-clinica_1080x1080.webp`,
    tag: 'Ultra Silencioso',
  },
];

export default function Products() {
  return (
    <section id="produtos" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-10 bg-black" />
              <span className="text-black/50 text-xs tracking-[0.25em] uppercase font-medium">
                Linha Completa
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              Equipamentos que
              <br />
              <span className="italic font-light">transformam clínicas</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
            Trabalhamos com as marcas mais confiáveis do mercado odontológico,
            trazendo tecnologia de ponta para Belém e região.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-gray-50 overflow-hidden border border-gray-100 hover:border-black transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden aspect-square bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-black text-white text-xs font-medium px-3 py-1 tracking-wider">
                    {product.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 text-black text-xs font-medium px-3 py-1 tracking-wider border border-black/10">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-bold text-black mb-2">{product.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                  {product.description}
                </p>
                <a
                  href={`http://wa.me/559181685427?text=Olá!%20Tenho%20interesse%20em%20saber%20mais%20sobre%20a%20${encodeURIComponent(product.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 text-black text-sm font-semibold tracking-wider hover:gap-4 transition-all duration-200"
                >
                  SOLICITAR ORÇAMENTO
                  <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-6">
            Trabalhamos também com Aparelhos de Raio-X, Sensores Digitais e muito mais.
          </p>
          <a
            href="http://wa.me/559181685427?text=Olá!%20Gostaria%20de%20ver%20o%20catálogo%20completo%20de%20equipamentos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-black text-black px-8 py-4 text-sm font-semibold tracking-wider hover:bg-black hover:text-white transition-all duration-200"
          >
            VER CATÁLOGO COMPLETO
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
