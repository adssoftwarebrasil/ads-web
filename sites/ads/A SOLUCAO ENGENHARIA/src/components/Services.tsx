import {
  ClipboardList,
  FileText,
  FlameKindling,
  ShieldCheck,
  Users,
  Zap,
} from 'lucide-react';

const services = [
  {
    icon: FileText,
    title: 'Projeto de Incêndio',
    description:
      'Elaboração de projetos técnicos completos seguindo as normas ABNT e exigências do Corpo de Bombeiros de Sergipe.',
  },
  {
    icon: Zap,
    title: 'SPDA — Para-Raios',
    description:
      'Instalação e laudo de Sistema de Proteção Contra Descargas Atmosféricas, garantindo segurança total.',
  },
  {
    icon: ClipboardList,
    title: 'Regularização CBMSE',
    description:
      'Assessoria completa para regularização do seu imóvel junto ao Corpo de Bombeiros Militar de Sergipe.',
  },
  {
    icon: Users,
    title: 'Treinamento de Brigada',
    description:
      'Capacitação profissional de brigadas de incêndio, preparando sua equipe para agir com segurança em emergências.',
  },
  {
    icon: FlameKindling,
    title: 'Retardante de Chamas',
    description:
      'Aplicação de produtos retardantes de chamas em estruturas e superfícies para maior proteção passiva.',
  },
  {
    icon: ShieldCheck,
    title: 'Plano de Intervenção',
    description:
      'Elaboração de Plano de Intervenção de Incêndio (PII) personalizado para cada tipo de edificação.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#090B4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#92AA40]/20 text-[#92AA40] font-semibold text-sm px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            Serviços Técnicos <span className="text-[#92AA40]">Especializados</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base leading-relaxed">
            Do projeto à regularização, nossa equipe oferece soluções completas
            para garantir a segurança do seu imóvel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#92AA40]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#92AA40]/15 group-hover:bg-[#92AA40]/25 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                <service.icon size={22} className="text-[#92AA40]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="http://wa.me/5579998705409?text=Olá! Quero saber mais sobre os serviços técnicos da A Solução Engenharia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#92AA40] hover:bg-[#7d9336] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-[#92AA40]/25 hover:shadow-xl hover:-translate-y-0.5"
          >
            Solicitar Serviço
          </a>
        </div>
      </div>
    </section>
  );
}
