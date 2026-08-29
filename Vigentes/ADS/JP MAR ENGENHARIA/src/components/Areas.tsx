import { ShieldCheck, Droplets, FileText, Building2, AlertTriangle, HeartPulse, Globe, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Area = { Icon: LucideIcon; iconClass: string; title: string; text: string };

const areas: Area[] = [
  {
    Icon: ShieldCheck,
    iconClass: 'lucide lucide-shield-check text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'ESG',
    text: 'Environment, Social and Governance — práticas sustentáveis integradas à gestão.',
  },
  {
    Icon: Droplets,
    iconClass: 'lucide lucide-droplets text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Gestão de Recursos Hídricos',
    text: 'Monitoramento, outorga e gestão eficiente dos recursos hídricos.',
  },
  {
    Icon: FileText,
    iconClass: 'lucide lucide-file-text text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Licenciamento Ambiental',
    text: 'Assessoria completa em todas as etapas do processo de licenciamento.',
  },
  {
    Icon: Building2,
    iconClass: 'lucide lucide-building2 lucide-building-2 text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'EDD',
    text: 'Environmental Due Diligence — avaliação técnica para transações imobiliárias.',
  },
  {
    Icon: AlertTriangle,
    iconClass: 'lucide lucide-triangle-alert text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'GAC',
    text: 'Gerenciamento de Áreas Contaminadas conforme CONAMA e legislação estadual.',
  },
  {
    Icon: HeartPulse,
    iconClass: 'lucide lucide-heart-pulse text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'HSE',
    text: 'Health, Safety and Environment — saúde, segurança e meio ambiente integrados.',
  },
  {
    Icon: Globe,
    iconClass: 'lucide lucide-globe text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Estudos Ambientais',
    text: 'EIA, RIMA, EIV, RAP e demais estudos conforme legislação vigente.',
  },
  {
    Icon: Database,
    iconClass: 'lucide lucide-database text-[#013413] group-hover:text-white transition-colors duration-300',
    title: 'Banco de Dados',
    text: 'Business Intelligence ambiental — análise e gestão de dados para tomada de decisão.',
  },
];

export default function Areas() {
  return (
    <section id="areas" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="animate-fade-up  text-center mb-14">
          <span className="text-[#2d7a3a] text-xs font-medium uppercase tracking-widest mb-2 block">Áreas de</span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#013413]">Atuação</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {areas.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="animate-fade-up  group p-6 rounded-2xl border border-[#013413]/10 hover:border-[#013413]/40 hover:shadow-lg hover:shadow-[#013413]/8 transition-all duration-300 cursor-default"
              style={{ transitionDelay: '0s' }}
            >
              <div className="w-11 h-11 bg-[#013413]/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#013413] transition-colors duration-300">
                <Icon width={20} height={20} className={iconClass} aria-hidden="true" />
              </div>
              <h3 className="font-display font-semibold text-[#013413] text-base mb-2 leading-snug">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
