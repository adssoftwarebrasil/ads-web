import {
  Droplets,
  Gauge,
  Cpu,
  Waves,
  Zap,
  Settings,
  ShoppingBag,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

const BASE = 'https://storage.lucasmendes.dev/site-sp/joy%20auto%20center/img/';
const WHATSAPP = 'http://wa.me/5562981500426';

interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  image?: string;
}

const services: Service[] = [
  {
    title: 'Troca de Óleo e Lubrificantes',
    desc: 'Proteja o motor do seu veículo com óleos de alta performance. Usamos apenas produtos de qualidade comprovada.',
    icon: Droplets,
    image: `${BASE}oficina-mecanico-carro-preto-rampa-computador_1024x1536.webp`,
  },
  {
    title: 'Alinhamento e Balanceamento',
    desc: 'Tecnologia Corghi de última geração para alinhamento computadorizado e balanceamento preciso.',
    icon: Gauge,
    image: `${BASE}mecanico-balanceando-pneu-em-borracharia_1024x1536.webp`,
  },
  {
    title: 'Injeção Eletrônica',
    desc: 'Diagnóstico computadorizado e reparo especializado no sistema de injeção eletrônica do seu veículo.',
    icon: Cpu,
    image: `${BASE}mecanico-desmontando-caixa-de-transferencia-enferrujada_1024x1536.webp`,
  },
  {
    title: 'Direção Hidráulica',
    desc: 'Manutenção e reparo completo do sistema de direção hidráulica para mais segurança e conforto.',
    icon: Waves,
    image: `${BASE}carro-branco-balanceamento-mecanico-trabalhando-oficina_1024x1536.webp`,
  },
  {
    title: 'Sistemas Eletrônicos',
    desc: 'Diagnóstico e reparo de todos os sistemas eletrônicos do veículo com equipamentos modernos.',
    icon: Zap,
  },
  {
    title: 'Suspensão e Freios',
    desc: 'Revisão completa e substituição de componentes de suspensão e freios para sua segurança.',
    icon: Settings,
    image: `${BASE}oficina-carros-troca-pneus-alinhamento_1024x1536.webp`,
  },
  {
    title: 'Pneus, Rodas e Peças',
    desc: 'Venda e montagem de pneus, rodas e peças originais com o melhor custo-benefício da região.',
    icon: ShoppingBag,
    image: `${BASE}mecanico-trocando-pneu-em-oficina_1024x1536.webp`,
  },
  {
    title: 'Manutenção Preventiva',
    desc: 'Evite surpresas e prolongue a vida útil do seu veículo com revisões periódicas programadas.',
    icon: Wrench,
    image: `${BASE}troca-filtro-ar-condicionado-carro-novo-usado_1024x1536.webp`,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-[rgb(254,254,254)] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[rgb(246,122,55)] text-xs font-bold uppercase tracking-widest mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4">Serviços Especializados</h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Solução completa para o seu veículo, com técnicos especializados e equipamentos de última
            geração.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 hover:-translate-y-1"
              >
                {service.image ? (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                ) : (
                  <div className="h-40 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                    <Zap size={40} className="text-[rgb(246,122,55)]/40" />
                  </div>
                )}
                <div className="p-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(246,122,55)]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[rgb(246,122,55)]" />
                  </div>
                  <h3 className="font-bold text-black text-sm mb-2 leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{service.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[rgb(246,122,55)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black hover:bg-[rgb(246,122,55)] text-white font-bold px-10 py-4 rounded-full text-sm transition-all duration-200 hover:scale-105"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
