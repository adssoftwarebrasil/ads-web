import { CheckCircle2, Building2, Lightbulb, Users } from 'lucide-react';

const cards = [
  {
    Icon: Building2,
    iconClass: 'lucide lucide-building2',
    title: 'Mercado da Construção',
    desc: 'Atuamos há mais de 10 anos no setor, com gestão profissional que acompanha você desde a locação até o uso em obra.',
  },
  {
    Icon: Lightbulb,
    iconClass: 'lucide lucide-lightbulb',
    title: 'Inovação Constante',
    desc: 'Processos modernos e equipamentos revisados para garantir que sua obra não pare por falhas técnicas.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users',
    title: 'Equipe Especializada',
    desc: 'Suporte técnico formado por profissionais capacitados para atender qualquer demanda com agilidade.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(13,133,77)] font-semibold tracking-wider uppercase text-sm">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(63,59,116)] mt-2 mb-4">
            Por Que Escolher a AmazonLoc?
          </h2>
          <p className="text-lg text-gray-600">
            Unimos tradição e tecnologia para oferecer a melhor experiência em locação de
            equipamentos do Mato Grosso.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.lucasmendes.dev/site-sp/amazon%20loc%2Fimg%2Fobra-equipamentos-trabalhadores.png"
                alt="Equipe AmazonLoc em obra"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="hidden md:flex absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl items-center gap-4 border-l-4 border-[rgb(13,133,77)]">
              <div className="bg-[rgb(13,133,77)]/10 p-3 rounded-full">
                <CheckCircle2 className="lucide lucide-check-circle2 w-8 h-8 text-[rgb(13,133,77)]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">10+ Anos</p>
                <p className="text-sm text-gray-500">De experiência</p>
              </div>
            </div>
          </div>
          <div className="order-2 space-y-6">
            {cards.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col sm:flex-row items-start gap-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-[rgb(13,133,77)]/30"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(13,133,77)]/10 flex items-center justify-center group-hover:bg-[rgb(13,133,77)] transition-colors duration-300">
                    <c.Icon
                      className={`${c.iconClass} w-6 h-6 text-[rgb(13,133,77)] group-hover:text-white transition-colors duration-300`}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[rgb(13,133,77)] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
