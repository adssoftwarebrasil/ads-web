import { AlertCircle, TrendingDown, HelpCircle } from 'lucide-react';

export default function ProblemsSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const problems = [
    {
      icon: TrendingDown,
      title: 'Com uma fachada desgastada',
      description: 'Passa uma imagem de descuido e falta de manutenção'
    },
    {
      icon: AlertCircle,
      title: 'Com um letreiro apagado',
      description: 'Invisível à noite e sem impacto visual durante o dia'
    },
    {
      icon: HelpCircle,
      title: 'Com uma comunicação confusa',
      description: 'Dificulta a identificação e afasta potenciais clientes'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[rgb(254,254,254)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(11,9,48)] mb-6">
            Como está sua<br />
            <span className="text-[rgb(255,204,44)]">Comunicação Visual?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-[rgb(212,212,212)] hover:border-[rgb(255,204,44)]"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[rgb(11,9,48)]/5 rounded-full group-hover:bg-[rgb(255,204,44)]/10 transition-colors duration-300">
                  <problem.icon className="text-[rgb(11,9,48)] group-hover:text-[rgb(255,204,44)] transition-colors duration-300" size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-[rgb(11,9,48)] mb-4 text-center">
                {problem.title}
              </h3>
              <p className="text-[rgb(30,30,30)] text-center leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(11,9,48)] rounded-2xl p-8 md:p-12 text-center">
          <p className="text-lg sm:text-xl text-[rgb(254,254,254)] mb-8 max-w-4xl mx-auto leading-relaxed">
            Estes pontos passam uma imagem de descuido e afastam potenciais clientes.
            Muitos adiam a renovação por medo de processos complexos, resultados de baixa qualidade
            ou investimentos que não duram.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(210,175,112)] transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Quero Melhorar Minha Comunicação Visual!
          </button>
        </div>
      </div>
    </section>
  );
}
