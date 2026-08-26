import { Award, Package, Headphones, MapPin, LucideIcon } from 'lucide-react';

interface Reason {
  Icon: LucideIcon;
  title: string;
  text: string;
}

const reasons: Reason[] = [
  {
    Icon: Award,
    title: 'Experiência no Segmento',
    text: 'Mais de uma década de conhecimento e expertise no mercado de autopeças para veículos pesados.',
  },
  {
    Icon: Package,
    title: 'Variedade de Produtos',
    text: 'Uma seleção abrangente de peças para atender todas as suas necessidades de manutenção e reparo.',
  },
  {
    Icon: Headphones,
    title: 'Suporte Dedicado',
    text: 'Ajuda sempre que você precisar, de forma rápida e eficiente. Nossa equipe está pronta para atendê-lo.',
  },
  {
    Icon: MapPin,
    title: 'Localização Estratégica',
    text: 'Facilidade de acesso para nossa clientela em Palmas-TO, com estrutura moderna e completa.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(1,51,153)] mb-4">
            Por Que Escolher a Marajó Diesel?
          </h2>
          <p className="text-lg text-[rgb(84,84,84)] max-w-3xl mx-auto">
            Diferenciais que nos tornam a melhor opção em autopeças para veículos
            pesados
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-12 md:gap-y-10">
          {reasons.map((reason) => {
            const Icon = reason.Icon;
            return (
              <div
                key={reason.title}
                className="flex gap-6 p-6 rounded-lg border-l-4 border-[rgb(255,116,16)] bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 text-[rgb(255,116,16)]">
                  <Icon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[rgb(1,51,153)] mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-[rgb(84,84,84)] leading-relaxed">{reason.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
