import {
  Activity,
  Dumbbell,
  RotateCcw,
  Layers,
  Fingerprint,
  Zap,
  Home,
  Users,
  Navigation,
  Wind,
  Heart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

interface Service {
  icon: LucideIcon;
  color: 'accent' | 'primary';
  title: string;
  desc: string;
  href: string;
  badge?: string;
}

const services: Service[] = [
  {
    icon: Activity,
    color: 'accent',
    title: 'Fisioterapia Ortopédica e Traumatológica',
    desc: 'Tratamento especializado para lesões musculoesqueléticas com técnicas avançadas de terapia manual. Indicado para dores na coluna, joelho, ombro, quadril e membros.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Fisioterapia%20Ortop%C3%A9dica%20e%20Traumatol%C3%B3gica.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
    badge: 'Mais Procurado',
  },
  {
    icon: Dumbbell,
    color: 'primary',
    title: 'Pilates',
    desc: 'Método terapêutico e funcional para reabilitação, fortalecimento muscular e melhora da postura. Ideal para gestantes, idosos, atletas e tratamento da lombalgia.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Pilates.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: RotateCcw,
    color: 'accent',
    title: 'Reabilitação Funcional',
    desc: 'Programa focado em devolver autonomia e funcionalidade no dia a dia do paciente. Essencial no pós-cirúrgico e em casos de limitações motoras.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Reabilita%C3%A7%C3%A3o%20Funcional.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Layers,
    color: 'primary',
    title: 'RPG – Reeducação Postural Global',
    desc: 'Técnica global que trata a causa dos desvios posturais, aliviando dores crônicas e corrigindo a postura de forma duradoura.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20RPG%20%E2%80%93%20Reeduca%C3%A7%C3%A3o%20Postural%20Global.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Fingerprint,
    color: 'accent',
    title: 'Liberação Miofascial',
    desc: 'Técnica manual de relaxamento profundo que age nas fáscias musculares para aliviar tensões, dores e melhorar a mobilidade.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Libera%C3%A7%C3%A3o%20Miofascial.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Zap,
    color: 'primary',
    title: 'Mesa de Tração Eletrônica',
    desc: 'Tecnologia avançada para descompressão vertebral, ideal para tratamento de hérnias de disco, cervicobraquialgia e ciática com alívio imediato.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Mesa%20de%20Tra%C3%A7%C3%A3o%20Eletr%C3%B4nica.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
    badge: 'Alta Tecnologia',
  },
  {
    icon: Home,
    color: 'accent',
    title: 'Fisioterapia Domiciliar',
    desc: 'Atendimento especializado no conforto da sua casa para pacientes com dificuldade de locomoção, pós-cirúrgicos e casos que exigem repouso.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Fisioterapia%20Domiciliar.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Users,
    color: 'primary',
    title: 'Fisioterapia para o Idoso',
    desc: 'Cuidado especializado voltado para a terceira idade, prevenindo quedas, melhorando equilíbrio e devolvendo independência com segurança.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Fisioterapia%20para%20o%20Idoso.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Navigation,
    color: 'accent',
    title: 'Palmilhas Terapêuticas',
    desc: 'Avaliação e confecção de palmilhas personalizadas para corrigir alterações na pisada, tratar esporão, fascite plantar e pé diabético.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Palmilhas%20Terap%C3%AAuticas.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Wind,
    color: 'primary',
    title: 'Fisioterapia Respiratória',
    desc: 'Técnicas específicas para higiene brônquica, expansão pulmonar e melhora da função respiratória em pacientes com doenças pulmonares.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Fisioterapia%20Respirat%C3%B3ria.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
  {
    icon: Heart,
    color: 'accent',
    title: 'Terapia Manual',
    desc: 'Conjunto de técnicas hands-on para mobilização articular e tissular, com abordagem global para alívio da dor e restauração do movimento.',
    href: 'https://wa.me/556699102233?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20Terapia%20Manual.%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es.',
  },
];

function iconStyle(color: 'accent' | 'primary') {
  return color === 'accent'
    ? { background: 'rgba(219, 67, 43, 0.082)', color: 'rgb(219, 67, 43)' }
    : { background: 'rgba(62, 48, 123, 0.082)', color: 'rgb(62, 48, 123)' };
}

function linkColor(color: 'accent' | 'primary') {
  return color === 'accent' ? 'rgb(219, 67, 43)' : 'rgb(62, 48, 123)';
}

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 text-brand-accent bg-brand-accent/10">
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-dark mb-4">
            Tratamentos que Transformam{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, rgb(62, 48, 123), rgb(219, 67, 43)) text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Vidas
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Uma gama completa de especialidades para cuidar de você em todas as fases da vida, com técnicas modernas e
            cuidado humanizado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-400 cursor-default opacity-100 translate-y-0"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {service.badge && (
                  <span
                    className="absolute -top-3 right-4 px-3 py-1 rounded-full text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, rgb(219, 67, 43), rgb(181, 51, 28))' }}
                  >
                    {service.badge}
                  </span>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={iconStyle(service.color)}
                >
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                <div
                  className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold transition-colors group-hover:text-brand-accent"
                  style={{ color: linkColor(service.color) }}
                >
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    Saiba mais<span>→</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/556699102233?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Movimente%20Fisioterapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white text-base transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
            style={{ background: 'linear-gradient(135deg, rgb(62, 48, 123), rgb(74, 15, 214))' }}
          >
            <WhatsAppIcon size={20} />
            Tirar Dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
