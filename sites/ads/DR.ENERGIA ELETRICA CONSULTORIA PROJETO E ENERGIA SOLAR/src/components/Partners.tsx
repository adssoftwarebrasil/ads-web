interface Partner {
  src: string;
  alt: string;
}

const base =
  'https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica/nossos%20parceiros/';

const partners: Partner[] = [
  { src: `${base}logo-aegea-azul-fundo-preto_115x76.webp`, alt: 'Aegea' },
  {
    src: `${base}logo-machado-supermercados-vermelho-amarelo_963x298.webp`,
    alt: 'Machado Supermercados',
  },
  { src: `${base}logo-spl-engenharia-branco-fundo-preto_300x106.webp`, alt: 'SPL Engenharia' },
  {
    src: `${base}logotipo-annasil-empreendimentos-fundo-azul_258x152.webp`,
    alt: 'Annasil Empreendimentos',
  },
  { src: `${base}logotipo-ascia-vermelho-fundo-preto_153x50.webp`, alt: 'Ascia' },
  { src: `${base}logotipo-grupo-sinop-fundo-roxo-escuro_382x148.webp`, alt: 'Grupo Sinop' },
  { src: `${base}logotipo-inpasa-azul-e-amarelo_201x58.webp`, alt: 'Inpasa' },
  {
    src: `${base}logotipo-pz-empreendimentos-preto-e-branco_905x206.webp`,
    alt: 'PZ Empreendimentos',
  },
  {
    src: `${base}logotipo-sao-benedito-silhueta-predios-branco-preto_1205x769.webp`,
    alt: 'São Benedito',
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-brand-white/50 tracking-widest mb-10">
          Empresas que confiam em nosso trabalho
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center h-20 sm:h-24 w-36 sm:w-44 bg-brand-darkgray/40 border border-white/8 rounded-xl p-4 hover:border-brand-red/30 transition-all duration-300 hover:-translate-y-1 group"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                loading="lazy"
                className="max-h-full max-w-full object-contain transition-all duration-300 opacity-80 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
