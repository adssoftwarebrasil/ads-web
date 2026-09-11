import {
  Building2,
  FileCheck2,
  Layers,
  Building,
  ClipboardCheck,
  MessageCircle,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
  href: string;
}

const services: Service[] = [
  {
    icon: Building2,
    title: 'Projetos de Arquitetura',
    description:
      'Projetos arquitetônicos residenciais completos, do projeto básico ao executivo, incluindo aprovação junto à prefeitura e financiamento.',
    tag: 'Aprovação na Prefeitura',
    href: 'https://wa.me/5566996194229?text=Ol%C3%A1%21+Tenho+interesse+em+Projetos+de+Arquitetura.',
  },
  {
    icon: FileCheck2,
    title: 'Documentação para Venda',
    description:
      'Toda a documentação necessária para vender seu imóvel com segurança: averbação, atualização de matrícula e regularização cartorial.',
    tag: 'Venda Segura',
    href: 'https://wa.me/5566996194229?text=Ol%C3%A1%21+Preciso+de+Documenta%C3%A7%C3%A3o+para+Venda+de+im%C3%B3vel.',
  },
  {
    icon: Layers,
    title: 'Unificação e Divisão de Lotes',
    description:
      'Desmembramento, unificação e remembramento de terrenos com documentação técnica completa para registro em cartório.',
    tag: 'Registro em Cartório',
    href: 'https://wa.me/5566996194229?text=Ol%C3%A1%21+Preciso+de+unifica%C3%A7%C3%A3o+ou+divis%C3%A3o+de+lotes.',
  },
  {
    icon: Building,
    title: 'Instituição de Condomínio',
    description:
      'Memorial de incorporação, plantas e documentação técnica para instituir seu condomínio e individualizar matrículas dos apartamentos.',
    tag: 'Individualização de Matrículas',
    href: 'https://wa.me/5566996194229?text=Ol%C3%A1%21+Quero+saber+sobre+Institui%C3%A7%C3%A3o+de+Condom%C3%ADnio.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regularização de Obras',
    description:
      'Averbação de imóvel, CND de obra, CNO na Receita Federal, regularização para financiamento bancário e INSS de obra.',
    tag: 'Receita Federal',
    href: 'https://wa.me/5566996194229?text=Ol%C3%A1%21+Preciso+regularizar+uma+obra+%28Averba%C3%A7%C3%A3o%2FCND%29.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue font-semibold uppercase tracking-widest text-xs mb-3">
            Nossos Serviços
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5 leading-tight">
            Soluções completas para
            <br className="hidden md:block" /> seu imóvel
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Cuidamos de todo o processo, do projeto à documentação final, para você ter
            tranquilidade em cada etapa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl border border-gray-100 hover:border-brand-blue/20 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-blue/10 group-hover:bg-brand-blue transition-colors duration-300 mb-6">
                  <Icon
                    size={26}
                    className="text-brand-blue group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm flex-1">
                  {service.description}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="inline-block bg-brand-navy/8 text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                    {service.tag}
                  </span>
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue text-sm font-semibold hover:underline underline-offset-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            );
          })}
          <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-7 text-white flex flex-col justify-between shadow-lg">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/15 mb-6">
                <MessageCircle size={26} className="text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Tem dúvidas sobre seu caso?</h3>
              <p className="text-white/75 leading-relaxed text-sm">
                Fale diretamente com nossa equipe. Analisamos seu caso e indicamos o melhor
                caminho sem compromisso.
              </p>
            </div>
            <a
              href="https://wa.me/5566996194229?text=Ol%C3%A1%21+Tenho+uma+situa%C3%A7%C3%A3o+e+gostaria+de+uma+orienta%C3%A7%C3%A3o+sobre+meu+im%C3%B3vel."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors duration-200 shadow-sm"
            >
              Falar agora
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
