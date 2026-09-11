interface GaleriaItem {
  src: string;
  alt: string;
  label: string;
}

const items: GaleriaItem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/oficina-funilaria-pintura-automotiva-carros-reparo_773x580.webp',
    alt: 'Oficina de Funilaria e Pintura',
    label: 'Funilaria e Pintura',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/loja-pecas-auto-prateleiras-oleo-produtos_773x580.webp',
    alt: 'Loja de Peças - Prateleiras',
    label: 'Peças e Acessórios',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/loja-pecas-automotivas-pneus-estantes-produtos_901x676.webp',
    alt: 'Loja de Peças - Pneus',
    label: 'Pneus e Produtos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/vidros-automotivos-armazenados-loja-pecas-reposicao_773x580.webp',
    alt: 'Vidros Automotivos',
    label: 'Vidros Automotivos',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/carros-em-reparacao-mecanica-elevador-automotivo_773x580.webp',
    alt: 'Mecânica - Elevador',
    label: 'Mecânica Geral',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/RETOCAR/retocar-servicos-e-pecas-carros-estacionados_773x580.webp',
    alt: 'Retocar - Área Externa',
    label: 'Nossa Estrutura',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-[#DB151F] text-xs font-bold tracking-widest uppercase mb-4">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Conheça a Retocar</h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Estrutura completa para atender todas as suas necessidades automotivas.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-[#DB151F] text-white text-xs font-bold px-3 py-1 rounded-lg">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
