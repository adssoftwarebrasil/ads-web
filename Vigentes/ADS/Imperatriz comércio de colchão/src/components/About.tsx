import { Award, TrendingUp, Users, Heart } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  iconWrapClass: string;
  iconClass: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Produtos certificados com a excelência Ortobom',
    iconWrapClass: 'bg-[rgb(0,0,160)]/10',
    iconClass: 'text-[rgb(0,0,160)]',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Equipe especializada para encontrar o colchão ideal',
    iconWrapClass: 'bg-green-100',
    iconClass: 'text-green-600',
  },
  {
    icon: Heart,
    title: 'Conforto Incomparável',
    description: 'Tecnologia de ponta para o melhor descanso',
    iconWrapClass: 'bg-red-100',
    iconClass: 'text-red-600',
  },
  {
    icon: TrendingUp,
    title: 'Melhor Custo-Benefício',
    description: 'Preços justos com qualidade superior',
    iconWrapClass: 'bg-blue-100',
    iconClass: 'text-blue-600',
  },
];

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Franquia Ortobom Autorizada em Uberlândia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde 2019 levando qualidade superior e conforto incomparável para
            sua casa
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://storage.lucasmendes.dev/site-sp/imperatriz%20colchoes%2Fimg%2Ffrente-loja-colchoes-azul.webp"
              alt="Fachada da Loja Ortobom"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Por Que Escolher a Ortobom?
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Somos uma franquia Ortobom desde 2019, orgulhosamente trazendo 55
              anos de tradição e excelência em produtos para o seu descanso.
              Nossa missão é proporcionar o melhor conforto com a qualidade que
              você merece.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              A marca Ortobom fala por si: meio século no mercado com qualidade
              superior aos concorrentes, tecnologia de ponta e compromisso
              absoluto com o seu bem-estar.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-[rgb(0,0,160)] text-white px-6 py-3 rounded-full">
                <Award className="w-5 h-5" />
                <span className="font-semibold">55 Anos de Mercado</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Desde 2019 em Uberlândia</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div
                  className={`${f.iconWrapClass} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className={`w-8 h-8 ${f.iconClass}`} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {f.title}
                </h4>
                <p className="text-gray-600">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
