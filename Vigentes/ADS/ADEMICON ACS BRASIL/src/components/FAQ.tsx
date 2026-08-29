import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition min-h-[48px]"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-800 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="text-[rgb(87,168,45)] flex-shrink-0" size={24} />
        ) : (
          <ChevronDown className="text-[rgb(87,168,45)] flex-shrink-0" size={24} />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é consórcio?',
      answer: 'Consórcio é uma modalidade de aquisição de bens em que um grupo de pessoas se reúne para poupar mensalmente, formando um fundo comum. Periodicamente, membros do grupo são contemplados por sorteio ou lance, recebendo uma carta de crédito para adquirir o bem desejado. É uma forma planejada e econômica de realizar sonhos, sem pagar juros.'
    },
    {
      question: 'Por que investir em consórcio de imóveis?',
      answer: 'O consórcio de imóveis é uma excelente forma de investimento porque não cobra juros, apenas uma taxa de administração. Você pode planejar sua aposentadoria comprando imóveis para alugar, aumentar seu patrimônio de forma organizada, e ainda tem poder de compra à vista quando for contemplado. É mais econômico que financiamento e oferece flexibilidade nos prazos e valores.'
    },
    {
      question: 'O que é Contemplação e como funciona?',
      answer: 'Contemplação é quando você recebe sua carta de crédito para usar. Existem duas formas: por sorteio mensal através da Loteria Federal (todos participam automaticamente) ou por lance (você oferece um valor ou percentual do crédito para antecipar sua contemplação). Quanto maior o lance, maiores as chances de ser contemplado naquela assembleia.'
    },
    {
      question: 'Como funciona o Sorteio?',
      answer: 'Todos os meses são realizados sorteios através da Loteria Federal. Todos os consorciados com parcelas em dia participam automaticamente, sem custo adicional. Os números contemplados são divulgados nas assembleias mensais. É uma forma democrática e transparente de contemplação, fiscalizada pelo Banco Central.'
    },
    {
      question: 'O que é Lance?',
      answer: 'Lance é um valor ou percentual do crédito que você oferece para antecipar sua contemplação. Você pode dar lance livre (dinheiro que possui) ou lance com FGTS. Na assembleia mensal, os maiores lances são contemplados. É opcional e você decide quando e quanto ofertar, de acordo com suas possibilidades e estratégia.'
    },
    {
      question: 'É possível usar o recurso do FGTS para ofertar lance?',
      answer: 'Sim! Você pode usar seu FGTS para ofertar lance em consórcios de imóveis, seguindo as regras da Caixa Econômica Federal. É uma excelente estratégia para antecipar sua contemplação utilizando um recurso que muitas vezes fica parado. Nossa equipe pode orientá-lo sobre como proceder.'
    },
    {
      question: 'O que é Carta de Crédito?',
      answer: 'A Carta de Crédito é o documento que comprova seu direito de usar o valor contemplado. Com ela, você tem poder de compra à vista para adquirir imóveis, construir, reformar, ou quitar financiamentos. O valor é corrigido anualmente pelo INCC, protegendo seu poder de compra da inflação do setor imobiliário.'
    },
    {
      question: 'O que é uma administradora de consórcio?',
      answer: 'A administradora é a empresa responsável por gerenciar o grupo de consórcio, organizar as assembleias, fazer os sorteios, receber as parcelas e liberar as cartas de crédito.'
    },
    {
      question: 'O que é Assembleia?',
      answer: 'A Assembleia é a reunião mensal do grupo de consórcio onde são realizados os sorteios e a análise dos lances ofertados. Nela são definidos os contemplados do mês e divulgadas as informações do grupo. Você pode acompanhar através dos canais digitais. É um processo totalmente transparente e documentado.'
    },
    {
      question: 'Como faço para solicitar uma proposta?',
      answer: 'É muito simples! Você pode entrar em contato conosco através do WhatsApp/telefone (71) 98204-1655, pelo e-mail acesar@acsbrasilbahia.com.br, ou preenchendo o formulário aqui no site. Nossa equipe irá fazer uma simulação personalizada de acordo com suas necessidades e possibilidades, sem compromisso.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-[rgb(87,168,45)]">
          Perguntas Frequentes
        </h2>
        <div className="w-24 h-1 bg-[rgb(253,192,20)] mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={`${index + 1}. ${faq.question}`}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
