import { Users, Truck, Globe, ClipboardList, type LucideIcon } from 'lucide-react';

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

const differentials: Differential[] = [
  {
    icon: Users,
    title: 'Experiência Familiar',
    description:
      'Raízes familiares no ramo com décadas de experiência no transporte de cargas em Roraima',
    delay: 0,
  },
  {
    icon: Truck,
    title: 'Frota Completa',
    description:
      'Caminhões, rodotrens, bitrens, caminhões baú e empilhadeiras próprias para todas as necessidades',
    delay: 100,
  },
  {
    icon: Globe,
    title: 'Rotas Internacionais',
    description:
      'Transporte para Manaus, Venezuela (Santa Helena) e Guiana (Lethem) com total segurança',
    delay: 200,
  },
  {
    icon: ClipboardList,
    title: 'Soluções Completas',
    description:
      'Desde o transporte até armazenagem em containers próprios, tudo em um só lugar',
    delay: 300,
  },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-block bg-holanda-green/10 text-holanda-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            Diferenciais
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-holanda-gray">
            Por Que Escolher a Holanda Transportes?
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-holanda-green/5 to-holanda-green/10 rounded-2xl p-8 lg:p-10 space-y-4 hover:shadow-lg transition-all duration-500 opacity-100 translate-y-0"
              style={{ transitionDelay: `${item.delay}ms` }}
            >
              <div className="w-16 h-16 bg-holanda-green rounded-2xl flex items-center justify-center">
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-holanda-gray">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-base lg:text-lg">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
