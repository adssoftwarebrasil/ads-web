import { Heart, Users, TrendingUp, MapPin } from 'lucide-react';

const cards = [
  {
    icon: <Heart className="lucide lucide-heart w-8 h-8 text-[rgb(238,29,35)]" />,
    wrap: 'bg-gradient-to-br from-[rgb(0,173,239)]/10 to-[rgb(0,173,239)]/5 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300',
    title: 'Tradição Familiar',
    text: 'Produtos feitos com carinho e dedicação há quase 5 décadas',
  },
  {
    icon: <Users className="lucide lucide-users w-8 h-8 text-[rgb(46,49,146)]" />,
    wrap: 'bg-gradient-to-br from-[rgb(46,49,146)]/10 to-[rgb(46,49,146)]/5 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 mt-8',
    title: 'Atendimento Personalizado',
    text: 'Relacionamento próximo e de longo prazo com nossos clientes',
  },
  {
    icon: <TrendingUp className="lucide lucide-trending-up w-8 h-8 text-[rgb(0,173,239)]" />,
    wrap: 'bg-gradient-to-br from-[rgb(238,29,35)]/10 to-[rgb(238,29,35)]/5 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300',
    title: 'Crescimento Contínuo',
    text: 'Expansão constante do mix de produtos e presença no mercado',
  },
  {
    icon: <MapPin className="lucide lucide-map-pin w-8 h-8 text-[rgb(238,29,35)]" />,
    wrap: 'bg-gradient-to-br from-[rgb(253,241,0)]/20 to-[rgb(253,241,0)]/10 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 mt-8',
    title: 'Presença Regional',
    text: 'Consolidados em grande parte das redes de supermercados da região',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nossa <span className="text-[rgb(0,173,239)]">História</span>
          </h2>
          <p className="text-lg text-gray-600">
            Quase 50 anos de dedicação, qualidade e compromisso com o sabor das famílias brasileiras
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="bg-[rgb(238,29,35)]/10 text-[rgb(238,29,35)] px-4 py-2 rounded-full text-sm font-semibold">
                Desde 1976
              </span>
            </div>
            <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
              Uma Trajetória de Sabor e Tradição
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              A <strong className="text-[rgb(46,49,146)]">Veranita Produtos Alimentícios</strong> nasceu
              em <strong>1976</strong>, na cidade de <strong>Sertãozinho – SP</strong>, com o objetivo
              de levar mais sabor, qualidade e praticidade à mesa das famílias brasileiras.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Desde o início, atuamos no segmento alimentício, focando na produção e comercialização de
              <strong className="text-[rgb(0,173,239)]"> especiarias, farináceos, temperos e molhos</strong>,
              sempre prezando pela tradição, confiança e excelência dos produtos.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Com quase <strong className="text-[rgb(238,29,35)]">50 anos de mercado</strong>,
              conquistamos a confiança de supermercados, mercearias e restaurantes em toda a região de
              Ribeirão Preto, oferecendo produtos que combinam qualidade superior com preços
              competitivos.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {cards.map((card) => (
              <div key={card.title} className={card.wrap}>
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {card.icon}
                </div>
                <h4 className="font-bold text-xl text-gray-900 mb-2">{card.title}</h4>
                <p className="text-gray-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
