import { Award, TrendingUp, Heart, Shield } from 'lucide-react';

const cards = [
  {
    Icon: Award,
    title: 'Experiência Comprovada',
    text: 'Mais de três décadas atendendo clientes com excelência e dedicação',
    border: 'border-[rgb(212,171,85)]',
    iconBg: 'bg-[rgb(212,171,85)]/10',
    iconColor: 'text-[rgb(212,171,85)]',
  },
  {
    Icon: TrendingUp,
    title: 'Diversidade de Produtos',
    text: 'Todas as marcas e modelos, do clássico ao contemporâneo',
    border: 'border-[rgb(45,45,45)]',
    iconBg: 'bg-[rgb(45,45,45)]/10',
    iconColor: 'text-[rgb(45,45,45)]',
  },
  {
    Icon: Heart,
    title: 'Atendimento Humanizado',
    text: 'Equipe especializada pronta para ajudar na escolha ideal',
    border: 'border-[rgb(226,31,22)]',
    iconBg: 'bg-[rgb(226,31,22)]/10',
    iconColor: 'text-[rgb(226,31,22)]',
  },
  {
    Icon: Shield,
    title: 'Qualidade Garantida',
    text: 'Produtos selecionados com rigor para sua total satisfação',
    border: 'border-[rgb(212,171,85)]',
    iconBg: 'bg-[rgb(212,171,85)]/10',
    iconColor: 'text-[rgb(212,171,85)]',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-[rgb(212,171,85)]/10 px-4 py-2 rounded-full mb-4">
            <Award width={20} height={20} className="text-[rgb(212,171,85)]" />
            <span className="text-sm font-semibold text-[rgb(45,45,45)]">Nossa História</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            31 Anos Transformando <span className="text-[rgb(212,171,85)]">Ambientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Referência em Goiânia, nossa trajetória é marcada pela excelência e inovação
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              A <strong className="text-[rgb(45,45,45)]">Quase Tudo Shopping dos Puxadores</strong> é uma loja especializada em artigos domésticos, com um foco particular em puxadores e decorações que transformam ambientes.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Com <strong className="text-[rgb(212,171,85)]">31 anos de história</strong>, iniciamos nossa jornada como especialistas em puxadores para portas de passagem e móveis, trabalhando com todas as marcas do mercado. Com o tempo e crescimento natural, expandimos nossa atuação para o segmento de decorações para casa, oferecendo peças que vão muito além do funcional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nossa coleção inclui desde modelos clássicos até contemporâneos, garantindo que há algo para todos os gostos. Cada produto é cuidadosamente selecionado para agregar <strong className="text-[rgb(45,45,45)]">elegância e charme</strong> aos ambientes.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fexpositor-puxadores-cartaz.webp"
              alt="Expositor de puxadores"
              className="rounded-2xl shadow-xl w-full h-64 object-cover"
            />
            <img
              src="https://storage.lucasmendes.dev/site-sp/Quase%20Tudo%2Fgaleria%2Fmostruario-puxadores-portas.webp"
              alt="Mostruário de puxadores"
              className="rounded-2xl shadow-xl w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map(({ Icon, title, text, border, iconBg, iconColor }) => (
            <div
              key={title}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 ${border}`}
            >
              <div className={`${iconBg} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                <Icon width={32} height={32} className={iconColor} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
