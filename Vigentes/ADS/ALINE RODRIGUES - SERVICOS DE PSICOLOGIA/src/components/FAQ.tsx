import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Como funciona o atendimento online?',
      answer: (
        <>
          As sessões são realizadas pelo Google Meet, com a <strong>mesma qualidade e eficácia</strong> do atendimento presencial.
        </>
      ),
    },
    {
      question: 'Qual a frequência e duração das sessões?',
      answer: (
        <>
          As sessões de terapia online têm duração de <strong>50 minutos</strong>, sendo o <strong>acompanhamento semanal</strong>. A constância das sessões varia quando o paciente entra no processo de alta.
        </>
      ),
    },
    {
      question: 'Quanto tempo dura o tratamento?',
      answer: (
        <>
          A duração do tratamento é individual e influenciada por diversos fatores. Ao contrário de algumas abordagens que podem se estender por anos, a <strong>terapia cognitivo-comportamental é estruturada com início, meio e fim</strong>, visando eficácia e foco na resolução.
        </>
      ),
    },
    {
      question: 'Moro fora do Brasil, posso fazer terapia com você?',
      answer: (
        <>
          Com certeza! Esse é um dos muitos benefícios da <strong>terapia online</strong>: não ter limitação geográfica!
        </>
      ),
    },
    {
      question: 'Quando procurar um psicólogo?',
      answer: (
        <>
          O tratamento psicológico não deve ser somente emergencial, quando o ‘copo transbordou’. <strong>Você pode buscar ajuda em qualquer momento da vida</strong>, diante de desafios que impactam seu bem-estar. Um psicólogo vai te proporcionar um ambiente seguro pra você desenvolver habilidades e enfrentar de maneira eficaz aquilo que está te afetando, proporcionando assim mais qualidade de vida.
        </>
      ),
    },
    {
      question: 'Como fazer terapia com você vai me ajudar?',
      answer: (
        <>
          Na TCC, você aprende a identificar padrões que mantêm seu sofrimento e a <strong>desenvolver estratégias práticas para lidar melhor com pensamentos, emoções e comportamentos.</strong> O processo te dá mais clareza, ferramentas e segurança para transformar sua vida de forma consistente.
        </>
      ),
    },
  ];

  return (
    <section id="faq" className="py-16 bg-cream overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Cabeçalho */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm font-medium text-beige-dark mb-4">
            Perguntas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-main">
            Dúvidas sobre a Psicoterapia
          </h2>
        </div>

        {/* Lista de FAQ */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-beige-light/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left group"
              >
                <span className="text-lg font-semibold text-text-main pr-4 leading-tight group-hover:text-brown-dark transition-colors">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brown-dark/10 flex items-center justify-center transition-colors group-hover:bg-brown-dark/20">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-brown-dark" />
                  ) : (
                    <Plus className="w-4 h-4 text-brown-dark" />
                  )}
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5 text-beige-dark leading-relaxed text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Final */}
        <div className="mt-10 text-center">
          <a
            href="https://wa.me/556282702366?text=Olá, gostaria de saber mais sobre como funciona a terapia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brown-dark text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Agendar consulta
          </a>
        </div>

      </div>
    </section>
  );
}