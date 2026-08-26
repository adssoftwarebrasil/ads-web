import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: "Qual a area de entrega?",
    answer: "Realizamos entregas em Goiania e regiao metropolitana, incluindo Aparecida de Goiania, Trindade, Senador Canedo e regiao."
  },
  {
    question: "Posso trocar produtos da cesta?",
    answer: "Os produtos podem ter variacao de marcas conforme disponibilidade em estoque, sempre mantendo a qualidade e quantidade especificadas."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "O prazo varia conforme a regiao e disponibilidade. Entre em contato pelo WhatsApp (62) 99999-8831 para confirmar o prazo para seu endereco."
  },
  {
    question: "Quais formas de pagamento sao aceitas?",
    answer: "Aceitamos dinheiro, PIX, cartao de debito e credito. Consulte condicoes especiais para compras em quantidade ou pedidos empresariais."
  },
  {
    question: "Voces atendem empresas e instituicoes?",
    answer: "Sim! Temos condicoes especiais para empresas que precisam de cestas mensalmente e para instituicoes de caridade. Entre em contato para orcamento personalizado."
  },
  {
    question: "As cestas vem embaladas?",
    answer: "Sim, todas as cestas sao cuidadosamente embaladas em caixas decoradas para garantir a integridade e apresentacao dos produtos."
  },
  {
    question: "Posso visitar o showroom antes de comprar?",
    answer: "Com certeza! Voce pode ver todas as cestas presencialmente em nosso showroom em Aparecida de Goiania. Horario: Segunda a sexta 08h-18h, Sabado 08h-13h."
  },
  {
    question: "Como faco para doar uma cesta?",
    answer: "Entre em contato conosco e nos ajudaremos a escolher a melhor cesta para doacao. Tambem podemos sugerir instituicoes parceiras se voce nao tiver um destino definido."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`text-center mb-12 sm:mb-16 animate-on-scroll ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-semibold mb-4">
            Duvidas Frequentes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`animate-on-scroll ${isVisible ? 'visible' : ''} stagger-${Math.min(index + 1, 8)} bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-md`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-semibold text-gray-900 pr-8 text-base">{faq.question}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
