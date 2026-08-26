import { Briefcase, Heart, Award } from 'lucide-react';

const features = [
  {
    Icon: Briefcase,
    iconClass: 'lucide lucide-briefcase ',
    title: 'Experiência no Setor',
    text: 'Nossa equipe traz anos de experiência em acabamentos de madeira, garantindo resultados impecáveis em cada projeto.',
    delay: '0ms',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart ',
    title: 'Foco no Cliente',
    text: 'Atendemos de forma personalizada, acompanhando você em cada etapa, sempre visando sua total satisfação.',
    delay: '150ms',
  },
  {
    Icon: Award,
    iconClass: 'lucide lucide-award ',
    title: 'Qualidade Garantida',
    text: 'Trabalhamos apenas com madeiras nobres selecionadas e sustentáveis, assegurando durabilidade e beleza.',
    delay: '300ms',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-[#2E200F]">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F1FF] mb-4 transition-all duration-800 opacity-100 translate-y-0">
            Por Que Escolher a EXP Madeiras?
          </h2>
          <p className="text-lg text-[#F1F1FF] opacity-80 max-w-3xl mx-auto transition-all duration-800 delay-200 translate-y-0">
            Selecionar a EXP Madeiras é optar por um serviço de alta qualidade, atendimento
            personalizado e produtos que duram gerações.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map(({ Icon, iconClass, title, text, delay }) => (
            <div
              key={title}
              className="p-10 rounded-xl transition-all duration-800 hover:transform hover:-translate-y-2 opacity-100 translate-y-0"
              style={{
                backgroundColor: 'rgba(241, 241, 255, 0.05)',
                border: '1px solid rgba(241, 241, 255, 0.1)',
                transitionDelay: delay,
              }}
            >
              <div className="text-[#B88654] mb-4">
                <Icon className={iconClass} width={40} height={40} strokeWidth={2} />
              </div>
              <h3 className="text-xl font-semibold text-[#F1F1FF] mb-3">{title}</h3>
              <p className="text-[#F1F1FF] opacity-70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto transition-all duration-800 delay-500 opacity-100 translate-y-0">
          <img
            src="https://storage.lucasmendes.dev/site-sp/EXP%20MADEIRAS%2Fimg2%2FForro%20Cedrilhado%20Mesclado.png"
            alt="Por que contratar EXP Madeiras"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
