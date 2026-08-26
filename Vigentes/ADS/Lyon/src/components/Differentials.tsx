import { CheckCircle2, Zap, Package, Headphones } from 'lucide-react';

export default function Differentials() {
  const differentials = [
    {
      icon: CheckCircle2,
      title: 'Qualidade Comprovada',
      description: 'Peças selecionadas de fornecedores certificados'
    },
    {
      icon: Zap,
      title: 'Atendimento Ágil',
      description: 'Entendemos a urgência do seu negócio'
    },
    {
      icon: Package,
      title: 'Estoque Diversificado',
      description: 'Peças para todas as principais marcas'
    },
    {
      icon: Headphones,
      title: 'Suporte Técnico',
      description: 'Orientação especializada para sua necessidade'
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a18]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Por Que Escolher a Lyon Trator Peças?
          </h2>
          <p className="text-gray-400 text-lg">
            Compromisso com excelência em cada atendimento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#fbba00] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <item.icon size={36} className="text-[#1a1a18]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
