import { Award, Clock, Users, GraduationCap, CheckCircle2 } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  level: string;
  topGradient: string;
  iconGradient: string;
}

const courses: Course[] = [
  {
    title: 'Técnicas de Pintura em MDF',
    description: 'Aprenda técnicas avançadas de pintura, pátina e acabamento em peças de MDF.',
    level: 'Iniciante ao Avançado',
    topGradient: 'from-[#E63428] to-[#EB097C]',
    iconGradient: 'from-[#E63428] to-[#EB097C]',
  },
  {
    title: 'Confecção de Velas Artesanais',
    description: 'Domine as técnicas de fabricação de velas, desde a escolha das matérias-primas até o acabamento.',
    level: 'Iniciante',
    topGradient: 'from-[#FDBA16] to-[#E63428]',
    iconGradient: 'from-[#FDBA16] to-[#E63428]',
  },
  {
    title: 'Aromatizadores e Sabonetes',
    description: 'Crie aromatizadores de ambiente e sabonetes artesanais com essências exclusivas.',
    level: 'Iniciante',
    topGradient: 'from-[#009CA6] to-[#0186C6]',
    iconGradient: 'from-[#009CA6] to-[#0186C6]',
  },
  {
    title: 'Decoupage e Técnicas Decorativas',
    description: 'Explore diferentes técnicas de decoupage e acabamentos especiais para renovar objetos.',
    level: 'Todos os níveis',
    topGradient: 'from-[#EB097C] to-[#009CA6]',
    iconGradient: 'from-[#EB097C] to-[#009CA6]',
  },
];

const benefits = [
  'Instrutores experientes e qualificados',
  'Materiais de alta qualidade disponíveis',
  'Acompanhamento personalizado',
  'Ambiente criativo e acolhedor',
];

const stats = [
  { value: '17+', label: 'Anos de Experiência', color: 'text-[#FDBA16]' },
  { value: '100+', label: 'Alunos Formados', color: 'text-[#EB097C]' },
  { value: '15+', label: 'Técnicas Ensinadas', color: 'text-[#009CA6]' },
  { value: '100%', label: 'Satisfação', color: 'text-[#FDBA16]' },
];

export default function Courses() {
  return (
    <section id="cursos" className="relative py-20 md:py-32 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 bg-[#EAF2F8] opacity-60 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1a2e5a]">Nossos <span className="text-[#E63428]">Cursos Presenciais</span></h2>
          <p className="text-lg text-gray-600 font-medium">Desenvolva suas habilidades com instrutores experientes e aprenda técnicas exclusivas</p>
          <div className="h-1.5 w-24 mx-auto rounded-full bg-gradient-to-r from-[#E63428] via-[#EB097C] to-[#0186C6]"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {courses.map((course) => (
            <div key={course.title} className="group bg-white rounded-3xl p-8 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${course.topGradient}`}></div>
              <div className="flex flex-col sm:flex-row items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${course.iconGradient} shadow-lg text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="lucide lucide-award w-8 h-8" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#1a2e5a] group-hover:text-[#E63428] transition-colors">{course.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{course.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-6 border-t border-gray-100 mt-auto">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Clock className="lucide lucide-clock w-4 h-4 text-[#009CA6]" />
                  <span>Sob consulta</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full">
                  <Users className="lucide lucide-users w-4 h-4 text-[#EB097C]" />
                  <span>{course.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2e5a] via-[#274981] to-[#0186C6]"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EB097C] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          <div className="relative p-8 md:p-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                    <GraduationCap className="lucide lucide-graduation-cap w-8 h-8 text-[#FDBA16]" />
                  </div>
                  <span className="text-[#FDBA16] font-bold tracking-wider text-sm uppercase">Educação e Arte</span>
                </div>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">Desenvolva Suas <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDBA16] to-[#E63428]">Habilidades Artesanais</span></h3>
                <p className="text-lg text-blue-100 leading-relaxed max-w-xl">Nossos cursos presenciais oferecem instrução prática e personalizada. Aprenda técnicas diretamente com especialistas e tenha acesso a todo o material necessário em nossa loja.</p>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 className="lucide lucide-check-circle2 w-5 h-5 text-[#009CA6]" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <a href="http://wa.me/554599938248?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20os%20cursos%20presenciais." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-[#1a2e5a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Consultar Cursos Disponíveis
                  <Award className="lucide lucide-award w-5 h-5 text-[#E63428]" />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 mt-8 md:mt-12">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-colors duration-300">
                  <h4 className={`text-4xl md:text-5xl font-bold ${stats[0].color} mb-1`}>{stats[0].value}</h4>
                  <p className="text-blue-200 font-medium">{stats[0].label}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-colors duration-300">
                  <h4 className={`text-4xl md:text-5xl font-bold ${stats[1].color} mb-1`}>{stats[1].value}</h4>
                  <p className="text-blue-200 font-medium">{stats[1].label}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-colors duration-300">
                  <h4 className={`text-4xl md:text-5xl font-bold ${stats[2].color} mb-1`}>{stats[2].value}</h4>
                  <p className="text-blue-200 font-medium">{stats[2].label}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-3xl hover:bg-white/15 transition-colors duration-300">
                  <h4 className={`text-4xl md:text-5xl font-bold ${stats[3].color} mb-1`}>{stats[3].value}</h4>
                  <p className="text-blue-200 font-medium">{stats[3].label}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
