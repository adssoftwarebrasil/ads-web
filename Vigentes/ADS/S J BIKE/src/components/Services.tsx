import {
  Shield,
  Wrench,
  Package,
  Settings,
  Construction,
  Palette,
  LucideIcon,
} from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    Icon: Shield,
    iconClass: 'lucide lucide-shield w-12 h-12 text-white',
    title: 'Manutenção Preventiva',
    description: 'Revisão completa para evitar problemas futuros',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench w-12 h-12 text-white',
    title: 'Manutenção Corretiva',
    description: 'Conserto de freios, câmbios, suspensões e muito mais',
  },
  {
    Icon: Package,
    iconClass: 'lucide lucide-package w-12 h-12 text-white',
    title: 'Troca de Peças',
    description: 'Peças originais e de alta qualidade',
  },
  {
    Icon: Settings,
    iconClass: 'lucide lucide-settings w-12 h-12 text-white',
    title: 'Regulagem Completa',
    description: 'Ajuste de freios, marchas e suspensões',
  },
  {
    Icon: Construction,
    iconClass: 'lucide lucide-construction w-12 h-12 text-white',
    title: 'Montagem de Bikes',
    description: 'Montagem profissional de bicicletas novas',
  },
  {
    Icon: Palette,
    iconClass: 'lucide lucide-palette w-12 h-12 text-white',
    title: 'Customização',
    description: 'Deixe sua bike com a sua cara',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgb(253, 88, 34) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-[rgb(253,88,34)]/10 text-[rgb(253,88,34)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            SERVIÇOS ESPECIALIZADOS
          </div>
          <h2 className="text-5xl font-bold text-black mb-6">Nossos Serviços</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manutenção completa para sua bike estar sempre pronta para pedalar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ Icon, iconClass, title, description }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-[rgb(253,88,34)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(253,88,34)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <div className="bg-gradient-to-br from-[rgb(253,88,34)] to-[rgb(230,70,20)] p-4 rounded-2xl shadow-lg">
                    <Icon className={iconClass} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-4 text-center group-hover:text-[rgb(253,88,34)] transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
