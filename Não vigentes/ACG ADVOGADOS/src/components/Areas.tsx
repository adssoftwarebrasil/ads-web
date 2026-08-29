import {
  Shield,
  Briefcase,
  Building,
  FileText,
  ShoppingCart,
  UserCheck,
  Home,
  HeartHandshake,
  Sprout,
  Leaf,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react';

interface Area {
  Icon: LucideIcon;
  title: string;
  text: string;
  tags: string[];
}

const areas: Area[] = [
  {
    Icon: Shield,
    title: 'Direito Público e Administrativo',
    text: 'Especialistas em defender servidores públicos, incluindo questões de carreira, promoções, licenças, remuneração e aposentadoria.',
    tags: ['Servidores Públicos', 'Concursos', 'Promoções', 'Quinquênio e Anuênio'],
  },
  {
    Icon: Briefcase,
    title: 'Direito Trabalhista',
    text: 'Assessoria completa em relações de trabalho, defesa em ações trabalhistas e negociações com sindicatos e entidades classistas.',
    tags: ['CLT', 'Rescisões', 'Horas Extras', 'Acordos Trabalhistas'],
  },
  {
    Icon: Building,
    title: 'Direito Empresarial',
    text: 'Recuperação judicial, assessoria societária, contratos empresariais e propriedade intelectual.',
    tags: ['Recuperação Judicial', 'Sociedades', 'Contratos', 'Propriedade Intelectual'],
  },
  {
    Icon: FileText,
    title: 'Direito Tributário',
    text: 'Planejamento tributário, defesa em ações fiscais e consultoria para redução de carga tributária.',
    tags: ['Planejamento Tributário', 'Execuções Fiscais', 'Embargos', 'Consultas ao Fisco'],
  },
  {
    Icon: ShoppingCart,
    title: 'Direito do Consumidor',
    text: 'Defesa dos direitos do consumidor, acordos extrajudiciais e ações de indenização.',
    tags: ['CDC', 'Vícios de Produto', 'Indenizações', 'Acordos'],
  },
  {
    Icon: UserCheck,
    title: 'Direito Previdenciário',
    text: 'Aposentadorias, pensões, auxílios e revisões de benefícios junto ao INSS.',
    tags: ['Aposentadoria', 'Pensões', 'Auxílios', 'Revisões'],
  },
  {
    Icon: Home,
    title: 'Direito Civil',
    text: 'Ações de cobrança, indenizações, contratos e questões patrimoniais.',
    tags: ['Contratos', 'Indenizações', 'Cobranças', 'Imóveis'],
  },
  {
    Icon: HeartHandshake,
    title: 'Direito de Família e Sucessões',
    text: 'Divórcios, inventários, partilhas, holding familiar e planejamento sucessório.',
    tags: ['Divórcio', 'Inventário', 'Holding Familiar', 'Sucessões'],
  },
  {
    Icon: Sprout,
    title: 'Direito Agrário',
    text: 'Compra e venda de terras, arrendamentos, parcerias agrárias e contratos rurais.',
    tags: ['Compra e Venda', 'Arrendamento', 'Contratos Rurais', 'Seguros Rurais'],
  },
  {
    Icon: Leaf,
    title: 'Direito Ambiental',
    text: 'Defesa em questões ambientais, licenciamento e compliance ambiental no agronegócio.',
    tags: ['Licenciamento', 'Código Florestal', 'Compliance', 'Defesas'],
  },
  {
    Icon: Scale,
    title: 'Advocacia Contenciosa',
    text: 'Atuação em todas as instâncias judiciais, desde a primeira instância até tribunais superiores.',
    tags: ['Processos Judiciais', 'Audiências', 'Recursos', 'Execuções'],
  },
  {
    Icon: Users,
    title: 'Consultoria Jurídica Preventiva',
    text: 'Pareceres, orientações preventivas e análise de riscos para evitar litígios futuros.',
    tags: ['Pareceres', 'Compliance', 'Treinamentos', 'Análise de Riscos'],
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-24 bg-gradient-to-b from-[rgb(16,17,12)] to-[rgb(16,17,12)]/95">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(175,145,93)] font-bold text-sm tracking-widest uppercase">Áreas de Atuação</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">Expertise Jurídica Completa</h2>
          <p className="text-xl text-[rgb(199,195,192)] max-w-3xl mx-auto leading-relaxed">
            Soluções jurídicas especializadas para pessoas físicas, empresas e servidores públicos em todo o Estado do
            Tocantins
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map(({ Icon, title, text, tags }) => (
            <div
              key={title}
              className="bg-white/5 backdrop-blur-sm border border-[rgb(175,145,93)]/20 rounded-xl p-8 hover:bg-white/10 hover:border-[rgb(175,145,93)]/40 transition-all duration-300 group"
            >
              <div className="bg-[rgb(175,145,93)]/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[rgb(175,145,93)]/20 transition-all duration-300">
                <Icon size={32} className="text-[rgb(175,145,93)]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
              <p className="text-[rgb(199,195,192)] mb-6 leading-relaxed">{text}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-[rgb(175,145,93)]/10 text-[rgb(175,145,93)] px-3 py-1 rounded-full border border-[rgb(175,145,93)]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <p className="text-[rgb(199,195,192)] text-lg mb-6">Não encontrou a área que procura?</p>
          <a
            href="http://wa.me/556399974853"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(175,145,93)] text-[rgb(16,17,12)] px-8 py-4 rounded-lg hover:bg-[rgb(199,195,192)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Fale com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
