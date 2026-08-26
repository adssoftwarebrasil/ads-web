const BASE = 'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

const items: GalleryItem[] = [
  {
    src: `${BASE}mecanico-trocando-pneu-na-maquina-corghi_1024x1536.webp`,
    alt: 'Mecânico trocando pneu na máquina Corghi',
    caption: 'Equipamento Corghi de última geração',
  },
  {
    src: `${BASE}mecanico-balanceando-pneu-em-borracharia_1024x1536.webp`,
    alt: 'Mecânico balanceando pneu',
    caption: 'Balanceamento preciso',
  },
  {
    src: `${BASE}mecanico-trocando-pneu-em-oficina_1024x1536.webp`,
    alt: 'Mecânico trocando pneu em oficina',
    caption: 'Troca de pneus especializada',
  },
  {
    src: `${BASE}carro-branco-balanceamento-mecanico-trabalhando-oficina_1024x1536.webp`,
    alt: 'Carro branco na oficina',
    caption: 'Atendimento completo na oficina',
  },
  {
    src: `${BASE}oficina-mecanico-carro-preto-rampa-computador_1024x1536.webp`,
    alt: 'Diagnóstico computadorizado',
    caption: 'Diagnóstico eletrônico',
  },
  {
    src: `${BASE}oficina-carros-troca-pneus-alinhamento_1024x1536.webp`,
    alt: 'Oficina com carros',
    caption: 'Estrutura moderna e completa',
  },
  {
    src: `${BASE}mecanico-desmontando-caixa-de-transferencia-enferrujada_1024x1536.webp`,
    alt: 'Mecânico desmontando peça',
    caption: 'Mecânica especializada',
  },
  {
    src: `${BASE}troca-filtro-ar-condicionado-carro-novo-usado_1024x1536.webp`,
    alt: 'Troca de filtro de ar condicionado',
    caption: 'Manutenção preventiva completa',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-[rgb(254,254,254)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(246,122,55)] text-xs font-bold uppercase tracking-widest mb-3">
            Nossa estrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Veja Nossa Oficina</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Equipamentos modernos, ambiente organizado e equipe preparada para cuidar do seu
            veículo.
          </p>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
          {items.map((item) => (
            <div
              key={item.caption}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                <p className="text-white text-xs font-medium p-3 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
