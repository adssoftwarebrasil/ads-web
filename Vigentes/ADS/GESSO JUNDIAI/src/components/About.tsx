import { TrendingUp, Headphones, ShieldCheck, ThumbsUp } from './icons';

const badges = [
  { value: '2021', label: 'Fundação' },
  { value: '30+', label: 'Produtos' },
  { value: '6', label: 'Cidades' },
];

const features = [
  {
    Icon: TrendingUp,
    title: 'Melhores Preços',
    text: 'Trabalhamos com preços competitivos para que você tenha mais margem em cada obra.',
  },
  {
    Icon: Headphones,
    title: 'Atendimento Especializado',
    text: 'Auxiliamos nossos clientes na escolha dos materiais certos para cada projeto.',
  },
  {
    Icon: ShieldCheck,
    title: 'Produtos de Qualidade',
    text: 'Comercializamos apenas materiais de procedência garantida e alta durabilidade.',
  },
  {
    Icon: ThumbsUp,
    title: 'Experiência no Mercado',
    text: 'Desde 2021 atendendo gesseiros e construtores em Jundiaí e região com dedicação.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="bg-gray-950 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-[#EE1E23] font-semibold text-sm uppercase tracking-widest mb-3">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Entregando o Melhor<span className="text-[#EE1E23] block">Desde 2021</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              A Gesso Jundiaí surgiu em julho de 2021 com um propósito claro: oferecer os melhores
              materiais para gesso e drywall com preços justos e atendimento de qualidade.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Somos distribuidores especializados — fazemos exclusivamente a venda de materiais — e
              estamos sempre prontos para ajudar nossos clientes a encontrar o produto certo para
              cada necessidade.
            </p>
            <div className="flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="bg-gray-900 border border-gray-800 rounded-2xl px-6 py-4 text-center"
                >
                  <div className="text-3xl font-black text-[#EE1E23]">{badge.value}</div>
                  <div className="text-gray-500 text-sm mt-1">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[440px]">
            <div className="rounded-3xl overflow-hidden row-span-2">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Placa%20st.webp"
                alt="Placa Drywall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl overflow-hidden bg-gray-900 flex items-center justify-center">
              <img
                src="https://storage.lucasmendes.dev/site-sp/Gesso%20Jundiai/Guia%20Drywall.webp"
                alt="Guia Drywall"
                className="w-full h-full object-contain p-6"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl bg-[#EE1E23] flex items-center justify-center p-6">
              <div className="text-center">
                <div className="text-5xl font-black text-white">3+</div>
                <div className="text-white/80 font-medium mt-1">
                  Anos servindo<br />Jundiaí
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-[#EE1E23]/40 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EE1E23]/10 flex items-center justify-center mb-4 group-hover:bg-[#EE1E23]/20 transition-colors">
                <Icon size={24} className="text-[#EE1E23]" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
