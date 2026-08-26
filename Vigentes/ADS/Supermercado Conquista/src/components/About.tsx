import { Heart, Award, Users, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Heart,
    title: 'Tradição Familiar',
    description: 'Anos de experiência servindo a comunidade de Indiara com dedicação e amor.',
  },
  {
    icon: Award,
    title: 'Qualidade Garantida',
    description: 'Produtos selecionados cuidadosamente para garantir a melhor experiência para você.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Nossa equipe está sempre pronta para te atender com simpatia e profissionalismo.',
  },
  {
    icon: TrendingUp,
    title: 'Preços Competitivos',
    description: 'Os melhores preços da região sem abrir mão da qualidade dos produtos.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[rgb(255,204,0)] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[rgb(221,40,45)] rounded-full opacity-10 blur-2xl"></div>
            <div className="relative">
              <img
                src="https://storage.lucasmendes.dev/site-sp/supermercado%20conquista/img2/triciclo-vermelho-supergasbras-supermercado-conquista_720x1280.webp"
                alt="Supermercado Conquista - Frutas e Verduras"
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-8 left-8 right-8 bg-white rounded-xl shadow-xl p-6">
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[rgb(221,40,45)]">4.8</p>
                    <p className="text-sm text-gray-600">Avaliação</p>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[rgb(221,40,45)]">1000+</p>
                    <p className="text-sm text-gray-600">Clientes</p>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[rgb(221,40,45)]">2</p>
                    <p className="text-sm text-gray-600">Unidades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6 lg:pl-8">
            <div>
              <span className="text-[rgb(221,40,45)] font-bold text-sm uppercase tracking-wider">Sobre Nós</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
                Completo para Atender <span className="text-[rgb(221,40,45)]">Sua Família</span>
              </h2>
              <div className="w-20 h-1 bg-[rgb(255,204,0)] rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              O <strong>Supermercado Conquista</strong> é referência em Indiara quando o assunto é qualidade,
              variedade e atendimento excepcional. Estamos comprometidos em oferecer a melhor experiência de compra
              para você e sua família.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Temos uma <strong>área completa em produtos de mercearia</strong>, um{' '}
              <strong>hortifruti recheado com frutas, verduras e legumes fresquinhos</strong>, um{' '}
              <strong>açougue com carnes de primeira qualidade</strong> cuidadosamente selecionadas, e uma{' '}
              <strong>padaria ampla e completa</strong> com produtos frescos todos os dias.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="bg-[rgb(221,40,45)]/10 p-3 rounded-lg flex-shrink-0">
                      <Icon size={24} className="text-[rgb(221,40,45)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
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
