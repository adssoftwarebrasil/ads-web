import { Award, Users, Clock, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: Award,
    title: 'Profissionais Qualificados',
    description: 'Equipe altamente treinada e em constante atualização.',
  },
  {
    icon: Users,
    title: 'Atendimento Personalizado',
    description: 'Cuidado individualizado para cada cliente.',
  },
  {
    icon: Clock,
    title: 'Horários Flexíveis',
    description: 'Funcionamento das 8:30 às 19:00 para sua comodidade.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://storage.lucasmendes.dev/site-sp/137%20SALON%20BY%20GABRIEL%2Fquem-somos.jpg"
              alt="Sobre o 137 Salon"
              className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#F8EFE6] rounded-3xl -z-10 hidden lg:block"></div>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#002C2F] mb-6">Sobre o 137 Salon</h2>
            <p className="text-lg text-[#002C2F]/80 leading-relaxed mb-6">
              Nossa empresa é qualificada e procuramos entregar o melhor atendimento e resultado.
              Temos os melhores profissionais da região para atendê-las e entregar o melhor
              resultado.
            </p>
            <p className="text-lg text-[#002C2F]/80 leading-relaxed mb-8">
              Procuramos ter o melhor atendimento para que a cliente saia satisfeita e feliz, não
              somente cuidando da sua imagem, mas também do seu bem-estar.
            </p>
            <div className="space-y-6">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#002C2F] rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-[#F8EFE6]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#002C2F] mb-1">{feature.title}</h3>
                      <p className="text-[#002C2F]/70">{feature.description}</p>
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
