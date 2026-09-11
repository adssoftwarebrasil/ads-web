import { CheckCircle2, Boxes } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const integrados = [
  'Estrutura completa para eventos',
  'Piso modular IRMARFER (estrado português)',
  'Sonorização profissional importada',
  'Iluminação cênica e técnica',
  'Palcos e estruturas personalizadas',
];

export default function FullService() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section id="full-service" className="py-24 bg-[rgb(39,41,45)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
              Posicionamento Exclusivo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-6 leading-tight">
              Única empresa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
                FULL SERVICE
              </span>{' '}
              da região
            </h2>
            <p className="text-[rgb(245,244,249)]/70 text-base sm:text-lg leading-relaxed mb-8">
              Do piso ao palco, entregamos toda a estrutura necessária para o seu evento em um único fornecedor.
            </p>

            <span className="text-[rgb(245,244,249)] font-bold text-sm uppercase tracking-widest mb-5 block">
              Serviços integrados
            </span>
            <ul className="space-y-3.5">
              {integrados.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#C9962F] shrink-0 mt-0.5" />
                  <span className="text-[rgb(245,244,249)]/80 text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative rounded-3xl border border-[#C9962F]/30 bg-[rgb(3,7,8)] p-8 sm:p-10 shadow-2xl">
              <div className="w-14 h-14 rounded-2xl bg-[#C9962F]/15 flex items-center justify-center mb-6">
                <Boxes size={28} className="text-[#C9962F]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[rgb(245,244,249)] leading-tight mb-5">
                Uma estrutura completa para eventos inesquecíveis
              </h3>
              <p className="text-[rgb(245,244,249)]/70 text-base sm:text-lg leading-relaxed">
                Enquanto outras empresas entregam apenas parte da estrutura, nós cuidamos de todos os detalhes: piso, palco, iluminação e sonorização. Uma solução completa para garantir qualidade, segurança e experiência.
              </p>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                {[
                  { value: 'Piso', label: 'Modular IRMARFER' },
                  { value: 'Palco', label: 'Sob medida' },
                  { value: 'Som & Luz', label: 'Equipamento importado' },
                ].map((item) => (
                  <div key={item.value}>
                    <div className="text-[#C9962F] font-black text-sm sm:text-base">{item.value}</div>
                    <div className="text-[rgb(245,244,249)]/50 text-xs mt-1 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
