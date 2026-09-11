import { Building2 } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const clients = [
  { name: 'Cargill', delay: 0 },
  { name: 'Grupo Josidith', delay: 60 },
  { name: 'Grupo Fujioka', delay: 120 },
  { name: 'Rede Assaí Atacadista', delay: 180 },
  { name: 'Supermercados Pró Brazilian', delay: 240 },
  { name: 'Oba Hortifruti', delay: 300 },
];

export default function Clients() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">
            Empresas que confiam na Advence System
          </span>
        </div>
        <div
          ref={ref}
          className={`flex flex-wrap justify-center items-center gap-4 sm:gap-6 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {clients.map(({ name, delay }) => (
            <div
              key={name}
              className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 shadow-sm hover:shadow-md hover:border-[rgb(219,38,27)]/30 transition-all duration-200"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <Building2 width={18} height={18} className="text-[rgb(219,38,27)]" />
              <span className="text-[rgb(42,30,75)] font-semibold text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
