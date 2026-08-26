import { Award, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Experiência',
    text: '28 anos no mercado com centenas de projetos concluídos',
  },
  {
    icon: Shield,
    title: 'Qualidade',
    text: 'Equipamentos modernos e equipe especializada',
  },
  {
    icon: Users,
    title: 'Atendimento',
    text: 'Suporte completo em todas as etapas do projeto',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    text: 'Evolução constante para melhor atendê-lo',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sobre a Anjos Poços Artesianos
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Desde a década de 1990, comprometidos com excelência e inovação
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                A{' '}
                <strong className="text-blue-600">
                  Anjos Poços Artesianos
                </strong>{' '}
                surgiu na década de 1990 para suprir a alta demanda por poços
                semiartesianos na região. Com o passar do tempo, identificamos a
                necessidade de ampliar nossa estrutura para atender também à
                perfuração de poços profundos.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Investimos em{' '}
                <strong>
                  máquinas maiores, compressores, ferramentas especializadas e
                  caminhões
                </strong>
                , garantindo um trabalho cada vez mais eficiente e satisfatório
                para nossos clientes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Com{' '}
                <strong className="text-blue-600">
                  28 anos de experiência
                </strong>{' '}
                na área de perfuração e manutenção de poços, hoje atendemos com
                excelência empresas, chácaras, sítios, fazendas, projetos de
                irrigação, loteamentos e empresas de grande porte.
              </p>
              <p className="text-xl font-semibold text-blue-600 italic">
                "Anjos Poços Artesianos: Qualidade tem nome."
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/841286/pexels-photo-841286.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Perfuração de poços"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">28</p>
                <p className="text-sm">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4">
                <f.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
