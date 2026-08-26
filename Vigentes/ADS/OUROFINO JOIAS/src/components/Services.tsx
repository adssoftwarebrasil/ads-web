import { Heart, Sparkle, Watch, Link2, Gem, Diamond } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHATSAPP_URL, IMG } from '../constants';

interface Service {
  icon: LucideIcon;
  image: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  { icon: Heart, image: IMG.aliancasDeOuro, title: 'Alianças', description: 'Alianças perfeitas para um momento especial do casal.' },
  { icon: Sparkle, image: IMG.pingenteCoracao, title: 'Pingentes Exclusivos', description: 'Pingentes personalizados que acrescentam estilo às suas joias.' },
  { icon: Watch, image: IMG.correntesDouradas, title: 'Pulseiras de Ouro', description: 'Pulseiras únicas, com design admirável e contemporâneo.' },
  { icon: Link2, image: IMG.correnteDeOuro, title: 'Correntes de Ouro', description: 'Correntes femininas e masculinas, elegância para o dia a dia.' },
  { icon: Gem, image: IMG.joiasPersonalizadas, title: 'Joias Personalizadas', description: 'Peças exclusivas que contam a sua história.' },
  { icon: Diamond, image: IMG.anelDiamante, title: 'Anel de Noivado', description: 'Anéis feitos sob medida, que simbolizam seu amor.' },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[rgb(20,20,18)]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[rgb(186,176,97)] font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">Descubra Nossas Exclusivas Criações de Joias</h2>
          <div className="h-1 w-24 bg-[rgb(186,176,97)] mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg">Oferecemos um portfólio completo que se adapta a todas as suas necessidades.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-[rgb(29,29,27)] rounded-lg overflow-hidden border border-[rgb(186,176,97)]/20 hover:border-[rgb(186,176,97)] transition-all duration-300 hover:shadow-xl hover:shadow-[rgb(186,176,97)]/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(29,29,27)] via-[rgb(29,29,27)]/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="bg-[rgb(186,176,97)]/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[rgb(186,176,97)]/20 transition-colors duration-300">
                    <Icon size={24} className="text-[rgb(186,176,97)]" />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-3">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(186,176,97)] hover:text-[rgb(126,102,42)] font-semibold transition-colors duration-300"
                  >
                    Fale Conosco
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[rgb(186,176,97)] text-[rgb(29,29,27)] px-8 py-4 rounded-md hover:bg-[rgb(126,102,42)] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            Solicite um Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
