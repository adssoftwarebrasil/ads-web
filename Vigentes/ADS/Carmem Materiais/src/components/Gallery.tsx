const BASE = 'https://storage.lucasmendes.dev/site-sp/carmem%20materiais%20para%20construcao/catalogo%20de%20produtos/';

const IMAGES: { img: string; alt: string }[] = [
  { img: BASE + 'prateleiras-azuis-produtos-variados-loja_960x1280.webp', alt: 'Prateleiras com produtos variados' },
  { img: BASE + 'loja-tintas-balcoes-azul-diversos-produtos_720x1280.webp', alt: 'Setor de tintas' },
  { img: BASE + 'latas-tinta-brasilux-esmalte-sintetico_720x1280.webp', alt: 'Tintas Brasilux esmalte sintético' },
  { img: BASE + 'display-corantes-sherwin-williams-varias-cores_960x1280.webp', alt: 'Corantes Sherwin Williams' },
  { img: BASE + 'prateleiras-ferramentas-martelos-talhadeiras-loja_960x1280.webp', alt: 'Ferramentas na loja' },
  { img: BASE + 'kit-ferramentas-famastil-nivel-trena-chaves_720x1280.webp', alt: 'Kit ferramentas Famastil' },
  { img: BASE + 'pia-cozinha-dupla-preta-loja-exposicao_960x1280.webp', alt: 'Pias em exposição' },
  { img: BASE + 'loja-de-construcao-vasos-sanitarios-brancos_960x1280.webp', alt: 'Vasos sanitários' },
  { img: BASE + 'expositor-cadeados-latao-stam-dimensoes_1280x720.webp', alt: 'Cadeados Stam' },
  { img: BASE + 'estande-duchas-zagonel-caixas-verdes-e-brancas_720x1280.webp', alt: 'Duchas Zagonel' },
  { img: BASE + 'pilhas-de-tubos-pretos-em-palete-de-madeira_960x1280.webp', alt: 'Tubos em estoque' },
  { img: BASE + 'tanque-duplo-branco-aj-rorato-loja_960x1280.webp', alt: 'Tanque duplo AJ Rorato' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block text-[#2F44C8] font-bold text-sm uppercase tracking-widest mb-3">Conheça a Loja</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000000] mb-4">Galeria de Produtos</h2>
          <p className="text-gray-500 max-w-xl mx-auto">Uma amostra da nossa enorme variedade de produtos disponíveis para você.</p>
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 transition-all duration-700 opacity-100 translate-y-0">
          {IMAGES.map(({ img, alt }) => (
            <div key={img} className="break-inside-avoid mb-3 overflow-hidden rounded-xl cursor-pointer group relative">
              <img src={img} alt={alt} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-3 py-1 rounded-full">Ver</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
