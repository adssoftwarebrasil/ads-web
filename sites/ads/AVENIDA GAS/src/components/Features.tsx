import { Rocket, Star, DollarSign } from 'lucide-react';

interface Feature {
  icon: typeof Rocket;
  title: string;
  description: string;
  delay: string;
}

const features: Feature[] = [
  {
    icon: Rocket,
    title: 'Entrega Rápida',
    description:
      'Receba seu gás ou água em até 30 minutos. Atendimento ágil e eficiente em toda Sinop.',
    delay: '0.1s',
  },
  {
    icon: Star,
    title: 'Atendimento de Qualidade',
    description:
      'Equipe treinada e atenciosa, pronta para atender suas necessidades com excelência.',
    delay: '0.2s',
  },
  {
    icon: DollarSign,
    title: 'Promoções Regulares',
    description:
      'Ofertas especiais para você economizar sem perder qualidade e segurança.',
    delay: '0.3s',
  },
];

export default function Features() {
  return (
    <section id="sobre" className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#021C3F] text-center mb-16">
          Por Que Escolher a Avenida Gás?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="text-center p-8 rounded-xl hover:shadow-xl transition-all duration-300 opacity-0"
                style={{ animationDelay: feature.delay }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#DBCC5E] rounded-full mb-6">
                  <Icon className="lucide w-10 h-10 text-[#021C3F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#021C3F] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="max-w-4xl mx-auto">
          <img
            src="https://storage.lucasmendes.dev/site-sp/Avenida%20gas%2Fimg%2Fmoto-azul-gas-acabou-entrega.webp"
            alt="Entrega Avenida Gás"
            className="w-full h-auto rounded-2xl shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
