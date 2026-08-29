import {
  FileCheck,
  Shield,
  ClipboardCheck,
  Monitor,
  FlaskConical,
  HardHat,
  Microscope,
  GraduationCap,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { icon: LucideIcon; title: string; subtitle: string; description: string }[] = [
  {
    icon: FileCheck,
    title: 'ASO',
    subtitle: 'Atestado de Saúde Ocupacional',
    description:
      'Exames admissionais, periódicos, demissionais, de retorno ao trabalho e mudança de função com agilidade.',
  },
  {
    icon: Shield,
    title: 'PGR',
    subtitle: 'Gerenciamento de Riscos',
    description:
      'Identificação, avaliação e controle de riscos ocupacionais conforme as normas regulamentadoras vigentes.',
  },
  {
    icon: ClipboardCheck,
    title: 'PCMSO',
    subtitle: 'Controle Médico Ocupacional',
    description:
      'Programa completo de controle médico para proteger a integridade e saúde dos seus colaboradores.',
  },
  {
    icon: Monitor,
    title: 'eSocial',
    subtitle: 'Gestão de Eventos SST',
    description:
      'Gestão completa dos eventos de SST no eSocial, garantindo conformidade e evitando multas.',
  },
  {
    icon: FlaskConical,
    title: 'Exame Toxicológico',
    subtitle: 'Análise Laboratorial',
    description:
      'Exames para habilitação e renovação de CNH, admissão e demissão de motoristas profissionais.',
  },
  {
    icon: HardHat,
    title: 'Engenharia do Trabalho',
    subtitle: 'Segurança Especializada',
    description:
      'Equipe com 3 engenheiros e 5 técnicos para laudos, perícias e consultoria em segurança.',
  },
  {
    icon: Microscope,
    title: 'Exames Laboratoriais',
    subtitle: 'Laboratório Cuidar',
    description:
      'Laboratório próprio com estrutura completa para exames complementares e resultados rápidos.',
  },
  {
    icon: GraduationCap,
    title: 'Treinamentos',
    subtitle: 'Capacitação Profissional',
    description:
      'Treinamentos em segurança do trabalho, NRs e capacitações específicas para sua equipe.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <span className="text-brand-500 font-semibold text-sm tracking-wider uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mt-3 mb-4">
            Soluções Completas em SST
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Portfólio completo em Medicina e Engenharia do Trabalho para manter sua empresa em
            conformidade e seus colaboradores protegidos.
          </p>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full mt-4"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, subtitle, description }, i) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-neutral-100 hover:border-brand-200 transition-all duration-500 group opacity-100 translate-y-0"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-500 transition-colors duration-300">
                <Icon className="w-7 h-7 text-brand-500 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-1">{title}</h3>
              <p className="text-xs font-semibold text-brand-500 mb-3">{subtitle}</p>
              <p className="text-sm text-neutral-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <button className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5">
            Solicite um Orçamento
          </button>
        </div>
      </div>
    </section>
  );
}
