interface GalleryItem {
  image: string;
  alt: string;
  spanClass: string;
}

const items: GalleryItem[] = [
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/oficina-mecanica-caminhoes-carros-em-reparo_1600x1200.webp',
    alt: 'Oficina mecânica com caminhões',
    spanClass: 'col-span-2 row-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/caminhonetes-prata-dentro-de-uma-oficina_1600x1200.webp',
    alt: 'Caminhonetes na oficina',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/maquina-teste-bicos-common-rail-computador_1600x1200.webp',
    alt: 'Máquina de teste de bicos Common Rail',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/bancada-ferramentas-vermelha-computador-oficina_1200x1600.webp',
    alt: 'Bancada de ferramentas',
    spanClass: 'col-span-1 row-span-2',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/maquina-teste-bomba-injetora-diesel-mecanica_1200x1600.webp',
    alt: 'Máquina de teste bomba injetora',
    spanClass: 'col-span-1 row-span-2',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/equipamento-teste-inje-o-fila-tubos-graduados_1200x1600.webp',
    alt: 'Equipamento de teste de injeção',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/ferramentas-diagnostico-automotivo-com-cabos-e-maleta_1200x1600.webp',
    alt: 'Ferramentas de diagnóstico automotivo',
    spanClass: 'col-span-1 row-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/TURBO%20MASTER/turbocompressores-novos-embalados-em-bancada-escura_382x510.webp',
    alt: 'Turbocompressores novos embalados',
    spanClass: 'col-span-2 row-span-1',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-gray-900 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-primary-500 text-xs font-bold tracking-widest uppercase">
            Nossa estrutura
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mt-3 mb-4">
            Galeria
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto">
            Conheça nossa estrutura, equipamentos e o ambiente onde trabalhamos para garantir o
            melhor serviço.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
          {items.map((item, i) => (
            <button
              key={`${item.alt}-${i}`}
              className={`${item.spanClass} overflow-hidden rounded-2xl group relative`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gray-950/0 group-hover:bg-gray-950/30 transition-colors duration-300 rounded-2xl"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
