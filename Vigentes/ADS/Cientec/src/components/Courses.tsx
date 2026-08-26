import { useEffect, useRef, useState } from 'react';
import {
  Stethoscope,
  Sparkles,
  Radiation,
  HardHat,
  Wheat,
  Smile,
  Scissors,
  Syringe,
  HeartPulse,
  Shield,
  Briefcase,
  ArrowRight,
} from 'lucide-react';
import CourseDetailModal from './CourseDetailModal';
import { coursesData, findCourseData, type CourseFullData } from '../data/coursesData';

const courses = [
  { icon: Stethoscope, title: 'Técnico em Enfermagem', tag: 'Mais Procurado', tagColor: 'bg-red-100 text-brand-red', category: 'Técnico' },
  { icon: Sparkles, title: 'Técnico em Estética', tag: 'Alta Demanda', tagColor: 'bg-pink-100 text-pink-600', category: 'Técnico' },
  { icon: Radiation, title: 'Técnico em Radiologia', tag: '', tagColor: '', category: 'Técnico' },
  { icon: HardHat, title: 'Técnico em Segurança do Trabalho', tag: '', tagColor: '', category: 'Técnico' },
  { icon: Wheat, title: 'Técnico em Agropecuária', tag: '', tagColor: '', category: 'Técnico' },
  { icon: Smile, title: 'Técnico em Próteses Dentárias', tag: '', tagColor: '', category: 'Técnico' },
  { icon: Scissors, title: 'Instrumentação Cirúrgica', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
  { icon: Syringe, title: 'Sala de Vacinas', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
  { icon: HeartPulse, title: 'Atendimento Pré-Hospitalar', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
  { icon: Syringe, title: 'Aplicação de Injetáveis', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
  { icon: Shield, title: 'Socorrista e Resgatista', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
  { icon: Briefcase, title: 'Enfermagem do Trabalho', tag: 'Capacitação', tagColor: 'bg-blue-100 text-brand-blue', category: 'Capacitação' },
];

export default function Courses() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<CourseFullData | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleOpen = (title: string) => {
    const data = findCourseData(title) ?? coursesData[0];
    setSelected(data);
  };

  return (
    <section
      id="cursos"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-white"
            style={{ backgroundColor: 'rgb(56,73,156)' }}
          >
            Nossos Cursos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'rgb(62,64,150)' }}>
            Escolha Seu Caminho Profissional
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cursos técnicos e capacitações de alto nível, reconhecidos pelo mercado e desenvolvidos para sua empregabilidade imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {courses.map((course, i) => {
            const data = findCourseData(course.title);
            return (
              <div
                key={course.title}
                className={`group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${Math.min(i * 50, 400)}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, rgb(62,64,150), rgb(5,145,211))' }}
                  >
                    <course.icon size={22} className="text-white" />
                  </div>
                  {course.tag && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${course.tagColor}`}>
                      {course.tag}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{course.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {data?.description}
                </p>

                <button
                  type="button"
                  onClick={() => handleOpen(course.title)}
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 cursor-pointer self-start"
                  style={{ color: 'rgb(188,51,54)' }}
                >
                  Saiba mais
                  <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold text-base shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'rgb(188, 51, 54)' }}
          >
            Fale com um Especialista
            <ArrowRight size={18} />
          </a>
        </div>
      </div>

      <CourseDetailModal
        isOpen={selected !== null}
        course={selected}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}
