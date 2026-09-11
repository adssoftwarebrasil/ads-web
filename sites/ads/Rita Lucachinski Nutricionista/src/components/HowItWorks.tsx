import { ClipboardCheck, FileText, Users, Pill, Video, Heart } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: ClipboardCheck,
    title: 'Avaliação Completa',
    text: 'Análise detalhada do seu histórico de saúde, hábitos alimentares e objetivos para criar um plano totalmente personalizado.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Plano Nutricional Individualizado',
    text: 'Cardápio elaborado especialmente para você, considerando suas preferências, rotina e necessidades nutricionais.',
  },
  {
    num: '03',
    icon: Users,
    title: 'Acompanhamento Multidisciplinar',
    text: 'Trabalho integrado quando necessário com outros profissionais para garantir resultados completos e sustentáveis.',
  },
  {
    num: '04',
    icon: Pill,
    title: 'Fórmulas Manipuladas',
    text: 'Quando indicado, fitoterapia personalizada para potencializar seus resultados de forma segura e eficaz.',
  },
  {
    num: '05',
    icon: Video,
    title: 'Consultas Online',
    text: 'Atendimento flexível e conveniente por videochamada, para que você possa se cuidar de onde estiver.',
  },
  {
    num: '06',
    icon: Heart,
    title: 'Tratamento Adaptado',
    text: 'Ajustes contínuos no seu plano conforme sua evolução, garantindo resultados consistentes e duradouros.',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-6">
            Como Funciona o{' '}
            <span className="text-[rgb(157,111,88)] font-normal border-b border-[rgb(157,111,88)]/30 pb-1">
              Método Rita Lucachinski
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">
            Um processo estruturado e humanizado para garantir sua transformação
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map(({ num, icon: Icon, title, text }) => (
            <div
              key={num}
              className="relative bg-[#141414] border border-white/5 rounded-3xl p-8 lg:p-10 hover:border-[rgb(157,111,88)]/30 transition-all duration-500 group overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 text-9xl font-bold text-white/[0.02] select-none pointer-events-none font-serif group-hover:text-[rgb(157,111,88)]/[0.05] transition-colors duration-500">
                {num}
              </div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#1a1a1a] border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[rgb(157,111,88)]/50 transition-all duration-300">
                  <Icon className="w-7 h-7 text-[rgb(157,111,88)]" />
                </div>
                <h3 className="text-2xl font-normal text-white mb-4">{title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
