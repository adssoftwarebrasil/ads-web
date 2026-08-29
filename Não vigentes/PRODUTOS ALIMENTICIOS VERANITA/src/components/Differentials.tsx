import { Award, MapPin, Package, DollarSign, Handshake, TrendingUp } from 'lucide-react';
import type { ReactNode } from 'react';

interface Differential {
  icon: ReactNode;
  wrapStyle?: React.CSSProperties;
  title: string;
  text: string;
}

const differentials: Differential[] = [
  {
    icon: (
      <Award className="lucide lucide-award w-8 h-8" style={{ color: 'rgb(238, 29, 35)' }} />
    ),
    title: 'Tradição e Experiência',
    text: 'Quase 50 anos de mercado desde 1976, consolidando nossa expertise no segmento alimentício',
  },
  {
    icon: (
      <MapPin className="lucide lucide-map-pin w-8 h-8" style={{ color: 'rgb(0, 173, 239)' }} />
    ),
    title: 'Produtos Regionais',
    text: 'Fabricados na região com forte identidade local, garantindo frescor e qualidade superior',
  },
  {
    icon: (
      <Package className="lucide lucide-package w-8 h-8" style={{ color: 'rgb(46, 49, 146)' }} />
    ),
    title: 'Linha Completa',
    text: 'Mix variado de especiarias, temperos, molhos, farofas e pipocas para facilitar seu negócio',
  },
  {
    icon: (
      <DollarSign className="lucide lucide-dollar-sign w-8 h-8" style={{ color: 'rgb(46, 49, 146)' }} />
    ),
    wrapStyle: { backgroundColor: 'rgb(253, 241, 0)' },
    title: 'Melhor Custo-Benefício',
    text: 'Qualidade consistente aliada a preços competitivos para maximizar sua margem de lucro',
  },
  {
    icon: (
      <Handshake className="lucide lucide-handshake w-8 h-8" style={{ color: 'rgb(0, 173, 239)' }} />
    ),
    title: 'Atendimento Personalizado',
    text: 'Relacionamento próximo e de longo prazo, com atendimento dedicado às suas necessidades',
  },
  {
    icon: (
      <TrendingUp className="lucide lucide-trending-up w-8 h-8" style={{ color: 'rgb(238, 29, 35)' }} />
    ),
    title: 'Presença Consolidada',
    text: 'Presente em grande parte das redes de supermercados da região de Ribeirão Preto',
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Por que Escolher a <span className="text-[rgb(0,173,239)]">Veranita</span>?
          </h2>
          <p className="text-lg text-gray-600">
            Conheça os diferenciais que fazem da Veranita a escolha certa para o seu negócio
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                style={item.wrapStyle}
              >
                {item.icon}
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[rgb(0,173,239)] to-[rgb(46,49,146)] rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl lg:text-4xl font-bold mb-4">
            Pronto para Levar Mais Sabor ao Seu Negócio?
          </h3>
          <p className="text-lg mb-8 opacity-90">
            Entre em contato e descubra como a Veranita pode agregar valor ao seu mix de produtos
          </p>
          <a
            href="http://wa.me/5516997516375"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[rgb(0,173,239)] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Fale com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
