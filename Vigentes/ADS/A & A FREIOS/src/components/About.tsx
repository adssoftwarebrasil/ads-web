import { CheckCircle2, Cpu, ShieldCheck, Activity, Quote } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const quemSomos =
  'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=aeafreios%2Fquem-somos.webp&version_id=null';

interface Value {
  icon: LucideIcon;
  iconWrapper: string;
  iconColor: string;
  title: string;
  subtitle: string;
}

const values: Value[] = [
  { icon: CheckCircle2, iconWrapper: 'bg-green-100', iconColor: 'text-green-700', title: 'Honestidade', subtitle: 'Diagnóstico Real' },
  { icon: Cpu, iconWrapper: 'bg-blue-100', iconColor: 'text-blue-700', title: 'Tecnologia', subtitle: 'Scanner de Ponta' },
  { icon: ShieldCheck, iconWrapper: 'bg-red-100', iconColor: 'text-red-700', title: 'Genuínas', subtitle: 'Peças Originais' },
  { icon: Activity, iconWrapper: 'bg-amber-100', iconColor: 'text-amber-700', title: '13+ Anos', subtitle: 'Expertise Total' },
];

export default function About() {
  return (
    <div id="differentiator">
      <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-gray-50 to-transparent pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="flex justify-center mb-8">
            <span className="py-1.5 px-4 rounded-full bg-blue-50 text-[rgb(8,36,75)] text-xs font-bold tracking-widest uppercase border border-blue-100">
              Nossa História & DNA
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[rgb(8,36,75)] mb-10 leading-tight">
            Da Força Bruta à <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgb(230,10,12)] to-red-600">
              Inteligência Diagnóstica
            </span>
          </h2>
          <div className="relative w-full max-w-4xl mx-auto mb-12 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-red-100 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src={quemSomos}
              alt="Equipe e Estrutura AEA Freios"
              className="relative w-full h-auto object-cover rounded-[1.5rem] shadow-xl border border-gray-100 transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>
          <div className="prose prose-lg text-slate-600 mx-auto mb-16 leading-relaxed max-w-3xl">
            <p className="mb-6">
              Fundada por um mecânico experiente e impulsionada por seus filhos que trouxeram a tecnologia para dentro
              da oficina, a <strong className="text-slate-900">AEA Freios</strong> representa a evolução perfeita: a
              tradição da mecânica aliada à precisão da eletrônica.
            </p>
            <p>
              Hoje somos reconhecidos nacionalmente como{' '}
              <strong className="text-slate-900 bg-blue-50 px-2 py-0.5 rounded">uma das 3 empresas no Brasil</strong>{' '}
              especializadas em reparos avançados de módulos ABS. Nossa metodologia combina diagnóstico de alta
              tecnologia com a experiência de quem conhece cada parafuso de um caminhão.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="flex flex-col items-center p-6 bg-slate-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-100"
                >
                  <div className={`${v.iconWrapper} p-3 rounded-full mb-4 ${v.iconColor}`}>
                    <Icon width={28} height={28} />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase mb-1">{v.title}</h4>
                  <p className="text-slate-500 text-xs">{v.subtitle}</p>
                </div>
              );
            })}
          </div>
          <div className="relative max-w-2xl mx-auto">
            <Quote className="lucide lucide-quote absolute -top-6 -left-8 text-slate-200 w-16 h-16 rotate-180 opacity-50" />
            <div className="relative py-4">
              <p className="text-xl md:text-2xl font-medium text-slate-800 italic leading-relaxed font-serif">
                "Trabalhar com a mente, não apenas com as mãos. A tecnologia não substituiu a mecânica, ela a
                aperfeiçoou. E nós dominamos ambas."
              </p>
            </div>
            <Quote className="lucide lucide-quote absolute -bottom-6 -right-8 text-slate-200 w-16 h-16 opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
}
