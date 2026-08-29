import { WHATSAPP_URL } from '../lib/scroll';

interface Product {
  img: string;
  alt: string;
  title: string;
  text: string;
  badge?: { label: string; className: string };
}

const products: Product[] = [
  {
    img: 'https://storage.lucasmendes.dev/site-sp/episolda/img/maquina-de-solda-boxer-azul-em-fundo-branco_171x148.webp',
    alt: 'Máquinas de Solda e Plasma',
    title: 'Máquinas de Solda e Plasma',
    text: 'MIG, TIG, Inversora, MMA e muito mais. Soluções para todo tipo de solda.',
    badge: { label: 'Mais Vendido', className: 'bg-[rgb(16,109,71)]' },
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/episolda/img/arames-solda-tubulares-embalagens-coloridas-fundo-laranja_334x151.webp',
    alt: 'Arame Eletrodos e varetas Especiais',
    title: 'Arame Eletrodos e varetas Especiais',
    text: 'Arame MIG, MIG 0.9mm, Vareta TIG 2.4mm, eletrodo 7018 e linha completa de consumíveis.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/episolda/img/disco-de-corte-pegatec-scissorshand-detalhado_225x225.webp',
    alt: 'Discos Abrasivos',
    title: 'Discos Abrasivos',
    text: 'Discos de corte, desbaste e lixamento para as mais exigentes aplicações industriais.',
    badge: { label: 'Promoção', className: 'bg-[rgb(206,58,52)]' },
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/episolda/img/bicos-de-plasma-cobre-metalicos-detalhe-close_205x246.webp',
    alt: 'Consumíveis plasma',
    title: 'Consumíveis plasma',
    text: 'Bicos de plasma, bocais, eletrodos e todos os acessórios para manutenção e reposição.',
  },
  {
    img: 'https://storage.lucasmendes.dev/site-sp/episolda/img/pecas-metalicas-diversas-varios-formatos-e-cores_259x194.webp',
    alt: 'Consumíveis Mig E Tig',
    title: 'Consumíveis Mig E Tig',
    text: 'Ferramentas manuais, pneumáticas e peças metálicas para serralheiros e indústrias.',
  },
  {
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=episolda%2Falteracoes%2FEPIS.jpeg&version_id=null',
    alt: "EPI'S de Segurança",
    title: "EPI'S de Segurança",
    text: 'Ferramentas manuais, pneumáticas e peças metálicas para serralheiros e indústrias.',
  },
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(16,109,71)] font-semibold text-sm uppercase tracking-widest mb-3">
            Nossos Produtos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Linha Completa para <span className="text-[rgb(16,109,71)]">Soldagem Industrial</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mais de 6.000 produtos em estoque. De máquinas de solda a consumíveis, encontre tudo em um só lugar.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p) => (
            <div
              key={p.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="relative h-52 bg-gray-100 overflow-hidden flex items-center justify-center">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                />
                {p.badge && (
                  <span
                    className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full text-white ${p.badge.className}`}
                  >
                    {p.badge.label}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{p.text}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 border-2 border-[rgb(16,109,71)] text-[rgb(16,109,71)] hover:bg-[rgb(16,109,71)] hover:text-white font-semibold px-5 py-2.5 rounded-full transition-all duration-200 text-sm"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
