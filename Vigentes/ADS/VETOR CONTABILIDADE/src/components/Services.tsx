import { Building2, TrendingUp, Users, FileText, Calculator, BookOpen, ArrowRight, Check } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Abertura de Empresas',
    description: 'Assessoria completa para abertura e regularização de empresas de todos os portes.',
    features: ['Registro em órgãos', 'Alvará de funcionamento', 'Consultoria jurídica']
  },
  {
    icon: TrendingUp,
    title: 'Gestão Financeira',
    description: 'Assessoria estratégica para otimizar recursos e maximizar resultados do seu negócio.',
    features: ['Análise de fluxo de caixa', 'Relatórios gerenciais', 'Projeções financeiras']
  },
  {
    icon: Users,
    title: 'Recursos Humanos',
    description: 'Gestão completa de folha de pagamento, admissões, demissões e obrigações trabalhistas.',
    features: ['Folha de pagamento', 'eSocial', 'Férias e rescisões']
  },
  {
    icon: FileText,
    title: 'Obrigações Acessórias',
    description: 'Cumprimento de todas as obrigações fiscais e tributárias junto aos órgãos competentes.',
    features: ['SPED Fiscal', 'DCTF', 'EFD-Contribuições']
  },
  {
    icon: Calculator,
    title: 'Planejamento Tributário',
    description: 'Estratégias personalizadas para redução legal da carga tributária da sua empresa.',
    features: ['Análise de regime', 'Economia fiscal', 'Compliance tributário']
  },
  {
    icon: BookOpen,
    title: 'Escrituração Fiscal e Contábil',
    description: 'Registro preciso e organizado de todas as operações contábeis e fiscais.',
    features: ['Balanços', 'DRE', 'Livros contábeis']
  }
];

export default function Services() {
  const whatsappNumber = '5594981573663';
  
  const openWhatsApp = (serviceName) => {
    const message = serviceName 
      ? `Olá! Gostaria de saber mais sobre: ${serviceName}`
      : 'Olá! Gostaria de agendar uma consultoria gratuita.';
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2e3094]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f0851a]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#f0851a]/10 text-[#f0851a] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              Serviços Especializados
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2e3094] mb-6">
            Soluções Completas para seu Negócio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conte com expertise e tecnologia de ponta para impulsionar sua empresa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Borda animada no hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#2e3094] to-[#f0851a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-[#2e3094] to-[#1a1d5c] w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#2e3094] mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check size={16} className="text-[#f0851a] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => openWhatsApp(service.title)}
                    className="w-full bg-gradient-to-r from-[#f0851a] to-[#d97616] hover:from-[#d97616] hover:to-[#c66915] text-white px-6 py-3 rounded-lg font-semibold transition-all transform group-hover:scale-105 shadow-md hover:shadow-lg inline-flex items-center justify-center space-x-2"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#2e3094] to-[#1a1d5c] rounded-3xl p-12 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Transformar sua Gestão Contábil?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como podemos ajudar sua empresa a crescer
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openWhatsApp()}
                className="bg-[#f0851a] hover:bg-[#d97616] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl inline-flex items-center space-x-2"
              >
                <span>Fale com um Especialista</span>
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={() => openWhatsApp('Solicitar Orçamento')}
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-all backdrop-blur-sm"
              >
                Solicitar Orçamento
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-8 text-white">
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#f0851a]" />
                <span>Atendimento Personalizado</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#f0851a]" />
                <span>Sem Burocracia</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={20} className="text-[#f0851a]" />
                <span>Consultoria Gratuita</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}