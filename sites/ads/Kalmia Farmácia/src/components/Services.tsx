import { FlaskConical, Sparkles, Leaf, Brain, Heart, PawPrint, type LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  desc: string;
  Icon: LucideIcon;
  iconName: string;
  cardBorder: string;
  iconWrap: string;
}

const services: Service[] = [
  {
    title: 'Manipulação Personalizada',
    desc: 'Fórmulas criadas especialmente para você — dosagem, ativo e forma farmacêutica ideais para suas necessidades.',
    Icon: FlaskConical,
    iconName: 'flask-conical',
    cardBorder: 'hover:border-primary/30',
    iconWrap: 'bg-primary/10 text-primary',
  },
  {
    title: 'Dermocosméticos',
    desc: 'Cremes, séruns, loções e tratamentos estéticos manipulados com ingredientes premium para sua pele.',
    Icon: Sparkles,
    iconName: 'sparkles',
    cardBorder: 'hover:border-brand-mint/50',
    iconWrap: 'bg-brand-mint/20 text-brand-green',
  },
  {
    title: 'Fitoterápicos',
    desc: 'O poder das plantas em formulações seguras e eficazes, manipuladas com rigor farmacêutico.',
    Icon: Leaf,
    iconName: 'leaf',
    cardBorder: 'hover:border-brand-green/30',
    iconWrap: 'bg-brand-green/10 text-brand-green',
  },
  {
    title: 'Suplementos & Nutracêuticos',
    desc: 'Suplementos de alta absorção personalizados para performance, bem-estar e qualidade de vida.',
    Icon: Brain,
    iconName: 'brain',
    cardBorder: 'hover:border-primary/30',
    iconWrap: 'bg-primary/10 text-primary',
  },
  {
    title: 'Homeopatia & Florais',
    desc: 'Tratamentos gentis e holísticos para equilíbrio emocional e suporte ao sistema imunológico.',
    Icon: Heart,
    iconName: 'heart',
    cardBorder: 'hover:border-brand-mint/50',
    iconWrap: 'bg-brand-mint/20 text-brand-green',
  },
  {
    title: 'Veterinária & Pets',
    desc: 'Fórmulas especializadas para cães, gatos e outros animais — porque eles também merecem o melhor cuidado.',
    Icon: PawPrint,
    iconName: 'paw-print',
    cardBorder: 'hover:border-brand-green/30',
    iconWrap: 'bg-brand-green/10 text-brand-green',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Serviços <span className="text-primary">especializados</span> para cada necessidade
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nossa equipe farmacêutica está pronta para entender suas necessidades e desenvolver a fórmula perfeita
            para você.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className={`bg-white rounded-2xl p-7 border-2 border-transparent ${s.cardBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-on-scroll`}
            >
              <div className={`w-13 h-13 w-12 h-12 rounded-xl ${s.iconWrap} flex items-center justify-center mb-5`}>
                <s.Icon size={22} className={`lucide lucide-${s.iconName}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center animate-on-scroll">
          <a
            href="http://wa.me/5516991594153"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-105"
          >
            Quero minha fórmula personalizada
          </a>
        </div>
      </div>
    </section>
  );
}
