import { Award, Users, TrendingUp, Heart } from 'lucide-react';

const highlights = [
  { icon: Award, title: '12 Anos', desc: 'de Experiência no Mercado' },
  { icon: Users, title: 'Atendimento', desc: 'Personalizado e Dedicado' },
  { icon: TrendingUp, title: 'Crescimento', desc: 'Constante e Sustentável' },
  { icon: Heart, title: 'Dedicação', desc: 'Total aos Nossos Clientes' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-[rgb(255,254,252)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[rgb(16,14,13)] mb-4">
            Sobre a <span className="text-[rgb(202,25,27)]">Costa Leste</span>
          </h2>
          <div className="w-24 h-1 bg-[rgb(202,25,27)] mx-auto mb-6"></div>
          <p className="text-xl text-[rgb(16,14,13)]/70 max-w-3xl mx-auto">
            Uma história de crescimento e dedicação ao cliente
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-[rgb(16,14,13)]/80 leading-relaxed">
              A <strong className="text-[rgb(202,25,27)]">Locadora Costa Leste</strong> surgiu com
              apenas 02 veículos, alugando somente para conhecidos. Em apenas 01 ano, já estávamos
              atendendo turistas de todo o Brasil e do mundo.
            </p>
            <p className="text-lg text-[rgb(16,14,13)]/80 leading-relaxed">
              Somos uma locadora de carros em Fortaleza com{' '}
              <strong className="text-[rgb(202,25,27)]">12 anos de experiência</strong> no mercado.
              Sempre procuramos atender nossos clientes com excelência, oferecendo carros novos e
              revisados.
            </p>
            <p className="text-lg text-[rgb(16,14,13)]/80 leading-relaxed">
              Trabalhamos principalmente como <strong>rent a car para turistas</strong>, com o
              diferencial de entregarmos o carro nos hotéis, no aeroporto ou em nossa locadora na
              Meireles.
            </p>
            <p className="text-lg text-[rgb(16,14,13)]/80 leading-relaxed">
              Se você precisa de{' '}
              <strong className="text-[rgb(202,25,27)]">carro na Meireles para locação</strong>,
              temos as melhores opções disponíveis e um atendimento que faz a diferença.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/locadora%20costa%20leste%2Fimg%2Fclientes-satisfeitos.webp"
              alt="Atendimento ao cliente"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-[rgb(16,14,13)] text-[rgb(255,254,252)] p-6 rounded-xl shadow-xl">
              <p className="text-3xl font-bold text-[rgb(202,25,27)]">1000+</p>
              <p className="text-sm font-medium">Clientes Satisfeitos</p>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[rgb(202,25,27)]/10 rounded-full mb-4">
                <item.icon size={32} className="text-[rgb(202,25,27)]" />
              </div>
              <h3 className="text-xl font-bold text-[rgb(16,14,13)] mb-2">{item.title}</h3>
              <p className="text-[rgb(16,14,13)]/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
