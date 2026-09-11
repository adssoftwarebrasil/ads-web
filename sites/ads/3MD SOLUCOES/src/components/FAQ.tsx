import { useState } from 'react';
import { HelpCircle, Minus, Plus } from 'lucide-react';

const faqs = [
  { emoji: '🔧', q: 'Como funciona a instalação?', a: 'Nossa equipe técnica agenda a visita em até 48h. A instalação é gratuita e inclui roteador WiFi, cabeamento necessário e configuração completa. Tudo sem custo adicional.' },
  { emoji: '⚡', q: 'A velocidade é garantida?', a: 'Sim! Trabalhamos com 100% fibra óptica até sua casa. A velocidade contratada é real e garantida, não é "até" como outras empresas oferecem.' },
  { emoji: '📍', q: 'Qual a área de cobertura?', a: 'Atendemos Jaboatão dos Guararapes, Candeias, Piedade, Barra de Jangada e Cajueiro Seco. Consulte disponibilidade para seu endereço específico.' },
  { emoji: '✅', q: 'Tem fidelidade?', a: 'Não trabalhamos com contrato de fidelidade. Você pode cancelar quando quiser, sem multas ou taxas.' },
  { emoji: '🎧', q: 'Como funciona o suporte técnico?', a: 'Suporte disponível 24h por dia, 7 dias por semana via WhatsApp (81) 9 9758-7500 ou telefone. Atendimento presencial de segunda a sexta, 8h-18h, e sábado 8h-14h.' },
  { emoji: '🔄', q: 'Posso mudar de plano depois?', a: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento, sem burocracia.' },
  { emoji: '📹', q: 'As câmeras funcionam sem internet?', a: 'As câmeras continuam gravando localmente mesmo sem internet. Mas para acesso remoto pelo app, é necessário conexão ativa.' },
  { emoji: '💳', q: 'Quais formas de pagamento?', a: 'Aceitamos boleto, PIX, cartão de crédito e débito automático. Sem taxa de adesão ou custos ocultos.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            <HelpCircle className="lucide lucide-help-circle w-4 h-4" />DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-900 mb-4">Perguntas e Respostas</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Tire todas as suas dúvidas sobre nossos serviços</p>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md hover:shadow-xl border-2 ${isOpen ? 'border-blue-500 shadow-xl shadow-blue-100' : 'border-slate-100 hover:border-blue-200'}`}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full flex items-start gap-4 p-6 text-left transition-colors">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">{f.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 mb-1 pr-8 leading-tight">{f.q}</h3>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 mt-3' : 'max-h-0'}`}>
                      <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                    </div>
                  </div>
                  <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center text-white transition-all duration-300 ${isOpen ? 'rotate-180 scale-110' : 'group-hover:scale-110'}`}>
                    {isOpen ? <Minus className="lucide lucide-minus w-5 h-5" /> : <Plus className="lucide lucide-plus w-5 h-5" />}
                  </div>
                </button>
              </div>
            );
          })}
        </div>
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-slate-700 mb-4 text-lg">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5581997587500" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105">💬 Falar no WhatsApp</a>
              <a href="tel:+5581997587500" className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold border-2 border-slate-200 hover:border-blue-500 transition-all duration-300 hover:scale-105">📞 Ligar Agora</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
