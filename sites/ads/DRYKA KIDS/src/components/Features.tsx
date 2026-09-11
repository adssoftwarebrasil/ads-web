import { Shield, Truck, CreditCard, Users, Clock, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  Icon: LucideIcon;
  iconBg: string;
  title: string;
  text: string;
}

const features: Feature[] = [
  {
    Icon: Shield,
    iconBg: 'from-blue-500 to-cyan-400',
    title: 'Qualidade Garantida',
    text: 'Produtos cuidadosamente selecionados para o conforto e segurança do seu filho',
  },
  {
    Icon: Truck,
    iconBg: 'from-green-500 to-emerald-400',
    title: 'Entrega Rápida',
    text: 'Receba seus produtos com agilidade e segurança em todo o Cariri',
  },
  {
    Icon: CreditCard,
    iconBg: 'from-orange-500 to-amber-400',
    title: 'Facilidade de Pagamento',
    text: 'Diversas formas de pagamento para você escolher a melhor opção',
  },
  {
    Icon: Users,
    iconBg: 'from-pink-500 to-rose-400',
    title: 'Atendimento Personalizado',
    text: 'Equipe dedicada para ajudar você a encontrar o produto perfeito',
  },
  {
    Icon: Clock,
    iconBg: 'from-purple-500 to-indigo-400',
    title: 'Horário Flexível',
    text: 'Atendemos de segunda a sábado, das 7:30 às 18:00',
  },
  {
    Icon: Award,
    iconBg: 'from-yellow-500 to-orange-400',
    title: '6 Anos de Confiança',
    text: 'Mais de 6 anos oferecendo o melhor para as famílias da região',
  },
];

export default function Features() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">
              Shop Dryka Kids?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Somos referência em moda infantil no Cariri, oferecendo uma experiência completa de
            compra com produtos de qualidade e atendimento excepcional.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ Icon, iconBg, title, text }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${iconBg} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Tudo em um só lugar para o seu filho!
          </h3>
          <p className="text-lg mb-8 opacity-95 max-w-3xl mx-auto">
            Vestuário, brinquedos, moda praia, mochilas, sapatos, material escolar, acessórios e
            muito mais. Linha baby, produtos para crianças atípicas, velocípedes, motos elétricas,
            pelúcias e rebornes.
          </p>
          <a
            href="https://wa.me/558888033252?text=Olá! Quero conhecer todos os produtos disponíveis!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-pink-600 text-lg font-semibold rounded-full hover:bg-gray-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Confira Nosso Catálogo Completo
          </a>
        </div>
      </div>
    </section>
  );
}
