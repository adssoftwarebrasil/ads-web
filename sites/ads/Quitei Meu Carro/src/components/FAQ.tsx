import { useState } from 'react';
import { Plus, Minus, HelpCircle, Sparkles, CheckCircle, Clock, FileText, Shield, TrendingDown, Users, Phone, Globe } from 'lucide-react';

const faqs = [
  {
    question: 'Como funciona a quitação antecipada?',
    answer: 'A quitação antecipada permite que você pague o saldo devedor do seu financiamento antes do prazo final. Nossa equipe negocia descontos significativos e condições especiais com as instituições financeiras, resultando em economia nos juros e encargos.',
    icon: CheckCircle,
    color: 'emerald'
  },
  {
    question: 'Quais documentos preciso ter em mãos?',
    answer: 'Você precisará do contrato de financiamento, documentos pessoais (RG e CPF), comprovante de residência e os últimos boletos ou extratos do financiamento. Nossa equipe irá orientá-lo sobre toda a documentação necessária durante o processo.',
    icon: FileText,
    color: 'teal'
  },
  {
    question: 'Quanto tempo leva o processo?',
    answer: 'O processo completo geralmente leva de 7 a 15 dias úteis, dependendo da instituição financeira e da complexidade do caso. Trabalhamos para tornar o processo o mais rápido e eficiente possível.',
    icon: Clock,
    color: 'cyan'
  },
  {
    question: 'Existe algum custo para a simulação?',
    answer: 'Não! A simulação é 100% gratuita e sem compromisso. Você só decide prosseguir após conhecer todas as condições e o valor da economia que conseguimos negociar para você.',
    icon: Shield,
    color: 'blue'
  },
  {
    question: 'Posso negociar mesmo com parcelas atrasadas?',
    answer: 'Sim! Inclusive, casos com parcelas em atraso podem ter condições ainda mais vantajosas de negociação. Nossa equipe é especializada em reverter situações de inadimplência e encontrar as melhores soluções.',
    icon: TrendingDown,
    color: 'indigo'
  },
  {
    question: 'O que são abusos financeiros no contrato?',
    answer: 'São cobranças indevidas ou excessivas que podem estar presentes no seu contrato, como juros acima do permitido, tarifas abusivas, seguros não solicitados, entre outros. Fazemos uma análise completa para identificar e corrigir essas irregularidades.',
    icon: HelpCircle,
    color: 'violet'
  },
  {
    question: 'Como vocês conseguem descontos?',
    answer: 'Nossa equipe tem experiência e relacionamento com as principais instituições financeiras do mercado. Negociamos em volume e conhecemos todas as possibilidades de desconto disponíveis, conseguindo condições que o cliente individual dificilmente obteria sozinho.',
    icon: Users,
    color: 'purple'
  },
  {
    question: 'Preciso ir até a financeira?',
    answer: 'Não! Todo o processo é realizado de forma online. Nossa equipe cuida de toda a negociação e documentação. Você só precisa fornecer as informações necessárias e acompanhar o andamento de forma remota.',
    icon: Globe,
    color: 'pink'
  }
];

const colorClasses = {
  emerald: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-500',
    text: 'text-emerald-600',
    icon: 'text-emerald-600',
    gradient: 'from-emerald-500 to-teal-500'
  },
  teal: {
    bg: 'bg-teal-50',
    border: 'border-teal-500',
    text: 'text-teal-600',
    icon: 'text-teal-600',
    gradient: 'from-teal-500 to-cyan-500'
  },
  cyan: {
    bg: 'bg-cyan-50',
    border: 'border-cyan-500',
    text: 'text-cyan-600',
    icon: 'text-cyan-600',
    gradient: 'from-cyan-500 to-blue-500'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    text: 'text-blue-600',
    icon: 'text-blue-600',
    gradient: 'from-blue-500 to-indigo-500'
  },
  indigo: {
    bg: 'bg-indigo-50',
    border: 'border-indigo-500',
    text: 'text-indigo-600',
    icon: 'text-indigo-600',
    gradient: 'from-indigo-500 to-violet-500'
  },
  violet: {
    bg: 'bg-violet-50',
    border: 'border-violet-500',
    text: 'text-violet-600',
    icon: 'text-violet-600',
    gradient: 'from-violet-500 to-purple-500'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-500',
    text: 'text-purple-600',
    icon: 'text-purple-600',
    gradient: 'from-purple-500 to-pink-500'
  },
  pink: {
    bg: 'bg-pink-50',
    border: 'border-pink-500',
    text: 'text-pink-600',
    icon: 'text-pink-600',
    gradient: 'from-pink-500 to-rose-500'
  }
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSimulator = () => {
    const element = document.getElementById('simulador');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5508005552569?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20mais%20informações', '_blank');
  };

  return (
    <section id="faq" className="relative py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-emerald-500/5 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        {/* Premium Header - COMPACTADO NO MOBILE */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-emerald-200 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 shadow-sm">
            <Sparkles size={14} className="text-emerald-600 md:w-4 md:h-4" />
            <span className="text-slate-700">Dúvidas Comuns</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight px-4">
            Perguntas
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Frequentes
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Encontre respostas para as principais dúvidas sobre quitação de veículos
          </p>
        </div>

        {/* FAQ Items - COMPACTADOS NO MOBILE */}
        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;
            const colors = colorClasses[faq.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`group relative bg-white rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'shadow-2xl shadow-emerald-500/10 border-2 border-emerald-200'
                    : 'shadow-lg border-2 border-slate-100 hover:border-slate-200'
                }`}
              >
                {/* Gradient accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${colors.gradient} transition-all duration-500 ${
                  isOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                }`}></div>

                {/* Question Button - PADDING REDUZIDO NO MOBILE */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-6 flex items-center gap-3 md:gap-4 text-left hover:bg-slate-50/50 transition-all duration-300"
                >
                  {/* Icon - REDUZIDO NO MOBILE */}
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl ${colors.bg} flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'scale-110 rotate-3' : 'scale-100'
                  }`}>
                    <Icon size={20} className={`${colors.icon} md:w-6 md:h-6`} strokeWidth={2} />
                  </div>

                  {/* Question Text - TAMANHO REDUZIDO NO MOBILE */}
                  <span className={`flex-1 font-bold text-sm md:text-base lg:text-lg transition-colors duration-300 ${
                    isOpen ? colors.text : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>

                  {/* Toggle Button - REDUZIDO NO MOBILE */}
                  <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center transition-all duration-500 ${
                    isOpen ? 'rotate-180 scale-110' : 'scale-100'
                  }`}>
                    {isOpen ? (
                      <Minus size={18} className="text-white md:w-5 md:h-5" strokeWidth={2.5} />
                    ) : (
                      <Plus size={18} className="text-white md:w-5 md:h-5" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer - PADDING REDUZIDO NO MOBILE */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6">
                    <div className={`pl-10 md:pl-16 pr-8 md:pr-14 pt-2 text-sm md:text-base text-slate-600 leading-relaxed border-l-2 ${colors.border} ml-3 md:ml-6`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>

                {/* Animated glow effect when open */}
                {isOpen && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-5 pointer-events-none`}></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Card - COMPACTADO NO MOBILE */}
        <div className="mt-10 md:mt-16 relative">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center space-y-4 md:space-y-6">
              <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
                <Phone size={24} className="text-emerald-400 md:w-8 md:h-8" />
              </div>

              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-3">
                  Ainda tem dúvidas?
                </h3>
                <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto px-4">
                  Nossa equipe está pronta para ajudar você com qualquer pergunta
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-2">
                <button 
                  onClick={openWhatsApp}
                  className="group px-6 py-3 md:px-8 md:py-4 bg-white text-slate-900 rounded-xl font-semibold text-sm md:text-base hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-2"
                >
                  Falar com Especialista
                  <Phone size={18} className="group-hover:rotate-12 transition-transform md:w-5 md:h-5" />
                </button>
                
                <button 
                  onClick={scrollToSimulator}
                  className="px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-semibold text-sm md:text-base hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Fazer Simulação Gratuita
                </button>
              </div>

              {/* Trust badge - COMPACTADO NO MOBILE */}
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-slate-400 pt-4">
                <CheckCircle size={14} className="text-emerald-400 md:w-4 md:h-4" />
                <span>Atendimento humanizado e personalizado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}