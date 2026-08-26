const projects = [
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Freservatorio-metalico-azul.webp', alt: 'Projeto 1' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fcaminhao-tanque-branco.webp', alt: 'Projeto 2' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Ftorre-agua-azul.webp', alt: 'Projeto 3' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fcaminhao-tanque-guindaste.webp', alt: 'Projeto 4' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Freservatorio-metalico-fazenda.webp', alt: 'Projeto 5' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Ftanque-branco-metal.webp', alt: 'Projeto 6' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fgrua-tanque-industrial.webp', alt: 'Projeto 7' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fsilo-branco-metalico.webp', alt: 'Projeto 8' },
  { src: 'https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Ftanque-arara-azul.webp', alt: 'Projeto 9' },
];

function Projects() {
  return (
    <section
      id="projetos"
      className="py-20 lg:py-32 bg-gradient-to-b from-[rgba(12,12,45)] to-[rgba(9,9,35)] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
            <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
              Nossos Projetos
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Galeria de Realizações
          </h2>
          <p className="text-lg text-[rgba(198,198,207)] max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos entregues com excelência e qualidade comprovada.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.alt}
              className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
