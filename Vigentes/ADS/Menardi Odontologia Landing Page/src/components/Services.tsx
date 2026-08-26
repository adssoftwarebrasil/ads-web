import { Smile, Anchor, Sparkles, Star, Heart, Shield, LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Smile,
    iconClass: 'lucide lucide-smile',
    title: 'Ortodontia',
    description:
      'Alinhe seu sorriso com aparelhos tradicionais ou invisíveis (Invisalign). Resultados precisos e duradouros.',
  },
  {
    Icon: Anchor,
    iconClass: 'lucide lucide-anchor',
    title: 'Implantodontia',
    description:
      'Recupere dentes perdidos com implantes dentários de última geração. Segurança e naturalidade garantidas.',
  },
  {
    Icon: Sparkles,
    iconClass: 'lucide lucide-sparkles',
    title: 'Harmonização Facial',
    description:
      'Botox, preenchimento labial e PRF. Realce sua beleza natural com procedimentos minimamente invasivos.',
  },
  {
    Icon: Star,
    iconClass: 'lucide lucide-star',
    title: 'Estética Dental',
    description:
      'Lentes de contato, facetas, clareamento. Transforme seu sorriso em uma obra de arte.',
  },
  {
    Icon: Heart,
    iconClass: 'lucide lucide-heart',
    title: 'Endodontia',
    description: 'Tratamento de canal com tecnologia avançada. Salve seus dentes sem dor.',
  },
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield',
    title: 'Próteses Dentárias',
    description: 'Próteses personalizadas que devolvem função e estética ao seu sorriso.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(0,87,101)] mb-4">
            Cuidado Completo Para Seu Sorriso
          </h2>
          <p className="text-lg md:text-xl text-[rgb(42,42,42)] max-w-3xl mx-auto">
            Da prevenção à estética avançada, oferecemos tratamentos completos com tecnologia de
            ponta
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105 border-t-4 border-[rgb(107,218,229)]"
            >
              <service.Icon size={48} className={`${service.iconClass} text-[rgb(107,218,229)] mb-4`} />
              <h3 className="text-2xl font-bold text-[rgb(0,87,101)] mb-4">{service.title}</h3>
              <p className="text-[rgb(42,42,42)] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
