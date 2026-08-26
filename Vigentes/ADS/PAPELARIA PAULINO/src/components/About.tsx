import { Award, Users, Heart, TrendingUp } from 'lucide-react';

const cards = [
  {
    Icon: Award,
    title: 'Tradição',
    desc: 'Mais de 85 anos de experiência no mercado de papelaria',
    gradient: 'from-[rgb(61,61,147)] to-[rgb(81,81,187)]',
    descColor: 'text-blue-100',
  },
  {
    Icon: Users,
    title: 'Atendimento',
    desc: 'Equipe especializada e atenciosa para melhor atendê-lo',
    gradient: 'from-[rgb(237,48,54)] to-[rgb(217,28,34)]',
    descColor: 'text-red-100',
  },
  {
    Icon: Heart,
    title: 'Confiança',
    desc: 'Clientes satisfeitos que voltam sempre',
    gradient: 'from-[rgb(61,61,147)] to-[rgb(81,81,187)]',
    descColor: 'text-blue-100',
  },
  {
    Icon: TrendingUp,
    title: 'Qualidade',
    desc: 'Produtos das melhores marcas com preços justos',
    gradient: 'from-[rgb(237,48,54)] to-[rgb(217,28,34)]',
    descColor: 'text-red-100',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Tradição e Confiança desde 1940
          </h2>
          <div className="w-24 h-1 bg-[rgb(237,48,54)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A Papelaria Paulino é referência em Campinas há mais de oito décadas
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159519/back-to-school-paper-colored-paper-stationery-159519.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Papelaria Paulino"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(61,61,147)] text-white p-8 rounded-2xl shadow-2xl">
              <p className="text-sm font-semibold mb-1">Fundada em</p>
              <p className="text-4xl font-bold">1940</p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Mais de 85 Anos Atendendo Campinas</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              A Papelaria Paulino LTDA está localizada no coração de Campinas - SP e atua no segmento
              de comércio varejista de artigos de papelaria desde 1940. Oferecemos uma ampla gama de
              produtos, incluindo materiais escolares, suprimentos de escritório e artigos para
              empresas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa missão é atender clientes residenciais e empresariais com produtos de alta
              qualidade e um atendimento diferenciado. Trabalhamos com vendas presenciais, por
              WhatsApp, telefone e Instagram, disponibilizando ainda serviços de entrega rápida na
              região de Campinas.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Buscamos proporcionar uma experiência completa ao cliente, seja para atender demandas
              corporativas ou para encontrar materiais escolares.
            </p>
            <a
              href="#contato"
              className="inline-block bg-[rgb(237,48,54)] text-white px-8 py-4 rounded-lg hover:bg-[rgb(217,28,34)] transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              Entre em Contato
            </a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, desc, gradient, descColor }) => (
            <div
              key={title}
              className={`bg-gradient-to-br ${gradient} text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                <Icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <p className={descColor}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
