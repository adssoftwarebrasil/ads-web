const base =
  'https://storage.lucasmendes.dev/site-sp/nosso%20carro%20centro%20automotivo/seguradoras/';

const insurers = [
  { src: base + 'logo-allianz-azul-fundo-branco_317x159.webp', alt: 'Logo Allianz' },
  { src: base + 'logo-azul-seguros-fundo-azul-escuro_180x180.webp', alt: 'Logo Azul Seguros' },
  { src: base + 'logo-bradesco-seguros-fundo-vermelho_512x512.webp', alt: 'Logo Bradesco Seguros' },
  { src: base + 'logo-hdi-seguros-verde-vermelho-cinza_225x225.webp', alt: 'Logo HDI Seguros' },
  { src: base + 'logo-itau-seguros-azul-laranja-fundo-preto_825x293.webp', alt: 'Logo Itaú Seguros' },
  { src: base + 'logo-porto-azul-com-vela-branca_225x225.webp', alt: 'Logo Porto Seguros' },
  { src: base + 'logo-yelum-seguradora-fundo-amarelo_201x251.webp', alt: 'Logo Yelum Seguradora' },
  { src: base + 'logo-zurich-letra-z-azul-fundo-preto_200x200.webp', alt: 'Logo Zurich' },
  { src: base + 'logotipo-caixa-seguradora-azul-e-laranja_225x225.webp', alt: 'Logo Caixa Seguradora' },
  { src: base + 'logotipo-mapfre-vermelho-fundo-branco_2414x696.webp', alt: 'Logo Mapfre' },
  { src: base + 'logotipo-sompo-seguros-circulo-vermelho-prata_1920x1280.webp', alt: 'Logo Sompo Seguros' },
  { src: base + 'logotipo-sulamerica-azul-e-laranja-fundo-branco_338x150.webp', alt: 'Logo SulAmérica' },
  { src: base + 'logotipo-tokio-marine-seguradora_900x900.webp', alt: 'Logo Tokio Marine' },
  { src: base + 'logotipo-youse-roxo-e-amarelo_330x252.webp', alt: 'Logo Youse' },
];

export default function Insurers() {
  return (
    <section className="py-16 bg-[#04152D] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Seguradoras Parceiras</h2>
          <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto">
            Somos uma oficina referenciada pelas maiores companhias de seguro do Brasil, garantindo
            agilidade e confiança no seu processo de sinistro.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {insurers.map((ins) => (
            <div
              key={ins.alt}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-center aspect-video hover:bg-white/10 transition-all duration-300"
            >
              <img
                src={ins.src}
                alt={ins.alt}
                className="max-w-full max-h-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
