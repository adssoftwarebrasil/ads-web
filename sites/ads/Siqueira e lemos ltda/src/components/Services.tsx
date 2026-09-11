import { Camera, Bell, ZapOff, Phone, Lock, Zap, ShieldAlert, Eye, Wrench } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  Icon: LucideIcon;
  iconClass: string;
  title: string;
  desc: string;
  href: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    Icon: Camera,
    iconClass: 'lucide lucide-camera',
    title: 'Câmeras CFTV',
    desc: 'Sistemas de vigilância de alta definição para residências e estabelecimentos comerciais. Monitoramento 24h com acesso remoto pelo celular.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20câmeras%20CFTV.',
    featured: true,
  },
  {
    Icon: Bell,
    iconClass: 'lucide lucide-bell',
    title: 'Alarmes',
    desc: 'Centrais de alarme com sensores de presença, abertura de portas e janelas. Proteção eficaz contra invasões com acionamento imediato.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20alarmes.',
  },
  {
    Icon: ZapOff,
    iconClass: 'lucide lucide-zap-off',
    title: 'Portões Eletrônicos',
    desc: 'Instalação e manutenção de portões eletrônicos com controle remoto, automação e sistemas de segurança integrados.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20portões%20eletrônicos.',
  },
  {
    Icon: Phone,
    iconClass: 'lucide lucide-phone',
    title: 'Interfones',
    desc: 'Sistemas de comunicação e controle de acesso para residências, condomínios e empresas. Modelos com vídeo e sem fio disponíveis.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20interfones.',
  },
  {
    Icon: Lock,
    iconClass: 'lucide lucide-lock',
    title: 'Fechaduras Digitais',
    desc: 'Fechaduras eletrônicas com senha, biometria ou cartão. Mais comodidade e segurança, eliminando a necessidade de chaves físicas.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20fechaduras%20digitais.',
  },
  {
    Icon: Zap,
    iconClass: 'lucide lucide-zap',
    title: 'Cerca Elétrica',
    desc: 'Instalação de cercas elétricas com central de alarme integrada. Barreira de proteção eficiente para muros e grades.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20cerca%20elétrica.',
  },
  {
    Icon: ShieldAlert,
    iconClass: 'lucide lucide-shield-alert',
    title: 'Concertina',
    desc: 'Instalação de concertina de aço inoxidável como barreira física de alta resistência para muros, grades e portões.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20concertina.',
  },
  {
    Icon: Eye,
    iconClass: 'lucide lucide-eye',
    title: 'Monitoramento',
    desc: 'Serviços de monitoramento 24 horas com central de operações. Resposta imediata a qualquer ocorrência detectada.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20monitoramento.',
  },
  {
    Icon: Wrench,
    iconClass: 'lucide lucide-wrench',
    title: 'Manutenção',
    desc: 'Manutenção preventiva e corretiva de todos os sistemas de segurança. Equipe técnica especializada e rápido tempo de resposta.',
    href: 'https://wa.me/553799961702?text=Olá!%20Gostaria%20de%20informações%20sobre%20manutenção%20de%20sistemas.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="badge bg-brand-50 text-brand mb-4">Nossos Serviços</div>
          <h2 className="section-title mb-4">
            Soluções Completas em <span className="text-gradient">Segurança Eletrônica</span>
          </h2>
          <div className="section-divider mx-auto mb-6"></div>
          <p className="section-subtitle max-w-2xl mx-auto">
            Da câmera à cerca elétrica, fornecemos, instalamos e mantemos tudo que sua propriedade precisa para estar
            verdadeiramente protegida.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) =>
            s.featured ? (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card group relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-gradient-brand text-white border-transparent"
              >
                <div className="absolute top-4 right-4 badge bg-white/20 text-white text-xs">Mais Popular</div>
                <div className="service-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-white/20 text-white">
                  <s.Icon className={`${s.iconClass} h-6 w-6`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/80">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-200">
                  Solicitar via WhatsApp
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            ) : (
              <a
                key={s.title}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="service-card group relative rounded-2xl p-6 border transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-white border-neutral-200 hover:border-brand/30"
              >
                <div className="service-icon w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 bg-brand-50 text-brand group-hover:bg-brand group-hover:text-white">
                  <s.Icon className={`${s.iconClass} h-6 w-6`} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-brand-dark">{s.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{s.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-brand">
                  Solicitar via WhatsApp
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
}
