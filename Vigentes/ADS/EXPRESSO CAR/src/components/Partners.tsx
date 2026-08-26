const partners = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/brasao-policia-rodoviaria-federal-e-sigla_336x144.webp',
    alt: 'Polícia Rodoviária Federal',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-azul-seguros-em-azul_336x144.webp',
    alt: 'Azul Seguros',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-carglass-servicos-automotivos-vermelho-e-amarelo_336x144.webp',
    alt: 'Carglass',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-essor-seguradora-grupo-scor-azul_336x144.webp',
    alt: 'Essor Seguradora',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-gol-protecao-veicular-azul-laranja_336x144.webp',
    alt: 'Gol Proteção Veicular',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-master-autos-truck-cooperativa-consumo_336x144.webp',
    alt: 'Master Autos Truck',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logo-porto-seguro-azul-e-branco_336x144.webp',
    alt: 'Porto Seguro',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-automania-multimarcas-cinza-e-amarelo_336x144.webp',
    alt: 'Automania Multimarcas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-bamex-laranja-letra-wifi_336x144.webp',
    alt: 'Bamex',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-bradesco-seguros-vermelho-fundo-branco_336x144.webp',
    alt: 'Bradesco Seguros',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-grupo-energisa-azul-e-laranja_336x144.webp',
    alt: 'Grupo Energisa',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-proauto-simbolo-triquetra-azul_336x144.webp',
    alt: 'ProAuto',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-ticket-log-verde-azul_336x144.webp',
    alt: 'Ticket Log',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/expressocarse/logotipo-tokio-marine-seguradora-verde-amarelo_336x144.webp',
    alt: 'Tokio Marine',
  },
];

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block text-red-600 text-sm font-bold tracking-widest uppercase mb-3">
            Parceiros e Clientes
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">
            Principais seguradoras parceiras
          </h2>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 items-center">
          {partners.map((partner) => (
            <div
              key={partner.src}
              className="flex items-center justify-center p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-10 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
