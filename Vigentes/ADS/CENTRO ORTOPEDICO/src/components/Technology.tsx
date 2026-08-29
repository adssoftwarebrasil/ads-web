import { Scan, Cpu, Cog, Trophy } from 'lucide-react';

const etapas = [
  {
    icon: Scan,
    titulo: 'Scanner',
    texto: 'A anatomia do paciente é capturada digitalmente, sem gesso e sem desconforto.',
  },
  {
    icon: Cpu,
    titulo: 'Software',
    texto: 'O modelo 3D é ajustado com precisão milimétrica antes de qualquer produção.',
  },
  {
    icon: Cog,
    titulo: 'Fresadora CNC',
    texto: 'A peça é usinada exatamente como projetada, com repetibilidade que o método manual não alcança.',
  },
];

export default function Technology() {
  return (
    <section className="bg-[#0b3d5c] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-[#14a3c7]/10 rounded-full blur-[130px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6">
              <Trophy size={14} />
              Pioneirismo
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
              Sistema CAD CAM RODIN 4D
            </h2>
            <p className="text-white/75 text-lg leading-relaxed mb-6">
              O Centro Ortopédico foi a{' '}
              <strong className="text-white">segunda empresa do Brasil</strong> e a{' '}
              <strong className="text-white">terceira da América Latina</strong> a operar um sistema
              completo de fabricação 3D para dispositivos ortopédicos.
            </p>
            <p className="text-white/60 leading-relaxed">
              Na prática, isso significa peças mais leves, mais ajustadas e produzidas em menos
              tempo — com um registro digital que permite refazer a órtese anos depois, com a mesma
              exatidão.
            </p>
          </div>

          <div className="space-y-4">
            {etapas.map(({ icon: Icon, titulo, texto }, i) => (
              <div
                key={titulo}
                className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#14a3c7]/15 flex items-center justify-center">
                  <Icon size={22} className="text-[#14a3c7]" />
                </div>
                <div>
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-[#f59e0b] font-bold text-sm">0{i + 1}</span>
                    <h3 className="text-lg font-bold text-white">{titulo}</h3>
                  </div>
                  <p className="text-white/65 leading-relaxed">{texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
