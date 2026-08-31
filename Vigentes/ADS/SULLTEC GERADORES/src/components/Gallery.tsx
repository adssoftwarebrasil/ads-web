type GalleryItem = { image: string; alt: string; span: string };

const items: GalleryItem[] = [
  {
    image: '/frota-geradores-sulltec.jpg',
    alt: 'Frota de geradores Sulltec de diferentes potências em pátio',
    span: 'col-span-2',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/gerador-mwm-azul-portas-abertas-exterior_1160x522.webp',
    alt: 'Gerador MWM azul com portas abertas',
    span: 'col-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/operario-controlando-painel-mwm-com-chave_1280x853.webp',
    alt: 'Operário controlando painel MWM',
    span: 'col-span-1',
  },
  {
    image:
      'https://storage.lucasmendes.dev/site-sp/SULLTEC-GERADORES/guindaste-levantando-gerador-sulltec-azul_1536x1024.webp',
    alt: 'Guindaste levantando gerador Sulltec',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
            Nossa Frota
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-blue mb-4">
            Equipamentos de Alta Qualidade
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
            Conheça alguns modelos de nossa frota — revisados, testados e
            prontos para atender sua demanda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item) => (
            <div
              key={item.image}
              className={`${item.span} relative group overflow-hidden rounded-2xl shadow-lg`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-56 md:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
