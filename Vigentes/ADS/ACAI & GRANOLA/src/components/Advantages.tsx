import { useReveal } from '../hooks/useReveal';

interface Benefit {
  number: string;
  title: string;
  description: string;
  image: string;
  reversed: boolean;
  from: 'left' | 'right';
}

const BENEFITS: Benefit[] = [
  {
    number: '01',
    title: 'Qualidade Superior',
    description:
      'Nossos produtos são cuidadosamente elaborados com ingredientes selecionados, garantindo sabor e qualidade excepcionais em cada porção.',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fqualidade-superior.jpg',
    reversed: false,
    from: 'left',
  },
  {
    number: '02',
    title: 'Variedade',
    description:
      'Oferecemos diversas opções para todos os paladares, desde o tradicional creme de açaí até opções inovadoras como cupuaçu e granola premium.',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fvariedade.jpg',
    reversed: true,
    from: 'right',
  },
  {
    number: '03',
    title: 'Segurança Alimentar',
    description:
      'Certificações que garantem a tranquilidade do consumidor. Seguimos rigorosos padrões de qualidade e segurança em toda nossa produção.',
    image: 'https://storage.lucasmendes.dev/site-sp/acai%20e%20granola%2Fimg%2Fseguranca-alimentar.jpg',
    reversed: false,
    from: 'left',
  },
];

function BenefitRow({ benefit }: { benefit: Benefit }) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const hidden = benefit.from === 'left' ? '-translate-x-12' : 'translate-x-12';
  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-1000 ${
        visible ? 'opacity-100 translate-x-0' : `opacity-0 ${hidden}`
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className={`p-8 flex flex-col justify-center ${benefit.reversed ? 'md:order-2' : ''}`}>
          <div className="text-6xl font-bold text-[rgb(6,173,244)] mb-4">{benefit.number}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
          <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
        </div>
        <div className={`h-64 md:h-auto ${benefit.reversed ? 'md:order-1' : ''}`}>
          <img src={benefit.image} alt={benefit.title} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Benefícios dos Nossos Produtos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entenda porque escolher a ACAI &amp; GRANOLA é a melhor decisão
          </p>
        </div>
        <div className="space-y-8">
          {BENEFITS.map((benefit, i) => (
            <BenefitRow key={i} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
}
