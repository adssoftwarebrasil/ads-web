import { MessageCircle, ClipboardCheck, FileText, CheckCircle, type LucideIcon } from 'lucide-react';
import { scrollToId } from '../lib/scroll';

const steps: { num: string; icon: LucideIcon; iconName: string; title: string; desc: string; highlight: string }[] = [
  { num: '01', icon: MessageCircle, iconName: 'message-circle', title: 'ENTRE EM CONTATO', desc: 'WhatsApp, telefone ou formulário', highlight: 'Atendimento de qualidade' },
  { num: '02', icon: ClipboardCheck, iconName: 'clipboard-check', title: 'DIAGNÓSTICO GRATUITO', desc: 'Visita técnica sem compromisso', highlight: 'Análise completa da necessidade' },
  { num: '03', icon: FileText, iconName: 'file-text', title: 'ORÇAMENTO TRANSPARENTE', desc: 'Valores justos e detalhados', highlight: 'Sem custos ocultos' },
  { num: '04', icon: CheckCircle, iconName: 'check-circle', title: 'EXECUÇÃO PROFISSIONAL', desc: 'Equipe qualificada', highlight: 'Garantia de qualidade' },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[#FFD700]/10 text-[#1A1A2E] px-4 py-2 rounded-full font-semibold text-sm mb-4">PROCESSO SIMPLES</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A2E] mb-4 sm:mb-6 px-4">Como Contratar <span className="text-[#FFD700]">Nossos Serviços</span></h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4">Processo rápido, transparente e sem complicações para você ter a segurança que merece</p>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 h-1 bg-[#FFD700] transform -translate-y-1/2 w-0 animate-timeline"></div>
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.num} className="relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-[#1A1A2E] font-bold text-xl shadow-lg z-10 border-4 border-white">{s.num}</div>
                  <div className="mt-24 bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <div className="flex justify-center mb-4">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <Icon className={`lucide lucide-${s.iconName} w-8 h-8 text-[#FFD700]`} />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A2E] mb-2 text-center">{s.title}</h3>
                    <p className="text-gray-600 text-sm mb-2 text-center">{s.desc}</p>
                    <p className="text-[#FFD700] font-semibold text-sm text-center">{s.highlight}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden space-y-8">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.num} className="relative flex items-start">
                {i < steps.length - 1 && <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200"></div>}
                <div className="flex-shrink-0 w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center text-[#1A1A2E] font-bold text-xl shadow-lg z-10 border-4 border-white">{s.num}</div>
                <div className="ml-6 flex-1 bg-gray-50 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mr-3">
                      <Icon className={`lucide lucide-${s.iconName} w-6 h-6 text-[#FFD700]`} />
                    </div>
                    <h3 className="text-lg font-bold text-[#1A1A2E]">{s.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{s.desc}</p>
                  <p className="text-[#FFD700] font-semibold text-sm">{s.highlight}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[#FFD700] to-[#FFC700] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12">
            <div className="max-w-3xl mx-auto px-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1A1A2E] mb-4">Pronto para ter mais segurança?</h3>
              <p className="text-[#1A1A2E]/80 mb-6 text-lg">Receba um orçamento gratuito rapidamente! Nossa equipe está pronta para atender você.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/556198449664?text=Olá!%20Gostaria%20de%20um%20orçamento" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-[#1A1A2E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#16213E] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  <MessageCircle className="lucide lucide-message-circle mr-2" />CHAMAR NO WHATSAPP
                </a>
                <button onClick={() => scrollToId('contato')} className="inline-flex items-center justify-center border-2 border-[#1A1A2E] text-[#1A1A2E] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#1A1A2E] hover:text-white transition-all duration-300">PREENCHER FORMULÁRIO</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
