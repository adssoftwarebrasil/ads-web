import { Beef, UtensilsCrossed, ChefHat, PackageOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Servico {
  Icon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
}

const servicos: Servico[] = [
  {
    Icon: Beef,
    badge: 'Especialidade da casa',
    title: 'Churrasco Assado na Hora',
    desc: 'Carnes nobres preparadas no ponto perfeito, com todo o sabor e suculência que só o verdadeiro churrasco brasileiro pode oferecer.',
  },
  {
    Icon: UtensilsCrossed,
    badge: 'Mais pedido',
    title: 'Bife Livre',
    desc: 'Experimente nosso famoso bife livre, uma opção completa e generosa que garante satisfação em cada garfada.',
  },
  {
    Icon: ChefHat,
    badge: 'Sabor autêntico',
    title: 'Comida Caseira',
    desc: 'Aquele sabor de comida feita com carinho, como na casa da vovó. Pratos tradicionais que aquecem o coração.',
  },
  {
    Icon: PackageOpen,
    badge: 'Praticidade',
    title: 'Marmitex',
    desc: 'Leve a qualidade da nossa cozinha para onde você estiver. Marmitas completas, frescas e saborosas.',
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[rgb(61,61,67)] mb-4">
              Nossos <span className="text-[rgb(212,178,37)]">Serviços</span>
            </h2>
            <div className="w-24 h-1 bg-[rgb(212,86,96)] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Do almoço em família ao marmitex do dia a dia, temos a opção perfeita para você
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {servicos.map(({ Icon, badge, title, desc }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-[rgb(212,178,37)] group"
              >
                <div className="text-[rgb(212,178,37)] mb-4 group-hover:text-[rgb(212,86,96)] transition-colors">
                  <Icon className="w-12 h-12" />
                </div>
                <span className="inline-block bg-[rgb(212,86,96)] text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
                  {badge}
                </span>
                <h3 className="text-2xl font-bold text-[rgb(61,61,67)] mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>
                <a
                  href="https://wa.me/5545999434290?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(212,178,37)] font-semibold hover:text-[rgb(212,86,96)] transition-colors inline-flex items-center gap-2"
                >
                  Saiba Mais
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>
          <div className="bg-[rgb(61,61,67)] text-white p-12 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para uma experiência gastronômica inesquecível?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Faça seu pedido agora e descubra por que somos referência há 38 anos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5545999434290?text=Olá!%20Gostaria%20de%20fazer%20um%20pedido."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[rgb(212,178,37)] text-[rgb(61,61,67)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(212,86,96)] hover:text-white transition-all duration-300 shadow-lg hover:scale-105"
              >
                Fazer Pedido Agora
              </a>
              <a
                href="tel:+5545999434290"
                className="bg-transparent border-2 border-[rgb(212,178,37)] text-[rgb(212,178,37)] px-8 py-4 rounded-full font-bold text-lg hover:bg-[rgb(212,178,37)] hover:text-[rgb(61,61,67)] transition-all duration-300"
              >
                (45) 99943-4290
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
