const brands = [
  {
    name: 'Genco',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logo-genco-vermelho-sobre-fundo-branco_1600x1600.webp',
  },
  {
    name: 'Bralimpia',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logotipo-bralimpia-azul-e-branco-fundo-branco_1600x1600.webp',
  },
  {
    name: 'CIA Canoinhas',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logo-cia-canoinhas-fundo-azul_1600x1600.webp',
  },
  {
    name: 'PerfectPro Condor',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logotipo-empresa-perfectpro-condor-azul-vermelho_1600x1600.webp',
  },
  {
    name: 'MOR',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logotipo-marca-mor-azul-e-branco_1600x1600.webp',
  },

  {
    name: 'Piso Clean',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logotipo-pisoclean-amarelo-e-cinza-fundo-branco_1600x1600.webp',
  },

  {
    name: 'Renko',
    url: 'https://storage.lucasmendes.dev/site-sp/central-da-limpeza/logotipo-renko-azul-e-verde-fundo-branco_1600x1600.webp',
  },
  {
    name: 'Ipel',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FGroup%20182.png&version_id=null',
  },
  {
    name: 'Girando Sol',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FGIRANDO-SOL.png',
  },
  {
    name: 'Nobre',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FNOBRE.png&version_id=null',
  },  
  {
    name: 'SuperPro',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FGroup%20181.png&version_id=null',
  },  

  {
    name: 'Sustenplast',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FGroup%20183.png&version_id=null',
  },
  {
    name: 'VOLK do Brasil',
    url: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=CENTRAL%20DA%20LIMPEZA%20%2Falteracoes%2FGroup%20184.png&version_id=null',
  },
];

export default function Brands() {
  return (
    <section id="marcas" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block px-3 py-1 bg-brand-orange-light text-brand-orange text-sm font-semibold rounded-full mb-3">
            Parceiros de qualidade
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Marcas que trabalhamos
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Trabalhamos com as melhores marcas do mercado para garantir a qualidade
            dos produtos que chegam até você.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              // Reduzi o padding (de p-4/p-5 para p-2) e adicionei overflow-hidden para conter o "zoom"
              className="bg-white rounded-2xl p-2 flex items-center justify-center border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-blue/20 hover:-translate-y-1 transition-all duration-300 group aspect-square overflow-hidden"
            >
              <img
                src={brand.url}
                alt={brand.name}
                // Removi as restrições de max-h, adicionei mix-blend-multiply e um scale para dar zoom na logo
                className="w-full h-full object-contain mix-blend-multiply scale-110 group-hover:scale-125 filter group-hover:brightness-110 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            E muito mais produtos em nossa loja física!{' '}
            <a
              href="https://wa.me/5541999150216?text=Olá!%20Quero%20saber%20quais%20marcas%20vocês%20têm%20disponíveis."
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-blue font-semibold hover:underline"
            >
              Consulte disponibilidade
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}