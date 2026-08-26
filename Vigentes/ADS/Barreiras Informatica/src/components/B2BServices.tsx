import { Building2, Network, HardDrive, Cpu, Shield, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-xl p-6 lg:p-8 hover:border-[#145bcc] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="bg-gradient-to-br from-[#145bcc] to-[#0d4a99] w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm lg:text-base text-gray-700">
            <CheckCircle size={18} className="text-[#145bcc] flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function B2BServices() {
  return (
    <section id="solucoes-empresariais" className="relative bg-gradient-to-br from-[#f8fafc] via-white to-[#f0f9ff] py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#145bcc]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#69bfd6]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#145bcc]/10 to-[#69bfd6]/10 text-[#145bcc] px-4 py-2 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wider mb-4 border border-[#145bcc]/20">
            <Building2 size={16} />
            Soluções Corporativas
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Soluções de TI para{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#145bcc] to-[#0d4a99] bg-clip-text text-transparent">
                Empresas
              </span>
              <svg className="absolute -bottom-2 left-0 w-full hidden lg:block" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M1 5.5C50 2.5 150 2.5 199 5.5" stroke="#145bcc" strokeWidth="3" strokeLinecap="round" opacity="0.3"/>
              </svg>
            </span>
          </h2>

          <p className="text-base lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Fornecemos equipamentos, infraestrutura e consultoria especializada para empresas que buscam
            <span className="font-semibold text-[#145bcc]"> modernizar sua tecnologia e aumentar produtividade</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          <ServiceCard
            icon={<Network size={28} className="text-white" />}
            title="Infraestrutura de Rede"
            description="Venda e implementação de equipamentos para redes corporativas robustas e seguras."
            features={[
              'Switches e Roteadores Empresariais',
              'Cabeamento Estruturado',
              'Equipamentos de Conectividade',
              'Projeto de Infraestrutura'
            ]}
          />

          <ServiceCard
            icon={<HardDrive size={28} className="text-white" />}
            title="Equipamentos e Hardware"
            description="Fornecimento de computadores, servidores e componentes para empresas de todos os portes."
            features={[
              'Estações de Trabalho',
              'Servidores e Storage',
              'Upgrades de Hardware',
              'Componentes e Peças'
            ]}
          />

          <ServiceCard
            icon={<Cpu size={28} className="text-white" />}
            title="Montagem Personalizada"
            description="Configuração e montagem de máquinas de alta performance sob medida para sua operação."
            features={[
              'PCs de Alto Desempenho',
              'Workstations Profissionais',
              'Configurações Otimizadas',
              'Testes de Qualidade'
            ]}
          />
        </div>

        <div className="bg-gradient-to-r from-[#145bcc] via-[#0d4a99] to-[#145bcc] rounded-2xl lg:rounded-3xl p-8 lg:p-12 text-white text-center shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Briefcase size={18} />
              <span>Atendimento Exclusivo B2B</span>
            </div>

            <h3 className="text-2xl lg:text-4xl font-black mb-4 leading-tight">
              Consultoria Corporativa em Tecnologia
            </h3>

            <p className="text-base lg:text-lg mb-8 opacity-95 leading-relaxed">
              Nossa equipe especializada ajuda sua empresa a escolher os melhores equipamentos e
              soluções de TI para otimizar operações e reduzir custos.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <Shield size={32} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg mb-1">Garantia</h4>
                <p className="text-sm opacity-90">Produtos com Garantia de Fábrica</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <Building2 size={32} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg mb-1">Experiência</h4>
                <p className="text-sm opacity-90">34+ Anos no Mercado</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                <Briefcase size={32} className="mx-auto mb-2" />
                <h4 className="font-bold text-lg mb-1">Atendimento</h4>
                <p className="text-sm opacity-90">Consultoria Especializada</p>
              </div>
            </div>

            <a
              href="https://wa.me/5577999948600?text=Olá! Sou uma empresa e gostaria de conhecer as Soluções Corporativas de TI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#145bcc] px-8 lg:px-10 py-4 lg:py-5 rounded-xl text-base lg:text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Solicitar Consultoria Corporativa
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
