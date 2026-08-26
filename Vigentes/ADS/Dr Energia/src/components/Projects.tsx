import { ArrowRight } from 'lucide-react';
import { WHATSAPP_URL } from '../lib/scroll';

interface Project {
  src: string;
  alt: string;
  tag: string;
  title: string;
  description: string;
}

const base = 'https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica/img/';

const projects: Project[] = [
  {
    src: `${base}conjunto-habitacional-trabalhadores-veiculos-rua-terra_1280x720.webp`,
    alt: 'Conjunto Habitacional',
    tag: 'Rede de Distribuição',
    title: 'Conjunto Habitacional',
    description:
      'Infraestrutura elétrica completa para conjunto habitacional com distribuição de energia eficiente e segura.',
  },
  {
    src: `${base}grupo-de-pessoas-e-caminhonetes-em-patio_1600x900.webp`,
    alt: 'Equipe e Frota',
    tag: 'Nossa Estrutura',
    title: 'Equipe e Frota',
    description:
      'Time completo de profissionais habilitados e frota moderna, prontos para atender sua demanda em campo.',
  },
  {
    src: `${base}fachada-cinza-dr-eletrica-energia-palmeiras_1600x1200.webp`,
    alt: 'Dr. Energia Elétrica',
    tag: 'Nossa Sede - Sinop/MT',
    title: 'Dr. Energia Elétrica',
    description:
      'Sede própria estrategicamente localizada em Sinop, referência em qualidade e atendimento na região Norte de MT.',
  },
];

export default function Projects() {
  return (
    <section id="projetos" className="py-24 bg-brand-darkgray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              Portfólio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-white">
              Projetos que <span className="text-brand-red">falam por si</span>
            </h2>
            <p className="mt-4 text-brand-white/60 text-lg max-w-xl mx-auto">
              Cada obra entregue é resultado de planejamento rigoroso, equipe qualificada e
              compromisso com o cliente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">
                    {project.tag}
                  </span>
                  <h3 className="text-brand-white font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-brand-white/65 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200"
            >
              Ver mais projetos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
