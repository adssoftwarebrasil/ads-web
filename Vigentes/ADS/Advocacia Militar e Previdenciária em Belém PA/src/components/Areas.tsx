import {
  Shield,
  Users,
  Heart,
  Scale,
  FileText,
  ChevronDown,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react';

const BRAND = 'rgb(172, 0, 0)';

interface Area {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  especialidades: string;
  cta: string;
}

const areas: Area[] = [
  {
    Icon: Shield,
    iconClass: 'lucide-shield',
    title: 'Direito Militar',
    description:
      'Defesa especializada para militares em processos administrativos e judiciais. Atuamos em punições, desligamentos, promoções e questões disciplinares.',
    especialidades:
      'punição militar, desligamento, promoção, carreira militar, disciplinar, contravenção, casas funcionais, curso carreira',
    cta: 'Consultar Especialista',
  },
  {
    Icon: Users,
    iconClass: 'lucide-users',
    title: 'Direito Previdenciário',
    description:
      'Conquista e revisão de benefícios do INSS. Auxílio-doença, aposentadoria, BPC e pensão por morte com análise minuciosa.',
    especialidades:
      'benefício de prestação continuada, BPC, auxílio doença, aposentadoria, pensão por morte, revisão INSS',
    cta: 'Solicitar Análise',
  },
  {
    Icon: Heart,
    iconClass: 'lucide-heart',
    title: 'Direito à Saúde',
    description:
      'Garantia judicial de acesso a leitos de UTI, medicamentos de alto custo, tratamentos e internações hospitalares.',
    especialidades:
      'leito de uti, remédio de alto custo, tratamento de saúde, regulação, internação hospitalar',
    cta: 'Urgência Médica',
  },
  {
    Icon: Scale,
    iconClass: 'lucide-scale',
    title: 'Direito Civil e Imobiliário',
    description:
      'Assessoria completa em questões patrimoniais, inventários, partilhas e contratos de compra e venda.',
    especialidades: 'compra e venda, inventário, partilha, alienação fiduciária, contratos',
    cta: 'Agendar Consulta',
  },
  {
    Icon: Shield,
    iconClass: 'lucide-shield',
    title: 'Direito do Consumidor',
    description:
      'Defesa contra práticas abusivas, fraudes bancárias, empréstimos fraudulentos e bloqueios indevidos de conta.',
    especialidades:
      'produto com defeito oculto, venda casada, empréstimo fraudulento, fraude bancária, débito automático não autorizado, bloqueio de conta corrente',
    cta: 'Denunciar Fraude',
  },
  {
    Icon: FileText,
    iconClass: 'lucide-file-text',
    title: 'Direito Notarial e Registral',
    description:
      'Expertise em questões cartorárias complexas. Regularização de imóveis e documentação registral.',
    especialidades: 'registro de imóveis, cartório, regularização, documentação',
    cta: 'Regularizar Imóvel',
  },
];

export default function Areas() {
  return (
    <section
      id="areas"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="text-sm font-semibold tracking-wider uppercase"
              style={{ color: BRAND }}
            >
              Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Áreas de Atuação
          </h2>
          <div
            className="w-24 h-1 mx-auto rounded-full mb-6"
            style={{ backgroundColor: BRAND }}
          ></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos atendimento especializado em diversas áreas do direito, sempre com foco na
            defesa dos seus interesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, i) => {
            const { Icon } = area;
            return (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                style={{ borderColor: 'rgb(229, 231, 235)' }}
              >
                <div
                  className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: BRAND, opacity: 0.1 }}
                ></div>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: 'rgba(172, 0, 0, 0.1)' }}
                >
                  <Icon
                    width={32}
                    height={32}
                    className={`lucide ${area.iconClass} transition-colors duration-300`}
                    style={{ color: BRAND }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-between">
                  {area.title}
                  <ChevronDown
                    width={20}
                    height={20}
                    className="lucide lucide-chevron-down transition-transform duration-300 "
                    style={{ color: BRAND }}
                  />
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{area.description}</p>
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0">
                  <div
                    className="text-xs text-gray-600 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border"
                    style={{ borderColor: BRAND }}
                  >
                    <strong className="block mb-2" style={{ color: BRAND }}>
                      Especialidades:
                    </strong>
                    {area.especialidades}
                  </div>
                </div>
                <a
                  href="https://wa.me/5591993424086"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center w-full text-center px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-105 shadow-md hover:shadow-lg"
                  style={{ backgroundColor: BRAND }}
                >
                  {area.cta}
                  <ArrowRight
                    width={18}
                    height={18}
                    className="lucide lucide-arrow-right ml-2 group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Não encontrou o que procura?</p>
          <a
            href="https://wa.me/5591993424086"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg border-2"
            style={{ borderColor: BRAND, color: BRAND }}
          >
            Fale Conosco Sobre Seu Caso
            <ArrowRight width={18} height={18} className="lucide lucide-arrow-right " />
          </a>
        </div>
      </div>
    </section>
  );
}
