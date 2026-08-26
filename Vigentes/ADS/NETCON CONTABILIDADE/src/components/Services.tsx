import { Building, FileX, Calculator, DollarSign, Users, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Building,
    iconClass: 'lucide lucide-building',
    title: 'Abertura de Empresa',
    description:
      'Dê o primeiro passo com segurança. Cuidamos de toda a burocracia para você começar seu negócio.',
  },
  {
    icon: FileX,
    iconClass: 'lucide lucide-file-x',
    title: 'Regularização e Baixa',
    description:
      'Tudo em conformidade com a lei. Regularize ou encerre sua empresa sem complicações.',
  },
  {
    icon: Calculator,
    iconClass: 'lucide lucide-calculator',
    title: 'Contabilidade',
    description:
      'Organização e clareza para o seu negócio. Demonstrativos confiáveis para suas decisões.',
  },
  {
    icon: DollarSign,
    iconClass: 'lucide lucide-dollar-sign',
    title: 'Departamento Fiscal',
    description:
      'Impostos e obrigações em dia. Planejamento tributário para pagar menos legalmente.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Departamento Pessoal',
    description:
      'Gestão de folha e funcionários. Cuidamos de toda a parte trabalhista da sua empresa.',
  },
  {
    icon: Briefcase,
    iconClass: 'lucide lucide-briefcase',
    title: 'MEI - Microempreendedor Individual',
    description:
      'Formalize seu negócio de forma simples e rápida. Tenha CNPJ, emita notas fiscais e tenha mais credibilidade.',
  },
];

const meiBenefits = [
  { text: 'Tenha um CNPJ em poucos passos', wide: false },
  { text: 'Emita notas fiscais para clientes e empresas', wide: false },
  { text: 'Tenha acesso a benefícios previdenciários', wide: false },
  { text: 'Pagamentos simplificados de impostos com valor fixo mensal', wide: false },
  { text: 'Mais credibilidade para o seu negócio', wide: true },
];

function Services() {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[rgb(0,0,87)] mb-4">
            Oferecemos Soluções Completas para a sua Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deixe a parte burocrática com a gente e foque no crescimento da sua empresa!
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <Icon className={`${service.iconClass} text-[rgb(211,0,0)] mb-4`} size={48} />
                <h3 className="text-xl font-bold text-[rgb(0,0,87)] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-br from-[rgb(0,0,87)] to-[rgb(0,0,120)] text-white p-8 sm:p-10 rounded-2xl shadow-xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Seu negócio está crescendo? Torne-se MEI!</h3>
            <p className="text-lg mb-6 leading-relaxed">
              Se você já trabalha por conta própria e sente que é hora de dar o próximo passo, o MEI
              (Microempreendedor Individual) pode ser a solução ideal.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {meiBenefits.map((benefit) => (
                <div
                  key={benefit.text}
                  className={`flex items-start gap-3${benefit.wide ? ' sm:col-span-2' : ''}`}
                >
                  <span className="text-[rgb(211,0,0)] text-2xl">✓</span>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
            <p className="text-lg italic border-t border-white/20 pt-6">
              Formalizar-se como MEI é simples, rápido e traz inúmeras vantagens para quem deseja
              crescer com segurança e profissionalismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
