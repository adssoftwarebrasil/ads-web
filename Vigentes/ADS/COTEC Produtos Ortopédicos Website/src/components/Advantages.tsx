import { Award, Lightbulb, Target, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Advantage {
  icon: LucideIcon;
  iconClass: string;
  title: string;
  text: string;
}

const advantages: Advantage[] = [
  {
    icon: Award,
    iconClass: 'lucide lucide-award text-[#FB6F11]',
    title: 'Experiência no Setor',
    text: 'Especialistas em ortopedia técnica, oferecemos soluções avançadas em próteses biônicas e mioelétricas, unindo tecnologia de ponta e funcionalidade para transformar vidas.',
  },
  {
    icon: Lightbulb,
    iconClass: 'lucide lucide-lightbulb text-[#FB6F11]',
    title: 'Inovação e Tecnologia',
    text: 'Inovamos hoje para transformar o amanhã, desenvolvendo produtos que fazem a diferença no seu dia a dia.',
  },
  {
    icon: Target,
    iconClass: 'lucide lucide-target text-[#FB6F11]',
    title: 'Excelência em Produtos',
    text: 'Oferecemos próteses, órteses e palmilhas personalizadas com tecnologia avançada.',
  },
  {
    icon: Users,
    iconClass: 'lucide lucide-users text-[#FB6F11]',
    title: 'Atendimento Personalizado',
    text: 'Nosso compromisso é entender suas necessidades e oferecer soluções sob medida.',
  },
  {
    icon: Target,
    iconClass: 'lucide lucide-target text-[#FB6F11]',
    title: 'Tecnologia e Inovação',
    text: 'Utilizamos materiais de ponta para garantir eficácia e segurança em nossos produtos.',
  },
  {
    icon: Lightbulb,
    iconClass: 'lucide lucide-lightbulb text-[#FB6F11]',
    title: 'Soluções Inovadoras',
    text: 'Desenvolvemos produtos que melhoram a mobilidade e a qualidade de vida de nossos clientes.',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-16 md:py-24 bg-[#F9F9F9] overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <h2 className="text-[#333333] font-bold text-center mb-3 text-2xl md:text-4xl lg:text-5xl">
          Vantagens de Trabalhar Conosco
        </h2>
        <p className="text-[#333333] text-opacity-70 text-center mb-10 md:mb-12 max-w-2xl mx-auto text-sm md:text-base">
          Na Cotec, priorizamos a qualidade e a satisfação no atendimento, garantindo que você tenha tudo o que precisa
          para sua reabilitação.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {advantages.map((a, i) => {
            const Icon = a.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl border-2 border-transparent hover:border-[#FB6F11] transition-all duration-300 hover:-translate-y-2 opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#FB6F11] bg-opacity-10 flex items-center justify-center mb-4 md:mb-6">
                  <Icon size={28} className={a.iconClass} />
                </div>
                <h3 className="text-[#333333] font-bold text-lg md:text-xl mb-3 md:mb-4">{a.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{a.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
