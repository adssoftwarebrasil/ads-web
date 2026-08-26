import { Monitor, Laptop, Printer, Battery, HardDrive, Settings } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
  iconBg: string;
  link: string;
}

const services: Service[] = [
  {
    title: 'Manutenção em Computadores',
    description: 'Reparo completo de desktops, upgrades de hardware, limpeza interna e otimização de desempenho.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fcomputador-acessorios-assistencia-tecnica.webp',
    icon: Monitor,
    iconBg: 'rgb(1, 102, 52)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Manuten%C3%A7%C3%A3o%20em%20Computadores.',
  },
  {
    title: 'Manutenção em Notebooks',
    description: 'Conserto de telas, teclados, dobradiças, troca de bateria e upgrade de componentes.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Flaptop-conserto-carcaca.webp',
    icon: Laptop,
    iconBg: 'rgb(152, 204, 50)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Manuten%C3%A7%C3%A3o%20em%20Notebooks.',
  },
  {
    title: 'Manutenção em Impressoras',
    description: 'Configuração, limpeza, reparo e manutenção preventiva de impressoras de todas as marcas.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fimpressora-manutencao-configuracao.webp',
    icon: Printer,
    iconBg: 'rgb(1, 102, 52)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Manuten%C3%A7%C3%A3o%20em%20Impressoras.',
  },
  {
    title: 'Manutenção em Nobreaks',
    description: 'Troca de baterias, reparo e manutenção preventiva para proteger seus equipamentos.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fnotebook-manutencao-bateria.webp',
    icon: Battery,
    iconBg: 'rgb(152, 204, 50)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Manuten%C3%A7%C3%A3o%20em%20Nobreaks.',
  },
  {
    title: 'Formatação e Limpeza',
    description: 'Formatação completa, remoção de vírus, instalação de programas e otimização do sistema.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fnotebook-formatacao-oferta.webp',
    icon: HardDrive,
    iconBg: 'rgb(1, 102, 52)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Formata%C3%A7%C3%A3o%20e%20Limpeza.',
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Limpeza regular, atualização de drivers e verificação de componentes para evitar problemas.',
    image: 'https://storage.lucasmendes.dev/site-sp/rn%20informatica%2Fimg%2Fnotebook-manutencao-preventiva.webp',
    icon: Settings,
    iconBg: 'rgb(152, 204, 50)',
    link: 'https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20Manuten%C3%A7%C3%A3o%20Preventiva.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nossos <span className="text-[rgb(1,102,52)]">Serviços</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em informática com equipe qualificada e atendimento diferenciado
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-[rgb(152,204,50)] hover:-translate-y-2"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 p-3 rounded-xl shadow-lg" style={{ backgroundColor: service.iconBg }}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[rgb(1,102,52)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[rgb(1,102,52)] font-semibold hover:text-[rgb(152,204,50)] transition-colors group-hover:gap-2 gap-1"
                  >
                    Solicitar orçamento
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(1,102,52)] to-[rgb(152,204,50)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-16 bg-gradient-to-r from-[rgb(1,102,52)] to-[rgb(1,82,42)] rounded-2xl p-8 sm:p-12 text-center shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">Precisa de um orçamento personalizado?</h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e receba um diagnóstico gratuito do seu equipamento
          </p>
          <a
            href="https://wa.me/5575981914422?text=Olá!%20Gostaria%20de%20um%20orçamento%20personalizado."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-[rgb(1,102,52)] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl font-semibold text-lg hover:scale-105"
          >
            <span>Falar com Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
