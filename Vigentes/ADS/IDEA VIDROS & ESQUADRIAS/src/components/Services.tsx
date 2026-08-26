import { Square, Shield, Droplets, Sparkles, DoorOpen, Building2, ShieldCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  title: string;
  image: string;
  description: string;
  icon: LucideIcon;
  link: string;
}

const services: Service[] = [
  {
    title: 'Esquadrias de Alumínio',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/esquadrias-de-aluminio.webp',
    description:
      'Sistemas de alto desempenho com perfis robustos, vedação superior e acabamento impecável para residências e comerciais.',
    icon: Square,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Esquadrias%20de%20Alum%C3%ADnio.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Vidro Temperado',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/vidro-temperado.webp',
    description:
      'Vidros de alta segurança com resistência até 5x superior ao vidro comum, ideais para fachadas, divisórias e ambientes internos.',
    icon: Shield,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Vidro%20Temperado.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Box para Banheiro',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/box-para-banheiro.webp',
    description:
      'Box em vidro temperado com perfis em alumínio, designs modernos que valorizam e ampliam visualmente o ambiente.',
    icon: Droplets,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Box%20para%20Banheiro.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Espelhos',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/espelhos.webp',
    description:
      'Espelhos sob medida com cortes precisos e acabamentos diferenciados para banheiros, salas e ambientes decorativos.',
    icon: Sparkles,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Espelhos.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Portas e Janelas',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/portas-e-janelas.webp',
    description:
      'Fabricação e instalação de portas e janelas em alumínio com vedação térmica e acústica, sob medida para cada projeto.',
    icon: DoorOpen,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Portas%20e%20Janelas.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Pele de Vidro / Fachada',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/pele-de-vidro-fachada.webp',
    description:
      'Fachadas refletivas e pele de vidro que conferem modernidade e sofisticação a edificações comerciais e residenciais.',
    icon: Building2,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Pele%20de%20Vidro%20%2F%20Fachada.%20Pode%20me%20passar%20mais%20informações%3F',
  },
  {
    title: 'Guarda Corpo',
    image: 'https://storage.lucasmendes.dev/site-sp/idea%20vidros/produtos/guarda-corpo.webp',
    description:
      'Guarda-corpos em vidro e alumínio com alta resistência e design elegante para escadas, varandas e mezaninos.',
    icon: ShieldCheck,
    link: 'http://wa.me/556699856445?text=Olá!%20Tenho%20interesse%20em%20Guarda%20Corpo.%20Pode%20me%20passar%20mais%20informações%3F',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#F60301] text-xs font-bold uppercase tracking-widest mb-3">O Que Fazemos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#020202] mb-4">
            Nossos <span className="text-[#234E72]">Produtos &amp; Serviços</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Soluções completas em vidros e alumínio para sua obra ou reforma. Qualidade garantida do projeto à instalação.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-[#F60301] p-2 rounded-lg">
                    <Icon width={18} height={18} className="text-white" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#020202] font-bold text-base mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[#234E72] hover:text-[#F60301] text-sm font-semibold transition-colors"
                  >
                    Solicitar orçamento
                    <span className="text-lg leading-none">→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="http://wa.me/556699856445?text=Olá!%20Gostaria%20de%20conhecer%20todos%20os%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#234E72] hover:bg-[#1a3a56] text-white font-bold text-base px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-[#234E72]/30 hover:scale-105"
          >
            Ver Todos os Serviços no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
