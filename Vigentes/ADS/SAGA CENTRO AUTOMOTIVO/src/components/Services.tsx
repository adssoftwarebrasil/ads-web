import {
  Wrench,
  Zap,
  Target,
  RotateCcw,
  Settings,
  Droplets,
  ClipboardCheck,
  CarFront,
  type LucideIcon,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Service {
  icon: LucideIcon;
  iconName: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Wrench,
    iconName: 'wrench',
    title: 'Mecânica Geral',
    description:
      'Diagnóstico completo e reparo de todos os sistemas mecânicos do seu veículo. Da suspensão ao motor, resolvemos com precisão e rapidez.',
  },
  {
    icon: Zap,
    iconName: 'zap',
    title: 'Auto Elétrica',
    description:
      'Serviços especializados em sistemas elétricos e eletrônicos veiculares. Diagnóstico computadorizado e instalações com garantia.',
  },
  {
    icon: Target,
    iconName: 'target',
    title: 'Alinhamento',
    description:
      'Alinhamento eletrônico computadorizado para garantir segurança, prolongar a vida dos pneus e melhorar o desempenho do seu carro.',
  },
  {
    icon: RotateCcw,
    iconName: 'rotate-ccw',
    title: 'Balanceamento',
    description:
      'Balanceamento preciso de pneus com equipamentos modernos. Elimine vibrações, ruídos e garanta conforto e segurança na direção.',
  },
  {
    icon: Settings,
    iconName: 'settings',
    title: 'Câmbio Automático',
    description:
      'Troca e revisão de fluido de câmbio automático com máquina especializada Tritton. Proteção total para a transmissão do seu veículo.',
  },
  {
    icon: Droplets,
    iconName: 'droplets',
    title: 'Troca de Óleo',
    description:
      'Troca de óleo do motor com produtos de qualidade. Preservamos o motor do seu veículo e garantimos melhor desempenho e economia de combustível.',
  },
  {
    icon: ClipboardCheck,
    iconName: 'clipboard-check',
    title: 'Revisões em Geral',
    description:
      'Revisões preventivas e corretivas seguindo o manual do fabricante. Mantenha seu veículo sempre em dia e evite problemas maiores no futuro.',
  },
  {
    icon: CarFront,
    iconName: 'car-front',
    title: 'Diagnóstico Completo',
    description:
      'Scanner automotivo avançado para identificar com precisão qualquer falha eletrônica ou mecânica antes que se torne um problema sério.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
            <span className="text-[#EF1C1A] text-sm font-bold uppercase tracking-widest">O Que Fazemos</span>
            <div className="h-px w-8 bg-[#EF1C1A]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black leading-tight">
            Serviços Completos para
            <br />
            <span className="text-[#EF1C1A]">Seu Veículo</span>
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Da revisão básica aos serviços mais complexos, temos toda a expertise e equipamentos para cuidar do seu
            carro com excelência.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-[#FFFEDC] hover:bg-black rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 cursor-default opacity-100 translate-y-0"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-[#EF1C1A] rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors duration-300">
                    <Icon size={22} className={`lucide lucide-${service.iconName} text-white`} />
                  </div>
                  <h3 className="text-black group-hover:text-white font-bold text-lg mb-2 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-white/70 text-sm leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 transition-all duration-700 delay-500 opacity-100 translate-y-0">
          <a
            href="http://wa.me/5566996116371"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#EF1C1A] hover:bg-[#962A21] text-white font-bold text-lg px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <WhatsAppIcon size={22} fill="currentColor" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
