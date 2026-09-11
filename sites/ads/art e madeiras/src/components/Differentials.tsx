import { Award, Clock, ShieldCheck, ThumbsUp, type LucideIcon } from 'lucide-react';

type Item = {
  Icon: LucideIcon;
  iconClass: string;
  stat: string;
  title: string;
  description: string;
};

const items: Item[] = [
  {
    Icon: Award,
    iconClass: 'lucide lucide-award text-white w-8 h-8',
    stat: '10+',
    title: 'Anos de Tradição',
    description: 'Mais de uma década transformando espaços com expertise e paixão pela madeira.',
  },
  {
    Icon: Clock,
    iconClass: 'lucide lucide-clock text-white w-8 h-8',
    stat: '100%',
    title: 'Pontualidade',
    description: 'Cumprimos rigorosamente os prazos acordados. Seu projeto entregue no tempo certo.',
  },
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-white w-8 h-8',
    stat: 'Premium',
    title: 'Acabamento Impecável',
    description: 'Madeiras selecionadas, tratamento especializado e atenção aos mínimos detalhes.',
  },
  {
    Icon: ThumbsUp,
    iconClass: 'lucide lucide-thumbs-up text-white w-8 h-8',
    stat: '5★',
    title: 'Excelência Reconhecida',
    description: 'Clientes satisfeitos que recomendam nosso trabalho e voltam para novos projetos.',
  },
];

export default function Differentials() {
  return (
    <section className="bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 py-20 md:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 2px, currentcolor 2px, currentcolor 4px)',
          color: 'rgb(217, 119, 6)',
        }}
      ></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <p className="text-amber-400 font-semibold text-sm md:text-base uppercase tracking-wider">
            NOSSOS DIFERENCIAIS
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-50">Por Que a Art &amp; madeiras?</h2>
          <p className="text-lg md:text-xl text-stone-300 max-w-3xl mx-auto">
            Uma década de dedicação, qualidade e compromisso com nossos clientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const { Icon } = item;
            return (
              <div
                key={item.title}
                className="bg-stone-900/50 backdrop-blur-sm border border-amber-600/20 rounded-xl p-8 text-center space-y-4 hover:bg-stone-900/70 hover:border-amber-600/40 transition-all duration-300 group"
              >
                <div className="mx-auto w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <Icon className={item.iconClass} />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-amber-400 mt-4">{item.stat}</div>
                <h3 className="text-xl font-bold text-stone-50">{item.title}</h3>
                <p className="text-stone-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
