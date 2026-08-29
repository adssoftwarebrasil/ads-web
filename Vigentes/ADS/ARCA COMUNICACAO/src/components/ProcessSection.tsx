import { MessageCircle, Palette, Factory, CheckCircle } from 'lucide-react';

export default function ProcessSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      icon: MessageCircle,
      number: '01',
      title: 'Visita técnica especializada',
      description: 'Entendemos sua visão, necessidades e orçamento em uma conversa sem compromisso.'
    },
    {
      icon: Palette,
      number: '02',
      title: 'Design Exclusivo',
      description: 'Apresentamos o projeto visual 3D e o orçamento transparente para sua aprovação.'
    },
    {
      icon: Factory,
      number: '03',
      title: 'Produção com Padrão ARCA',
      description: 'Fabricamos sua comunicação visual com materiais premium e controle de qualidade rigoroso.'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Instalação Pontual e Profissional',
      description: 'Entregamos e instalamos seu projeto com precisão, limpeza e pontualidade.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[rgb(11,9,48)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[rgb(255,204,44)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[rgb(210,175,112)] rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[rgb(254,254,254)] mb-6">
            Seu projeto de <span className="text-[rgb(255,204,44)]">IMPACTO</span>
          </h2>
          <p className="text-lg sm:text-xl text-[rgb(212,212,212)] max-w-3xl mx-auto">
            Um processo transparente e profissional do início ao fim
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 h-full border-2 border-[rgb(255,204,44)]/20 hover:border-[rgb(255,204,44)] transition-all duration-300 transform hover:-translate-y-2 overflow-hidden z-0">
                
                {/* AJUSTE FEITO:
                    Mudei de '-top-6 -right-6' (negativo/fora) para 'top-2 right-4' (positivo/dentro).
                    Isso traz o número para dentro do card, afastando-o da borda direita.
                */}
                <div className="absolute top-2 right-4 text-7xl font-extrabold text-[rgb(255,204,44)]/10 group-hover:text-[rgb(255,204,44)]/20 transition-colors leading-none select-none pointer-events-none">
                  {step.number}
                </div>

                <div className="relative mb-6">
                  <div className="inline-flex p-4 bg-[rgb(255,204,44)]/10 rounded-xl group-hover:bg-[rgb(255,204,44)]/20 transition-colors duration-300">
                    <step.icon className="text-[rgb(255,204,44)]" size={40} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[rgb(254,254,254)] mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-[rgb(212,212,212)] leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[rgb(255,204,44)] to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="group bg-[rgb(255,204,44)] text-[rgb(11,9,48)] px-10 py-5 rounded-full font-bold text-lg hover:bg-[rgb(210,175,112)] transition-all duration-300 transform hover:scale-105 shadow-2xl inline-flex items-center"
          >
            Quero Iniciar Meu Projeto com a ARCA!
            <CheckCircle className="ml-3 group-hover:rotate-12 transition-transform" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}