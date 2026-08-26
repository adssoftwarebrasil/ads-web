interface Homenagem {
  src: string;
  alt: string;
}

const homenagens: Homenagem[] = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/homenagem/homenagem-placa-komatsu-perfuratriz-mina-salobo-premio_1280x960.webp',
    alt: 'Placa de Homenagem 1',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/homenagem/placa-homenagem-felipe-ferreira-sales-seis-sigma_960x1280.webp',
    alt: 'Placa de Homenagem 2',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/homenagem/placa-homenagem-premio-policia-militar-minas-gerais-philipe-lima_1280x644.webp',
    alt: 'Placa de Homenagem 3',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/Marco%20Placas/homenagem/placa-homenagem-sabrina-antunes-vale-usina-sul_1280x960.webp',
    alt: 'Placa de Homenagem 4',
  },
];

export default function Homenagens() {
  return (
    <section id="homenagens" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Homenagens e Reconhecimentos
          </h2>
          <div className="w-24 h-1 bg-[rgb(167,28,31)] mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A excelência do nosso trabalho refletida em placas de homenagem para grandes empresas e
            instituições.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
          {homenagens.map((item) => (
            <div
              key={item.src}
              className="w-full h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white flex items-center justify-center p-6 border border-gray-100"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
