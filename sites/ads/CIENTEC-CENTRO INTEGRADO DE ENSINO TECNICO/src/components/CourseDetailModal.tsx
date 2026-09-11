import { useEffect } from 'react';
import {
  X,
  GraduationCap,
  Sparkles,
  BookOpen,
  Users,
  Building2,
  Award,
  Briefcase,
  Clock,
  CalendarDays,
} from 'lucide-react';
import type { CourseFullData } from '../data/coursesData';

interface CourseDetailModalProps {
  isOpen: boolean;
  course: CourseFullData | null;
  onClose: () => void;
}

export default function CourseDetailModal({ isOpen, course, onClose }: CourseDetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !course) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-start sm:items-center justify-center p-0 sm:p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative bg-white sm:rounded-2xl shadow-2xl max-w-4xl w-full max-h-[100vh] sm:max-h-[92vh] overflow-y-auto">
        <div
          className="sticky top-0 z-10 flex items-start justify-between p-5 sm:p-6 gap-4"
          style={{ background: 'linear-gradient(135deg, rgb(62,64,150), rgb(5,145,211))' }}
        >
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white/80 uppercase tracking-widest mb-1">
              Curso Cientec
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
              {course.title}
            </h2>
            <div className="flex flex-wrap items-center gap-3 mt-3 text-white/90 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock size={13} /> {course.cargaHorariaTotal}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                <CalendarDays size={13} /> {course.duracao}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0"
            aria-label="Fechar"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-5 sm:p-8 space-y-8">
          <section>
            <p className="text-gray-700 text-base leading-relaxed">{course.longDescription}</p>
          </section>

          {course.images.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 rounded-full" style={{ backgroundColor: 'rgb(188,51,54)' }} />
                Fotos das aulas e práticas
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {course.images.map((img) => (
                  <div
                    key={img}
                    className="aspect-square rounded-xl overflow-hidden bg-gray-100 group"
                  >
                    <img
                      src={img}
                      alt={`${course.title} - prática`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {course.highlights.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles size={20} style={{ color: 'rgb(188,51,54)' }} />
                Principais benefícios
              </h3>
              <ul className="grid sm:grid-cols-2 gap-2.5">
                {course.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span
                      className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5"
                      style={{ backgroundColor: 'rgb(188,51,54)' }}
                    />
                    {h}
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section>
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
              <BookOpen size={20} style={{ color: 'rgb(62,64,150)' }} />
              Malha Curricular
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Carga horária total: <strong className="text-gray-800">{course.cargaHorariaTotal}</strong>{' '}
              · Duração estimada: <strong className="text-gray-800">{course.duracao}</strong>
            </p>
            <div className="space-y-4">
              {course.malhaCurricular.map((m, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <div
                    className="px-4 py-3 flex items-center justify-between gap-3"
                    style={{ background: 'linear-gradient(90deg, rgba(62,64,150,0.06), rgba(5,145,211,0.04))' }}
                  >
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{m.modulo}</div>
                    <div
                      className="text-xs font-bold px-2.5 py-1 rounded-full text-white whitespace-nowrap"
                      style={{ backgroundColor: 'rgb(62,64,150)' }}
                    >
                      {m.cargaHoraria}
                    </div>
                  </div>
                  <ul className="p-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                    {m.disciplinas.map((d, j) => (
                      <li key={j} className="text-sm text-gray-700 flex items-start gap-2">
                        <span className="text-gray-400 mt-0.5">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-5">
            <div className="p-5 bg-blue-50 rounded-2xl">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Sparkles size={18} style={{ color: 'rgb(5,145,211)' }} />
                Diferenciais do curso
              </h3>
              <ul className="space-y-2">
                {course.diferenciais.map((d, i) => (
                  <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                    <span style={{ color: 'rgb(5,145,211)' }}>•</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-amber-50 rounded-2xl">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                <GraduationCap size={18} className="text-amber-600" />
                Metodologia
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{course.metodologia}</p>
            </div>

            <div className="p-5 bg-green-50 rounded-2xl">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Users size={18} className="text-green-700" />
                Qualificação dos professores
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{course.professores}</p>
            </div>

            <div className="p-5 bg-violet-50 rounded-2xl">
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Building2 size={18} className="text-violet-700" />
                Estrutura física
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">{course.estrutura}</p>
            </div>
          </section>

          <section className="p-5 rounded-2xl border-2 border-dashed" style={{ borderColor: 'rgb(188,51,54)' }}>
            <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Award size={18} style={{ color: 'rgb(188,51,54)' }} />
              Diplomação
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{course.diplomacao}</p>
          </section>

          {course.areasAtuacao.length > 0 && (
            <section>
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Briefcase size={20} style={{ color: 'rgb(62,64,150)' }} />
                Áreas de atuação
              </h3>
              <div className="flex flex-wrap gap-2">
                {course.areasAtuacao.map((area, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-full border border-gray-200"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </section>
          )}

          <section
            className="p-6 rounded-2xl text-center"
            style={{ background: 'linear-gradient(135deg, rgb(62,64,150), rgb(5,145,211))' }}
          >
            <h3 className="text-xl font-black text-white mb-2">Pronto para começar?</h3>
            <p className="text-white/90 text-sm mb-5">
              Fale com nossa equipe pelo WhatsApp e garanta sua vaga.
            </p>
            <a
              href={`http://wa.me/556699893074?text=${encodeURIComponent(
                `Olá! Tenho interesse no curso ${course.title} do Cientec. Pode me passar mais informações?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white font-bold text-base shadow-lg transition-all duration-200 hover:scale-105"
              style={{ color: 'rgb(188,51,54)' }}
            >
              Quero me Matricular
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
