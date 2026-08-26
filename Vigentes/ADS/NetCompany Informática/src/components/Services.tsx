import { Monitor, Printer, Smartphone, Wifi, Settings, HardDrive, RefreshCw, Wrench } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Computadores e Notebooks',
    description: 'Formatação, manutenção, upgrades e diagnóstico completo. Atendemos todas as marcas com agilidade e precisão.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Computadores%20e%20Notebooks.webp',
  },
  {
    icon: <Printer size={32} />,
    title: 'Impressoras',
    description: 'Conserto e manutenção de impressoras de todas as marcas e modelos. Recarga de cartuchos, toner e refil para EcoTank.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Impressoras.webp',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Celulares e Tablets',
    description: 'Manutenção especializada em smartphones e tablets. Troca de tela, bateria, conector e outros reparos.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Celulares%20e%20Tablets.webp',
  },
  {
    icon: <Wifi size={32} />,
    title: 'Redes Wi-Fi e Cabeadas',
    description: 'Instalação e configuração de redes residenciais e empresariais. Roteadores, switches e cabeamento estruturado.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Redes%20Wi-Fi%20e%20Cabeadas.webp',
  },
  {
    icon: <Settings size={32} />,
    title: 'Formatação e Programas',
    description: 'Instalação de sistemas operacionais, drivers e softwares. Limpeza de vírus, otimização e backup de dados.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Formata%C3%A7%C3%A3o%20e%20Programas.webp',
  },
  {
    icon: <HardDrive size={32} />,
    title: 'No-breaks e Estabilizadores',
    description: 'Manutenção preventiva e corretiva de no-breaks e estabilizadores. Troca de baterias e revisão geral.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/No-breaks%20e%20Estabilizadores.webp',
  },
  {
    icon: <RefreshCw size={32} />,
    title: 'Recarga de Cartuchos',
    description: 'Recarga profissional de cartuchos de tinta e toner com qualidade garantida. Economia e qualidade de impressão.',
    image: 'https://storage.lucasmendes.dev/site-sp/netcompany%20informatica/produtos%20e%20servicos/Recarga%20de%20Cartuchos.webp',
  },
  {
    icon: <Wrench size={32} />,
    title: 'Atendimento Empresarial',
    description: 'Suporte técnico in loco para empresas. Contratos de manutenção preventiva e corretiva para toda sua infraestrutura.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-[#F58842] font-semibold text-sm uppercase tracking-widest">
            O que fazemos
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
            Serviços Especializados
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-base sm:text-lg">
            Soluções completas em tecnologia para você e sua empresa. Trabalhamos com qualidade,
            rapidez e garantia em tudo que entregamos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2A]/60 to-transparent" />
                <div className="absolute bottom-3 left-4 text-white">
                  {service.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0D1B2A] text-base mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="px-5 pb-5">
                <a
                  href="http://wa.me/559491941919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3069A3] hover:text-[#F58842] text-sm font-semibold transition-colors duration-200 flex items-center gap-1"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
