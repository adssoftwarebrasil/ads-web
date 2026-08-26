import { Heart, Users, Award, Sparkles } from 'lucide-react';

const stats = [
  { icon: Heart, value: '16+', label: 'Anos de Paixão' },
  { icon: Users, value: '5000+', label: 'Clientes Satisfeitos' },
  { icon: Award, value: '100%', label: 'Qualidade Garantida' },
  { icon: Sparkles, value: '500+', label: 'Variedades' },
];

const differentials = [
  {
    number: '1',
    color: 'rgb(22, 126, 79)',
    title: 'Especialização em Orquídeas',
    text: 'Conhecimento profundo e paixão por orquídeas. Nossa equipe é treinada para oferecer as melhores orientações de cultivo e manutenção.',
  },
  {
    number: '2',
    color: 'rgb(163, 206, 15)',
    title: 'Atendimento Personalizado',
    text: 'Cada cliente é único. Oferecemos consultoria especializada para escolher as plantas perfeitas para seu espaço e necessidades.',
  },
  {
    number: '3',
    color: 'rgb(227, 97, 222)',
    title: 'Entrega Rápida',
    text: 'Garantimos que suas plantas cheguem com segurança e rapidez, mantendo toda a qualidade e frescor que você merece.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/orquidario%20orquidea%2Fatualizadas%2Fsobre-nos.webp"
              alt="Orquídeas no orquidário"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(22,126,79)] text-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold mb-2">16+ Anos</p>
              <p className="text-lg">de experiência e dedicação</p>
            </div>
          </div>
          <div>
            <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Nossa História
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              De um Hobby a Referência em<span className="text-[rgb(22,126,79)]"> Orquídeas</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Há 16 anos no mercado de orquídeas, somos referência no segmento, com atuação em feiras
              por todo o Brasil. Contamos com uma loja física ampla, com mais de 500m² e milhares de
              exemplares à venda, incluindo orquídeas nacionais e importadas. Ao longo do ano,
              realizamos festivais exclusivos na loja, reforçando nossa tradição e autoridade no
              mercado.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <Icon className="w-8 h-8 text-[rgb(22,126,79)] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-[rgb(22,126,79)] font-semibold text-sm uppercase tracking-wider mb-3 block">
              Por que nos escolher
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              O que nos torna únicos e a melhor escolha para suas orquídeas e plantas ornamentais
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 hover:-translate-y-2"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold"
                  style={{ backgroundColor: item.color }}
                >
                  {item.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
