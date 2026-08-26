import {
  Wrench,
  Zap,
  Users,
  Sparkles,
  Award,
  Clock,
  Headphones,
  ThumbsUp,
  type LucideIcon,
} from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const advantages: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: Wrench, title: 'Produtos Sob Medida', desc: 'Calhas e rufos fabricados conforme sua necessidade' },
  { icon: Zap, title: 'Agilidade na Entrega', desc: 'Garantimos a entrega rápida para atender suas demandas' },
  { icon: Users, title: 'Atendimento Personalizado', desc: 'Nosso time está pronto para oferecer o melhor suporte ao cliente' },
  { icon: Sparkles, title: 'Soluções Inovadoras', desc: 'Projete sua estrutura com os melhores materiais do mercado' },
  { icon: Award, title: 'Expertise no Setor', desc: 'Anos de experiência e conhecimento profundo do mercado' },
  { icon: Clock, title: 'Compromisso com Prazos', desc: 'Cumprimos sempre os prazos estabelecidos para a entrega' },
  { icon: Headphones, title: 'Suporte Completo', desc: 'Oferecemos suporte durante todo o processo de compra' },
  { icon: ThumbsUp, title: 'Feedback Positivo', desc: 'Clientes satisfeitos são nossa maior recompensa' },
];

export default function Advantages() {
  return (
    <section id="vantagens" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por Que <span className="text-primary">Nos Escolher?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra as vantagens de fazer negócios conosco e como podemos atender suas necessidades
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="bg-primary/10 text-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600">{adv.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
