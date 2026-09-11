const base = 'https://storage.lucasmendes.dev/site-sp/marize%20uniformes/galeria/';

const images = [
  { file: 'fardamentos-azul-laranja-marize-uniformes-valen_1440x1440.webp', alt: 'Fardamentos azul e laranja – Marizé Uniformes' },
  { file: 'camisa-minerva-solucoes-engenharia-cinza-e-preta_1200x1500.webp', alt: 'Camisa Minerva Soluções Engenharia' },
  { file: 'uniforme-seguranca-preto-laranja-manga-longa_1440x1920.webp', alt: 'Uniforme de segurança preto e laranja' },
  { file: 'camisa-uniforme-valon-preta-e-laranja_4284x5712.webp', alt: 'Camisa uniforme preta e laranja' },
  { file: 'camiseta-vermelha-manequim-futuro-sorriso-hoje_640x1138.webp', alt: 'Camiseta vermelha personalizada' },
  { file: 'bone-preto-logo-jm-solucoes-dedo-vermelho_640x1136.webp', alt: 'Boné preto com logo bordado' },
  { file: 'mao-segurando-bone-wr-transporte-e-locacoes_640x1136.webp', alt: 'Boné WR Transporte e Locações' },
  { file: 'blusa-verde-em-manequeim-com-logo_960x1280.webp', alt: 'Blusa verde em manequim com logo' },
  { file: 'blusa-verde-galeria-appiani-manequim_960x1280.webp', alt: 'Blusa verde Appiani' },
  { file: 'blusa-verde-manequim-valeria-appiani-cordao_960x1280.webp', alt: 'Blusa verde com cordão' },
  { file: 'camisa-azul-amarela-uniforme-manga-curta_960x1280.webp', alt: 'Camisa azul e amarela manga curta' },
  { file: 'camisa-mangas-curtas-azul-amarela-manequim_960x1280.webp', alt: 'Camisa azul e amarela em manequim' },
  { file: 'camisa-polo-vermelha-manequim-instituto-sementinha_960x1280.webp', alt: 'Camisa polo vermelha Instituto Sementinha' },
  { file: 'camisa-polo-vermelha-manga-curta-manequim_960x1280.webp', alt: 'Camisa polo vermelha manga curta' },
  { file: 'camisa-preta-logo-smartita-e-apple_960x1280.webp', alt: 'Camisa preta Smartita e Apple' },
  { file: 'camisa-preta-logo-xiaomi-manequim_960x1280.webp', alt: 'Camisa preta Xiaomi' },
  { file: 'camisa-preta-xiaomi-smartia-manequim_960x1280.webp', alt: 'Camisa preta Xiaomi e Smartia' },
  { file: 'camiseta-azul-manequim-logotipo-skilled-ed_960x1280.webp', alt: 'Camiseta azul Skilled ED' },
  { file: 'macacao-azul-safemed-manequim-ambiente-interno_960x1280.webp', alt: 'Macacão azul Safemed' },
  { file: 'macacao-azul-safemg-manequim-peruca-preta_960x1280.webp', alt: 'Macacão azul SafeMG' },
  { file: 'macacao-safemed-azul-com-bandeira-brasil_960x1280.webp', alt: 'Macacão Safemed com bandeira' },
  { file: 'manequim-com-macacao-azul-de-paramedico_960x1280.webp', alt: 'Macacão azul de paramédico' },
  { file: 'manequim-macacao-azul-safemed-reflexivo-interno_960x1280.webp', alt: 'Macacão Safemed reflexivo' },
  { file: 'manequim-safemed-macacao-azul-centro-ocupacional_960x1280.webp', alt: 'Macacão azul Centro Ocupacional' },
  { file: 'pessoa-uniforme-safemed-costas-emergencia-azul_960x1280.webp', alt: 'Uniforme Safemed emergência costas' },
  { file: 'polo-branca-hygeia-manequim-draft-servicos_960x1280.webp', alt: 'Polo branca Hygeia' },
  { file: 'polo-branca-hygeia-servicos-limpeza-logo_960x1280.webp', alt: 'Polo branca serviços limpeza' },
  { file: 'uniforme-escolar-vermelho-no-manequim-detalhes_960x1280.webp', alt: 'Uniforme escolar vermelho' },
  { file: 'uniforme-verde-galeria-appiani-no-manequim_960x1280.webp', alt: 'Uniforme verde Galeria Appiani' },
  { file: 'uniforme-vermelho-manequim-bolsos-detalhe-azul_960x1280.webp', alt: 'Uniforme vermelho com detalhes azuis' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 text-brand-cyan border border-brand-cyan/30 bg-brand-cyan/10">
            Portfólio
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Nossos Trabalhos
            <br />
            <span style={{ color: 'rgb(0, 187, 254)' }}>Falam por Si</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Cada peça é desenvolvida com cuidado, qualidade e a identidade da sua empresa.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <div
              key={img.file}
              className="group relative overflow-hidden rounded-2xl bg-gray-900 cursor-pointer transition-all duration-500 aspect-[4/5] opacity-100 scale-100"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={base + img.file}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="http://wa.me/559881135450?text=Olá!%20Vi%20o%20portfólio%20e%20gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#00bbfe]/20"
            style={{ background: 'linear-gradient(135deg, rgb(1, 12, 222) 0%, rgb(0, 187, 254) 100%)' }}
          >
            Quero um Uniforme Assim
          </a>
        </div>
      </div>
    </section>
  );
}
