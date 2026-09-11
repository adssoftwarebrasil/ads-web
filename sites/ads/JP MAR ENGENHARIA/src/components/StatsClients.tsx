const stats = [
  'Anos de Experiência',
  'Projetos Realizados',
  'Clientes Satisfeitos',
  'Relatórios Entregues',
];

const clients = [
  'logo-alpha-rede-de-postos-fundo-amarelo_225x225.webp',
  'logo-auto-posto-apa-gota-vermelha_1241x590.webp',
  'logo-auto-posto-sao-joao-gota-oleo_1241x600.webp',
  'logo-posto-boa-hora-verde-amarelo_1241x715.webp',
  'logo-posto-comvel-ipiranga-vermelho-e-azul_1241x637.webp',
  'logo-posto-jbii-br101-estancia-se_1241x642.webp',
  'logo-posto-madre-deus-azul-e-cinza_1241x712.webp',
  'logo-posto-natuba-bomba-gasolina-grafico_1241x529.webp',
  'logo-posto-sao-luiz-bomba-gota_1241x636.webp',
  'logo-posto-veneza-texto-vermelho-fundo-branco_1241x596.webp',
  'logo-posto-ville-fundo-laranja_640x640.webp',
  'logotipo-petrox-vermelho-amarelo-movido-a-confianca_1241x693.webp',
  'logotipo-votarantim-azul-e-cinza_1269x907.webp',
];

const CLIENT_BASE = 'https://storage.lucasmendes.dev/site-sp/jpmarambiental/clientes/';

export default function StatsClients() {
  return (
    <section className="py-20 bg-[#013413]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-20">
          {stats.map((label) => (
            <div key={label} className="animate-fade-up  text-center" style={{ transitionDelay: '0s' }}>
              <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2 leading-none">
                0<span>+</span>
              </div>
              <p className="text-[#f8f1e1]/65 text-sm tracking-wide">{label}</p>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-[#f8f1e1]/10 mb-16"></div>
        <div className="text-center">
          <h3 className="text-[#f8f1e1] text-2xl md:text-3xl font-bold mb-10">
            Empresas que confiam em nosso trabalho
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
            {clients.map((file, i) => (
              <div
                key={file}
                className="bg-white rounded-lg p-4 flex items-center justify-center h-24 shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <img
                  alt={`Cliente JPMAR ${i + 1}`}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain mix-blend-multiply"
                  src={`${CLIENT_BASE}${file}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
