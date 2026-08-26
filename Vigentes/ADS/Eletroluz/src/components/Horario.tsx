import { Clock, Phone } from 'lucide-react';
import { BLUE, YELLOW, WA_SOLAR_MSG_ACC } from '../theme';
import { useInView } from '../useInView';

const days: { day: string; hours: string; closed?: boolean; delay: string }[] = [
  { day: 'Segunda-feira', hours: '08:00 às 18:00', delay: '0ms' },
  { day: 'Terça-feira', hours: '08:00 às 18:00', delay: '100ms' },
  { day: 'Quarta-feira', hours: '08:00 às 18:00', delay: '200ms' },
  { day: 'Quinta-feira', hours: '08:00 às 18:00', delay: '300ms' },
  { day: 'Sexta-feira', hours: '08:00 às 18:00', delay: '400ms' },
  { day: 'Sábado', hours: '08:00 às 13:00', delay: '500ms' },
  { day: 'Domingo', hours: 'FECHADO', closed: true, delay: '600ms' },
];

const PATTERN =
  "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 30c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zm10-5a5 5 0 100 10 5 5 0 000-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

export default function Horario() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: BLUE }}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: PATTERN }}></div>
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`inline-block mb-6 transition-all duration-700 ${
            inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}
        >
          <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <Clock width={48} height={48} className="lucide lucide-clock " style={{ color: YELLOW }} />
          </div>
        </div>
        <h2
          className={`text-3xl lg:text-5xl font-extrabold text-white mb-4 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Horário de <span style={{ color: YELLOW }}>Funcionamento</span>
        </h2>
        <p
          className={`text-white/70 mb-12 transition-all duration-700 delay-300 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Estamos prontos para atender você em nossa loja física.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {days.map((d) => (
            <div
              key={d.day}
              className={`group rounded-2xl p-5 backdrop-blur-xl border transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: 'rgba(255, 255, 255, 0.15)',
                transitionDelay: d.delay,
              }}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-white group-hover:text-[rgb(254,201,1)] transition-colors">
                  {d.day}
                </span>
                <span
                  className="text-lg font-black px-4 py-1 rounded-full bg-black/20"
                  style={
                    d.closed
                      ? { color: 'rgb(255, 107, 107)', border: '1px solid rgba(255, 107, 107, 0.267)' }
                      : { color: YELLOW, border: '1px solid rgba(254, 201, 1, 0.3)' }
                  }
                >
                  {d.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`flex justify-center transition-all duration-700 delay-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href={WA_SOLAR_MSG_ACC}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 rounded-2xl font-black text-xl transition-all duration-300 hover:scale-105 flex items-center space-x-4 overflow-hidden"
            style={{ backgroundColor: YELLOW, color: BLUE, boxShadow: 'rgba(254, 201, 1, 0.3) 0px 15px 40px' }}
          >
            <Phone width={24} height={24} className="lucide lucide-phone fill-current" />
            <span className="uppercase tracking-tight">Falar com Consultor Agora</span>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine-slow"></div>
          </a>
        </div>
      </div>
    </section>
  );
}
