import { Award, Zap, Shield, TrendingUp, type LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconName: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    Icon: Award,
    iconName: 'award',
    title: 'Qualidade dos Serviços',
    desc: 'Excelência técnica em cada projeto executado',
  },
  {
    Icon: Zap,
    iconName: 'zap',
    title: 'Tecnologia Avançada',
    desc: 'Equipamentos de última geração e soluções inovadoras',
  },
  {
    Icon: Shield,
    iconName: 'shield',
    title: 'Empresa Credenciada Hitachi',
    desc: 'Certificação oficial para instalação e manutenção',
  },
  {
    Icon: TrendingUp,
    iconName: 'trending-up',
    title: '17 Anos de Mercado',
    desc: 'Experiência consolidada na Bahia',
  },
];

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-16 lg:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-20">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="text-center mb-12">
            <span className="inline-block bg-[rgba(28,123,179,0.1)] text-[rgb(28,123,179)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              17 anos de experiência
            </span>
            <h2 className="text-[28px] lg:text-[40px] font-bold text-[rgb(9,74,104)] mb-6">Quem Somos</h2>
            <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed max-w-[800px] mx-auto">
              A Manutherm Climatização atua há 17 anos no mercado de climatização, especializada em instalação e
              manutenção de sistemas de ar condicionado de todos os portes. Somos empresa credenciada Hitachi e
              referência em soluções de conforto térmico na Bahia.
            </p>
            <p className="text-[16px] lg:text-[18px] text-gray-700 leading-relaxed max-w-[800px] mx-auto mt-4">
              Atendemos empresas dos mais variados segmentos: hospitais, clínicas, shoppings, hotéis, restaurantes,
              indústrias e construtoras, sempre com foco em qualidade, tecnologia e eficiência energética.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-[rgb(247,247,247)] p-8 rounded-xl hover:border-2 hover:border-[rgb(28,123,179)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <f.Icon
                  width={48}
                  height={48}
                  strokeWidth={2}
                  className={`lucide lucide-${f.iconName} text-[rgb(28,123,179)] mb-4`}
                />
                <h3 className="text-[18px] font-bold text-[rgb(9,74,104)] mb-2">{f.title}</h3>
                <p className="text-[15px] text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
