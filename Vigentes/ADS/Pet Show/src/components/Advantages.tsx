import { Heart, Award, Users, MessageCircle, LucideIcon } from 'lucide-react';
import { scrollToSection } from '../lib/scroll';

interface Advantage {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const advantages: Advantage[] = [
  {
    title: 'Atendimento Personalizado',
    description: 'Cada pet recebe o cuidado especial que merece.',
    Icon: Heart,
  },
  {
    title: 'Produtos de Alta Qualidade',
    description: 'Trabalhamos apenas com marcas reconhecidas no mercado.',
    Icon: Award,
  },
  {
    title: 'Profissionais Capacitados',
    description: 'Equipe treinada e apaixonada pelo que faz.',
    Icon: Users,
  },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-sm font-semibold text-[#09b588] uppercase tracking-wide mb-4">
              Vantagens
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Vantagens de Escolher a Pet Show
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Conheça os benefícios de optar pelos nossos serviços e produtos para o seu pet.
            </p>
            <div className="space-y-6">
              {advantages.map((adv) => {
                const { Icon } = adv;
                return (
                  <div
                    key={adv.title}
                    className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#09b588]/5 transition-all duration-300"
                  >
                    <div className="bg-[#09b588] p-3 rounded-xl flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{adv.title}</h4>
                      <p className="text-gray-600">{adv.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button
              onClick={() => scrollToSection('contato')}
              className="mt-8 inline-flex items-center gap-3 bg-[#09b588] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 transition-all duration-300 shadow-lg hover:scale-105"
            >
              <MessageCircle size={24} />
              Enviar WhatsApp
            </button>
          </div>
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/petshowe%2FPor%20que%20contratar.jpeg"
              alt="Por que contratar"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
              <p className="text-4xl font-bold text-[#09b588]">Experiência</p>
              <p className="text-sm font-medium text-gray-600 mt-2">
                Mais de 10 anos de dedicação e amor pelos animais
              </p>
            </div>
          </div>
        </div>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://storage.lucasmendes.dev/site-sp/petshowe%2FConfira%20Nossas%20Promoc%CC%A7o%CC%83es.jpg"
            alt="Confira Nossas Promoções"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#09b588]/90 to-transparent flex items-center">
            <div className="max-w-2xl px-8 sm:px-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Confira Nossas Promoções
              </h3>
              <p className="text-xl text-white/90 mb-6">
                Acesse nossas promoções e cuide do seu pet com economia.
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center gap-3 bg-white text-[#09b588] px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={24} />
                Enviar WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
