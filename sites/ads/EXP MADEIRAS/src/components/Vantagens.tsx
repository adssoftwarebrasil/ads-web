import { Leaf, Paintbrush, Award } from 'lucide-react';

const advantages = [
  {
    Icon: Leaf,
    iconClass: 'lucide lucide-leaf ',
    title: 'Matéria-Prima de Qualidade',
    text: 'Utilizamos madeiras selecionadas e sustentáveis, garantindo beleza e responsabilidade ambiental.',
    delay: '0ms',
  },
  {
    Icon: Paintbrush,
    iconClass: 'lucide lucide-paintbrush ',
    title: 'Acabamentos Refinados',
    text: 'Cada detalhe é cuidadosamente trabalhado para alcançar a perfeição que seu projeto merece.',
    delay: '150ms',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award ',
    title: 'Experiência Comprovada',
    text: 'Mais de 20 anos transformando ambientes com excelência e compromisso com resultados.',
    delay: '300ms',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-16 md:py-24 bg-[#F1F1FF]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="transition-all duration-800 opacity-100 translate-x-0">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2E200F] mb-6">
              As Vantagens de Escolher<br />a EXP Madeiras
            </h2>
            <p className="text-lg text-[#2E200F] opacity-70 mb-12">
              Entenda por que somos a escolha certa para seus projetos de madeira e o que nos torna
              referência na região.
            </p>
            <div className="space-y-8">
              {advantages.map(({ Icon, iconClass, title, text, delay }) => (
                <div
                  key={title}
                  className="flex gap-4 transition-all duration-800"
                  style={{ transitionDelay: delay, opacity: 1, transform: 'translateY(0)' }}
                >
                  <div className="flex-shrink-0 text-[#B88654]">
                    <Icon className={iconClass} width={36} height={36} strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#2E200F] mb-2">{title}</h3>
                    <p className="text-[#2E200F] opacity-70 leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="transition-all duration-800 delay-300 opacity-100 translate-x-0">
            <img
              src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg%2FVantagens.png"
              alt="Vantagens EXP Madeiras"
              className="w-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
