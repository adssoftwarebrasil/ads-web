import { Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function BusinessHours() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          ref={ref}
          className={`max-w-2xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="bg-white rounded-2xl p-10 shadow-lg text-center border-2 border-primary/20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Clock size={40} className="text-primary" />
            </div>

            <h2 className="text-3xl font-bold text-black mb-6">Horário de Atendimento</h2>

            <div className="space-y-6 mb-8">
              {/* Semana */}
              <div>
                <div className="text-xl font-bold text-primary uppercase tracking-wide">Segunda a Sexta</div>
                <div className="text-3xl font-bold text-black">9h às 17h</div>
              </div>

              {/* Divisor simples opcional */}
              <div className="w-16 h-px bg-gray-200 mx-auto"></div>

              {/* Sábado */}
              <div>
                <div className="text-xl font-bold text-primary uppercase tracking-wide">Sábado</div>
                <div className="text-3xl font-bold text-black">9h às 12h</div>
              </div>
            </div>

            <p className="text-gray-600 text-lg border-t pt-6">
              Atendimento via WhatsApp em horário estendido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}