const credentials = [
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/certificado-pos-graduacao-tricologia-cosmetica-capilar_895x895.webp',
    alt: 'Certificado Pós-Graduação em Tricologia e Cosmética Capilar',
    caption: 'Pós-Graduação em Tricologia e Cosmetologia — Claretiano',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/duas-mulheres-sorrindo-curso-biorressonancia-magnetica_899x899.webp',
    alt: 'Curso de Biorresonância Magnética',
    caption: 'Especialização em Biorresonância Magnética',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/grupo-de-medicos-com-diplomas-e-mascaras_1079x1080.webp',
    alt: 'Grupo de especialistas com diplomas',
    caption: 'Formação em Terapia Capilar — ABT',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/grupo-mulheres-mascaras-escada-roupas-coloridas_866x1024.webp',
    alt: 'Grupo em formação de especialistas',
    caption: 'Formações e Atualizações Contínuas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/grupo-pessoas-felizes-segurando-certificado-branco_3000x4000.webp',
    alt: 'Grupo com certificados',
    caption: 'Certificações Especializadas',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/medicos-mascarados-certificado-tricologia-apresentacao_720x720.webp',
    alt: 'Apresentação em congresso de tricologia',
    caption: 'Congressos de Tricologia',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-caucasiana-premio-dna-vital-medica-brasileira_900x1600.webp',
    alt: 'Prêmio DNA Vital — Médica Brasileira',
    caption: 'Prêmio DNA Vital',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-certificado-homem-em-clinica-de-estetica_950x950.webp',
    alt: 'Certificado em clínica de estética',
    caption: 'Especialização em Estética Capilar',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-congresso-tricologia-interior-paulista_1200x1600.webp',
    alt: 'Congresso de Tricologia no interior paulista',
    caption: 'Congresso de Tricologia — Interior Paulista',
  },
  {
    src: 'https://storage.lucasmendes.dev/site-sp/sr-fio/mulher-mascara-rosto-microagulhamento-estetica_1027x1080.webp',
    alt: 'Procedimento de microagulhamento',
    caption: 'Microagulhamento Capilar',
  },
];

export default function Credentials() {
  return (
    <section id="credenciais" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-brand-gold font-body text-sm font-semibold tracking-[0.2em] uppercase">
            Credenciais
          </span>
          <h2 className="font-heading text-3xl md:text-5xl text-brand-slate-dark mt-3 mb-5">
            Formação e Especializações
          </h2>
          <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Capacitação contínua em congressos, cursos e pós-graduações para oferecer sempre o que há de
            mais atual e eficaz na tricologia.
          </p>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-6"></div>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {credentials.map((item) => (
            <div
              key={item.src}
              className="group break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="font-body text-white text-xs font-medium leading-snug">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 bg-brand-slate-dark rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
              Pronto para transformar sua saúde capilar?
            </h3>
            <p className="font-body text-white/60 text-base max-w-lg">
              Agende sua avaliação e descubra qual tratamento é ideal para o seu caso. Atendimento ético,
              transparente e personalizado.
            </p>
          </div>
          <a
            href="https://wa.me/5516991998208?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20capilar."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 gold-gradient text-white font-body font-semibold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-brand-gold/40 transition-all duration-300 hover:scale-105 whitespace-nowrap"
          >
            Falar com a Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
