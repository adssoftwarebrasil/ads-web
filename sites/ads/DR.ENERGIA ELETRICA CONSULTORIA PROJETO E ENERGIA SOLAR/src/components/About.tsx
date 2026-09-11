import { CheckCircle2 } from 'lucide-react';

const values = [
  'Respeito e ética em cada etapa',
  'Segurança acima de tudo',
  'Qualidade em materiais e serviços',
  'Compromisso com prazos',
  'Responsabilidade socioeconômica',
  'Honestidade e transparência',
];

const team = [
  'Engenheiro Eletricista',
  'Técnico em Eletrotécnica',
  'Técnico em Segurança',
  'Eletricista de Alta e Baixa Tensão',
  'Equipe Comercial Dedicada',
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="https://storage.lucasmendes.dev/site-sp/dr%20engenharia%20eletrica/img/fachada-cinza-dr-eletrica-energia-palmeiras_1600x1200.webp"
                  alt="Sede da Dr. Energia Elétrica em Sinop"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand-red rounded-2xl p-6 shadow-2xl hidden sm:block">
                <p className="text-white font-extrabold text-4xl leading-none">2020</p>
                <p className="text-white/80 text-sm mt-1">Fundação</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-brand-darkgray border border-white/10 rounded-2xl p-5 shadow-2xl hidden sm:block">
                <p className="text-brand-white font-bold text-2xl">5+</p>
                <p className="text-brand-white/60 text-xs mt-0.5">anos no mercado</p>
              </div>
            </div>
            <div>
              <span className="inline-block bg-brand-red/15 border border-brand-red/30 text-brand-red text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Nossa História
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-white leading-tight mb-6">
                Energia, paixão e <span className="text-brand-red">compromisso</span> desde o
                primeiro dia
              </h2>
              <div className="space-y-4 text-brand-white/65 text-base leading-relaxed">
                <p>
                  A Dr. Energia Elétrica nasceu da união de histórias e sonhos de
                  profissionais apaixonados pelo setor elétrico. Fundada em{' '}
                  <strong className="text-brand-white/90">10 de março de 2020</strong>, a
                  empresa foi criada para oferecer muito mais do que serviços — para
                  oferecer soluções com alma, construídas sobre valores sólidos.
                </p>
                <p>
                  Sonhamos com uma empresa que fosse reflexo do que acreditamos: assistência
                  de verdade, orientação técnica de qualidade e o melhor custo-benefício do
                  mercado, para que nossos clientes façam o melhor investimento possível.
                </p>
                <p>
                  Nossa missão é servir com excelência e paixão, atuando de forma
                  estruturada, eficiente e íntegra. Queremos ser a{' '}
                  <strong className="text-brand-white/90">
                    referência em engenharia elétrica
                  </strong>{' '}
                  no Norte de Mato Grosso.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                    Nossos Valores
                  </p>
                  <ul className="space-y-2">
                    {values.map((value) => (
                      <li
                        key={value}
                        className="flex items-start gap-2 text-sm text-brand-white/70"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand-red mt-0.5 flex-shrink-0"
                        />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-brand-white/50 text-xs uppercase tracking-widest font-semibold mb-3">
                    Nossa Equipe
                  </p>
                  <ul className="space-y-2">
                    {team.map((member) => (
                      <li
                        key={member}
                        className="flex items-start gap-2 text-sm text-brand-white/70"
                      >
                        <CheckCircle2
                          size={15}
                          className="text-brand-red mt-0.5 flex-shrink-0"
                        />
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
