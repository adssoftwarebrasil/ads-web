import { Heart, Award, Users, type LucideIcon } from 'lucide-react';

const stats = [
  { value: '30+', label: 'Anos de Tradição' },
  { value: '100%', label: 'Personalizado' },
  { value: 'Sorriso', label: 'Atendimento em MT' },
];

const highlights: { Icon: LucideIcon; text: string }[] = [
  { Icon: Heart, text: 'Empresa familiar com legado de 30 anos' },
  { Icon: Award, text: 'Qualidade e acabamento impecável em cada peça' },
  { Icon: Users, text: 'Comprometidos com a satisfação de cada cliente' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="text-brand-red font-semibold text-sm tracking-widest uppercase mb-2">Nossa História</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Legado de família,<span className="text-brand-blue block">qualidade de geração</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-base md:text-lg">
            Nossa história é dedicada exclusivamente aos nossos pais. Fundada há mais de <strong>30 anos</strong> pela
            querida costureira D. Rosa e seu marido José Vilto Gonçalves (in memoriam), a empresa foi construída com fé
            em Deus, honestidade e humildade — na época denominada <em>Roling Malhas</em>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-10 text-base md:text-lg">
            Hoje, sob o nome fantasia <strong>Rolim Confecções e Bordados</strong>, continuamos sob a direção da
            família, com o mesmo compromisso de excelência. Cada peça é cuidadosamente criada por nossas equipes
            especializadas para atender com precisão a necessidade de cada cliente.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 w-full mb-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="text-3xl md:text-4xl font-black text-brand-red">{stat.value}</div>
                <div className="text-gray-500 text-sm md:text-base mt-2 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 w-full">
            {highlights.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm w-full md:w-auto text-left"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-brand-red" />
                </div>
                <span className="text-gray-700 text-sm md:text-base font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
