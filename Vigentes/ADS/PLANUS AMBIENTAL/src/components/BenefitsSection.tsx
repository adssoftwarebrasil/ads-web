import { DollarSign, FileCheck, Star, TrendingUp, Zap, Globe } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Redução de Custos Operacionais',
    description: 'Implementamos tecnologias e otimizamos o gerenciamento de resíduos para reduzir suas despesas com energia e descarte.'
  },
  {
    icon: FileCheck,
    title: 'Conformidade Regulatória Total',
    description: 'Garantimos a adequação completa às normas ambientais, livrando sua empresa de multas e problemas legais.'
  },
  {
    icon: Star,
    title: 'Fortalecimento da Imagem',
    description: 'Adotar práticas sustentáveis posiciona sua marca como responsável e inovadora perante clientes e investidores.'
  },
  {
    icon: TrendingUp,
    title: 'Acesso a Incentivos e Financiamentos',
    description: 'Facilitamos o acesso a benefícios fiscais e linhas de crédito exclusivas para empresas que investem em tecnologias verdes.'
  },
  {
    icon: Zap,
    title: 'Aumento da Eficiência Operacional',
    description: 'Nossas soluções otimizam seus processos, resultando em maior produtividade e menor desperdício de recursos.'
  },
  {
    icon: Globe,
    title: 'Preparação para o Futuro',
    description: 'Desenvolvemos estratégias para sua empresa se adaptar e prosperar em um cenário de constantes mudanças climáticas e regulatórias.'
  }
];

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-12">
            <img
              src="https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=planus%2Ffotoparasite.png&version_id=null"
              alt="Planus Ambiental"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A472A] mb-6">
            Como a Planus Ambiental transforma o seu negócio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-[#8BC34A]"
              >
                <div className="bg-gradient-to-br from-[#1A472A] to-[#2d5e42] w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-[#8BC34A]" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-[#1A472A] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-[#333333] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
