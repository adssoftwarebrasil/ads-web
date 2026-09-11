import { Eye, Sparkles, Award, type LucideIcon } from 'lucide-react';

interface Diferencial {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const diferenciais: Diferencial[] = [
  {
    Icon: Eye,
    title: 'Monte Na Sua Frente',
    text: 'Você escolhe os ingredientes e acompanha toda a montagem. Transparência total do processo, do balcão até a embalagem a vácuo.',
  },
  {
    Icon: Sparkles,
    title: '3 Massas, 14 Recheios',
    text: 'Milhares de combinações possíveis. Crie seu sabor único com ingredientes premium dosados na hora, do jeito que você gosta.',
  },
  {
    Icon: Award,
    title: '9 Anos de Experiência',
    text: 'Somos a Indústria Boi Manso. Trazemos nossa expertise em linguiças tradicionais para criar produtos gourmet de altíssima qualidade.',
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="bg-slate-100 py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-black text-black mb-4">Por Que Somos Diferentes?</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Criamos uma nova forma de fazer linguiça. Algo que até então não existia no mercado brasileiro.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {diferenciais.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 bg-[rgb(242,51,52)] rounded-full flex items-center justify-center">
                <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 text-center">{title}</h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
