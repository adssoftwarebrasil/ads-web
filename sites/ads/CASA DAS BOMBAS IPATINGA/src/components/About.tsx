import { Wrench, Award, Users, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  { icon: Wrench, title: 'Assistência Anauger e Claw', description: 'Autorizada pelas melhores marcas do mercado' },
  { icon: Award, title: '15 anos de experiência', description: 'Tradição e confiança em cada serviço' },
  { icon: Users, title: 'Suporte residencial e comercial', description: 'Atendemos todos os tipos de demanda' },
  { icon: CheckCircle, title: 'Produtos de alta qualidade', description: 'Garantia e durabilidade certificada' },
];

export default function About() {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img
              src="https://storage.lucasmendes.dev/site-sp/casadasbombasipatinga%2FSobre%20a%20Empresa.png"
              alt="Sobre a Casa das Bombas"
              className="w-full lg:max-w-xl rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6" style={{ color: 'rgb(1, 8, 82)' }}>
              Excelência Técnica que Você Pode Confiar 🛠️
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Com mais de **15 anos de atuação** no mercado, a Casa das Bombas é referência em Ipatinga e região na
              manutenção, instalação e perfuração de poços artesianos. Nossa equipe altamente qualificada oferece
              assistência técnica especializada das marcas Anauger e Claw, garantindo soluções completas para
              residências, comércios e indústrias.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10 border-l-4 border-l-gray-300 pl-4 italic">
              Trabalhamos com produtos de **alta qualidade**, equipamentos modernos e comprometimento total com a
              satisfação dos nossos clientes. Cada projeto é executado com precisão técnica e cuidado, assegurando
              eficiência e durabilidade.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 p-2">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                        style={{ backgroundColor: 'rgb(37, 155, 208)' }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: 'rgb(1, 8, 82)' }}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
