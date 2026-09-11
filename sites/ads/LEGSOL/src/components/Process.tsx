import { MessageSquare, ClipboardList, FileText, Wrench, Zap, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/utils';

const steps: { icon: LucideIcon; iconClass: string; title: string; text: string }[] = [
  {
    icon: MessageSquare,
    iconClass: 'lucide-message-square',
    title: 'Contato Inicial',
    text: 'Você entra em contato via WhatsApp ou formulário e tiramos suas primeiras dúvidas.',
  },
  {
    icon: ClipboardList,
    iconClass: 'lucide-clipboard-list',
    title: 'Visita Técnica',
    text: 'Avaliamos seu telhado e analisamos sua conta de luz para dimensionar o projeto ideal.',
  },
  {
    icon: FileText,
    iconClass: 'lucide-file-text',
    title: 'Proposta & Contrato',
    text: 'Apresentamos o estudo de economia. Aprovado? Assinamos e cuidamos da burocracia.',
  },
  {
    icon: Wrench,
    iconClass: 'lucide-wrench',
    title: 'Instalação',
    text: 'Nossa equipe técnica realiza a montagem das placas e inversor com segurança total.',
  },
  {
    icon: Zap,
    iconClass: 'lucide-zap',
    title: 'Homologação e Ativação',
    text: 'A concessionária vistoria, trocamos o medidor e você começa a gerar sua energia.',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[rgb(26,110,76)]/10 text-[rgb(26,110,76)] font-semibold text-sm uppercase tracking-wider">
            Passo a Passo
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[rgb(27,45,114)] mb-6 tracking-tight">
            Do Orçamento à Economia Real
          </h2>
          <p className="text-lg text-gray-600">
            Simplificamos tudo para você. Cuidamos de toda a engenharia, instalação e burocracia com a concessionária.
          </p>
        </div>
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          <div className="absolute top-12 left-0 w-full h-1 bg-gray-200 rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-[rgb(26,110,76)]/20 via-[rgb(26,110,76)]/40 to-gray-200 rounded-full"></div>
          </div>
          <div className="grid grid-cols-5 gap-8">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative group pt-2">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 bg-white p-2 rounded-full mb-6 transition-transform duration-300 group-hover:-translate-y-2">
                      <div className="w-20 h-20 bg-white border-4 border-gray-100 group-hover:border-[rgb(26,110,76)] rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
                        <Icon
                          className={`lucide ${s.iconClass} text-[rgb(26,110,76)]`}
                          width={32}
                          height={32}
                          strokeWidth={1.5}
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[rgb(235,156,51)] text-white font-bold rounded-full flex items-center justify-center shadow-md border-2 border-white transform translate-x-1 -translate-y-1">
                        {i + 1}
                      </div>
                    </div>
                    <div className="px-2">
                      <h3 className="text-lg font-bold text-[rgb(27,45,114)] mb-3 group-hover:text-[rgb(26,110,76)] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden max-w-md mx-auto relative">
          <div className="absolute top-6 bottom-6 left-8 w-0.5 bg-gray-200"></div>
          <div className="space-y-10">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative flex gap-6 group">
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-white border-4 border-gray-100 group-hover:border-[rgb(26,110,76)] rounded-full flex items-center justify-center shadow-md transition-colors duration-300">
                      <Icon
                        className={`lucide ${s.iconClass} text-[rgb(26,110,76)]`}
                        width={28}
                        height={28}
                        strokeWidth={2}
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-[rgb(235,156,51)] text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
                      {i + 1}
                    </div>
                  </div>
                  <div className="pt-2 pb-2">
                    <h3 className="text-xl font-bold text-[rgb(27,45,114)] mb-2 group-hover:text-[rgb(26,110,76)] transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{s.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-16 text-center">
          <button
            onClick={() => scrollToId('contact')}
            className="inline-flex items-center gap-2 bg-[rgb(26,110,76)]/10 hover:bg-[rgb(26,110,76)]/20 text-[rgb(26,110,76)] font-semibold px-6 py-3 rounded-full transition-all"
          >
            Iniciar meu projeto agora
            <Check className="lucide lucide-check" width={18} height={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
