import Accordion, { type AccordionItem } from './Accordion';
import Reveal from './Reveal';

const items: AccordionItem[] = [
  {
    question: 'Funciona para iniciantes?',
    answer: 'Sim, o curso foi desenvolvido especialmente para quem está começando.',
  },
  {
    question: 'Serve para quem já estudou TCC?',
    answer:
      'Sim. O TRC ajuda quem já estudou TCC a organizar e aplicar esse conhecimento na condução das sessões.',
  },
  {
    question: 'É aplicável na prática?',
    answer:
      'Sim, todo o conteúdo é voltado para a aplicação prática do raciocínio clínico nos atendimentos.',
  },
  {
    question: 'Vou conseguir acompanhar?',
    answer: 'Sim. As aulas são objetivas e você pode assistir no seu ritmo, quantas vezes quiser.',
  },
  {
    question: 'Vou poder tirar as dúvidas ao longo do curso?',
    answer: 'Sim, você terá um espaço para tirar dúvidas ao longo de todo o processo.',
  },
];

export default function CommonDoubts() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Reveal className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl md:text-5xl text-brand-brown font-bold leading-[1.1]">
            Dúvidas<span className="italic font-normal text-brand-brown/70"> comuns</span>
          </h2>
        </div>
        <Accordion items={items} />
      </Reveal>
    </section>
  );
}
