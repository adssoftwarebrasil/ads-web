import { Target, Users, Wrench, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    icon: Target,
    title: 'Nosso Propósito',
    text: 'Fornecer soluções que facilitam o trabalho diário, aumentando produtividade e eficiência.',
  },
  {
    icon: Users,
    title: 'Nossos Clientes',
    text: 'Atendemos materiais elétricos, construção civil, energia solar, marcenaria e agropecuária.',
  },
  {
    icon: Wrench,
    title: 'Manutenção',
    text: 'Executamos manutenção, reformas e consertos de nossos produtos e outras marcas.',
  },
  {
    icon: TrendingUp,
    title: 'Inovação',
    text: 'Desenvolvimento contínuo de produtos personalizados para atender suas necessidades.',
  },
];

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(2,45,103)] font-semibold text-sm uppercase tracking-wider">
            Sobre a Goiafio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Tradição e Inovação em <span className="text-[rgb(2,45,103)]">Medição de Fios</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Reconhecidos pela qualidade e longevidade de nossos produtos, oferecemos soluções
            completas para comerciantes de materiais elétricos, construtoras e agropecuária.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fsubstituicao%2Fsobre-carretel.webp"
                alt="Carretéis organizados"
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://storage.lucasmendes.dev/site-sp/goiafio%2Fsubstituicao%2Fsobre-maquina.webp"
                alt="Bobinador e máquina de medir"
                className="rounded-2xl shadow-lg w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Mais de 3 Décadas de Excelência
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Desde nossa fundação, a <strong>Goiafio</strong> tem sido sinônimo de qualidade e
              precisão no mercado de equipamentos para medição de fios e cabos. Nossa experiência nos
              permite oferecer soluções personalizadas que atendem às necessidades específicas de
              cada cliente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Fabricamos equipamentos com alto padrão de funcionalidade e garantia, facilitando o
              manuseio, rapidez e organização no estoque de materiais. Nosso compromisso é minimizar
              o esforço humano na tarefa de medição, especialmente para cabos elétricos de grandes
              bitolas.
            </p>
            <div className="bg-blue-50 border-l-4 border-[rgb(2,45,103)] p-6 rounded-r-lg">
              <p className="text-[rgb(2,45,103)] font-semibold italic">
                "Visitamos nossos clientes para desenvolver produtos que melhor atendam suas
                necessidades, oferecendo sugestões e aprimoramento contínuo."
              </p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon size={28} className="text-[rgb(2,45,103)]" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
