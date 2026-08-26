import { ZoomIn } from 'lucide-react';

type Project = {
  image: string;
  title: string;
};

const base = 'https://storage.lucasmendes.dev/site-sp/art%20e%20madeiras%2Fimg%2F';

const projects: Project[] = [
  { image: base + 'pergolado-madeira-piscina.webp', title: 'Pergolado em madeira angelim-vermelho' },
  { image: base + 'homem-madeira-piscina-construindo.webp', title: 'Preparação madeira p Pergolado' },
  {
    image: base + 'pergolado-madeira-jardim.webp',
    title: 'Pergolado em madeira Angelim vermelho com cobertura e forro sintético + deck cumaru extra',
  },
  {
    image: base + 'parque-infantil-madeira.webp',
    title: 'Parquinho em madeira eucalipto tratado com balanço, escorregador, escalada e ponte',
  },
  { image: base + 'parede-ripada-madeira.webp', title: 'Ripado em madeira cumaru extra' },
  {
    image: base + 'toldo-madeira-moderno.webp',
    title: 'Pergolado em madeira em balanço , com cobertura e forro sintético',
  },
  {
    image: base + 'madeira-varanda-telhado.webp',
    title:
      'Pergolado em madeira angelim vermelho, com cobertura e forro de bambu artesanal + deck em madeira cumaru extra',
  },
  {
    image: base + 'estrutura-madeira-construcao.webp',
    title: 'Estrutura Pergolado em madeira angelim vermelho com tabeiras de cumaru',
  },
  {
    image: base + 'pergolado-madeira-casa.webp',
    title: 'Pergolado em madeira angelim vermelho com acabamento verniz natural',
  },
  { image: base + 'teto-bambu-luminaria.webp', title: 'Forro de bambu artesanal' },
  {
    image: base + 'jacuzzi-churrasqueira-varanda.webp',
    title: 'Pergolado em madeira cumaru com cobertura e forro sintético',
  },
  {
    image: base + 'casa-arvore-playground02.webp',
    title: 'Casinha na árvore com balanço em madeira eucalipto tratado',
  },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-stone-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 space-y-4">
          <p className="text-amber-600 font-semibold text-sm md:text-base uppercase tracking-wider">
            NOSSOS PROJETOS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Veja a Qualidade do Nosso Trabalho</h2>
          <p className="text-lg md:text-xl text-stone-600 max-w-3xl mx-auto">
            Cada projeto conta uma história de dedicação, técnica e transformação. Inspire-se com nossos
            trabalhos realizados.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ZoomIn className="lucide lucide-zoom-in w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
