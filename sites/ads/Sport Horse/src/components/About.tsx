import { Sparkles, Award, Users, TrendingUp, Heart } from 'lucide-react';

const stats = [
  { icon: Award, value: '20+', label: 'Anos de experiência', fill: false },
  { icon: Users, value: '500+', label: 'Clientes satisfeitos', fill: false },
  { icon: TrendingUp, value: '1000+', label: 'Produtos em estoque', fill: false },
  { icon: Heart, value: '10+', label: 'Eventos por ano', fill: true },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Sobre Nós
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Quem Somos
            </h2>
            <h3 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent mb-6">
              A C Medeiros Boutique
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A C Medeiros Boutique, com <span className="font-semibold text-gray-900">20 anos de experiência</span>, é a sua referência em produtos e acessórios de hipismo. Atuamos tanto na nossa loja física quanto em eventos e competições aos fins de semana, oferecendo uma gama ampla de produtos para atender a diferentes faixas etárias de nossos clientes, de 4 a 60 anos.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Nosso compromisso é entregar <span className="font-semibold text-gray-900">qualidade e um atendimento excepcional</span>, sempre buscando proporcionar a melhor experiência de compra para apaixonados por equitação.
              </p>
            </div>
            <a
              href="https://wa.me/5516991729461"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-105"
            >
              Enviar WhatsApp
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="group bg-white hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emerald-200"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon
                      size={32}
                      className="text-emerald-600"
                      fill={stat.fill ? 'currentColor' : 'none'}
                    />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
