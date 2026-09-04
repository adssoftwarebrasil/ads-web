import { Grid3x3, ShieldCheck, Ruler, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const atributos = [
  {
    icon: ShieldCheck,
    title: 'Resistência',
    desc: 'Estrado português dimensionado para grandes públicos, palcos e passarelas sem ceder.',
  },
  {
    icon: Ruler,
    title: 'Modularidade',
    desc: 'Montagem rápida e nivelada em qualquer terreno, no tamanho exato que o evento pede.',
  },
  {
    icon: Sparkles,
    title: 'Acabamento',
    desc: 'Superfície uniforme e impecável, pronta para receber piso decorativo e personalização.',
  },
];

export default function PisoIrmarfer() {
  const { ref: leftRef, inView: leftIn } = useInView();
  const { ref: rightRef, inView: rightIn } = useInView();

  return (
    <section id="piso-irmarfer" className="py-24 bg-[rgb(3,7,8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`order-2 lg:order-1 transition-all duration-700 ${
              leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="text-[#C9962F] text-xs font-bold tracking-widest uppercase mb-3 block">
              Diferencial de Autoridade
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[rgb(245,244,249)] mb-6 leading-tight">
              Piso Modular{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9962F] to-[#F0C060]">
                IRMARFER
              </span>
            </h2>
            <p className="text-[rgb(245,244,249)]/75 text-lg sm:text-xl leading-relaxed mb-4 italic">
              “Qualidade, resistência e acabamento profissional para eventos que exigem excelência.”
            </p>
            <p className="text-[rgb(245,244,249)]/60 text-base leading-relaxed mb-10">
              O estrado português IRMARFER é a base de todo evento bem montado: nivelamento perfeito,
              segurança para o público e um acabamento à altura de casamentos, shows e grandes
              celebrações. É um diferencial que poucas empresas da região oferecem.
            </p>

            <div className="space-y-5">
              {atributos.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#C9962F]/15 flex items-center justify-center shrink-0">
                    <Icon size={21} className="text-[#C9962F]" />
                  </div>
                  <div>
                    <h3 className="text-[rgb(245,244,249)] font-bold text-base mb-1">{title}</h3>
                    <p className="text-[rgb(245,244,249)]/55 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`order-1 lg:order-2 transition-all duration-700 delay-200 ${
              rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/rg%20eventos/img/pessoas-palco-evento-merito-lojista-roupas-formais_1974x1318.webp"
                alt="Palco com piso modular IRMARFER montado em evento de gala"
                className="w-full h-[420px] sm:h-[520px] object-cover rounded-3xl"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[rgb(3,7,8)]/70 via-transparent to-transparent" />

              <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-[#C9962F] text-[rgb(3,7,8)] rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-3">
                <Grid3x3 size={24} />
                <div>
                  <div className="text-sm font-black uppercase tracking-wide leading-tight">
                    Estrado Português
                  </div>
                  <div className="text-xs font-bold opacity-80">Piso modular IRMARFER</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
