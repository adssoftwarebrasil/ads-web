import { FileText, Droplets, Trees, Mountain, Building, Sprout, Factory, Flame, MapPin, Home } from 'lucide-react';

const strategicPlans = [
  {
    icon: FileText,
    title: 'Plano de Gestão Ambiental (PGA)',
    description: 'Documento essencial para garantir a conformidade regulatória, reduzir custos operacionais e proteger a reputação da sua empresa. Identificamos oportunidades, gerenciamos riscos e preparamos seu negócio para um crescimento sustentável.'
  },
  {
    icon: Droplets,
    title: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
    description: 'Ferramenta estratégica para a gestão eficiente de resíduos. Definimos ações desde a geração até a destinação final, reduzindo impactos, garantindo conformidade legal e melhorando a eficiência operacional.'
  }
];

const areasAtuacao = [
  {
    icon: Factory,
    title: 'Industrial',
    description: 'Prestamos serviços para obtenção de licenças ambientais, garantindo conformidade regulatória e operação segura de empreendimentos industriais.'
  },
  {
    icon: Mountain,
    title: 'Mineral',
    description: 'O setor mineral é a base da cadeia produtiva. Oferecemos suporte completo para licenciamento e regularização de atividades minerárias.'
  },
  {
    icon: Trees,
    title: 'Florestal',
    description: 'Suporte técnico e jurídico ao empreendedor para manejo sustentável, supressão vegetal e projetos de recuperação ambiental.'
  },
  {
    icon: Sprout,
    title: 'Irrigação',
    description: 'Projetos completos de irrigação, incluindo conjunto de obras e instalações para captação, condução e distribuição de água.'
  },
  {
    icon: Droplets,
    title: 'Outorga de Uso da Água',
    description: 'Assessoria completa para obtenção de outorga, atendendo exigências legais do poder público para uso de recursos hídricos.'
  },
  {
    icon: Sprout,
    title: 'Piscicultura',
    description: 'Licenciamento para empreendimentos de piscicultura, atendendo à crescente demanda por alimentos de forma sustentável.'
  },
  {
    icon: Flame,
    title: 'Posto de Combustível',
    description: 'Desenvolvimento de todos os procedimentos necessários para licenciamento ambiental de postos de combustível.'
  },
  {
    icon: Home,
    title: 'Loteamento',
    description: 'Avaliação e licenciamento ambiental completo para empreendimentos de loteamento urbano e rural.'
  },
  {
    icon: Flame,
    title: 'Corpo de Bombeiros',
    description: 'Referência em soluções para proteção e combate a incêndio, elaboração de projetos e regularização junto ao Corpo de Bombeiros.'
  },
  {
    icon: MapPin,
    title: 'Georreferenciamento',
    description: 'Serviços de georreferenciamento de imóveis rurais e urbanos, garantindo precisão e conformidade legal.'
  }
];

export default function ServicesSection() {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A472A] mb-6">
            Nossas Soluções para a Sustentabilidade do seu Negócio
          </h2>
          <p className="text-xl text-[#333333] max-w-3xl mx-auto">
            Da consultoria estratégica à execução de projetos, oferecemos um portfólio completo
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-[#1A472A] mb-10 text-center">Planos Estratégicos</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {strategicPlans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1A472A] to-[#2d5e42] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-[#8BC34A] w-16 h-16 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h4 className="text-2xl font-semibold text-white mb-4">
                    {plan.title}
                  </h4>
                  <p className="text-white/90 leading-relaxed text-lg">
                    {plan.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#1A472A] mb-6 text-center">Áreas que Atuamos</h3>
          <p className="text-xl text-[#333333] mb-12 text-center max-w-3xl mx-auto">
            Conheça nossos serviços especializados para diversos setores
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areasAtuacao.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-t-4 border-[#8BC34A]"
                >
                  <div className="bg-gradient-to-br from-[#1A472A] to-[#2d5e42] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-[#1A472A] mb-3">
                    {area.title}
                  </h4>
                  <p className="text-[#333333] leading-relaxed">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
