import { useScrollReveal } from '../hooks/useScrollReveal';
import { CalendarDays, Globe, TrendingUp, ShieldCheck } from 'lucide-react';

const milestones = [
  { icon: CalendarDays, label: 'Fundada em', value: '08/07/2020' },
  { icon: TrendingUp, label: 'Anos de atuação', value: '5+ anos' },
  { icon: Globe, label: 'Alcance', value: 'Brasil todo' },
  { icon: ShieldCheck, label: 'Foco', value: 'Qualidade & Agilidade' },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-brand-red/10 rounded-2xl" />
            <img
              src="https://storage.lucasmendes.dev/site-sp/pasa-tratores/img/logo.webp"
              alt="Pasa Tratores Peças"
              className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl object-contain bg-gray-50 p-8"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 bg-brand-red text-white rounded-2xl px-6 py-4 shadow-xl">
              <div className="text-3xl font-extrabold leading-none">5★</div>
              <div className="text-xs font-semibold mt-1 opacity-90">Avaliação Google</div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <span className="text-brand-red text-sm font-bold uppercase tracking-widest">Nossa História</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-brand-dark leading-tight">
              De uma oportunidade a{' '}
              <span className="text-brand-red">referência</span> no setor
            </h2>
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                A Pasa Tratores nasceu de uma oportunidade enxergada com visão e determinação. O que
                começou como um pequeno projeto rapidamente ganhou força com o crescimento da demanda
                por peças de qualidade para máquinas pesadas na região de Sinop - MT.
              </p>
              <p>
                Com a expansão estrutural e a consolidação da importação de peças, hoje oferecemos
                um portfólio completo para escavadeiras, tratores, geradores e equipamentos do
                agronegócio e construção pesada — marcas como <strong className="text-brand-dark">Komatsu, Cummins, Hyundai</strong> e
                Shantui.
              </p>
              <p>
                Nosso compromisso é simples: <strong className="text-brand-dark">peças de procedência confiável, atendimento ágil e
                suporte especializado</strong> para manter suas máquinas operando sem parar.
              </p>
            </div>

            {/* Milestones */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {milestones.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-brand-red/30 hover:shadow-sm transition-all duration-200"
                >
                  <div className="bg-brand-red/10 text-brand-red rounded-lg p-2 flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">{label}</div>
                    <div className="text-sm font-bold text-brand-dark mt-0.5">{value}</div>
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
