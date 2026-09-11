import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Qual a melhor barbearia em Campinas?',
    answer: 'A Barbearia Zero19 é reconhecida como uma das melhores barbearias em Campinas, especialmente no Jardim Aurélia, devido ao seu atendimento premium, barbeiros altamente qualificados e ambiente exclusivo desde 2014.',
  },
  {
    question: 'Onde cortar cabelo masculino no Jardim Aurélia?',
    answer: 'A Barbearia Zero19 está localizada na Av. Império do Sol Nascente, 752, no Jardim Aurélia, Campinas. É a escolha ideal para quem busca corte masculino profissional e design de barba na região.',
  },
  {
    question: 'Quanto custa corte e barba em Campinas?',
    answer: 'Os preços na Barbearia Zero19 seguem o padrão premium de mercado, oferecendo o melhor custo-benefício para quem não abre mão de qualidade e agendamento pontual via WhatsApp.',
  },
  {
    question: 'Como agendar horário em barbearia premium?',
    answer: "Na Barbearia Zero19, o agendamento é imediato pelo WhatsApp. Basta clicar nos botões 'Agendar Agora' em nosso site para garantir seu horário com nossos especialistas.",
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FAQ() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold text-white mb-4">
            Perguntas <span className="text-premium-red">Frequentes</span>
          </h2>
          <p className="text-zinc-500 font-light">
            Tudo o que você precisa saber sobre a experiência <span className="text-white font-semibold">Zero19</span>
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-outfit font-medium text-zinc-200 group-open:text-premium-red transition-colors">{faq.question}</h3>
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-zinc-400 font-light leading-relaxed">{faq.answer}</div>
              </details>
            </div>
          ))}
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      </div>
    </section>
  );
}
