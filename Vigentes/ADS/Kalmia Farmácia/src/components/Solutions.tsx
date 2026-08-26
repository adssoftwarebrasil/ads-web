import { ArrowRight } from 'lucide-react';

interface Solution {
  badge: string;
  title: string;
  desc: string;
  img: string;
}

const solutions: Solution[] = [
  {
    badge: 'Imunidade',
    title: 'Proteja seu organismo todos os dias',
    desc: 'Imuno TF e outras fórmulas imunológicas para blindar sua saúde no dia a dia.',
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=kalmia%20farmacia%2Falteracoes%2Fimgi_80_493891984_1219643893495438_6632302996327453966_n.jpg&version_id=null',
  },
  {
    badge: 'Saúde Mental',
    title: 'Equilíbrio mental com fórmulas naturais',
    desc: 'Fitoterápicos e nutracêuticos para ansiedade, foco e bem-estar emocional.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/cerebro-lavanda-capsulas-equilibrio-saude-mental_1080x1080.webp',
  },
  {
    badge: 'Emagrecimento',
    title: 'Apoio inteligente ao seu peso saudável',
    desc: 'Metabody e fórmulas termogênicas manipuladas para potencializar seus resultados.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/mulher-feliz-metabody-auxilio-gerenciamento-peso_1080x1080.webp',
  },
  {
    badge: 'Veterinária',
    title: 'Saúde e alegria para seu pet',
    desc: 'Fórmulas veterinárias personalizadas para cães e gatos com máxima segurança.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/cachorro-feliz-correndo-bacteria-bio-arct_1080x1080.webp',
  },
  {
    badge: 'Pet Performance',
    title: 'Vitalidade e cuidado para cães ativos',
    desc: 'Suplementação especializada para pets com mais energia, mobilidade e saúde.',
    img: 'https://storage.lucasmendes.dev/site-sp/kalmia%20farmacia/img/campanha-veterinaria-caes-correndo-roupas-esportivas_1080x1080.webp',
  },
  {
    badge: 'Pele do Pet',
    title: 'Alívio das alergias do seu pet',
    desc: 'Physavie e outras soluções antiinflamatórias e antialérgicas para felinos.',
    img: 'https://storage-admin.lucasmendes.dev/api/v1/buckets/site-sp/objects/download?preview=true&prefix=kalmia%20farmacia%2Falteracoes%2Fimgi_41_628004300_1462934829166342_1335796002764069571_n.jpg&version_id=null',
  },
];

export default function Solutions() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-green uppercase tracking-widest mb-4">
            Soluções em destaque
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Fórmulas que <span className="text-primary">transformam vidas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Da imunidade ao emagrecimento, da saúde mental ao cuidado dos pets — temos a fórmula certa para cada
            necessidade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-on-scroll bg-white"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  {s.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <a
                  href="http://wa.me/5516991594153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                >
                  Saber mais <ArrowRight size={15} className="lucide lucide-arrow-right" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
