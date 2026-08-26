import { Clock, Users, Award, Star, CheckCircle, LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface Stat {
  Icon: LucideIcon;
  iconClass: string;
  value: string;
  label: string;
}

const stats: Stat[] = [
  { Icon: Clock, iconClass: 'lucide lucide-clock', value: '30+', label: 'Anos de Experiência' },
  { Icon: Users, iconClass: 'lucide lucide-users', value: '15mil+', label: 'Pacientes Atendidos' },
  { Icon: Award, iconClass: 'lucide lucide-award', value: '100%', label: 'Dedicação e Cuidado' },
  { Icon: Star, iconClass: 'lucide lucide-star', value: '5.0', label: 'Avaliação Google' },
];

const especializacoes = [
  'Ortodontia',
  'Implantodontia',
  'Endodontia',
  'Harmonização Facial',
  'Estética Dental',
  'Próteses Dentárias',
];

export default function About() {
  return (
    <section
      id="sobre"
      className="py-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Conheça o{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600">
                Dr. Luciano Menardi
              </span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Mais de três décadas transformando sorrisos com excelência e dedicação
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-500 p-3 rounded-xl mb-3">
                    <stat.Icon size={24} className={`${stat.iconClass} text-white`} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-teal-600 mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-slate-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-slate-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Com mais de <span className="font-bold text-teal-600">30 anos</span> dedicados à
                  Odontologia, o Dr. Luciano Menardi é especialista em Ortodontia, Implantodontia,
                  Endodontia e Harmonização Facial.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg">
                  Pós-graduado em <span className="font-semibold">Estética Dental</span>, combina
                  experiência clínica sólida com as mais modernas técnicas e tecnologias disponíveis.
                </p>
                <p className="text-slate-700 leading-relaxed text-base md:text-lg">
                  Sua missão é proporcionar não apenas tratamentos odontológicos de excelência, mas
                  uma{' '}
                  <span className="font-semibold text-teal-600">
                    experiência de cuidado que transforma vidas
                  </span>{' '}
                  através do sorriso.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 md:p-8 shadow-lg border border-teal-100">
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 justify-center">
                <Award size={28} className="lucide lucide-award text-teal-600" />
                Especializações
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {especializacoes.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  >
                    <div className="bg-teal-100 p-2 rounded-lg">
                      <CheckCircle size={20} className="lucide lucide-check-circle text-teal-600" />
                    </div>
                    <span className="text-slate-700 font-semibold text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Agende Sua Consulta com o Dr. Luciano
              </h3>
              <p className="text-white/90 mb-6 text-base md:text-lg max-w-2xl mx-auto">
                Experimente o cuidado personalizado e a expertise de mais de 30 anos em Odontologia
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-50 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Agendar Consulta
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
