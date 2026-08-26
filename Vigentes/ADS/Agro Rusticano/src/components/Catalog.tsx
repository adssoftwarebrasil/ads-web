import { useState } from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface CatalogItem {
  name: string;
  image: string;
}

const items: CatalogItem[] = [
  {
    name: 'Ampolas Ucbver Phenodral Uso Veterinario',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/ampolas-ucbver-phenodral-uso-veterinario_720x1280.webp',
  },
  {
    name: 'Biotrin Vet Fertilidade Reproducao Aves',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/biotrin-vet-fertilidade-reproducao-aves_720x1280.webp',
  },
  {
    name: 'Caixa Agemoxi Cl Veterinario Caes Gatos',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-agemoxi-cl-veterinario-caes-gatos_720x1280.webp',
  },
  {
    name: 'Caixa Al Cort Prednisolona Uso Veterinario',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-al-cort-prednisolona-uso-veterinario_720x1280.webp',
  },
  {
    name: 'Caixa Alergovet C Anti Histaminico Cao',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-alergovet-c-anti-histaminico-cao_1280x1007.webp',
  },
  {
    name: 'Caixa Alergovet C Cao Gato 10 Comprimidos',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-alergovet-c-cao-gato-10-comprimidos_904x1280.webp',
  },
  {
    name: 'Caixa Antiinflamatorio Prednisolona Uso Veterinario',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-antiinflamatorio-prednisolona-uso-veterinario_720x1280.webp',
  },
  {
    name: 'Caixa Averin Soluvel Antibiotico Para Passaros',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-averin-soluvel-antibiotico-para-passaros_720x1280.webp',
  },
  {
    name: 'Caixa Averin Soluvel Antibiotico Para Passaros',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-averin-soluvel-antibiotico-para-passaros_882x1280.webp',
  },
  {
    name: 'Caixa Avitrin Antibiotico Para Aves',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-avitrin-antibiotico-para-aves_720x1280.webp',
  },
  {
    name: 'Caixa Avitrin Antibiotico Uso Veterinario Aves',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-avitrin-antibiotico-uso-veterinario-aves_720x1280.webp',
  },
  {
    name: 'Caixa Azul Medicamento Veterinario Cao Gato',
    image:
      'https://storage.lucasmendes.dev/site-sp/agro%20rusticano/produtos/caixa-azul-medicamento-veterinario-cao-gato_720x1280.webp',
  },
];

const TOTAL_PAGES = 7;

function whatsappLink(name: string) {
  const text = `Olá! Tenho interesse no produto: ${name}. Poderia me passar mais informações e valores?`;
  return `https://wa.me/551235122848?text=${encodeURIComponent(text)}`;
}

export default function Catalog() {
  const [page, setPage] = useState(1);

  return (
    <section id="galeria-detalhada" className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(54,59,27)] mb-4">
            Catálogo de <span className="text-[rgb(186,213,51)]">Medicamentos e Insumos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira nossa linha completa e faça seu pedido diretamente pelo WhatsApp.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-4 flex flex-col justify-between items-center group"
            >
              <div className="h-48 w-full flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <h4 className="text-center text-[rgb(54,59,27)] font-semibold text-sm mb-4 line-clamp-2 h-10">
                {item.name}
              </h4>
              <a
                href={whatsappLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                <MessageCircle width={18} height={18} />
                <span className="text-sm">Consultar Preço</span>
              </a>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            className={`p-2 rounded-full transition-colors ${
              page === 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[rgb(54,59,27)] text-white hover:bg-[rgb(74,79,47)]'
            }`}
          >
            <ChevronLeft width={24} height={24} />
          </button>
          <span className="text-lg font-medium text-gray-700">
            Página {page} de {TOTAL_PAGES}
          </span>
          <button
            disabled={page === TOTAL_PAGES}
            onClick={() => setPage((p) => Math.min(TOTAL_PAGES, p + 1))}
            className={`p-2 rounded-full transition-colors ${
              page === TOTAL_PAGES
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-[rgb(54,59,27)] text-white hover:bg-[rgb(74,79,47)]'
            }`}
          >
            <ChevronRight width={24} height={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
