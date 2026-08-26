import { Award, Shield, Clock, Users } from 'lucide-react';

const features = [
  {
    Icon: Award,
    title: '20 Anos de Experiência',
    text: 'Duas décadas servindo o agronegócio com excelência e dedicação.',
  },
  {
    Icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Peças de alta qualidade para máquinas Case, New Holland e muito mais.',
  },
  {
    Icon: Clock,
    title: 'Atendimento Ágil',
    text: 'Seg-Sex 7:30-18:00, Sáb 7:30-12:00. Prontos para atender você.',
  },
  {
    Icon: Users,
    title: 'Equipe Especializada',
    text: 'Profissionais sérios e competentes que entendem do seu negócio.',
  },
];

const stats = [
  { value: 'Case', label: 'Peças Originais', extra: '' },
  { value: 'New Holland', label: 'Linha Completa', extra: 'leading-tight' },
  { value: 'Momentum', label: 'Plantadeiras', extra: '' },
  { value: 'Horsch', label: 'Alta Qualidade', extra: '' },
];

const bullets = [
  'Plantadeiras, colheitadeiras e pulverizadores',
  'Rolamentos, correias e correntes agrícolas',
  'Peças originais e de reposição certificadas',
  'Atendimento personalizado e consultoria técnica',
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[rgb(173,132,84)] font-semibold text-sm uppercase tracking-widest mb-4 block">
            Nossa História
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(1,52,47)] mb-6">
            Onde o Agro e a Tradição se Encontram
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Com 20 anos de experiência no mercado, a Tradição Peças Agrícolas é
            referência em qualidade e atendimento no fornecimento de peças para
            máquinas agrícolas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[rgb(221,183,120)] to-[rgb(173,132,84)] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-[rgb(1,52,47)]" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(1,52,47)] mb-3">
                {title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="bg-[rgb(1,52,47)] rounded-3xl p-6 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(221,183,120)] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[rgb(173,132,84)] rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Tudo num só lugar para o seu agronegócio
              </h3>
              <div className="space-y-4 text-gray-200 text-lg">
                {bullets.map((b) => (
                  <p key={b} className="flex items-start">
                    <span className="text-[rgb(221,183,120)] mr-3 text-2xl">
                      ✓
                    </span>
                    <span>{b}</span>
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20"
                >
                  <div
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[rgb(221,183,120)] mb-1 md:mb-2 break-words${
                      s.extra ? ' ' + s.extra : ''
                    }`}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
