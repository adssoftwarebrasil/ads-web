import { CheckCircle, Clock } from 'lucide-react';

const advantages = [
  {
    Icon: CheckCircle,
    title: 'Qualidade Superior em Cada Produto',
    description:
      'Nossas argamassas e rejuntes passam por testes rigorosos para garantir o melhor desempenho e durabilidade em sua obra.',
  },
  {
    Icon: Clock,
    title: 'Atendimento Rápido e Eficiente',
    description:
      'Nossa equipe está sempre pronta para atender suas necessidades com agilidade e profissionalismo.',
  },
];

export default function Advantages() {
  return (
    <div className="animate-on-scroll">
      <section id="vantagens" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-12 lg:mb-16">
            <span
              className="inline-block px-5 py-2 rounded-full text-sm font-semibold mb-4"
              style={{ backgroundColor: 'rgb(255, 220, 2)', color: 'rgb(0, 0, 0)' }}
            >
              Vantagens
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ color: 'rgb(0, 0, 0)' }}
            >
              Vantagens de Escolher Boa Massa
            </h2>
            <p
              className="text-base lg:text-lg max-w-[800px] mx-auto"
              style={{ color: 'rgb(51, 51, 51)' }}
            >
              Descubra os benefícios de trabalhar conosco e como podemos ajudar
              sua obra.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://storage.lucasmendes.dev/site-sp/boamassa%2FVantagens.jpg"
                alt="Vantagens Boa Massa"
                className="w-full rounded-xl shadow-xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              {advantages.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="flex gap-5 p-6 lg:p-7 rounded-lg transition-all"
                  style={{
                    backgroundColor: 'rgb(250, 250, 250)',
                    borderLeft: '4px solid rgb(255, 220, 2)',
                  }}
                >
                  <div className="flex-shrink-0">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'rgb(255, 220, 2)' }}
                    >
                      <Icon size={24} color="rgb(0, 0, 0)" strokeWidth={2} />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-lg lg:text-xl font-bold mb-2"
                      style={{ color: 'rgb(0, 0, 0)' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-sm lg:text-base leading-relaxed"
                      style={{ color: 'rgb(51, 51, 51)' }}
                    >
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
