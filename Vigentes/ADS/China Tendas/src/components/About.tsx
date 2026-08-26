import { Award, Building2, Package, Truck, MapPin, CheckCircle2 } from 'lucide-react';

const features = [
  { Icon: Award, title: '5 Anos de Experiência', desc: 'Crescimento sólido desde 2020' },
  { Icon: Building2, title: '5 Galpões Próprios', desc: 'Estrutura robusta e confiável' },
  { Icon: Package, title: 'Pronta Entrega', desc: 'Produtos sempre disponíveis' },
  { Icon: Truck, title: 'Logística Ágil', desc: 'Entrega rápida e eficiente' },
  { Icon: MapPin, title: 'Todo o Brasil', desc: 'Atendimento nacional' },
  { Icon: CheckCircle2, title: 'Qualidade Garantida', desc: 'Excelência em cada produto' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Quem Somos</h2>
          <div className="w-24 h-1 bg-[rgb(211,14,9)] mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nossa empresa foi fundada em 2020, fruto de um sonho que começou de maneira simples: em
              uma pequena fábrica nos fundos de casa. Com dedicação, planejamento e muito trabalho,
              transformamos esse início modesto em uma trajetória de crescimento sólida e consistente.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Hoje, após cinco anos de atuação no mercado, orgulhamo-nos de contar com cinco amplos
              galpões, que simbolizam a evolução da nossa história e a confiança conquistada junto aos
              nossos clientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Atuamos com foco na qualidade dos produtos e na excelência no atendimento, sempre
              buscando superar as expectativas. Nosso portfólio é composto por itens de pronta entrega,
              o que nos permite oferecer uma logística ágil e eficiente, garantindo rapidez no
              fornecimento sem abrir mão da durabilidade e do padrão de excelência que nos
              caracterizam.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[rgb(211,14,9)] rounded-full flex items-center justify-center mb-6 mx-auto">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-black text-center mb-2">{title}</h3>
              <p className="text-gray-600 text-center">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
