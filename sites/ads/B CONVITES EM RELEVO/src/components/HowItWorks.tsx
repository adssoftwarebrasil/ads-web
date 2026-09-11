import { MessageCircle, Calendar, Palette, Printer, CheckCircle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = {
  number: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

const steps: Step[] = [
  {
    number: '01',
    title: 'Entre em Contato',
    description: 'Entre em contato conosco por WhatsApp, telefone ou e-mail para iniciar seu projeto de convites.',
    Icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Agende uma Visita',
    description: 'Oferecemos atendimento presencial com hora marcada. Agende sua visita em horário que seja conveniente para você.',
    Icon: Calendar,
  },
  {
    number: '03',
    title: 'Personalização',
    description: 'Trabalharemos juntos no design do seu convite. Oferecemos diversas sugestões inovadoras e papéis especiais.',
    Icon: Palette,
  },
  {
    number: '04',
    title: 'Produção',
    description: 'Sua encomenda será produzida com fino acabamento e atenção aos mínimos detalhes.',
    Icon: Printer,
  },
  {
    number: '05',
    title: 'Entrega',
    description: 'Seus convites estarão prontos para impressionar seus convidados e tornar seu evento memorável.',
    Icon: CheckCircle,
  },
];

function IconCircle({ Icon, order }: { Icon: LucideIcon; order: string }) {
  return (
    <div className={`${order} flex justify-center`}>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="relative group">
          <div className="w-20 h-20 bg-white border-4 border-[rgb(17,50,255)] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} className="text-[rgb(17,50,255)]" />
          </div>
          <div className="absolute inset-0 w-20 h-20 bg-[rgb(17,50,255)] rounded-full opacity-20 animate-ping"></div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 bg-slate-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-100 rounded-full opacity-40 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full shadow-lg mb-6">
            <span className="w-2 h-2 bg-[rgb(17,50,255)] rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm tracking-wider uppercase">Processo Simples e Transparente</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Como <span className="text-[rgb(17,50,255)] italic font-serif">Funciona</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-slate-300"></div>
            <div className="w-2 h-2 bg-[rgb(17,50,255)] rounded-full"></div>
            <div className="w-16 h-0.5 bg-slate-300"></div>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Do primeiro contato até a entrega dos seus convites, <span className="font-semibold text-slate-900">acompanhamos cada etapa com dedicação exclusiva</span>
          </p>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2"></div>
          <div className="space-y-16 lg:space-y-24">
            {steps.map(({ number, title, description, Icon }, index) => {
              const isRight = index % 2 === 0; // 01,03,05 -> text left/right-aligned, number after title
              const isLast = index === steps.length - 1;
              return (
                <div key={number} className="relative">
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {isRight ? (
                      <>
                        <div className="text-right pr-16">
                          <div className="inline-block">
                            <div className="flex items-center gap-3 mb-4">
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
                              <span className="text-5xl font-bold text-slate-200">{number}</span>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-md">{description}</p>
                          </div>
                        </div>
                        <IconCircle Icon={Icon} order="order-2" />
                      </>
                    ) : (
                      <>
                        <div className="order-2 text-left pl-16">
                          <div className="inline-block">
                            <div className="flex items-center gap-3 mb-4">
                              <span className="text-5xl font-bold text-slate-200">{number}</span>
                              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">{title}</h3>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-md">{description}</p>
                          </div>
                        </div>
                        <IconCircle Icon={Icon} order="order-1" />
                      </>
                    )}
                  </div>
                  <div className="lg:hidden flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-white border-4 border-[rgb(17,50,255)] rounded-full flex items-center justify-center shadow-xl">
                        <Icon size={36} className="text-[rgb(17,50,255)]" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-base text-slate-600 leading-relaxed max-w-md px-4">{description}</p>
                    {!isLast && <div className="w-0.5 h-12 bg-slate-200 my-8"></div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-24 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[rgb(17,50,255)] bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                <Calendar size={24} className="text-[rgb(17,50,255)]" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Horário de Atendimento</h3>
                <p className="text-slate-600 mb-3">Segunda a Sexta-feira</p>
                <p className="text-3xl font-bold text-[rgb(17,50,255)]">9h às 17h</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 text-white p-8 md:p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
                <p className="text-slate-300 mb-3">Atendimento presencial com hora marcada para sua comodidade</p>
                <p className="text-lg font-semibold text-white">Agende sua visita</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <p className="text-lg text-slate-600 mb-6">Pronto para começar seu projeto?</p>
          <button className="inline-flex items-center gap-2 bg-[rgb(17,50,255)] text-white px-8 py-4 font-semibold hover:bg-slate-900 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <MessageCircle size={20} />
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  );
}
