import { Award, Users, TrendingUp, MapPin } from 'lucide-react';

const stats = [
  { icon: Award, iconClass: 'lucide lucide-award', value: '8+', label: 'Anos de Mercado', delay: '0s' },
  { icon: Users, iconClass: 'lucide lucide-users', value: '500+', label: 'Clientes Atendidos', delay: '0.1s' },
  {
    icon: TrendingUp,
    iconClass: 'lucide lucide-trending-up',
    value: '5.000+',
    label: 'Produtos em Estoque',
    delay: '0.2s',
  },
  { icon: MapPin, iconClass: 'lucide lucide-map-pin', value: '1', label: 'Showroom Completo', delay: '0.3s' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-[#239110]/10 text-[#239110] px-4 py-2 rounded-full text-sm font-semibold mb-6 in-view">
              <Award className="lucide lucide-award" width={14} height={14} />
              Nossa História
            </div>
            <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-black text-[#010101] leading-tight mb-6 in-view">
              Especialistas em <span className="text-[#239110]">Iluminação LED</span> há mais de 8
              anos
            </h2>
            <p className="animate-on-scroll text-gray-600 text-lg leading-relaxed mb-6 in-view">
              A Caldense LED surgiu de um mercado em ascensão dentro da construção civil, com o
              objetivo de oferecer soluções inovadoras e acessíveis em iluminação para Poços de
              Caldas e toda a região.
            </p>
            <p className="animate-on-scroll text-gray-600 leading-relaxed mb-8 in-view">
              Desde a nossa abertura, nos dedicamos a proporcionar eficiência energética,
              durabilidade e design contemporâneo. Nosso showroom permite que você veja e escolha
              pessoalmente o produto ideal para o seu projeto, com orientação técnica de
              especialistas que entendem cada detalhe da sua necessidade.
            </p>
            <div className="animate-on-scroll flex flex-wrap gap-3 in-view">
              <span className="bg-[#010101] text-white px-4 py-2 rounded-full text-sm font-medium">
                Residencial
              </span>
              <span className="bg-[#239110] text-white px-4 py-2 rounded-full text-sm font-medium">
                Comercial
              </span>
              <span className="bg-[#F9AA0C] text-[#010101] px-4 py-2 rounded-full text-sm font-medium">
                Industrial
              </span>
              <span className="border-2 border-[#239110] text-[#239110] px-4 py-2 rounded-full text-sm font-medium">
                Decorativo
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="animate-on-scroll relative rounded-2xl overflow-hidden shadow-2xl in-view">
              <img
                src="https://storage.lucasmendes.dev/site-sp/caldense%20led/img/fachada-loja-iluminacao-placa-queima-de-estoque_1280x575.webp"
                alt="Fachada da Caldense LED Iluminação"
                className="w-full h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-lg">Caldense LED Iluminação</p>
                <p className="text-white/70 text-sm">
                  R. Cel. Virgílio Silva, 1294 - Poços de Caldas - MG
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-[#F9AA0C] text-[#010101] rounded-2xl p-4 shadow-xl animate-on-scroll in-view">
              <p className="text-3xl font-black">8+</p>
              <p className="text-xs font-semibold">
                Anos de
                <br />
                experiência
              </p>
            </div>
          </div>
        </div>
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="animate-on-scroll text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#239110]/30 hover:shadow-lg transition-all duration-300 group in-view"
                style={{ transitionDelay: stat.delay }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#239110]/10 text-[#239110] rounded-xl mb-4 group-hover:bg-[#239110] group-hover:text-white transition-all duration-300">
                  <Icon className={stat.iconClass} width={20} height={20} />
                </div>
                <p className="text-3xl font-black text-[#010101] mb-1">{stat.value}</p>
                <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
