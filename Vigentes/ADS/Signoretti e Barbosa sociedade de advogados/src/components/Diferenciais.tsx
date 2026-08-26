import { UserCheck, Scale, Lightbulb, Globe, Clock, Award, LucideIcon } from 'lucide-react';

interface Diferencial {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
  delay: string;
}

const DIFERENCIAIS: Diferencial[] = [
  {
    icon: UserCheck,
    iconClass: 'lucide lucide-user-check text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Atendimento Personalizado',
    description:
      'Cada caso é único. Analisamos detalhadamente cada situação para oferecer as soluções mais adequadas e eficazes para você.',
    delay: '0ms',
  },
  {
    icon: Scale,
    iconClass: 'lucide lucide-scale text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Ética e Transparência',
    description:
      'Atuamos com integridade e respeito aos princípios éticos da profissão, mantendo você informado em todas as etapas.',
    delay: '100ms',
  },
  {
    icon: Lightbulb,
    iconClass: 'lucide lucide-lightbulb text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Advocacia Inovadora',
    description:
      'Investimos em tecnologia e capacitação para oferecer soluções jurídicas modernas, ágeis e eficientes.',
    delay: '200ms',
  },
  {
    icon: Globe,
    iconClass: 'lucide lucide-globe text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Atendimento Nacional',
    description:
      'Atendemos clientes em todo o território nacional, oferecendo também serviços de consultoria jurídica à distância.',
    delay: '300ms',
  },
  {
    icon: Clock,
    iconClass: 'lucide lucide-clock text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Agilidade e Eficiência',
    description:
      'Auxiliamos na tomada de decisões e na resolução de conflitos de forma ágil, minimizando impactos no seu dia a dia.',
    delay: '400ms',
  },
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[#EB7104] group-hover:text-white transition-colors duration-300',
    title: 'Equipe Especializada',
    description:
      'Nossa equipe tem especialização em diferentes ramos do direito, garantindo a expertise necessária para cada demanda.',
    delay: '500ms',
  },
];

const REGIOES = ['Lucas do Rio Verde', 'Sorriso', 'Sinop', 'Nova Mutum', 'Todo o Brasil'];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-24 bg-[#10202F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EB7104]/15 border border-[#EB7104]/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-[#EB7104] text-xs font-semibold tracking-widest uppercase">
              Por que nos escolher
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-white/50 text-base sm:text-lg max-w-2xl mx-auto">
            Somos parceiros estratégicos dos nossos clientes, comprometidos em oferecer segurança jurídica e tranquilidade.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFERENCIAIS.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.title}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#EB7104]/40 rounded-2xl p-8 transition-all duration-300"
                style={{ animationDelay: d.delay }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#EB7104]/15 border border-[#EB7104]/20 flex items-center justify-center mb-5 group-hover:bg-[#EB7104] transition-colors duration-300">
                  <Icon width={22} height={22} className={d.iconClass} />
                </div>
                <h3 className="text-white font-bold text-base mb-3">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.description}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-[#EB7104] rounded-3xl p-10 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Região de Atendimento</h3>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Com sede em Lucas do Rio Verde, atendemos clientes nas principais cidades da região e em todo o território nacional.
            </p>
            <div className="flex flex-wrap gap-2">
              {REGIOES.map((r) => (
                <span
                  key={r}
                  className="bg-white/20 border border-white/30 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Horário de Atendimento</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-white/70 text-sm">Segunda a Sexta</span>
                <span className="text-white font-semibold text-sm">08:00 – 11:30</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/10">
                <span className="text-white/70 text-sm">Segunda a Sexta</span>
                <span className="text-white font-semibold text-sm">13:00 – 17:30</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-white/70 text-sm">Sábado e Domingo</span>
                <span className="text-white/40 text-sm">Fechado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
