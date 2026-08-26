import { Shield, Headphones, Award, Truck, Wrench, Users } from 'lucide-react';

const differentials = [
  {
    icon: Award,
    title: 'Marcas Certificadas',
    description:
      'Trabalhamos exclusivamente com fabricantes reconhecidos e certificados pelo mercado odontológico nacional.',
  },
  {
    icon: Headphones,
    title: 'Suporte Especializado',
    description:
      'Nossa equipe técnica está pronta para orientar você na escolha e na utilização correta de cada equipamento.',
  },
  {
    icon: Shield,
    title: 'Garantia Assegurada',
    description:
      'Todos os produtos são comercializados com garantia de fábrica e respaldo total do nosso time.',
  },
  {
    icon: Truck,
    title: 'Entrega em Belém e Região',
    description:
      'Atendemos clínicas e consultórios em toda a região metropolitana de Belém com logística eficiente.',
  },
  {
    icon: Wrench,
    title: 'Assistência Técnica',
    description:
      'Facilitamos o acesso à assistência técnica autorizada para manter seus equipamentos sempre em pleno funcionamento.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description:
      'Cada cliente recebe atenção individualizada. Entendemos suas necessidades para oferecer a solução ideal.',
  },
];

export default function WhyUs() {
  return (
    <section id="diferenciais" className="bg-gray-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-10 bg-black/30" />
            <span className="text-black/40 text-xs tracking-[0.25em] uppercase font-medium">
              Por que nos escolher
            </span>
            <span className="h-px w-10 bg-black/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            Diferenciais que
            <span className="italic font-light"> fazem a diferença</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Mais do que vender equipamentos, construímos parcerias duradouras com
            profissionais que buscam excelência no atendimento odontológico.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 border border-gray-100 hover:border-black hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-black text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              Pronto para equipar sua clínica?
            </h3>
            <p className="text-gray-400 text-sm">
              Fale com um consultor agora e receba uma proposta personalizada.
            </p>
          </div>
          <a
            href="http://wa.me/559181685427?text=Olá!%20Gostaria%20de%20receber%20uma%20proposta%20personalizada%20para%20equipar%20minha%20clínica."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-white text-black px-8 py-4 text-sm font-semibold tracking-wider hover:bg-gray-100 transition-colors duration-200"
          >
            FALAR COM CONSULTOR
          </a>
        </div>
      </div>
    </section>
  );
}
