import { Star } from 'lucide-react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '27K+', label: 'Seguidores em 40 dias' },
  { value: '60', label: 'Dias de operação' },
  { value: '5.0', label: 'Avaliação Google' },
  { value: '100%', label: 'Feito na hora' },
];

interface Depoimento {
  initial: string;
  name: string;
  meta: string;
  when: string;
  text: string;
}

const depoimentos: Depoimento[] = [
  {
    initial: 'R',
    name: 'Ryan Silva',
    meta: 'Local Guide • 14 avaliações • 76 fotos',
    when: '3 meses atrás',
    text: 'Eu conheci a BM boutique das linguiças pelo tiktok e assim que fui pra Goiânia pedi para entregar em casa, a linguiça é uma delícia, eu pedi suína com bacon e outra de frango e pequi e queijo coalho, tem um monte de combinação que dá para fazer, recomendo 10/10',
  },
  {
    initial: 'F',
    name: 'Fernando Carvalho',
    meta: 'Local Guide • 24 avaliações • 49 fotos',
    when: 'um ano atrás',
    text: 'Excelente ambiente, limpo e bem organizado. Todos os insumos são frescos e o atendimento é sensacional!',
  },
  {
    initial: 'C',
    name: 'Cristiane Morais',
    meta: 'Local Guide • 35 avaliações • 9 fotos',
    when: 'um ano atrás',
    text: 'Excelente atendimento, ótima qualidade dos produtos. Muito bom a opção de poder variar os sabores. Deliciosa. Vc pode acompanhar a montagem',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-slate-100 py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-black text-black mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Avaliações reais do Google. Qualidade comprovada por quem já experimentou.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-md">
              <div className="text-4xl lg:text-5xl font-black text-[rgb(242,51,52)] mb-2">{stat.value}</div>
              <div className="text-sm lg:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((dep) => (
            <div
              key={dep.name}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[rgb(242,51,52)] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{dep.initial}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-black text-base">{dep.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{dep.meta}</div>
                    <div className="text-xs text-gray-400 mt-1">{dep.when}</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm lg:text-base text-gray-700 leading-relaxed">{dep.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
