import { Sparkles, Shield, Headphones, Package, Award, Clock, ThumbsUp } from 'lucide-react';

const vantagens = [
  {
    icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Selecionamos os melhores fabricantes para você. Todos os produtos passam por rigoroso controle de qualidade.',
  },
  {
    icon: Headphones,
    title: 'Atendimento Especializado',
    text: 'Nossa equipe está pronta para assegurar a melhor experiência. Profissionais com anos de expertise em hipismo.',
  },
  {
    icon: Package,
    title: 'Variedade de Produtos',
    text: 'Amplo catálogo com produtos para todas as idades e níveis, do iniciante ao profissional.',
  },
  {
    icon: Award,
    title: '20 Anos de Experiência',
    text: 'Duas décadas no mercado de hipismo, atendendo cavaleiros de todas as idades com excelência.',
  },
  {
    icon: Clock,
    title: 'Facilidade de Compra',
    text: 'Atendimento presencial na loja física e também em eventos e competições aos finais de semana.',
  },
  {
    icon: ThumbsUp,
    title: 'Relacionamento Próximo',
    text: 'Conexão genuína com nossos clientes, proporcionando experiência de compra excepcional.',
  },
];

export default function Vantagens() {
  return (
    <section id="vantagens" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles size={16} />
            Por que nos escolher
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossas Vantagens
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experiência, qualidade e atendimento que fazem a diferença
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {vantagens.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100 hover:border-emerald-200"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-colors"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-emerald-500/30">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{v.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
