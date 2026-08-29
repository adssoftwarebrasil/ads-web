import { Headphones, Users, TestTube, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Headphones,
    iconClass: 'lucide lucide-headphones w-8 h-8 text-white',
    title: 'Aparelhos Auditivos de Qualidade',
    text: 'Tecnologia avançada para todos os níveis de perda auditiva.',
  },
  {
    Icon: Users,
    iconClass: 'lucide lucide-users w-8 h-8 text-white',
    title: 'Atendimento Personalizado',
    text: 'Nosso time é especializado em entender suas necessidades auditivas.',
  },
  {
    Icon: TestTube,
    iconClass: 'lucide lucide-test-tube w-8 h-8 text-white',
    title: 'Teste Auditivo Gratuito',
    text: 'Avalie sua audição sem custo em nosso centro auditivo.',
  },
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles w-8 h-8 text-white',
    title: 'Soluções Inovadoras',
    text: 'Estamos sempre atualizados com as mais recentes tecnologias auditivas.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ Icon, iconClass, title, text }) => (
            <div
              key={title}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon className={iconClass} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
