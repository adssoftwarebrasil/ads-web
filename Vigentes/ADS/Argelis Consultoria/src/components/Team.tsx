import { Linkedin, GraduationCap, Globe, Award, Quote } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Member {
  initials: string;
  name: string;
  role: string;
  area: string;
  bio: string;
  tags: { icon: LucideIcon; label: string }[];
  quote: string;
}

const members: Member[] = [
  {
    initials: 'MA',
    name: 'Marco A. Argenton',
    role: 'Sócio-Diretor',
    area: 'Finanças & Estratégia',
    bio: 'Mestre em Administração pela USP, pós-graduado pela FIA e especialização internacional na Suécia. Ex-executivo de grandes corporações como Banco Real e Serasa Experian.',
    tags: [
      { icon: GraduationCap, label: 'Mestre USP' },
      { icon: Globe, label: 'Internacional' },
      { icon: Award, label: 'Professor' },
    ],
    quote: '"Transformamos números complexos em decisões simples e lucrativas."',
  },
  {
    initials: 'BF',
    name: 'Bruno T. Fidelis',
    role: 'Sócio-Diretor',
    area: 'Operações & Processos',
    bio: 'Mestre em Engenharia de Produção pela Unesp. 13 anos de experiência no setor industrial. Consultor credenciado ApexBrasil e Professor universitário de Logística.',
    tags: [
      { icon: GraduationCap, label: 'Mestre Unesp' },
      { icon: Globe, label: '13 Anos Indústria' },
      { icon: Award, label: 'Consultor Apex' },
    ],
    quote: '"A eficiência operacional é o motor invisível do crescimento sustentável."',
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl translate-y-1/2"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[rgb(64,102,215)] font-semibold tracking-wider text-sm uppercase mb-3 block">Liderança</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Nossos Especialistas</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Unimos o rigor acadêmico com a prática de mercado para entregar resultados reais.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {members.map((m) => (
            <div
              key={m.name}
              className="group relative bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[rgb(64,102,215)] to-[rgb(62,215,252)]"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)] p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center border-4 border-transparent bg-clip-padding">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[rgb(64,102,215)] to-[rgb(62,215,252)]">
                        {m.initials}
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-white p-1.5 rounded-full shadow-md border border-gray-100">
                    <Linkedin width={20} height={20} className="text-[#0077b5]" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[rgb(64,102,215)] transition-colors">
                    {m.name}
                  </h3>
                  <p className="text-[rgb(64,102,215)] font-semibold mb-1">{m.role}</p>
                  <p className="text-sm text-gray-500 font-medium bg-gray-100 inline-block px-2 py-1 rounded">{m.area}</p>
                </div>
              </div>
              <div className="mb-6 flex-grow">
                <p className="text-gray-600 leading-relaxed">{m.bio}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-8">
                {m.tags.map((t) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[rgb(64,102,215)] rounded-lg text-xs font-bold uppercase tracking-wide border border-blue-100"
                    >
                      <Icon width={14} height={14} />
                      {t.label}
                    </span>
                  );
                })}
              </div>
              <div className="relative bg-gray-50 rounded-xl p-5 border border-gray-100 mt-auto group-hover:bg-blue-50/50 transition-colors">
                <Quote
                  width={48}
                  height={48}
                  className="absolute top-4 left-4 text-[rgb(62,215,252)]/20 transform -scale-x-100"
                />
                <p className="relative z-10 text-gray-600 italic text-sm text-center font-medium">{m.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
