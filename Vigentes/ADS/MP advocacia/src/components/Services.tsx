import { Leaf, Calculator, Building2, CheckCircle2, ArrowRight, LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  headerColor: string;
  borderColor: string;
  items: string[];
}

const services: Service[] = [
  {
    icon: Leaf,
    iconClass: 'lucide-leaf',
    title: 'Direito Ambiental',
    description: 'Proteção jurídica para produtores rurais e empresas em questões ambientais.',
    headerColor: 'rgb(3, 74, 41)',
    borderColor: 'rgb(3, 74, 41)',
    items: [
      'Defesa em Autos de Infração Ambiental',
      'Regularização Ambiental Rural (CAR)',
      'Licenciamento Ambiental',
      'Recuperação de Áreas Degradadas',
      'Assessoria em Fiscalizações Ambientais',
      'Consultoria Preventiva Ambiental',
    ],
  },
  {
    icon: Calculator,
    iconClass: 'lucide-calculator',
    title: 'Direito Tributário',
    description: 'Redução da carga tributária e recuperação de valores pagos indevidamente.',
    headerColor: 'rgb(146, 118, 47)',
    borderColor: 'rgb(146, 118, 47)',
    items: [
      'Recuperação de Créditos Tributários',
      'Planejamento Tributário',
      'Defesa em Execuções Fiscais',
      'Revisão de Tributos Municipais, Estaduais e Federais',
      'Consultoria em Regularização Fiscal',
      'Análise de Incentivos Fiscais',
    ],
  },
  {
    icon: Building2,
    iconClass: 'lucide-building2',
    title: 'Direito Empresarial',
    description: 'Assessoria jurídica completa para proteger e impulsionar seu negócio.',
    headerColor: 'rgb(46, 81, 35)',
    borderColor: 'rgb(46, 81, 35)',
    items: [
      'Elaboração e Revisão de Contratos',
      'Consultoria Jurídica Preventiva',
      'Assessoria em Transações Comerciais',
      'Regularização de Empresas',
      'Compliance e Governança Corporativa',
      'Resolução de Conflitos Empresariais',
    ],
  },
];

const scrollToContact = () => {
  const el = document.getElementById('contato');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-[rgb(249,253,249)] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[rgb(146,118,47)] font-semibold text-sm tracking-wide uppercase">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[rgb(3,74,41)] mt-2 leading-tight">
            Soluções Jurídicas Especializadas
          </h2>
          <p className="text-[rgb(8,16,20)]/70 text-lg mt-4 max-w-2xl mx-auto">
            Expertise técnica em três áreas fundamentais para empresários e produtores rurais
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105"
              >
                <div className="p-6 text-white" style={{ backgroundColor: service.headerColor }}>
                  <div className="bg-white/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`lucide ${service.iconClass} w-8 h-8`} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start space-x-3">
                        <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-[rgb(153,138,71)] flex-shrink-0 mt-0.5" />
                        <span className="text-[rgb(8,16,20)]/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={scrollToContact}
                    className="w-full mt-6 flex items-center justify-center space-x-2 border-2 text-[rgb(8,16,20)] px-6 py-3 rounded-lg hover:bg-[rgb(3,74,41)] hover:border-[rgb(3,74,41)] hover:text-white transition-all duration-300 font-semibold group/btn"
                    style={{ borderColor: service.borderColor }}
                  >
                    <span>Consultar Especialista</span>
                    <ArrowRight className="lucide lucide-arrow-right w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-gradient-to-r from-[rgb(3,74,41)] to-[rgb(46,81,35)] rounded-2xl p-8 sm:p-12 text-center text-white shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Atendemos em Toda a Região Norte de Goiás
          </h3>
          <p className="text-lg text-white/90 mb-6 max-w-3xl mx-auto">
            Uruaçu, Campinorte, Niquelândia, Alto Horizonte, Santa Terezinha, Nova Crixás, Crixás,
            Goianésia, Itapaci e região
          </p>
          <a
            href="http://wa.me/556281931078"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-[rgb(153,138,71)] text-[rgb(8,16,20)] px-8 py-4 rounded-lg hover:bg-[rgb(146,118,47)] transition-all duration-300 font-bold shadow-lg hover:shadow-xl"
          >
            <span>Fale Conosco Agora</span>
            <ArrowRight className="lucide lucide-arrow-right w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
