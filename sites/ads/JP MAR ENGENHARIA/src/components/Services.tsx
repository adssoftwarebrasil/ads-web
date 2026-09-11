import { FileText, Drill, Activity, PenTool, BookOpen, ClipboardCheck, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Service = { Icon: LucideIcon; iconClass: string; title: string; text: string };

const services: Service[] = [
  {
    Icon: FileText,
    iconClass: 'lucide lucide-file-text text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Laudos e Relatórios',
    text: 'Documentação técnica especializada para processos licitatórios, licenciamentos e avaliações ambientais.',
  },
  {
    Icon: Drill,
    iconClass: 'lucide lucide-drill text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Sondagem Geotécnica',
    text: 'Serviços de sondagem para análise e caracterização do solo em projetos ambientais e de engenharia.',
  },
  {
    Icon: Activity,
    iconClass: 'lucide lucide-activity text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Monitoramento Ambiental',
    text: 'Acompanhamento contínuo das condições ambientais — água, solo e ar — com relatórios periódicos.',
  },
  {
    Icon: PenTool,
    iconClass: 'lucide lucide-pen-tool text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Projetos Arquitetônicos',
    text: 'Projetos complementares: hidrossanitário, elétrico, SPDA, gás, combate a incêndio, topografia e DNIT/DER.',
  },
  {
    Icon: BookOpen,
    iconClass: 'lucide lucide-book-open text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Estudos Ambientais',
    text: 'Análises detalhadas — EIA, RIMA, EIV, RAP e outros estudos — conforme a legislação ambiental vigente.',
  },
  {
    Icon: ClipboardCheck,
    iconClass: 'lucide lucide-clipboard-check text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Licenciamento Ambiental',
    text: 'Assessoria completa para obtenção e renovação de Licenças Prévia, de Instalação e de Operação.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#f8f1e1]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="animate-fade-up  text-center mb-14">
          <span className="text-[#2d7a3a] text-xs font-semibold uppercase tracking-widest mb-3 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#013413] mb-4">
            Soluções completas em Engenharia Ambiental
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Atendemos desde pequenas empresas até grandes empreendimentos com a mesma dedicação e qualidade técnica.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="animate-fade-up  group bg-white rounded-2xl p-7 shadow-sm border border-[#013413]/8 hover:shadow-xl hover:shadow-[#013413]/10 hover:border-[#013413]/25 transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: '0s' }}
            >
              <div className="w-12 h-12 bg-[#013413]/8 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#013413] transition-colors duration-300">
                <Icon width={22} height={22} className={iconClass} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#013413] text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{text}</p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-[#2d7a3a] text-sm font-semibold hover:gap-2.5 transition-all duration-200"
              >
                Solicitar{' '}
                <ArrowRight width={15} height={15} className="lucide lucide-arrow-right" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
