import { Award, Target, Users } from 'lucide-react';

const cards = [
  { Icon: Award, title: 'Qualidade', text: 'Peças originais e similares das melhores marcas' },
  { Icon: Target, title: 'Pontualidade', text: 'Entrega rápida e eficiente em toda região' },
  { Icon: Users, title: 'Equipe', text: 'Profissionais qualificados e experientes' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/megga%20auto%20pecas/img/fachada-loja-autopecas=megga.webp"
                alt="Fachada Megga Auto Peças"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[rgb(216,32,38)] text-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="text-4xl font-bold">13</div>
              <div className="text-sm">Anos de História</div>
            </div>
          </div>
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-[rgb(216,32,38)]/10 text-[rgb(216,32,38)] rounded-full text-sm font-semibold">
              Sobre Nós
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(28,58,122)] mb-6 leading-tight">
              Uma História de Dedicação e Sucesso
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Fundada em <strong>2012</strong> por um jovem empreendedor com visão e
              determinação, a <strong>Megga Auto Peças</strong> nasceu do sonho de
              oferecer soluções de qualidade para o mercado de veículos pesados.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Ao longo de <strong>13 anos</strong>, consolidamos nossa presença em{' '}
              <strong>Sergipe e Alagoas</strong>, tornando-nos referência na
              distribuição de peças para caminhões, ônibus, picapes, vans e máquinas.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Trabalhamos com <strong>ética, responsabilidade e transparência</strong>,
              estabelecendo parcerias sólidas com as principais marcas do mercado e
              oferecendo um atendimento diferenciado que supera as expectativas dos
              nossos clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {cards.map(({ Icon, title, text }) => (
                <div
                  key={title}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-[rgb(216,32,38)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[rgb(216,32,38)]" />
                  </div>
                  <h3 className="font-bold text-[rgb(28,58,122)] mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
