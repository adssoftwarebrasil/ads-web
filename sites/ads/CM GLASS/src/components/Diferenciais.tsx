import { Award, Package, DollarSign, Star, MapPin, Headphones, LucideIcon } from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const diferenciais: Diferencial[] = [
  {
    icon: Award,
    title: 'Saint-Gobain Oficial',
    description:
      'Somos representantes credenciados da Saint-Gobain em Manaus. Todos os vidros possuem procedência comprovada, certificação de qualidade e garantia de fábrica.',
    delay: 0,
  },
  {
    icon: Package,
    title: 'Vidros Nacionais e Importados',
    description:
      'Amplo estoque para atender praticamente todos os modelos de veículos. Do carro popular ao importado, temos o vidro certo para o seu automóvel.',
    delay: 80,
  },
  {
    icon: DollarSign,
    title: 'Melhor Preço da Região',
    description:
      'Trabalhamos com preços competitivos sem abrir mão da qualidade. Nossos clientes garantem que encontraram o melhor custo-benefício na CM Glass.',
    delay: 160,
  },
  {
    icon: Star,
    title: 'Atendimento de Excelência',
    description:
      'Nota 4.9 no Google não é por acaso. Nosso time é atencioso, honesto e comprometido em oferecer uma experiência diferenciada do início ao fim.',
    delay: 240,
  },
  {
    icon: MapPin,
    title: 'Atendimento Regional',
    description:
      'Além de Manaus, atendemos clientes em todo o interior do Amazonas. Levamos qualidade e confiança para onde você precisar.',
    delay: 320,
  },
  {
    icon: Headphones,
    title: 'Pós-Serviço de Primeira',
    description:
      'Nosso relacionamento com o cliente não termina no serviço. Acompanhamos cada caso para garantir sua total satisfação e resolver qualquer pendência.',
    delay: 400,
  },
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="inline-block text-[#034087] text-sm font-bold uppercase tracking-widest mb-3">
            Por que escolher a CM Glass?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Mais do que trocar um vidro, entregamos segurança, qualidade e confiança. Veja o que nos
            diferencia no mercado de Manaus.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {diferenciais.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 lg:p-8 rounded-2xl border border-gray-100 hover:border-[#034087]/20 hover:shadow-lg bg-white transition-all duration-500 hover:-translate-y-1 opacity-100 translate-y-0"
                style={{ transitionDelay: `${item.delay}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#034087]/8 flex items-center justify-center mb-4 group-hover:bg-[#034087] transition-colors duration-300">
                  <Icon className="w-6 h-6 text-[#034087] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#034087] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
