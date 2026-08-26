import Accordion, { type AccordionItem } from './Accordion';
import Reveal from './Reveal';

const items: AccordionItem[] = [
  {
    question: 'Como funciona o acesso ao curso?',
    answer:
      'O acesso é por meio da plataforma Kiwify, uma plataforma fácil e intuitiva de usar. Todas as aulas são gravadas e você pode assistir quantas vezes quiser.',
  },
  {
    question: 'Por quanto tempo terei acesso?',
    answer: 'O acesso ao curso fica disponível por 1 ano a partir da confirmação do pagamento.',
  },
  {
    question: 'O curso oferece certificado?',
    answer: 'Sim, você recebe um certificado de conclusão ao final do curso.',
  },
  {
    question: 'Preciso ter experiência clínica?',
    answer: 'Não. O curso atende tanto quem está começando quanto quem já atua na clínica.',
  },
  {
    question: 'Existe suporte?',
    answer: 'Sim, há um espaço para tirar dúvidas ao longo de todo o curso.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-brand-beige py-20 md:py-28 relative overflow-hidden grain">
      <Reveal className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl text-brand-brown font-bold leading-[1.1]">
            Perguntas<span className="italic font-normal text-brand-brown/70"> frequentes</span>
          </h2>
        </div>
        <Accordion items={items} />
        <div className="text-center mt-10 text-sm text-brand-gray">
          Ainda com dúvidas?{' '}
          <a href="mailto:psialinerds@gmail.com" className="text-brand-brown font-semibold hover:underline">
            psialinerds@gmail.com
          </a>
        </div>
      </Reveal>
    </section>
  );
}
