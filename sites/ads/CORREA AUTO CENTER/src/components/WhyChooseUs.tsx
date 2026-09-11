import { Smartphone, Shield, Wrench, Clock, CheckCircle2, ThumbsUp, type LucideIcon } from 'lucide-react';
import { scrollToSection } from '../utils';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Smartphone, title: 'Tecnologia de Ponta', description: 'Equipamentos modernos incluindo scanner e osciloscópio para diagnósticos precisos.' },
  { icon: Shield, title: 'Confiança e Transparência', description: 'Atendimento honesto com orçamentos claros e sem surpresas.' },
  { icon: Wrench, title: 'Profissionais Qualificados', description: 'Equipe experiente e continuamente capacitada para atender seu veículo.' },
  { icon: Clock, title: 'Agilidade no Atendimento', description: 'Serviços realizados com rapidez sem comprometer a qualidade.' },
  { icon: CheckCircle2, title: 'Garantia dos Serviços', description: 'Todos os nossos serviços possuem garantia e suporte pós-atendimento.' },
  { icon: ThumbsUp, title: 'Atendimento Personalizado', description: 'Cada cliente é único e recebe atendimento dedicado às suas necessidades.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Por Que Escolher a <span className="text-[rgb(207,30,37)]">Correa Auto Center</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos diferenciais fazem toda a diferença na qualidade e confiança que você merece.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[rgb(207,30,37)] group hover:-translate-y-2"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-[rgb(207,30,37)] to-[rgb(167,10,17)] p-4 rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[rgb(207,30,37)] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(207,30,37)] to-[rgb(167,10,17)] rounded-2xl p-12 shadow-2xl text-white text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Atendemos Toda a Região de Sinop</h3>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Nossa área de cobertura inclui: Sinop, Cláudia, Vera, Marcelândia, Itaúba, Peixoto de
            Azevedo, Matupá, Guarantã do Norte, Juara, União do Sul, Feliz Natal, Santa Carmem e
            Novo Mundo.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-[rgb(207,30,37)] px-10 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-xl transform hover:scale-105"
          >
            Entre em Contato Agora
          </button>
        </div>
      </div>
    </section>
  );
}
