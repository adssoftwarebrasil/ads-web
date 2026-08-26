import { CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Projetos Exclusivos e Personalizados',
    desc: 'Desenvolvemos soluções sob medida para atender suas necessidades específicas',
  },
  {
    title: 'Frota Própria para Todo o Brasil',
    desc: 'Entregamos seus produtos com segurança e agilidade em qualquer região do país',
  },
  {
    title: 'Equipe de Engenharia Especializada',
    desc: 'Profissionais capacitados e aptos para enfrentar qualquer desafio técnico',
  },
];

function About() {
  return (
    <section id="sobre" className="py-20 lg:py-32 bg-[rgba(9,9,35)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[rgba(12,132,227,0.05)] to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-[rgba(12,132,227,0.1)] rounded-full blur-3xl"></div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/tap%20metal%2Fimg%2Fgalpao-industrial-metalurgia.webp"
              alt="Galpão Industrial TAP Metal"
              className="rounded-2xl shadow-2xl relative z-10 w-full h-auto"
            />
            <div className="absolute -bottom-8 -right-8 bg-[rgba(12,132,227)] p-8 rounded-2xl shadow-2xl">
              <p className="text-5xl font-bold text-white mb-2">17+</p>
              <p className="text-white text-lg">Anos de Experiência</p>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[rgba(12,132,227,0.2)] border border-[rgba(12,132,227,0.5)] rounded-full">
              <span className="text-[rgba(12,132,227)] font-semibold text-sm uppercase tracking-wide">
                Sobre Nós
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Excelência em Metalurgia desde 2008
            </h2>
            <p className="text-lg text-[rgba(198,198,207)] mb-6 leading-relaxed">
              A TAP Metal é uma empresa metalúrgica que fabrica caixas d'água metálicas personalizadas com a
              mais alta tecnologia. Um serviço de altíssima qualidade que se enquadra em todos os padrões de
              qualidade exigidos pelos principais órgãos fiscalizadores.
            </p>
            <p className="text-lg text-[rgba(198,198,207)] mb-8 leading-relaxed">
              Nossa missão é atender as necessidades do mercado com excelência, oferecendo soluções inovadoras
              e personalizadas para cada cliente. Com 17 anos de experiência, consolidamos nossa posição como
              referência em reservatórios metálicos em Goiás e em todo o Brasil.
            </p>
            <div className="space-y-4">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="text-[rgba(12,132,227)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{f.title}</h3>
                    <p className="text-[rgba(198,198,207)]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
