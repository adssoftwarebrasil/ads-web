import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const faqs = [
    {
      question: 'Como migrar do Simples Nacional para o Lucro Real?',
      answer:
        'A migração do Simples Nacional para o Lucro Real requer planejamento estratégico. Nossa equipe analisa seu faturamento, despesas operacionais e estrutura tributária atual para determinar o momento ideal e conduzir todo o processo de transição, garantindo que você aproveite os benefícios do novo regime desde o primeiro dia.',
    },
    {
      question: 'Minha empresa está apta para o regime de Lucro Real?',
      answer:
        'Empresas com faturamento anual acima de R$ 78 milhões são obrigadas ao Lucro Real, mas muitas empresas menores podem se beneficiar deste regime. Realizamos uma análise completa da sua operação, considerando despesas dedutíveis, margem de lucro e natureza das atividades para determinar se o Lucro Real é vantajoso para seu negócio.',
    },
    {
      question: 'O Lucro Real é mais vantajoso para minha empresa?',
      answer:
        'O Lucro Real pode gerar economia significativa de impostos para empresas com margens de lucro menores, altas despesas operacionais ou que operam com prejuízo. Através de um planejamento tributário detalhado, comparamos os regimes tributários e apresentamos projeções concretas de economia para sua realidade.',
    },
    {
      question: 'Como me preparar para a Reforma Tributária?',
      answer:
        'A Reforma Tributária trará mudanças significativas no sistema tributário brasileiro. Mantemos nossa equipe constantemente atualizada e oferecemos consultoria especializada para preparar sua empresa para as novas regras, identificando oportunidades e minimizando impactos negativos na transição.',
    },
    {
      question: 'Preciso de um contador especialista em Lucro Real?',
      answer:
        'Sim. O Lucro Real é o regime mais complexo do sistema tributário brasileiro, exigindo conhecimento profundo de legislação, cálculos elaborados e controles rigorosos. Nossa especialização garante que sua empresa esteja em conformidade, aproveitando todos os benefícios fiscais legais disponíveis.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#e5e8e6]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c2c5b] mb-6">
            Perguntas que Respondemos Todos os Dias
          </h2>
          <p className="text-lg text-[#a7b4bd]">
            Tire suas dúvidas sobre planejamento tributário e Lucro Real
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-lg ${
                isVisible ? 'animate-in fade-in slide-in-from-bottom-4' : 'opacity-0'
              }`}
              style={{
                animationDelay: isVisible ? `${index * 100}ms` : '0ms',
                animationFillMode: 'backwards',
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[#2c2c5b] font-semibold text-lg pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-[#2c2c5b] rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#a7b4bd] leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#2c2c5b] font-semibold mb-6">
            Não encontrou sua resposta?
          </p>
          <a
            href="https://wa.me/5562998005803"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2c2c5b] hover:bg-[#3d3d7a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Fale com Nossa Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
